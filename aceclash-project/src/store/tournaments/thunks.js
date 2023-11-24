import appApi from "../../api/authApi"
import {  pending, fulfilled, rejected} from "./"


//get tournaments
export const getTournaments = () => {
    return async (dispatch) => {
        dispatch(pending());
    
        try {
            const response = await appApi.get('/tournaments')
            console.log('API Response:', response.data);
            dispatch(fulfilled(response.data));
        } catch (error) {
            dispatch(rejected(error.response) || '');          
        }
        
      };
}