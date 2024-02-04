import React from "react";
import "./checkoutb.css";
import { Link } from "react-router-dom";
import { Charrow } from "../checkout pagea/checkout";
import { Select } from "../checkout pagea/checkout";
import { Noarrow } from "../checkout pagea/checkout";
import Button from "../../Button/Button";
function Checkoutb() {

  return (
    <div className="ch-main">
      <div className="ch-box1">
        <Charrow p={"Shipping"} />
        <Noarrow n={"payment"} />
        <Noarrow n={"Review"} />
      </div>
      <div className="ch-box2">
        <p className="ch-p2">Choose a payment method</p>
        <p className="ch-p3">
          You will not be charged until you confirm order on the next page
        </p>
        <Link to={"/checkb"}>
          <Select p={"Credit Card"} />
        </Link>

        <input
          className="check-f"
          name="Name on Card"
          type="text"
          placeholder="Name on Card"
        />
        <input
          className="check-f"
          name="Card Number"
          type="text"
          placeholder="Card Number"
        />

        <div className="chf-innerbox">
          <input
            className="check-f2"
            name="Security Code"
            type="text"
            placeholder="Security Code"
          />

          <input
            className="check-f2"
            name="Expiration Date"
            type="text"
            placeholder="Expiration Date"
          />
        </div>

<Link to={"/checkc"} className="cb-l">
<Button title={"Confirm and Continue"} btnClass={"ch-btn"} />

</Link>
      </div>
    </div>
  );
}
export default Checkoutb;
