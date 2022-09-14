import React from "react";

//                     Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CryptoContextProvider from "./contexts/CryptoContextProvider";
import Cryptos from "./components/Cryptos";

//                Layout

function App() {
  return (
    <>
      <CryptoContextProvider>
        <Navbar />
        <Header />
        <Cryptos/>
      </CryptoContextProvider>
    </>
  );
}

export default App;
