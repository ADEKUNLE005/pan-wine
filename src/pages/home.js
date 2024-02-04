import React from "react";
import "./nav.css";
import Navbar from "../landing page/navbar/Navbar";
import Banner from "../landing page/banner/Banner";
import Events from "../landing page/events/Events";
import Footer from "../landing page/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar shop={"/shoppinga"} a="nav-btn" />
      <Banner />
      <Events />
      <Footer />
    </div>
  );
}

export default Home;
