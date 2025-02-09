import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/auth/register.css";

const Index = () => {
  return (
    <>
      <div className="register-wrapper">
        <h2 className="register-heading">Sign Up</h2>
        <form className="register">
          <label htmlFor="username"  className="data-input-wrapper">
            username
            <input type="text" name="username" className="data-input" />
          </label>
          <label htmlFor="username" className="data-input-wrapper">
            Email
            <input type="text" name="email" className="data-input" />
          </label>
          <label htmlFor="username" className="data-input-wrapper">
            password
            <input type="text" name="password" className="data-input" />
          </label>
          <button type="submit" className="submit-register">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Index;
