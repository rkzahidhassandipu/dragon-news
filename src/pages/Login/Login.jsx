import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState()
    const navigate = useNavigate();
    const {logIn} = use(AuthContext);
    const location = useLocation()
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password).then(result => {
            const user = result.user;
            if(user){
                navigate(`${location.state? location.state : "/"}`)
            }
        }).catch(error => {
            const errorCode = error.code;
            setError(errorCode);
        })
    }
  return (
      <div className="flex items-center justify-center min-h-screen bg-base-300">
        <div className="bg-white px-10 py-10 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Login your account
          </h2>
          <div className="mb-6 border-t border-gray-200" ></div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email address
              </label>
              <input
              required
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
              required
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            {error && <p className="text-red-500 mb-3">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Don’t Have An Account?{" "}
            <Link to="/auth/register" className="text-red-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
  );
};

export default Login;
