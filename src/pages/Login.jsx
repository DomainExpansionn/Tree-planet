import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { signIn, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        navigate(location.state || "/");
      })
      .catch(error => {
        alert(error.message);
      });
  };

 
  const handleForgotPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      alert("Please enter your email first");
      return;
    }

    resetPassword(email)
      .then(() => {
        alert("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
      <div className="card-body">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>

        <form onSubmit={handleSignIn}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            <div>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="link link-hover text-sm"
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <p>
              Don't have an account?{" "}
              <Link to="/auth/register" className="text-blue-500 underline">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
