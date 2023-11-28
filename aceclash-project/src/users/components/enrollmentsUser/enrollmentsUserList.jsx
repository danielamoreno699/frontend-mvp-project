import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getEnrollmentsByUserId } from '../../../store/enrollments';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import EnrollmentUpdateUser from './enrollmentUpdateUser';
import { updateEnrollment } from '../../../store/enrollments';
import { checkingEmptyFields } from '../../../helpers/EmpValues';
import Swal from 'sweetalert2';

 const EnrollmentsUserList = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [selectedEnrollment, setSelectedEnrollment] = useState(null);
   
    
    const {enrollments} = useSelector((state) => state.enrollments);
    
    console.log('enrollments', enrollments);

    useEffect(() => {
        dispatch(getEnrollmentsByUserId(userId));
        }, [dispatch, userId]);

    

    const onHandleUpdateEnrollment = (enrollment) => {
        setSelectedEnrollment(enrollment);
        setShowModal(true);
        
      }

    
      const submitUpdate = async (data) => {
   
        const nonEmptyData = checkingEmptyFields(data);
      
        try {
          if (nonEmptyData) {
            await dispatch(updateEnrollment(selectedEnrollment._id, nonEmptyData));
      
            Swal.fire({
              icon: 'success',
              title: 'User updated successfully!',
              showConfirmButton: false,
              timer: 1500,
            });
      
            setShowModal(false);
            dispatch(getEnrollmentsByUserId(enrollments.userId));
            window.location.reload();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error updating user',
              text: 'An error occurred while updating the user. Please try again.',
            });
          }
        } catch (error) {
          throw new Error('Oops! Something went wrong.');
      
         
        }
      };

  return (
    <>
  <h2>Enrollments User List: ID {userId}</h2>
  {enrollments.map((enrollment) => (
    <Card key={enrollment._id}>
      <Card.Body>
        <Card.Title>{enrollment.userId.name}</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {enrollment.userId.email}
          <br />
          <strong>Tournament Name:</strong> {enrollment.tournamentId.name}
          <br />
          <strong>League:</strong> {enrollment.league}
          <br />
            <strong>club:</strong> {enrollment.club}
            <br />
            <strong>category:</strong> {enrollment.category}
            <br />
            <strong>practice_location:</strong> {enrollment.practice_location}
        </Card.Text>
        <Button 
        variant="primary"
        onClick = {() => onHandleUpdateEnrollment(enrollment)} 
        >update</Button>
        <Button variant="danger">delete</Button>
      </Card.Body>
    </Card>
  ))}

  <EnrollmentUpdateUser show={showModal} setShow={setShowModal} enrollment={selectedEnrollment} submitUpdate={submitUpdate} />
</>
    

  )
}

export default EnrollmentsUserList
