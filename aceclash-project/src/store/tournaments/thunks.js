import appApi from "../../api/authApi"
import {  pending, fulfilled, rejected, fulfilledTournament} from "./"


//get tournaments
export const getTournaments = () => {
    return async (dispatch) => {
        dispatch(pending());
    
        try {
            const response = await appApi.get('/tournaments')
            
            dispatch(fulfilled(response.data));
        } catch (error) {
            dispatch(rejected(error.response) || '');          
        }
        
      };
}

//get tournament by id
export const getTournamentById = (id) => {
    return async (dispatch) => {
        dispatch(pending());
    
        try {
            const response = await appApi.get(`/tournaments/${id}`)
            console.log('API Response:', response.data);
            dispatch(fulfilledTournament(response.data));
        } catch (error) {
            dispatch(rejected(error.response) || '');          
        }
        
      };
}