// AppRouter.js

import { Route, Routes, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useSelector } from 'react-redux';

export const AppRouter = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const user = useSelector((state) => state.auth.user);

    console.log('authStatus:', authStatus);
    console.log('user:', user);
  
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />

            <Route
                path="/*"
                element={
                    authStatus === 'authenticated' ? (
                        <h1>{`Hello, ${user.name} ${user.last_name} (${user.role === 'admin' ? 'Admin' : 'User'})`}</h1>
                    ) : (    
                        <Navigate to="/auth/login" />
                    )
                }
            />
        </Routes>
    );
};
