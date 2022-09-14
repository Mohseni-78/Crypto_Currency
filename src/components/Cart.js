import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../contexts/CartContextProvider";
import ProCart from "./shared/ProCart";
import styles from "./Cart.module.css";

const Cart = () => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        {state.selectedItem.map((item) => (
          <ProCart key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>

      <div className={styles.action}>
       

        {state.itemCounter > 0 ? (
          <div>
            <button onClick={() => dispatch({ type: "CLEAR" })}>
              خالی کردن سبد خرید
            </button>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              خرید تمامی محصولات
            </button>
          </div>
        ) : (
          ""
        )}

<div className={styles.message}>
          {state.clear && state.itemCounter === 0 && (
            <div>
              <h1>سبد خرید شما خالی است</h1>
              <Link to="/products">میخوای خرید انجام بدی؟</Link>
            </div>
          )}

          {state.checkOut && state.itemCounter === 0 && (
            <div>
              <h1>خرید شما با موفقیت انجام شد!</h1>
              <Link to="/products">میخوای بیشتر بخری ؟</Link>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
