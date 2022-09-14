import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";
 const getApi =async (url="") => {
  const data = await axios.get(`${BASE_URL}/products/${url}`);
    return data.data;
};

export {getApi,BASE_URL};
