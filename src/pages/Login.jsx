import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

  const { signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email,password)
    .then(()=>{
      
      navigate(`${location.state ? location.state : "/"}`);
    })
    .catch(error=>{
      console.log(error)
    })
  }
    return (
       
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleSignIn}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p>Don't have an account? <Link to={'/auth/register'} className='text-blue-500 underline'>Register</Link> </p>
        </fieldset>
        </form>
        
      </div>
    </div>

    );
};

export default Login;