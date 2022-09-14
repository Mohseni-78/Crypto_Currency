import React, { createContext, useEffect, useState } from "react";

//     API
import { getCrypto } from "../services/Api";

// Create Context
export const CryptoContext = createContext();

const CryptoContextProvider = ({ children }) => {
  const [crypto, setCrypto] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setCrypto(await getCrypto());
    };
    fetchApi();
  }, []);
  return (
    <CryptoContext.Provider value={crypto}>{children}</CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
