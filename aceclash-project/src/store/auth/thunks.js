import { useDispatch, useSelector } from "react-redux"
import appApi from "../api/authApi"
import { onChecking, onLogin, onLogout, clearErrorMessage } from "../store/auth/authSlice"

const useAuthStore = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth)
    const dispatch = useDispatch()


    // function that registers new user 
    const RegisterNewUser = async({img, name, last_name, email, password}) => {
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
    
    }

    return{
        status, 
        user, 
        errorMessage,

        RegisterNewUser
    }

}

export default useAuthStore