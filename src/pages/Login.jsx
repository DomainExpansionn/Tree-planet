import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { Eye, EyeOff } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const { signIn, resetPassword, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        navigate(location.state || "/");
      })
      .catch(error => toast(error.message));
  };

 
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location.state || "/"); 
      })
      .catch(error => {
        toast(error.message);
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input w-full pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  const email = emailRef.current.value;
                  if (!email) return alert("Enter email first");
                  resetPassword(email)
                    .then(() =>
                      alert("Password reset email sent!")
                    )
                    .catch(err => alert(err.message));
                }}
                className="link link-hover text-sm"
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

          
            <div className="divider">OR</div>

         
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full"
            >
              Continue with Google
            </button>

            <p className="mt-2">
              Don't have an account?{" "}
              <Link to="/auth/register" className="text-blue-500 underline">
                Register
              </Link>
            </p>
          </fieldset>
          <ToastContainer/>
        </form>
      </div>
    </div>
  );
};

export default Login;
