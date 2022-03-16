import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Worker({ worker }) {
    const navigate = useNavigate();
    const { src, name, location, experience, category, skill, email, phone, _id } = worker;
    const socials = [
        { id: 1, icon: faFacebookF, link: '#', bg: '#3b5998' },
        { id: 2, icon: faLinkedinIn, link: '#', bg: '#0e76a8' },
        { id: 3, icon: faInstagram, link: '#', bg: '#3f729b' }
    ];

    return (
        <div className="shadow-lg mx-2">
            {/* card header */}
            {/* img */}
            <div className="h-[300px] overflow-hidden">
                <img className="w-full h-auto rounded-lg " src={src} alt="" />
            </div>
            {/* card body */}
            <div className="p-5 rounded-b-lg">
                {/* name & level */}
                <div className="flex">
                    <h2 className="text-xl ">{name}</h2>
                    <p
                        className={`text-white  inline-block ml-5 px-3 py-1 rounded-full w-min h-min text-sm capitalize ${
                            skill === 'expert' && 'bg-violet-500'
                        } ${skill === 'intermediate' && 'bg-orange-500'} ${
                            skill === 'beginner' && 'bg-green-500'
                        }`}
                    >
                        {skill}
                    </p>
                    <p className="text-white inline-block ml-5 px-3 py-1 rounded-full w-min h-min text-sm capitalize bg-blue-500">
                        {category}
                    </p>
                </div>
                {/* experience & location */}

                <div className=" mt-2">
                    <p className="text-sm mr-2">
                        Experience:
                        <span className="font-bold"> {experience}</span>
                    </p>
                    <p className="text-sm my-2">
                        Location: <span className="font-bold">{location}</span>
                    </p>
                </div>
                {/* phone & email */}
                <div className="flex text-sm justify-between">
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />:{' '}
                        <span className="ml-.5">{email}</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} />: <span className="ml-.5">{phone}</span>
                    </p>
                </div>
                {/* social */}
                <div className="flex justify-center mt-3 items-center">
                    {socials.map((social) => (
                        <div
                            className="p-1 mx-2 text-white rounded-full px-2.5 cursor-pointer hover:text-red-500"
                            style={{ background: social.bg }}
                        >
                            <FontAwesomeIcon icon={social.icon} />
                        </div>
                    ))}
                    <button
                        onClick={() => navigate(`/hire/${_id}`)}
                        className="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Hire
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Worker;
