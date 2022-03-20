import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import useAuth from '../../../hooks/useAuth';
import src from '../../../images/login-register-bg.jpg';

function Login() {
    // usefirebase
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
        <div className="bg-gradient-to-r from-cyan-500 to-blue-800 w-screen h-screen flex items-center justify-center ">
            {/* inner container */}
            <div
                style={{
                    background: `url(${src}) no-repeat center`,
                    backgroundSize: 'cover'
                }}
            >
                {/* body */}

                <div className="container grid grid-cols-3">
                    <div className="md:my-auto col-span-2 bg-white p-20">
                        <h2 className="text-4xl text-center mb-8">Sign In</h2>

                        <form className="" onSubmit={handleLogin}>
                            <div className="my-5 relative z-0 ">
                                <Input
                                    variant="underlined"
                                    onBlur={handleBlur}
                                    name="email"
                                    type="email"
                                />
                                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase ">
                                    Email address or phone number
                                </label>
                            </div>
                            <div className="mb-3 relative z-0">
                                <Input
                                    variant="underlined"
                                    onBlur={handleBlur}
                                    name="password"
                                    type="password"
                                />
                                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase">
                                    password
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-1 mb-2 text-md bg-gradient-to-r from-cyan-500 to-blue-800  rounded-full text-white uppercase"
                            >
                                Sign In
                            </button>

                            <div className="flex items-center justify-center">
                                <p className="text-center my-5 mr-5">Or,</p>
                                {/* google login */}
                                <div className="text-center text-xl bg-orange-300 text-white py-2 rounded-lg mt-1 px-5">
                                    <button onClick={() => googleLogin(location, navigate)}>
                                        Login With google{' '}
                                        <FontAwesomeIcon
                                            icon={faGoogle}
                                            className="text-blue-500"
                                        />
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <p className="py-1 bg-red-400 text-white text-center mt-1 rounded-md">
                                    {error}
                                </p>
                            )}
                        </form>
                    </div>

                    <div className="text-white flex flex-col items-center justify-between py-10 ">
                        <div>
                            <h3 className="text-3xl text-center">Let&#39;s Start Our Journey</h3>
                            <p className="text-center mt-3">Sign up and Make your life easier</p>
                            {/* goto register */}
                        </div>
                        <button
                            onClick={() => navigate('/register')}
                            className="text-white border-2 border-white rounded-full px-3 py-1 uppercase hover:bg-gradient-to-r from-cyan-500 to-blue-800 mb-20"
                        >
                            sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
