import React from "react";
//                 Style
import styles from "./css/Paginate.module.scss";

const Paginate = ({
  totalposts,
  postsPerPage,
  setCurrentPage,
  currentpage,
}) => {
  let pages = [];
  for (let i = 1; i < Math.ceil(totalposts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <ul>
        {pages.map((page, index) => {
          return (
            <li key={index}>
              <button
                className={page === currentpage ? styles.active : ""}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Paginate;
