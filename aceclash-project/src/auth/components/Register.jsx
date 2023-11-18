import '../styles/register.css'

export const RegisterNewUser = () => {
  return (
    <>
    <div className="center-container">
    <section className='registration-section'> 
        

        <h1>Register</h1>
        <form >

        <input
            type="text"
            id="img"
            name="img"
            placeholder="img url"
            />
          
            <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Username"
            />

            <input
            type="text"
            id="lastname"
            name="lastname"
            required
            placeholder="Lastname"
            />

            <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            />

            <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Password"
            />

            <input
            type="password"
            id="ConfirmPassword"
            name="ConfirmPassword"
            required
            placeholder="Confirm Password"
            />
          <button >
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
