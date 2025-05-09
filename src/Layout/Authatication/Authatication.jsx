import React from "react";
import Login from "../../pages/Login/Login";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const Authatication = () => {
  return (
    <div>
      <header className="bg-base-300 pt-8">
        <Navbar className="" />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Authatication;
