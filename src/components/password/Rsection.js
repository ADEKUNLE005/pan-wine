import React from "react";
import "./Rsection.css";
import { useNavigate } from "react-router-dom";

import Button from "../../Button/Button";
function Rsection() {
  const navigate = useNavigate();

  return (
    <div className="l-main">
      <div className="l-box1"></div>
      <div className="l-box2">
        <div className="l-innerbox">
          <p className="l-p1">Reset Password</p>
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
              <label className="l-label">phone:</label>
              <input
                className="form-field"
                name="phone"
                type="number"
                placeholder="phone"
              />
            </div>
            <Button title={"Submit"} btnClass={"s-btn"} />
          </div>
        </div>
        <p
          className="l-p2"
          onClick={() => {
            navigate("/reset");
          }}
        >
          Forget Password
        </p>
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

export default Rsection;
