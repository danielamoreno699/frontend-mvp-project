// AppRouter.js
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useSelector, useDispatch } from 'react-redux';
import NavbarAdmin from "../admin/components/Navbar";
import { persistLogin } from "../store/auth";

export const AppRouter = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    // data persistence of user during session
    useEffect(() => {
        const fetchPersistedUser = async () => {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                await dispatch(persistLogin(storedUser._id));
            }
        };

        fetchPersistedUser();
    }, [dispatch]);

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
                   
                        {user.role === 'admin' ? <NavbarAdmin /> : 'hello user'}
                        </>
                        

                    ) : (    
                        <Navigate to="/auth/login" />
                    )
                }
            />
        </Routes>
    );
};
