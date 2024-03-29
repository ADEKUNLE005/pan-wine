import React from "react";
import "./Sign.css";
import { useNavigate } from "react-router-dom";

import Button from "../../../Button/Button";
function Sign() {
  const navigate = useNavigate();

  return (
    <div className="l-main">
      <div className="l-box1"></div>
      <div className="l-box2">
        <div className="l-innerbox">
          <p className="l-p1">Create Account</p>
          <div className="l-formbox">
            <div className="form-group">
              <label className="l-label">Full Name:</label>
              <input
                className="form-field"
                name="full name"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <label className="l-label">Email:</label>
              <input
                className="form-field"
                name="Email"
                type="Email"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <label className="l-label">Phone:</label>
              <input
                className="form-field"
                name="Phone"
                type="number"
                placeholder="Phone"
              />
            </div>
            <div className="form-group">
              <label className="l-label">password:</label>
              <input
                className="form-field"
                name="password"
                type="password"
                placeholder="*** ***"
              />
            </div>
            <Button title={"Sign up"} btnClass={"s-btn"} />
            <div className="google-box">
              <div className="g-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.803 10.1247C21.9305 10.7942 22 11.4941 22 12.2245C22 17.9376 18.0981 22 12.2047 22C10.8645 22.0004 9.53735 21.742 8.29907 21.2396C7.06079 20.7372 5.93567 20.0006 4.98799 19.072C4.04031 18.1433 3.28865 17.0407 2.77596 15.8273C2.26327 14.6139 1.99959 13.3133 2 12C1.99959 10.6867 2.26327 9.38613 2.77596 8.17269C3.28865 6.95926 4.04031 5.85671 4.98799 4.92804C5.93567 3.99937 7.06079 3.26279 8.29907 2.76039C9.53735 2.25798 10.8645 1.9996 12.2047 2C14.9601 2 17.2625 2.9935 19.029 4.60666L16.1523 7.42564V7.41853C15.0814 6.41894 13.7224 5.90593 12.2047 5.90593C8.83771 5.90593 6.10097 8.69342 6.10097 11.9939C6.10097 15.2934 8.83771 18.087 12.2047 18.087C15.2597 18.087 17.3392 16.3753 17.7663 14.0246H12.2047V10.1247H21.8041H21.803Z"
                    fill="#80295E"
                  />
                </svg>
              </div>
              <p className="s-p1">Sign Up with Google</p>
            </div>
          </div>
        </div>

        <p className="l-p3">
          Already have an account?
          <p
            className="l-p3"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </p>
        </p>
      </div>
    </div>
  );
}

export default Sign;
