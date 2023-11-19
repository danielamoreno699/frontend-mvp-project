import '../styles/register.css'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'



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

  const [setFormSubmitted] = useState(false)

  const { status} = useSelector(state => state.auth)

  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] )

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const onSubmit = (event) =>{
    event.preventDefault()
    setFormSubmitted(true)


   dispatch(RegisterNewUser(formData))

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
            id="lastname"
            name="lastname"
            value={formData.last_name}
            onChange={handleInputChange}
            required
            placeholder="Lastname"
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
            id="ConfirmPassword"
            name="ConfirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            placeholder="Confirm Password"
            />
          <button 
            type="submit"
            disabled={isCheckingAuthentication}
          
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
