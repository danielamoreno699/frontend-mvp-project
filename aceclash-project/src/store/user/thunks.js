
import appApi from "../../api/authApi"
import {  pending, fulfilled, rejected} from "./"


// function that displays all users 
export const getAllUsers = () => {
    return async (dispatch) => {
        dispatch(pending());
    
        try {
            const response = await appApi.get('/users')
            console.log('API Response:', response.data);
            dispatch(fulfilled(response.data));
        } catch (error) {
            dispatch(rejected(error.response) || '');          
        }
        
      };
}

