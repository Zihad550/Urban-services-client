import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function AdminRoute({ children, ...rest }) {
    const { savedUser, adminLoading, user } = useAuth();
    const location = useLocation();
    if (adminLoading) {
        return <div className="rounded-full w-20 h-20 border-4 border-red-600" />;
    }
    if (savedUser.role === 'user' && user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
}

export default AdminRoute;
