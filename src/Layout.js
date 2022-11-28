import React from "react";
import { Outlet } from "react-router-dom";

//                     Components
import Navbar from "./components/navbar/Navbar";

//                        Contexts
import CryptoContextProvider from "./contexts/CryptoContextProvider";

const Layout = () => {
  return (
    <CryptoContextProvider>
      <Navbar />
      <Outlet />
    </CryptoContextProvider>
  );
};

export default Layout;
