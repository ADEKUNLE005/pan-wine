import React from "react";
import { Charrow } from "../checkout pagea/checkout";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import "./checkoutd.css";
function Checkoutd({showModal}) {
  return (
    <div className="ch-main">
      <div className="ch-box1">
        <Charrow p={"Shipping"} />
        <Charrow p={"payment"} />
        <Charrow p={"Review"} />
      </div>
      <div className="chd-bcon">
        <div className="chd-box2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M100 0C126.522 0 151.957 10.5357 170.711 29.2893C189.464 48.043 200 73.4783 200 100C200 126.522 189.464 151.957 170.711 170.711C151.957 189.464 126.522 200 100 200C73.4783 200 48.043 189.464 29.2893 170.711C10.5357 151.957 0 126.522 0 100C0 73.4783 10.5357 48.043 29.2893 29.2893C48.043 10.5357 73.4783 0 100 0ZM87.5429 119.729L65.3286 97.5C64.5322 96.7036 63.5868 96.0719 62.5463 95.6409C61.5057 95.2099 60.3905 94.9881 59.2643 94.9881C58.138 94.9881 57.0228 95.2099 55.9823 95.6409C54.9418 96.0719 53.9964 96.7036 53.2 97.5C51.5917 99.1083 50.6881 101.29 50.6881 103.564C50.6881 105.839 51.5917 108.02 53.2 109.629L81.4857 137.914C82.2798 138.715 83.2245 139.35 84.2654 139.783C85.3062 140.217 86.4225 140.44 87.55 140.44C88.6775 140.44 89.7938 140.217 90.8346 139.783C91.8755 139.35 92.8202 138.715 93.6143 137.914L152.186 79.3286C152.993 78.5355 153.635 77.5905 154.075 76.5481C154.515 75.5056 154.744 74.3864 154.749 73.2549C154.754 72.1235 154.536 71.0022 154.105 69.9557C153.675 68.9092 153.042 67.9583 152.242 67.1577C151.443 66.3572 150.493 65.7229 149.447 65.2914C148.401 64.8599 147.28 64.6398 146.148 64.6437C145.017 64.6476 143.897 64.8755 142.854 65.3143C141.811 65.753 140.865 66.3939 140.071 67.2L87.5429 119.729Z"
              fill="#411530"
            />
          </svg>
        </div>
        <p className="ch-p2">Transaction Successful </p>
        <p className="ch-p7">
          Your Payment has been received and you will get notifications for your
          order’s progress
        </p>
      </div>
      <div className="chd-btnbox">
        <Link to={"/modal"} className="cb-l">
          <Button title={"Print Receipt"} btnClass={"ch-btn"} handleclick={showModal} />
        </Link>
        <Link to={"/home"} className="cb-l">
          <Button title={"Go Back To Home"} btnClass={"ch-btn"} />
        </Link>
      </div>
    </div>
  );
}

export default Checkoutd;
