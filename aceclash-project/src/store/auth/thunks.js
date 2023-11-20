
import appApi from "../../api/authApi"
import { onChecking, onLogin, onLogout, clearErrorMessage} from "./";


    export const CreateNewUser = ({ img, name, last_name, email, password }) => {
      return async (dispatch) => {
        dispatch(onChecking());
    
        try {
          const { data } = await appApi.post(
            '/register',
            { img, name, last_name, email, password },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
    
          localStorage.setItem('token', data.token);
          localStorage.setItem('token-start-date', new Date().getTime());
          dispatch(onLogin({ _id: data._id, email: data.email, role: data.role }));
        } catch (error) {
          dispatch(onLogout(error.response.data?.message) || '');
          setTimeout(() => {
            dispatch(clearErrorMessage());
          }, 10);
        }
      };
    };
    

  



