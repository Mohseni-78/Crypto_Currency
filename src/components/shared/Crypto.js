import React from "react";

//                 Style
import styles from "../css/Crypto.module.scss";

const Crypto = ({ data }) => {
  const {
    image,
    symbol,
    name,
    current_price,
    market_cap_change_percentage_24h,
    market_cap,
  } = data;
  return (
    <tr>
      <td>
        <div className={styles.container}>
          <img src={image} alt="" />
          <div className={styles.cryptoNames}>
            <h3>{symbol.toUpperCase()}</h3>
            <span>{name}</span>
          </div>
        </div>
      </td>
      <td>$ {current_price}</td>
      <td
        className={
          market_cap_change_percentage_24h > 0 ? styles.green : styles.red
        }
      >
        {market_cap_change_percentage_24h.toFixed(2)} %
      </td>
      <td>$ {market_cap}</td>
    </tr>
  );
};

export default Crypto;
