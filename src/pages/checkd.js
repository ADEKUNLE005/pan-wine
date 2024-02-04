import React, { useState } from "react";
import Modal from "../components/receipt/Modal";
import { Cnav } from "../components/cart pagea/cart Navbar/CartNavbar";
import Checkoutd from "../components/checkoutd/checkoutd";

function Checkd() {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal((prev) => !prev);
  }

  return (
    <div>
      {modal ? <Modal setModal={handleModal} /> : null}
      <Cnav />
      <Checkoutd showModal={setModal} />
    </div>
  );
}

export default Checkd;
