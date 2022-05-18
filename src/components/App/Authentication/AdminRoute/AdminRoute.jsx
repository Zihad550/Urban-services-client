import Loader from 'components/Shared/Loader';
import useAuth from 'hooks/useAuth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {
    const { savedUser, adminLoading, user, isLoading } = useAuth();
    const location = useLocation();
    if (adminLoading) {
        return <Loader />;
    }
    if (savedUser.role === 'admin' && user.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
