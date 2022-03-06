import React, { createContext } from 'react';
import useUser from '../hooks/useUser';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const allContext = useUser();
    return <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
