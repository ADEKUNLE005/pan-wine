import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

import Button from "../../Button/Button";
function Banner() {
  return (
    <div className="banner-main">
      <div className="banner-box">
        <p className="banner-p1">Tastefulness & Elegance of a Best Wine</p>
        <p className="banner-p2">
          Browse our collection to find that delectable taste you desire
        </p>
        <Link to={"/Result"}>
          <Button title={"Explore Products"} btnClass={"banner-btn"} />
        </Link>
      </div>
    </div>
  );
}

export default Banner;
