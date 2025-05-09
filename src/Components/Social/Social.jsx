import React from "react";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <div className="text-4xl mt-10">
      <h1 className="text-3xl text-primary font-bold">Find Us On</h1>
      <div className="mt-6 w-full border border-gray-300 rounded-md">
        <p className="py-5 w-full px-3 flex items-center hover:text-blue-500 duration-700 cursor-pointer">
          <FaFacebook className="text-blue-500" /> <span className="text-xl ml-6">Facebook</span>
        </p>
        <p className="py-5 w-full px-3 flex items-center border-t border-gray-300 hover:text-blue-500 duration-700 cursor-pointer">
          <FaTwitter className="text-blue-500" /> <span className="text-xl ml-6">Twitter</span>
        </p>
        <p className="py-5 w-full px-3 flex items-center border-t border-gray-300 hover:text-blue-500 duration-700 cursor-pointer">
          <FaInstagram className="text-blue-500" /> <span className="text-xl ml-6">Instagram</span>
        </p>
      </div>
    </div>
  );
};

export default Social;
