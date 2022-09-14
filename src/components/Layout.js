import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//              Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//                Contexts
import ProductContextProvider from "../contexts/ProductContextProvider";
import CartContextProvider from "../contexts/CartContextProvider";

const Layout = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Header />
        <Outlet />
        <ToastContainer />
        <Footer />
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default Layout;
