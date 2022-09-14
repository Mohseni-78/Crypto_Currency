import React from "react";

//                     Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CryptoContextProvider from "./contexts/CryptoContextProvider";

//                Layout

function App() {
  return (
    <>
      <CryptoContextProvider>
        <Navbar />
        <Header />
      </CryptoContextProvider>
    </>
  );
}

export default App;
