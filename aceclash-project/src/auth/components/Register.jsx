import '../styles/register.css'
import {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { CreateNewUser } from '../../store/auth/thunks'
import Swal from 'sweetalert2'



export const RegisterNewUser = () => {


    const [formData, setFormData] = useState({
        img: '',
        name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

   const dispatch = useDispatch()
//    const userRef = useRef();
//    const errRef = useRef();

// Remove the unused variable declaration
// const [formSubmitted, setFormSubmitted] = useState(false)

//   const { status} = useSelector(state => state.auth)

//   const isCheckingAuthentication = useMemo( () => status === 'checking', [status] )

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const onSubmit = (event) =>{
    event.preventDefault()
    console.log(formData)

    try {
      const response =  dispatch(CreateNewUser(formData))
      console.log(response)
      if (response) {
        Swal.fire({
    
          icon: 'success',
          title: 'User has been registered successfully',
          text: 'Please login to continue',
        })
      }
    } catch (error) {
      console.error('Error creating user', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while creating the user.',
      });
    }

  }

  return (
    <>
    <div className="center-container">
    <section className='registration-section'> 
        

        <h1>Register</h1>
        <form onSubmit={onSubmit}>

        <input
            type="text"
            id="img"
            name="img"
            placeholder="img url"
            value={formData.img}
            onChange={handleInputChange}
            />
          
            <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="name"
            />

       


            <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            required
            placeholder="Last name"
            />

            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Email"
            />

            <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Password"
            />

            <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            placeholder="Confirm Password"
            />
          <button 
            type="submit"
            // disabled={isCheckingAuthentication}
          
          >
                Sign up
          </button>

                <p>
                    Already registered? <br/>
                    <span className="line">
                        <a href="/login">Login</a>
                    </span>

                </p>

        </form>

    </section>
    </div>
    
    </>
  )
}
