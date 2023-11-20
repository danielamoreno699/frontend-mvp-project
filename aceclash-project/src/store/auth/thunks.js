
import appApi from "../../api/authApi"
import { onChecking, onLogin, onLogout, clearErrorMessage} from "./";


    export const CreateNewUser = (data) => {
      return async (dispatch) => {
        dispatch(onChecking());
    
        try {
           await appApi.post(
            '/register',
            data,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
    
          localStorage.setItem('token', data.token);
          localStorage.setItem('token-start-date', new Date().getTime());
          dispatch(onLogin({ _id: data._id, email: data.email, role: data.role }));
          return data
        } catch (error) {
          dispatch(onLogout(error.response.data?.message) || '');
          setTimeout(() => {
            dispatch(clearErrorMessage());
          }, 10);
        }
      };
    };
    

  



