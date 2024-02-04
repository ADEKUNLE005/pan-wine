import React from "react";
import "./Checkoutc.css";
import { Charrow } from "../checkout pagea/checkout";
import { Noarrow } from "../checkout pagea/checkout";
import Button from "../../Button/Button";
import { Link} from "react-router-dom";


function Checkoutc() {
  return (
    <div className="ch-main">
      <div className="ch-box1">
        <Charrow p={"Shipping"} />
        <Charrow p={"payment"} />
        <Noarrow n={"Review"} />
      </div>
      <div className="chc-box2">
        <p className="ch-p2">Please confirm and submit your order</p>
        <p id="ch-p3">
          By clicking submit order, you agree to Terms of Use and Privacy Policy{" "}
        </p>
      </div>
      <div className="chc-box3">
        <div className="str">
          <p className="chc-p4">Payment</p>
          <p className="chc-p5">Edit</p>
        </div>
        <div className="str">
          <p className="chc-p6">**********8657</p>
          <p className="chc-p6">MM/YY</p>
        </div>
      </div>
      <div className="chc-box4">
        <div className="str">
          <p className="chc-p4">Shipping Address</p>
          <p className="chc-p5">Edit</p>
        </div>
        <div className="str">
          <p className="chc-p6">Name</p>
          <p className="chc-p7">Lawrence Kingsley</p>
        </div>
        <div className="str">
          <p className="chc-p6">Country</p>
          <p className="chc-p7">Albania</p>
        </div>
      </div>
      <div className="chc-box5">
        <p className="chc-p4">Order Summary</p>
        <div className="str">
          <p className="chc-p5">Subtotal</p>
          <p className="chc-p5">$4,200</p>
        </div>
        <div className="str">
          <p className="chc-p5">Delivery</p>
          <p className="chc-p5">$200</p>
        </div>
        <div className="str">
          <p className="chc-p4">Grand Total</p>
          <p className="chc-p4" id="chc-l">
            $4,400
          </p>
        </div>
      </div>
      <Link to={"/checkd"} className="cb-l">
        <Button title={"Submit Order"} btnClass={"ch-btn"} />
      </Link>
    </div>
  );
}

export default Checkoutc;
