import React, { useState, useContext } from "react";
//                 Style
import styles from "../components/css/Navbar.module.scss";
import { CryptoContext } from "../contexts/CryptoContextProvider";

const Navbar = () => {
  const { setCurrency } = useContext(CryptoContext);

  const changeHandler = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <>
      <nav>
        <h3>Crypto Currency</h3>
        <form>
          <select onChange={changeHandler}>
            <option value="usd">USD</option>
            <option value="eth">ETH</option>
          </select>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
