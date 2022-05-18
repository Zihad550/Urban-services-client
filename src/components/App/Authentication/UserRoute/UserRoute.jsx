import Loader from 'components/Shared/Loader';
import useAuth from 'hooks/useAuth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const UserRoute = ({ children, ...rest }) => {
    const { savedUser, user, adminLoading } = useAuth();
    const location = useLocation();
    if (adminLoading) {
        return <Loader />;
    }
    if (savedUser.role === 'user' && user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default UserRoute;
