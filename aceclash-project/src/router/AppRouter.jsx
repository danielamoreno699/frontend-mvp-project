// AppRouter.js
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useSelector, useDispatch } from 'react-redux';
import { persistLogin } from "../store/auth";
import { AdminRoutes } from "../admin/routes/AdminRoutes";
import { UserRoutes } from "../users/routes/userRoutes";

export const AppRouter = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    // data persistence of user during session
    const fetchPersistedUser = async () => {
        try {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                await dispatch(persistLogin(storedUser._id));
            }else{
                await dispatch(persistLogin(null));
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    
    useEffect(() => {
        fetchPersistedUser();
    }, []);

  
    if (authStatus === 'checking') {
        return <div>Loading...</div>;
       
    }

  
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />

            <Route
                path="/*"
                element={
                    authStatus === 'authenticated' ? (
                        <>
                   
                        {user.role === 'admin' ? <AdminRoutes /> : <UserRoutes/>}
                        </>
                        

                    ) : (    
                        <Navigate to="/auth/login" />
                    )
                }
            />
        </Routes>
    );
};
