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

// https://radiant-sea-18512.herokuapp.com/

// providers
const googleProvider = new GoogleAuthProvider();

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    // user states
    const [user, setUser] = useState({});
    const [savedUser, setSavedUser] = useState({});
    console.log(savedUser);
    console.log(user.email);

    // admin states
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [adminLoading, setAdminLoading] = useState(true);

    // works states
    const [works, setWorks] = useState();
    const [workRequests, setWorkRequests] = useState([]);
    const [currentWorks, setCurrentWorks] = useState([]);
    const [workUpdate, setWorkUpdate] = useState(false);
    const [completedWorks, setCompletedWorks] = useState('');

    // customers state
    const [customers, setCustomers] = useState([]);

    // workers state
    const [workers, setWorkers] = useState([]);
    const [availableWorkers, setAvailableWorkers] = useState([]);
    const [busyWorkers, setBusyWorkers] = useState([]);
    const [workingStatus, setWorkingStatus] = useState(false);

    // booking states
    const [bookings, setBookings] = useState([]);
    const [requestPending, setRequestPending] = useState([]);

    // job application state
    const [applications, setApplications] = useState([]);
    const [applicationUpdate, setApplicationUpdate] = useState(false);

    // toLet state
    const [toLets, setToLets] = useState([]);
    const [toLetUpdated, setToLetUpdated] = useState(false);

    // navigate
    // save user to the server
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:8000/users', {
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
            .finally(() => {
                setIsLoading(false);
            });
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
            .finally(() => {
                setIsLoading(false);
            });
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
            .finally(() => {
                setIsLoading(false);
            });
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
        fetch(`http://localhost:8000/users/${user.email}`)
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

    // get the current worker works
    useEffect(() => {
        setWorkUpdate(false);
        fetch(`http://localhost:8000/work?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length) {
                    const requests = data?.filter((work) => work.workingStatus === 'Pending');
                    setWorkRequests(requests);
                    const currentWorks = data?.filter(
                        (work) =>
                            work.workingStatus === 'Not Working' || work.workingStatus === 'Working'
                    );
                    const completedWorks = data?.filter(
                        (work) => work.workingStatus === 'Completed'
                    );
                    setCompletedWorks(completedWorks?.length);
                    setCurrentWorks(currentWorks);
                    setWorks(data);
                }
            });
    }, [user.email, workUpdate]);

    // get bookings
    useEffect(() => {
        fetch(`http://localhost:8000/hired?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                const bookings = data.filter(
                    (data) =>
                        data.workingStatus === 'Not Working' ||
                        data.workingStatus === 'Working' ||
                        data.workingStatus === 'Completed'
                );
                console.log(bookings);
                setBookings(bookings);
                const pending = data.filter(
                    (data) => data.workingStatus === 'Pending' || data.workingStatus === 'Rejected'
                );
                setRequestPending(pending);
            });
    }, [user.email]);

    // get customers
    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then((res) => res.json())
            .then((data) => setCustomers(data));
    }, []);

    // get workers
    useEffect(() => {
        setWorkingStatus(false);
        fetch('http://localhost:8000/allWorkers')
            .then((res) => res.json())
            .then((data) => {
                const availableWorkers = data.filter((worker) => worker.workingStatus === 'Free');
                setAvailableWorkers(availableWorkers);
                const busyWorkers = data.filter((worker) => worker.workingStatus === 'Busy');
                setBusyWorkers(busyWorkers);
                setWorkers(data);
            });
    }, [workingStatus]);

    // get job applications
    useEffect(() => {
        fetch('http://localhost:8000/applications')
            .then((res) => res.json())
            .then((data) => {
                setApplications(data);
            });
    }, [applicationUpdate]);

    // get toLets
    useEffect(() => {
        fetch('http://localhost:8000/allToLets')
            .then((res) => res.json())
            .then((data) => setToLets(data));
    }, [toLetUpdated]);

    // observe the user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // getIdToken(user).then((idToken) => localStorage.setItem('idToken', idToken));
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
        savedUser,
        works,
        workRequests,
        currentWorks,
        completedWorks,
        setWorkUpdate,
        bookings,
        requestPending,
        customers,
        workers,
        applications,
        setApplicationUpdate,
        setToLetUpdated,
        toLetUpdated,
        toLets,
        availableWorkers,
        busyWorkers,
        applicationUpdate,
        workUpdate
    };
};

export default useFirebase;
