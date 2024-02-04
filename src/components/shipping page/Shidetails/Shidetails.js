import React from "react";
import "./Shidetails.css";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
function Shidetails() {
  return (
    <div className="shi-main">
      <div className="shi-box1">
        <Shiline p={"SHIPPING"} />
        <Shiline p={"REVIEW"} />
        <Shiline p={"PAYMENT"} />
      </div>
      <div className="shi-box2">
        <div className="l-innerbox">
          <p className="l-p1">SHIPPING DETAILS</p>
          <div className="sf-box">
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
              <label className="l-label">Full Name:</label>
              <input
                className="form-field"
                name="Phone"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div className="form-group">
              <label className="l-label">Full Name:</label>
              <input
                className="form-field"
                name="Address"
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <label className="l-label">Full Name:</label>
              <input
                className="form-field"
                name="Country"
                type="text"
                placeholder="Country"
              />
            </div>
          </div>
        </div>
        <Link to={"/check"}>
          <Button title={"Confirm and Cotinue"} btnClass={"shi-btn"} />
        </Link>
      </div>
    </div>
  );
}

export default Shidetails;

export function Shiline({ p }) {
  return (
    <div className="shi-box1">
      <div className="shi-c"></div>
      <p className="shi-p1">{p}</p>
      <div className="shi-l"></div>
    </div>
  );
}
