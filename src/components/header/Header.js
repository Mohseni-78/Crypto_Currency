import React from "react";

//                 Style
// eslint-disable-next-line no-unused-vars
import "./Header.module.scss";

//    Context
import Carousel from "../carousel/Carousel";

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
