import React from "react";
import Navbar from "../landing page/navbar/Navbar";
import "./nav.css";
import Shidetails from "../components/shipping page/Shidetails/Shidetails";
function Shipping() {
  return (
    <div>
      <Navbar a={"nav-bn"} />
      <Shidetails />
    </div>
  );
}

export default Shipping;
