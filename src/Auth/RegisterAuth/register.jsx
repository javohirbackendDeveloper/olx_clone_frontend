import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/auth/register.css";

const Index = () => {
  return (
    <>
      <div className="register-wrapper">
        <form className="register">
          <h2 className="register-heading">Sign Up</h2>
          <label htmlFor="username">
            username
            <input
              type="text"
              name="username"
              className="data-input"
            />
          </label>
          <label htmlFor="username">
            Email
            <input
              type="text"
              name="email"
              className="data-input"
            />
          </label>
          <label htmlFor="username">
            password
            <input
              type="text"
              name="password"
              className="data-input"
            />
          </label>
          <button type="submit" className="submit-register">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Index;
