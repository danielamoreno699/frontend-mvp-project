import { useParams } from "react-router-dom";

const EnrollmentCreateUser = () => {
  const { id } = useParams();
  console.log("Tournament ID:", id);
  return (
    <div>
      <h1>Create Enrollment</h1>
    </div>
  )
}

export default EnrollmentCreateUser
