import React from "react";
import { Link, useNavigate } from "react-router-dom";

//                 Style
import styles from "../css/Crypto.module.scss";

const Crypto = ({ data, symbolText }) => {
  const navigate=useNavigate();
  const {
    id,
    image,
    symbol,
    name,
    current_price,
    market_cap_change_percentage_24h,
    market_cap,
  } = data;

  // const link = `/${id}`;

  const linkHandler=()=>{
    navigate(id)
  }
  return (

      <tr onClick={linkHandler}>
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
            ? ` ${symbolText}   ${current_price} `
            : `  ${current_price}   ${symbolText} `}
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
            ? ` ${symbolText}   ${market_cap.toLocaleString()} `
            : `  ${market_cap.toLocaleString()}   ${symbolText} `}
        </td>
        
        {/* <td>
        <Link to={link}>Details...</Link>
        </td> */}
      </tr>

  );
};

export default Crypto;
