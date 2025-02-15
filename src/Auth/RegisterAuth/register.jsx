import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/auth/register.css";

const Index = () => {
  return (
    <>
      <div className="relative min-h-screen flex items-center flex-col justify-center bg-gradient-to-br from-indigo-500 to-pink-500 overflow-hidden">
        <h2 className="register-heading">Sign Up</h2>
        <div class="absolute w-72 h-72 bg-white opacity-10 rounded-full -top-10 -left-10"></div>
        <div class="absolute w-96 h-96 bg-white opacity-10 rounded-full -bottom-20 -right-20"></div>
        <form className="register-form relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <label htmlFor="Username" className="data-input-wrapper text-black">
            <p className="text-black cursor-pointer text-sm"> Username</p>
            <input
              type="text"
              name="Username"
              className="data-input block w-full px-4 py-2 text-gray-700 
           bg-white border border-gray-300 rounded-sm
           focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring 
           transition duration-300 ease-in-out
           shadow-sm hover:shadow-md"
            />
          </label>
          <label htmlFor="Phone number" className="data-input-wrapper  text-black">
            <p className="text-black cursor-pointer text-sm">Phone number</p>
            <input
              type="number"
              name="Phone number"
              className="data-input block w-full px-4 py-2 text-gray-700 
           bg-white border border-gray-300 rounded-sm
           focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring 
           transition duration-300 ease-in-out
           shadow-sm hover:shadow-md"
            />
          </label>
          <label htmlFor="Password" className="data-input-wrapper  text-black">
            <p className="text-black cursor-pointer text-sm"> Password</p>
            <input
              type="text"
              name="Password"
              className="data-input block w-full px-4 py-2 text-gray-700 
           bg-white border border-gray-300 rounded-sm
           focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring 
           transition duration-300 ease-in-out
           shadow-sm hover:shadow-md"
            />
          </label>
          <button
            type="submit"
            className="submit-register  px-6 py-2 text-white font-semibold 
           bg-blue-600 rounded-sm shadow-md 
           hover:bg-blue-700 hover:shadow-lg 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
           transition duration-300 ease-in-out 
           cursor-pointer"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Index;
