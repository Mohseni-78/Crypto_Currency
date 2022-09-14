import React, { createContext, useState, useEffect } from "react";

//              Services
import { getApi } from "../services/Api";

export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setData(await getApi());
    };
    fetchApi();
  }, []);
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
