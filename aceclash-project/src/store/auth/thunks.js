import { useDispatch, useSelector } from "react-redux"
import appApi from "../../api/authApi"
import { onChecking, onLogin, onLogout, clearErrorMessage} from "./";


    


    // function that registers new user 
   export  const CreateNewUser = async({img, name, last_name, email, password}) => {
    
    const {status, user, errorMessage} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    dispatch(onChecking())
        
    try {
        const {data} = await appApi.post('/api/register', {img, name, last_name, email, password},
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        
        )
        localStorage.setItem('token', data.token)
        localStorage.setItem('token-start-date', new Date().getTime())
        dispatch(onLogin({_id: data._id, email: data.email, role: data.role}))
    } catch (error) {
        dispatch(onLogout(error.response.data?.message) || '')
        setTimeout(() => {
            dispatch(clearErrorMessage())
        }, 10);
    }

    return{
        status, 
        user, 
        errorMessage,

        CreateNewUser
    }
    
    }

  



