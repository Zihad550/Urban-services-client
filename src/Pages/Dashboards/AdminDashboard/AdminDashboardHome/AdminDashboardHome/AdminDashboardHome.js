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
        { id: 1, about: 'Customers', total: 0, icon: faUsers },
        { id: 2, about: 'workers', total: 0, icon: faUserGear },
        { id: 3, about: 'Workers Request', peoples: 0, icon: faEnvelope },
        { id: 4, about: 'To-Lets', total: 0, icon: faHome },
        { id: 5, about: 'Employee Available', peoples: 0, icon: faUserCheck },
        { id: 6, about: 'Employee Busy', total: 0, icon: faBusinessTime }
    ];
    return (
        <div className="">
            <div className="grid grid-cols-3 gap-2 w-full">
                {stats.map((state) => (
                    <div
                        key={state.id}
                        className="shadow-lg w-full flex items-center p-4 justify-between"
                    >
                        <div>
                            <p className="text-center text-3xl">00</p>
                            <h4 className="text-2xl">{state.about}</h4>
                        </div>
                        <FontAwesomeIcon className="text-5xl ml-3" icon={state.icon} />
                    </div>
                ))}
            </div>

            {/* all bookings */}
            <AdminAllBookings />
        </div>
    );
}

export default AdminDashboardHome;
