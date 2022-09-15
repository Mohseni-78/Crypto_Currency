import React from "react";

//                 Style
import styles from "../css/Crypto.module.scss";

const Crypto = ({ data, symbolText }) => {
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
      <td>
        {symbolText === "$"
          ? ` ${symbolText}  ${current_price} `
          : `  ${current_price} ${symbolText} `}
      </td>
      <td
        className={
          market_cap_change_percentage_24h > 0 ? styles.green : styles.red
        }
      >
        {market_cap_change_percentage_24h.toFixed(2)} %
      </td>
      <td>
        {symbolText === "$"
          ? ` ${symbolText}  ${market_cap.toLocaleString()} `
          : `  ${market_cap.toLocaleString()} ${symbolText} `}
      </td>
    </tr>
  );
};

export default Crypto;
