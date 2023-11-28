import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getEnrollmentsByUserId } from '../../../store/enrollments';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

 const EnrollmentsUserList = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    //const navigate = useNavigate();
    
    const {enrollments} = useSelector((state) => state.enrollments);
    
    console.log('enrollments', enrollments);

    useEffect(() => {
        dispatch(getEnrollmentsByUserId(userId));
        }, [dispatch, userId]);

    
  return (
    <>
  <h2>Enrollments User List: ID {userId}</h2>
  {/* {enrollments.map((enrollment) => (
    <Card key={enrollment._id}>
      <Card.Body>
        <Card.Title>{enrollment.userId.name}</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {enrollment.userId.email}
          <br />
          <strong>Tournament Name:</strong> {enrollment.tournamentId.name}
          <br />
          <strong>League:</strong> {enrollment.league}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ))} */}
</>
    

  )
}

export default EnrollmentsUserList
