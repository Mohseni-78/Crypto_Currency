import React from "react";
import { Route, Routes } from "react-router-dom";
import CryptoDetail from "./components/cryptoDetail/CryptoDetail";

//                     Components
import Cryptos from "./components/cryptos/Cryptos";


//                      Layout
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Layout />}>
          <Route index element={<Cryptos />} />
          <Route path="/:id" element={<CryptoDetail />} />
        </Route> 
      </Routes>
    </>
  );
}

export default App;
