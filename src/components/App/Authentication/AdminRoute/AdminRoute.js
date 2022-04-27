import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Loader from '../../../Shared/Loader/Loader';

function AdminRoute({ children, ...rest }) {
    const { savedUser, adminLoading, user, isLoading } = useAuth();
    const location = useLocation();
    if (adminLoading) {
        return <Loader />;
    }
    if (savedUser.role === 'admin' && user.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;
}

export default AdminRoute;
