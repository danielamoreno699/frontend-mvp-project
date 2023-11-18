// AppRouter.js

import { Navigate,  Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useSelector } from 'react-redux';


export const AppRouter = () => {
    const authStatus = useSelector((state) => state.auth.status);
  return (
    <Routes>
    
      <Route path="/auth/*" element={<AuthRoutes />} />

        {authStatus === 'authenticated' ? (
          <h1>hello, im user  </h1>
        ) : (    
          <Navigate to="/auth/login" />
        )}
    
    </Routes>
  );
};
