// Import necessary dependencies

import { Routes, Route } from 'react-router-dom';
import NavbarAdmin from '../components/Navbar';
import UsersListComponent from '../components/userComponents/UsersListComponent';
import '../styles/indexAdmin.css';
import TournamentsListComponent from '../components/tournamentsComponents/TournamentsListComponent';
import TournamentId from '../components/tournamentsComponents/TournamentId';
import TournamentUpdate from '../components/tournamentsComponents/TournamentUpdate';
import TournamentCreate from '../components/tournamentsComponents/TournamentCreate';
import EnrollmentsListAdmin from '../components/enrollmentsComponents/EnrollmentsListAdmin';
import EnrollmentDetails from '../components/enrollmentsComponents/EnrollmentDetails';
import EnrollmentUpdate from '../components/enrollmentsComponents/EnrollmentUpdate';
import EnrollmentCreate from '../components/enrollmentsComponents/EnrollmentCreate';
import UserCreate from '../components/userComponents/UserCreate';

// Define the AdminRoutes component
export const AdminRoutes = () => {
  return (
    <div className="admin-container">
      <NavbarAdmin />
      <div className="admin-content">
        <Routes>
        
          <Route path="/" element={<UsersListComponent />} />
          <Route path="/create-user" element={< UserCreate/>} />
          <Route path= "/tournaments" element={<TournamentsListComponent/>} />
          <Route path= "/tournaments/:id" element={<TournamentId/>} />
          <Route path= "/editTournament/:id" element={<TournamentUpdate/>} />
          <Route path= "/createTournament" element={<TournamentCreate/>} />
          <Route path= "/enrollments-users" element={<EnrollmentsListAdmin/>} />
          <Route path= "/enrollments-users/:id" element={<EnrollmentDetails/>} />
          <Route path= "/edit-enrollments-users/:id" element={<EnrollmentUpdate/>} />
          <Route path= "/create-enrollments-users" element={<EnrollmentCreate/>} />

        </Routes>
      </div>
    </div>
  );
};
