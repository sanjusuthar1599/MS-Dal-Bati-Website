import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../../public/assets";

const LoginPopup = ({ setshowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setshowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & Privacy policy.</p>
        </div>
        <p>
          {currState === "Sign Up"
            ? "Already have an account? "
            : "Create a new account? "}
          <span
            onClick={() =>
              setCurrState(currState === "Sign Up" ? "Login" : "Sign Up")
            }
          >
            {currState === "Sign Up" ? "Login here" : "Click here"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
