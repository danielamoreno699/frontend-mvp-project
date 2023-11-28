import NavbarUser from "../components/NavbarUser"
import TournamentsListUser from "../components/tournaments/tournamentsListUser"
import EnrollmentsUserList from "../components/enrollmentsUser/enrollmentsUserList";
import { Routes, Route } from 'react-router-dom';
import TournamentId from "../components/tournaments/tournamentId";
import '../styles/indexUser.css';

export const UserRoutes = () => {
  return (
    <div className="user-container">
    <NavbarUser/>
    <div className="user-content">
    
    <Routes>
        <Route path="/" element={<TournamentsListUser/>} />
        <Route path="/tournament-details/:id" element={<TournamentId/>} />
        <Route path="/enrollments-list" element={<EnrollmentsUserList/>} />


    </Routes>


    </div>
    </div>
  )
}
