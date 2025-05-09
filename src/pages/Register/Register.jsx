import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {createUser, setUser, updateUser} = use(AuthContext);
    const [nameError, setNameError] = useState("");
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if(name.length < 5){
          setNameError("Name should be more then 5 character");
          return;
        }
        else{
          setNameError("")
        }
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            updateUser({
              displayName: name, photoURL: photo
            }).then(() => {
            setUser({...user, displayName: name, photoURL: photo});
            navigate("/")
            }).catch((error) => {
              console.log(error)
            })
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300">
      <div className="bg-white px-10 py-10 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
        <div className="mb-6 border border-gray-200" />
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            {nameError && <p className='text-red-500 text-xs'>{nameError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="photo">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm">
              Accept <span className="text-gray-800 font-medium">Term & Conditions</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm mt-4">
            Already Have An Account?{" "}
            <Link to="/auth/login" className="text-secondary hover:underline">
              Login
            </Link>
          </p>
      </div>
    </div>
  );
};

export default Register;
