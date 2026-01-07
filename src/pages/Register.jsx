import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(() => {
        

        
        return updateUser({
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        e.target.reset();
        navigate('/')
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
      <div className="card-body">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>

        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" required />

            <label className="label">Photo URL</label>
            <input type="text" name="photo" className="input" />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" required />

            <button type="submit" className="btn btn-neutral mt-4">
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
