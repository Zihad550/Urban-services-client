import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/register.jpg';

function Register() {
    // use firebase
    const { registerUser, error, user, googleLogin } = useAuth();

    // navigate & location
    const navigate = useNavigate();
    const location = useLocation();

    // states
    const [registerData, setRegisterData] = useState({});
    const { password, confirmPassword, name, email } = registerData;

    const handleBlur = (e) => {
        const field = e.target.name;
        const { value } = e.target;
        const newData = { ...registerData };
        newData[field] = value;
        setRegisterData(newData);
    };
    console.log(user);

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password does not matches');
        } else {
            registerUser(email, password, name, navigate, location);
        }
    };
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-5">
            <div className="hidden lg:block">
                <img src={img} alt="" />
            </div>
            <div className="md:my-auto">
                <h2
                    className="text-center text-5xl mb-5 mt-20 lg:mt-0 text-white tracking-widest"
                    style={{ textShadow: '0px 0px 6px black' }}
                >
                    Register
                </h2>
                <form className="" onSubmit={handleRegister}>
                    <div className="mb-3">
                        <Input onBlur={handleBlur} name="name" type="text" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <Input
                            onBlur={handleRegister}
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            name="password"
                            type="password"
                            onBlur={handleBlur}
                            placeholder="Password"
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            name="confirmPassword"
                            type="password"
                            onBlur={handleBlur}
                            placeholder="Confirm Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-2"
                    >
                        Register new account
                    </button>

                    {/* google login */}
                    <div className="text-center text-xl bg-orange-300 text-white py-2 rounded-lg mt-1">
                        <button onClick={googleLogin}>
                            Login With google{' '}
                            <FontAwesomeIcon icon={faGoogle} className="text-blue-500" />
                        </button>
                    </div>

                    {/* go to login */}
                    <p className="text-center my-2 ">
                        New user, Please{' '}
                        <button
                            onClick={() => navigate('/login')}
                            className="underline text-blue-500"
                        >
                            Login
                        </button>
                    </p>
                    {error && (
                        <p className="py-1 bg-red-400 text-white text-center mt-1 rounded-md">
                            {error}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Register;
