import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, adminLoading } = useAuth();
  console.log(user.email, admin);
  const location = useLocation();
  if (adminLoading) {
    return <div className="rounded-full w-20 h-20 border-4 border-red-600" />;
  }
  if (admin && user.email) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default AdminRoute;
