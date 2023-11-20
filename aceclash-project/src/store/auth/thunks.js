
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


    export const LoginUser = async({email, password}) => {
      return async (dispatch) => {
        dispatch(onChecking());
        const data = {email, password}
        try {
          const response = await appApi.post(
            '/login',
            data,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
    
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('token-start-date', new Date().getTime());
          dispatch(onLogin({ _id: response.data._id, email: response.data.email, role: response.data.role }));
          return response.data
        } catch (error) {
          dispatch(onLogout(error.response.data?.message) || '');
          setTimeout(() => {
            dispatch(clearErrorMessage());
          }, 10);
        }
      };
    }
    

  



