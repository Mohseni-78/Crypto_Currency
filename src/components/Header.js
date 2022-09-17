import React from "react";

//                 Style
import styles from "../components/css/Header.module.scss";

//    Context
import Carousel from "./Carousel";

const Header = () => {
  return (
    <>
      <header>
        <h1>Crypto Currency</h1>
        <p>Get All The Info Regarding Your Favorite Crypto Currency</p>
        <Carousel />
      </header>
    </>
  );
};

export default Header;
