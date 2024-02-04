import React from "react";
import Navbar from "../landing page/navbar/Navbar";
import Footer from "../landing page/footer/Footer";
import Search from "../components/SearchResult page/Search";

function Result() {
  return (
    <div>
      <Navbar shop={"/shoppingb"} />
      <Search />

      <Footer />
    </div>
  );
}

export default Result;
