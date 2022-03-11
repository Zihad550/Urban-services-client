import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

// providers
const googleProvider = new GoogleAuthProvider();

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    // states
    const [user, setUser] = useState({});
    const [savedUser, setSavedUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [adminLoading, setAdminLoading] = useState(true);

    // navigate

    // save user to the server
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName, role: 'user' };
        fetch('https://radiant-sea-18512.herokuapp.com/users', {
            method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    };

    // login using google
    const googleLogin = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                const { user } = res;
                // setUser(res.user);
                const destination = location?.state?.from?.pathname || '/';
                saveUser(user.email, user.displayName, 'PUT');
                navigate(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // register
    const registerUser = (email, password, name, navigate, location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // set error
                setError('');
                const destination = location?.state?.from?.pathname || '/';
                navigate(destination);
                setUser({ email, displayName: name });
                saveUser(email, name, 'POST');

                // save name
                updateProfile(auth.currentUser, {
                    displayName: name
                }).catch((error) => {
                    setError(error.message);
                });
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // login
    const login = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // setUser(res.user);
                const destination = location?.state?.from?.pathname || '/';
                navigate(destination);
                setError('');
            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false));
    };

    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // sign-out successfully
            })
            .catch((error) => setError(error.massage))
            .finally(() => setIsLoading(false));
    };

    // get saved user
    useEffect(() => {
        setAdminLoading(true);
        fetch(`https://radiant-sea-18512.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setSavedUser(data);
                    setAdminLoading(false);
                } else {
                    setAdminLoading(true);
                }
            });
    }, [user.email]);

    // observe the user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError('');
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);
    return {
        user,
        admin,
        error,
        googleLogin,
        registerUser,
        login,
        logOut,
        isLoading,
        setError,
        adminLoading,
        savedUser
    };
};

export default useFirebase;
