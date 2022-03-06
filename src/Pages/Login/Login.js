import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../images/login.jpg';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

function Login() {
    // auth
    const { login, error, googleLogin } = useAuth();
    // navigate & location
    const navigate = useNavigate();
    const location = useLocation();

    // states
    const [loginData, setLoginData] = useState({});
    const { email, password } = loginData;

    // handlers
    const handleBlur = (e) => {
        const field = e.target.name;
        const { value } = e.target;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password, location, navigate);
    };
    return (
        <>
            <Header />

            <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 ">
                <div className="hidden lg:block">
                    <img src={img} alt="" />
                </div>
                <div className="md:my-auto ">
                    <h2
                        className="text-center text-5xl mb-5 mt-20 lg:mt-0 text-white "
                        style={{ textShadow: '0px 0px 6px black' }}
                    >
                        Login
                    </h2>
                    <form>
                        <div className="mb-3">
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="E-mail"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center mb-5">
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Login
                            </button>
                            <p className="inline-block ml-10">
                                New user,{' '}
                                <button
                                    className="text-blue-600"
                                    onClick={() => navigate('/register')}
                                >
                                    Register
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Login;
