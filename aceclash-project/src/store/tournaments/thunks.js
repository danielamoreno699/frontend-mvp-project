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
          
            dispatch(fulfilledTournament(response.data));
        } catch (error) {
            dispatch(rejected(error.response) || '');          
        }
        
      };
}

// update tournament
export const updateTournament = (id, data) => {
    return async (dispatch) => {
        dispatch(pending());
    
        try {
            const response = await appApi.put(`/tournaments/${id}`, data)
            console.log('API Response:', response.data);
            
            return response.data;
        } catch (error) {
            dispatch(rejected(error.response) || '');          
        }
        
      };
}