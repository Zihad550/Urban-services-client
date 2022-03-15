import {
    faBusinessTime,
    faEnvelope,
    faHome,
    faUserCheck,
    faUserGear,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AdminAllBookings from '../AdminAllBookings/AllBookings';

function AdminDashboardHome() {
    const stats = [
        {
            id: 1,
            about: 'Customers',
            total: 0,
            icon: faUsers,
            iconColor: 'text-blue-400',
            bgColor: 'yellow'
        },
        {
            id: 2,
            about: 'workers',
            total: 0,
            icon: faUserGear,
            iconColor: 'text-white',
            bgColor: 'pink'
        },
        {
            id: 3,
            about: 'Workers Request',
            peoples: 0,
            icon: faEnvelope,
            iconColor: 'text-white',
            bgColor: 'pink'
        },
        {
            id: 4,
            about: 'To-Lets',
            total: 0,
            icon: faHome,
            iconColor: 'text-white',
            bgColor: 'pink'
        },
        {
            id: 5,
            about: 'Employee Available',
            peoples: 0,
            icon: faUserCheck,
            iconColor: 'text-white',
            bgColor: 'green'
        },
        {
            id: 6,
            about: 'Employee Busy',
            total: 0,
            icon: faBusinessTime,
            iconColor: 'text-white',
            bgColor: 'red'
        }
    ];
    return (
        <div className="pr-2">
            <div className="grid grid-cols-3 gap-2 w-full">
                {stats.map((state) => (
                    <div
                        key={state.id}
                        className={`shadow-lg w-full flex items-center p-4 justify-between bg-${state.bgColor}-400 hover:bg-${state.bgColor}-500`}
                    >
                        <div>
                            <p className="text-center text-3xl">00</p>
                            <h4 className="text-2xl">{state.about}</h4>
                        </div>
                        <FontAwesomeIcon
                            className={`text-5xl ml-3 ${state.iconColor}`}
                            icon={state.icon}
                        />
                    </div>
                ))}
            </div>

            {/* all bookings */}
            <AdminAllBookings />
        </div>
    );
}

export default AdminDashboardHome;
