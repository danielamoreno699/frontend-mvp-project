import '../styles/login.css'
import {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser} from '../../store/auth/thunks'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    
      email: '',
      password: '',
     
    });

 const dispatch = useDispatch()


const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};


const onSubmit = async(event) =>{
  event.preventDefault()
  console.log(formData)
  
  try {
  
    const response = await dispatch(loginUser(formData))
    console.log(response)
    if (response) {
      Swal.fire({
  
        icon: 'success',
        title: 'successful',
        text: 'user logged in successfully',
      })

      navigate('/');
    }
  } catch (error) {
    console.error('Error while logged in', error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'An error occurred while logging.',
    });
  }

}


  return (
    <>
    <div className="center-container">
        <section className="login-section">
       
       <h1>Login</h1>
       <form onSubmit={onSubmit}>
          
           <input
            placeholder='Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
           />

          <input
            placeholder='Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
           />


        <button 
        type='submit'
        >
          Sign in
          
          </button>
       </form>
       <div className="p-container">
       <p>
           Dont have an account? <br />
           <span className="line">
               <a href="/auth/register">Register</a>
           </span>
       </p>
       
       </div>
   </section>
   </div>
</>
  )
}
