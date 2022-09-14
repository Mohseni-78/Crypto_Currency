import React from "react";
//                 Style
import styles from "../components/css/Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <nav>
        <h3>Crypto Currency</h3>
        <select>
          <option>USD</option>
          <option>USDT</option>
        </select>
      </nav>
    </>
  );
};

export default Navbar;
