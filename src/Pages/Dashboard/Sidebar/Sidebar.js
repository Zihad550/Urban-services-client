import {
    faArrowRightFromBracket,
    faBusinessTime,
    faChartLine,
    faEnvelope,
    faHouse,
    faList,
    faUser,
    faUserCheck,
    faUsers,
    faUserSecret
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function Sidebar({ closeSidebar }) {
    // hooks
    const { user } = useAuth();

    // sidebar navs
    const navs = [
        { id: 1, nav: 'Dashboard', link: '/dashboard', icon: faChartLine },
        { id: 2, nav: 'Worker List', link: '/dashboard/workers', icon: faList },
        { id: 3, nav: 'Customers', link: '/dashboard/customers', icon: faUsers },
        { id: 4, nav: 'Worker Requests', link: '/dashboard/worker-requests', icon: faEnvelope },
        { id: 5, nav: 'To-Lets', link: '/dashboard/to-lets', icon: faHouse },
        {
            id: 6,
            nav: 'Available Workers',
            link: '/dashboard/available-workers',
            icon: faUserCheck
        },
        { id: 7, nav: 'Busy Workers', link: '/dashboard/busy-workers', icon: faBusinessTime }
    ];
    return (
        <div>
            <aside className={closeSidebar ? 'w-64' : 'hidden'} aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                    {user.role === 'admin' ? (
                        <div className="flex items-center justify-center my-2">
                            <FontAwesomeIcon className="text-2xl" icon={faUserSecret} />
                            <p className="uppercase ml-1 text-2xl">admin</p>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center my-2">
                            <FontAwesomeIcon className="text-2xl" icon={faUser} />
                            <p className="uppercase ml-1 text-2xl">user</p>
                        </div>
                    )}
                    <ul className="space-y-2">
                        {navs.map((nav) => (
                            <li key={nav.id}>
                                <Link
                                    to={nav.link}
                                    href="#"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <FontAwesomeIcon
                                        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        icon={nav.icon}
                                    />

                                    <span className="ml-3">{nav.nav}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />{' '}
                        <span className="ml-5">Log Out</span>
                    </button>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;
