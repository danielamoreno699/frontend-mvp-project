// Import necessary dependencies

import { Routes, Route } from 'react-router-dom';
import NavbarAdmin from '../components/Navbar';
import UsersListComponent from '../components/UsersListComponent';
import '../styles/indexAdmin.css';

// Define the AdminRoutes component
export const AdminRoutes = () => {
  return (
    <div className="admin-container">
      <NavbarAdmin />
      <div className="admin-content">
        <Routes>
        
          <Route path="/" element={<UsersListComponent />} />
        </Routes>
      </div>
    </div>
  );
};
