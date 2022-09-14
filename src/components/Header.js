import React from "react";
//                 Style
import styles from "../components/css/Header.module.scss";

//    Components
import Slider from "./Slider";

const Header = () => {
  return (
    <>
      <header>
        <h1>Crypto Currency</h1>
        <p>Get All The Info Regarding Your Favorite Crypto Currency</p>
        <Slider />
      </header>
    </>
  );
};

export default Header;
