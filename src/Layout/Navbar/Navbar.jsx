import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const {user, LogOut} = use(AuthContext);
  const navLinks = (
    <>
      <NavLink className="mx-2 font-medium" to="/">Home</NavLink>
      <NavLink className="mx-2 font-medium" to="/about">About</NavLink>
      <NavLink className="mx-2 font-medium" to="/career">Career</NavLink>
    </>
  );

  const handleLogOut = () => {
    LogOut().then(() => {
      alert("Your Logged out successfully")
    }).catch(error => {
      console.log(error)
    })
  }
  
  return (
    <div className="w-4/5 mx-auto">
      <div className="navbar text-accent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {navLinks}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <p className="mx-5 cursor-pointer">
            {
              user ? ( <img className="w-7 rounded-full" src={user.photoURL} alt="" />):(<FaUserCircle className="text-4xl cursor-pointer" />)
            }
          </p>
          {
            user ? (
              <button className="btn bg-primary text-white px-10" onClick={handleLogOut}>LogOut</button>
            ) : (
              <Link to="/auth/login" className="btn bg-primary text-white px-10">Login</Link>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
