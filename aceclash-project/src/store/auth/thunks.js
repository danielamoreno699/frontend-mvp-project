
import appApi from "../../api/authApi"
import { onChecking, onLogin, onLogout, clearErrorMessage} from "./";


//create new user
    export const CreateNewUser = (data) => {
      return async (dispatch) => {
        dispatch(onChecking());
    
        try {
           await appApi.post(
            '/register',
            data,
          );
    
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


    //login user
    export const loginUser = (data) => {
      return async (dispatch) => {
        dispatch(onChecking());
    
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
          
          console.log(response.data)

          localStorage.setItem('token', response.data['data']);
          localStorage.setItem('token-start-date', new Date().getTime());
          dispatch(onLogin({ _id: response.data._id, email: response.data.email, role: response.data.role }));
          return response.data;
        } catch (error) {
          dispatch(onLogout(error.response.data?.message) || '');
          setTimeout(() => {
            dispatch(clearErrorMessage());
          }, 10);
        }
      };
    };
    

  



