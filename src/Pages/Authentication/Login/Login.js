import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/login.jpg';

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
        <>
            {/* header */}
            <Link
                to="/"
                className="text-4xl text-center font-serif w-full inline-block border-b-2 py-2"
            >
                Urban Services
            </Link>

            {/* body */}

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 ">
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
                    <form className="" onSubmit={handleLogin}>
                        <div className="mb-3">
                            <Input
                                variant="outlined"
                                onBlur={handleBlur}
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                variant="outlined"
                                onBlur={handleBlur}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 mb-2 text-xl bg-blue-500 rounded-lg text-white"
                        >
                            Login
                        </button>

                        <div className="flex items-center justify-center">
                            <p className="text-center my-5 mr-5">Or,</p>
                            {/* google login */}
                            <div className="text-center text-xl bg-orange-300 text-white py-2 rounded-lg mt-1 px-5">
                                <button onClick={() => googleLogin(location, navigate)}>
                                    Login With google{' '}
                                    <FontAwesomeIcon icon={faGoogle} className="text-blue-500" />
                                </button>
                            </div>
                        </div>

                        {/* goto register */}
                        <p className="text-center my-2 ">
                            New user, Please{' '}
                            <button
                                onClick={() => navigate('/register')}
                                className="underline text-blue-500"
                            >
                                Register
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
        </>
    );
}

export default Login;
