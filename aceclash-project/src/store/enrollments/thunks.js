import appApi from "../../api/authApi"
import {  pending, fulfilled, rejected, fulfilledEnrollment} from "./"

//get All enrollments for Admin
export const getAllEnrollmentsUsers = () => {
    return async (dispatch) => {
        dispatch(pending());
    
        try {
            const response = await appApi.get('/enrollments/users')
            
            dispatch(fulfilled(response.data));
            console.log('api enrollments', response.data)
            return response.data;
        } catch (error) {
            dispatch(rejected(error.response) || '');          
        }
        
      };
}


//get enrollment by id
export const getEnrollmentById = (id) => {
    return async (dispatch) => {
        dispatch(pending());
    
        try {
            const response = await appApi.get(`/enrollments/${id}`)
          
            dispatch(fulfilledEnrollment(response.data));
        } catch (error) {
            dispatch(rejected(error.response) || '');          
        }
        
      };
}
