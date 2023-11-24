// Import necessary dependencies

import { Routes, Route } from 'react-router-dom';
import NavbarAdmin from '../components/Navbar';
import UsersListComponent from '../userComponents/UsersListComponent';
import '../styles/indexAdmin.css';
import TournamentsListComponent from '../components/tournamentsComponents/TournamentsListComponent';
import TournamentId from '../components/tournamentsComponents/TournamentId';
import TournamentUpdate from '../components/tournamentsComponents/TournamentUpdate';

// Define the AdminRoutes component
export const AdminRoutes = () => {
  return (
    <div className="admin-container">
      <NavbarAdmin />
      <div className="admin-content">
        <Routes>
        
          <Route path="/" element={<UsersListComponent />} />
          <Route path= "/tournaments" element={<TournamentsListComponent/>} />
          <Route path= "/tournaments/:id" element={<TournamentId/>} />
          <Route path= "/editTournament/:id" element={<TournamentUpdate/>} />
        </Routes>
      </div>
    </div>
  );
};
