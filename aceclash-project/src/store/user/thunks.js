
import appApi from "../../api/authApi"
import {  pending, fullfilled, rejected} from "./"

export const getAllUsers = () => {
    return async (dispatch) => {
        dispatch(pending());
    
        try {
            await appApi.get('/users')
            dispatch(fullfilled());
        } catch (error) {
            dispatch(rejected(error.response.data?.message) || '');          
        }
        
      };
}

