import React, { useContext, useState } from "react";

//                 Style
import styles from "../components/css/Cryptos.module.scss";

//      Components
import Crypto from "./shared/Crypto";

//           Context
import { CryptoContext } from "../contexts/CryptoContextProvider";
import Paginate from "./Paginate";

const Cryptos = () => {
  const data = useContext(CryptoContext);

  const [currentpage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const lastPostIndex = currentpage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const filterCoin = data.filter((item) =>
    item.name.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <main>
      <h2>Crypto Currency Prices By Market Cap</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Search For a Crypto Currency By Name.."
          value={search}
          onChange={searchHandler}
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
            {search
              ? filterCoin.map((item) => <Crypto key={item.id} data={item} />)
              : currentPosts.map((item) => (
                  <Crypto key={item.id} data={item} />
                ))}
          </tbody>
        </table>
      </section>
      {!search && (
        <Paginate
          totalposts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentpage={currentpage}
        />
      )}
    </main>
  );
};

export default Cryptos;
