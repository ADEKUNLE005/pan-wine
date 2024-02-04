import React from "react";
import "./Modal.css";
import Button from "../../Button/Button";
function Modal() {
  return (
    <div className="mo-box">
      <div className="mod-main">
        <p className="mo-p1">PanWines</p>
        <p className="mo-p2">Street Address</p>
        <p className="mo-p2">City, Country</p>
        <p className="mo-p2">Email</p>
        <div className="mo-innerb1">
          <p className="mo-p3">Transaction Details</p>
          <div className="mo-pbox">
            <p className="mo-p4">Payment Method</p>
            <p className="mo-p4">Credit Card</p>
          </div>
          <div className="mo-pbox">
            <p className="mo-p4">Name</p>
            <p className="mo-p4">Credit Card</p>
          </div>
          <div className="mo-pbox">
            <p className="mo-p4">Invoice Number</p>
            <p className="mo-p4">Lawrence Kingsley</p>
          </div>
          <div className="mo-pbox">
            <p className="mo-p4">Transaction date</p>
            <p className="mo-p4">8/19/2022</p>
          </div>
          <div className="mo-pbox">
            <p className="mo-p4">Transaction time</p>
            <p className="mo-p4">19:05</p>
          </div>
        </div>
        <div className="mo-innerb2">
          <div className="mo-small">
          <div className="mo-pbox">
            <p className="mo-p5c">Qty</p>
            <p className="mo-p5c">Item(s)</p>
          </div>  
          <div className="mo-pbox">
            <p className="mo-p4b">1</p>
            <p className="mo-p4b">Merlot: Red</p>
          </div>
          <div className="mo-pbox">
            <p className="mo-p4b">2</p>
            <p className="mo-p4b">Pinot Noir</p>
          </div>  
          <div className="mo-pbox">
            <p className="mo-p4b">3</p>
            <p className="mo-p4b">Dolceto</p>
          </div>    
          </div>
          <div className="mo-big">
          <div className="mo-pbox">
            <p className="mo-p5b">Price per unit($)</p>
          </div> 
          <div className="mo-pbox">
            <p className="mo-p4c">$1,200</p>
          </div> 
          <div className="mo-pbox">
            <p className="mo-p4c">$1,200</p>
          </div> 
          <div className="mo-pbox">
            <p className="mo-p4c">$1,200</p>
          </div> 
          <div className="mo-pbox">
            <p className="mo-p6">Subtotal</p>
            <p className="mo-p4c">$7,200</p>
          </div> 
          <div className="mo-pbox">
            <p className="mo-p6">Delivery</p>
            <p className="mo-p4c">$400</p>
          </div> 
          <div className="mo-pbox">
            <p className="mo-p6">Grand Total</p>
            <p className="mo-p4c">$7,600</p>
          </div> 
          </div>
        </div>
        <p className="mo-p6b">Thanks For Your Patronage</p>

        <Button title={"Print Receipt"}  btnClass={"pr-btn"}  />
      </div>
    </div>
  );
}

export default Modal;
