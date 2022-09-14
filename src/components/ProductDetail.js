import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../services/Api";
import loading from "../assets/images/loading.gif"

import styles from "./ProductDetail.module.css";

// import { ProductContext } from "../contexts/ProductContextProvider";

const ProductDetail = () => {
  //   const products = useContext(ProductContext);
  const param = useParams();
  const id = param.id;
  const [proItem, setProItem] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      setProItem(await getApi(id));
    };
    fetchApi();
  }, [id]);

  //   const proItem= products[param.id - 1];

  return (
    <>
      {proItem ? (
        <div className={styles.container}>
          <img src={proItem.image} id="product-image" alt="" />
          <h1>{proItem.title}</h1>
          <span>{proItem.price} $</span>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      ) : (
        <div className={styles.loading}><img src={loading} alt=""/></div>
      )}
    </>
  );
};

export default ProductDetail;
