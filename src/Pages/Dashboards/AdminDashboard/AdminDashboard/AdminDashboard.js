import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import AdminDashboardSidebar from '../AdminDashboardSidebar/AdminDashboardSidebar';

function AdminDashboard() {
    const [closeSidebar, setCloseSidebar] = useState(false);
    const { user } = useAuth();
    console.log(user);
    const location = useLocation();
    return (
        <div className="flex ">
            <AdminDashboardSidebar closeSidebar={closeSidebar} />
            <div className="ml-3 w-full">
                <div className="flex w-full">
                    <svg
                        onClick={() =>
                            closeSidebar ? setCloseSidebar(false) : setCloseSidebar(true)
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                    <h2 className="text-3xl mx-auto uppercase">
                        {location.pathname.split('/')[2] || location.pathname.split('/')[1]}
                    </h2>
                </div>

                <Outlet />
            </div>
        </div>
    );
}

export default AdminDashboard;
