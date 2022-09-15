import React, { createContext, useEffect, useState } from "react";

//     API
import { getCrypto } from "../services/Api";

// Create Context
export const CryptoContext = createContext();

const CryptoContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState("usd");
  const [symbol, setSymbol] = useState("$");

  const [crypto, setCrypto] = useState([]);
  useEffect(() => {
    currency === "usd" ? setSymbol("$") : setSymbol("ETH");
    const fetchApi = async () => {
      setCrypto(await getCrypto(currency));
    };
    fetchApi();
  }, [currency]);
  return (
    <CryptoContext.Provider
      value={{ data: crypto, setCurrency, symbolText: symbol }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
