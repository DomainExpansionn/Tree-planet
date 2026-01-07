
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  
  const rules = {
    length: password.length >= 6,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[@$!%*?#&]/.test(password),
  };

  const isPasswordValid = Object.values(rules).every(Boolean);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!isPasswordValid) return;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;

    createUser(email, password)
      .then(() =>
        updateUser({
          displayName: name,
          photoURL: photo,
        })
      )
      .then(() => {
        form.reset();
        navigate('/');
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
      <div className="card-body">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>

        <form onSubmit={handleRegister}>
          <fieldset className="fieldset space-y-2">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" required />

            <label className="label">Photo URL</label>
            <input type="text" name="photo" className="input" />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" required />

            
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

          
            <div className="text-sm mt-2 space-y-1">
              <p className={rules.length ? "text-green-600" : "text-red-500"}>
                • At least 6 characters
              </p>
              <p className={rules.uppercase ? "text-green-600" : "text-red-500"}>
                • One uppercase letter
              </p>
              <p className={rules.lowercase ? "text-green-600" : "text-red-500"}>
                • One lowercase letter
              </p>
              <p className={rules.number ? "text-green-600" : "text-red-500"}>
                • One number
              </p>
              <p className={rules.special ? "text-green-600" : "text-red-500"}>
                • One special character
              </p>
            </div>

            <button
              type="submit"
              className="btn btn-neutral mt-4"
              disabled={!isPasswordValid}
            >
              Register
            </button>

            <p>
              Already have an account?{" "}
              <Link to="/auth/login" className="text-blue-500 underline">
                Log in
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;

