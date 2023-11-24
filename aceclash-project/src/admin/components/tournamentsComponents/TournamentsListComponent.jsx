import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getTournaments } from '../../../store/tournaments';

const TournamentsListComponent = () => {
  const dispatch = useDispatch();
  const { tournaments } = useSelector((state) => state.tournaments);

  useEffect(() => {
    dispatch(getTournaments());
  }, [dispatch]);

  const onHandleUpdateTournament = (tournament) => {
    console.log(tournament);
  }

  const onHandleSeeDetails = (tournament) => {
    console.log(tournament);
  }

  const onHandleDelete = (tournament) => {
    console.log(tournament);
  }

  return (
    <>
      <section className="container-section">
        <h1>Tournaments List</h1>
        <div className="tournaments-container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Location</th>
                <th>City</th>
                <th>Country</th>
                <th>Capacity Available</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>



              {tournaments.map((tournament) => (
                <tr key={tournament._id}>
                  <td>{tournament._id}</td>
                  <td>{tournament.name}</td>
                  <td>{tournament.desc}</td>
                  <td>{tournament.location}</td>
                  <td>{tournament.city}</td>
                  <td>{tournament.country}</td>
                  <td>{tournament.capacity_available}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Button
                        variant="primary"
                        size="sm"
                        className="mr-3"
                        onClick={() => onHandleUpdateTournament(tournament)}
                      >
                        Update Tournament
                      </Button>
                      <Button
                        variant="success"
                        className="mr-3"
                        size="sm"
                        onClick={() => onHandleSeeDetails(tournament)}
                      >
                        See more info
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        className="mr-3"
                        onClick={() => onHandleDelete(tournament)}
                      >
                        Delete tournament
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
}

export default TournamentsListComponent;
