// AppRouter.js

import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  return (
    <Routes>
    
      <Route path="/auth/*" element={<AuthRoutes />} />

      
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
