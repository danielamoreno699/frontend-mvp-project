import '../styles/login.css'

export const Login = () => {
  return (
    <>
    <div className="center-container">
        <section className="login-section">
       
       <h1>Login</h1>
       <form >
           <label htmlFor="username">Username</label>
           <input
              
           />
           <button>Sign in</button>
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
