import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { checkingEmptyFields } from '../../../helpers/EmpValues';
import Swal from 'sweetalert2';
import { updateEnrollment } from '../../../store/enrollments';


const EnrollmentUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

 


  const [data, setData] = useState({
    league: '',
    club: '',
    category: '',
    practice_location: '',
    
    });

    const onHandleChange = (e) => {
      const { name, value } = e.target;
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const onHandleSubmit = async(e) => {
      e.preventDefault();
      const nonEmptyData = checkingEmptyFields(data);
      try {
        const response = await dispatch(updateEnrollment(id, nonEmptyData));
        console.log('res', response);
        if (response) {

            Swal.fire({
                title: 'Enrollment Updated successfully',
                icon: 'success',
                confirmButtonText: 'ok'
            })

            navigate(`/enrollments-users`);
        }else{
            Swal.fire({
                title: 'Error',
                text: 'Error updating Enrollment',
                icon: 'error',
                confirmButtonText: 'ok'
            })
        }
    } catch (error) {
        throw new error('Oops some error ocurred');
    }
      
    }



  return (
    <>
    <div >
      <h2>Enrollment Update</h2>
      <div className="d-flex justify-content-center">
      <form className="w60" onSubmit={onHandleSubmit}>
      <div className="mb-3">
          <label htmlFor="imgTournament" className="form-label">league for enrollment</label>
          <input 
          type="text" 
          className="form-control" 
          id="leagueEnrollment" 
          name="league"
          value={data.league}
          onChange={onHandleChange}
         
        
          
          />
         
        </div>

        <div className="mb-3">
          <label htmlFor="nameTournament" className="form-label">club for enrollment</label>
          <input 
          type="text" 
          className="form-control" 
          id="clubEnrollment"
          name="club"
          value={data.club}
          onChange={onHandleChange}
         
          
          />
         
        </div>

        <div className="mb-3">
          <label htmlFor="descTournament" className="form-label">category </label>
          <input 
          
          type="text" 
          className="form-control" 
          id="categoryEnrollment"
         name="category"
         value={data.category}
         onChange={onHandleChange}
           />
         
        </div>

        <div className="mb-3">
          <label htmlFor="locationTournament" className="form-label">practice location</label>
          <input 
          type="text" 
          className="form-control" 
          id="practiceLocationEnrollment"
          name="practice_location"
          value={data.practice_location}
          onChange={onHandleChange}

           />
         
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
        </div>
    </>
  )
}

export default EnrollmentUpdate