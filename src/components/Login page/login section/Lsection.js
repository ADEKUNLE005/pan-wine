import React from "react";
import "./lsection.css";
import { useNavigate } from "react-router-dom";

import Button from "../../../Button/Button";
function Lsection() {
  const navigate = useNavigate();

  return (
    <div className="l-main">
      <div className="l-box1"></div>
      <div className="l-box2">
        <div className="l-innerbox">
          <p className="l-p1">Sign in to PanWines</p>
          <div className="l-formbox">
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
              <label className="l-label">password:</label>
              <input
                className="form-field"
                name="password"
                type="password"
                placeholder="*** ***"
              />
            </div>
            <Button title={"Signin"} btnClass={"s-btn"} />
          </div>
        </div>
        <p className="l-p2"
            onClick={() => {
                navigate("/reset");
              }}
        >Forget Password</p>
        <p className="l-p3">
          Don’t have an account?
          <p
            className="l-p3"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </p>
        </p>
      </div>
    </div>
  );
}

export default Lsection;
