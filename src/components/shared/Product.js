import React, { useContext } from "react";
import { cartContext } from "../../contexts/CartContextProvider";
import styles from "./Product.module.css";
import { isInCart , quantityCount, shorten} from "../../helper/functions";
import { Link } from "react-router-dom";
import arrow from "../../assets/svg/arrow.svg"
import trash from "../../assets/svg/trash.svg"

const Product = ({ ProductData }) => {
  const {state,dispatch} = useContext(cartContext);
  const send=`/products/${ProductData.id}`;
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img alt="" src={ProductData.image} />
        <h3>{shorten(ProductData.title)}</h3>
        <h4> {ProductData.price} $</h4>
        <Link to={send}>جزئیات محصول</Link>

        <div className={styles.btnGroups}>
        {
          isInCart(state,ProductData.id) 
          ?
          <button className={styles.increase}  onClick={() =>dispatch({ type: "INCREASE", payload: ProductData })}><img src={arrow} alt=""/></button>
          :
          <button className={styles.addBtn}  onClick={() =>dispatch({ type: "ADD_ITEM", payload: ProductData })}>اضافه کردن به سبد خرید</button>
        }
        {quantityCount(state,ProductData.id) > 0 &&  <span className={styles.count}>{quantityCount(state,ProductData.id)}</span>}
          {quantityCount(state,ProductData.id) === 1 && <button className={styles.removeBtn}  onClick={() =>dispatch({ type: "REMOVE_ITEM", payload: ProductData })}><img src={trash} alt="" /></button>}
          { quantityCount(state,ProductData.id) > 1 && <button className={styles.decrease}  onClick={() =>dispatch({ type: "DECREASE", payload: ProductData })}><img src={arrow} alt=""/></button>}
        
        </div>

        
      

       
      </div>
    </div>
  );
};


export default Product;
