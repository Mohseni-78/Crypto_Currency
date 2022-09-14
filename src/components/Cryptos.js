import React, { useContext } from "react";

//                 Style
import styles from "../components/css/Cryptos.module.scss";

//      Components
import Crypto from "./shared/Crypto";

//           Context
import { CryptoContext } from "../contexts/CryptoContextProvider";

const Cryptos = () => {
  const data = useContext(CryptoContext);
  return (
    <main>
      <h2>Crypto Currency Prices By Market Cap</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Search For a Crypto Currency.."
        />
      </form>
      <section>
        <table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <Crypto key={item.id} data={item} />
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Cryptos;
