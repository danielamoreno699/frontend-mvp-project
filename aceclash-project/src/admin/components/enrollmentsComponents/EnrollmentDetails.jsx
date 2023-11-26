import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEnrollmentById } from '../../../store/enrollments';

const EnrollmentDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { enrollmentInf } = useSelector((state) => state.enrollments);

  useEffect(() => {
    dispatch(getEnrollmentById(id));
  }, [dispatch, id]);

  


  const enrollment = enrollmentInf[0];


  if (!enrollment) {
    return <div>No enrollment data available</div>;
  }

  return (
    <div>
      <h1>{enrollment.league}</h1>
      {/* Access other properties here */}
    </div>
  );
};

export default EnrollmentDetails;
