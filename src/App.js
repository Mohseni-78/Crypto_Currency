import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//                     Components
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import NotFound from "./components/shared/NotFound";

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>

        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
