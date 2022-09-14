import React, { useContext } from "react";

import styles from "./Products.module.css"

//                Shared Components
import Product from "./shared/Product";

//                        Contexts
import { ProductContext } from "../contexts/ProductContextProvider";

const Products = () => {
  const data = useContext(ProductContext);
  return (
    <>
    <div className={styles.container}>
      {data.map((item) => (
        <Product key={item.id} ProductData={item} />
        ))}
    </div>

        </>
  );
};

export default Products;
