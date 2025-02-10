import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/auth/login.css";

const index = () => {
  return (
    <>
      <div className="login-wrapper">
        <h2 className="login-heading">Log in</h2>
        <form action="" className="login-form">
          <label htmlFor="username" className="data-input-wrapper">
            Username
            <input type="text" name="username" className="data-input" />
          </label>
          <label htmlFor="username" className="data-input-wrapper">
            Password
            <input type="text" name="password" className="data-input" />
          </label>
          <button type="submit" className="submit-login">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};


export default index;
