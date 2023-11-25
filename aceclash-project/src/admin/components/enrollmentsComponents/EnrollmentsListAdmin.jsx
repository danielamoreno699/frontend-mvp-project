/* eslint-disable no-mixed-spaces-and-tabs */
import { getAllEnrollmentsUsers } from "../../../store/enrollments"
import { useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';

 const EnrollmentsListAdmin = () => {

  
  const dispatch = useDispatch();
  const { enrollments } = useSelector((state) => state.enrollments);


  useEffect(() => {
    dispatch(getAllEnrollmentsUsers());
  }, [dispatch]);

  return (
    <>
     <section className="container-section">
        <h1>Enrollments List</h1>
        <div className="users-container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>enrollment user name</th>
                
                <th>enrollment user email</th>
                <th>Tournament name</th>
          
                <th>league</th>
                <th>club</th>
                <th>category</th>
                <th>practice location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => (
                <tr key={enrollment._id}>
                  <td>{enrollment._id}</td>
                  <td>{enrollment.userId.name}</td>
                 
                    <td>{enrollment.userId.email}</td>
                    <td>{enrollment.tournamentId.name}</td>
                    <td>{enrollment.league}</td>
                    <td>{enrollment.club}</td>
		                <td>{enrollment.category}</td>
		                <td>{enrollment.practice_location}</td>
                    <td>
                    <div className="d-flex justify-content-around">
                      <Button
                        variant="primary"
                        className="mr-3"
                        
                      >
                        see details 
                      </Button>

                      <Button
                        variant="primary"
                        className="mr-3"
                        
                      >
                        delete
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
  )
}

export default EnrollmentsListAdmin
