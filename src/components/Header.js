import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Burger from "./Burger";

import styles from "./Header.module.css";

import picHeader from "../assets/images/pic-header.png";
import cart from "../assets/svg/cart.svg";

// Contexts
import { cartContext } from "../contexts/CartContextProvider";

const Header = () => {
  const [element, setElement] = useState("home");

  const [nav, setNav] = useState(false);

  const { state } = useContext(cartContext);

  useEffect(() => {
    document.getElementById(element).classList.add(styles.active);
  }, [element]);

  const clickHandler = (e) => {
    setElement(e.target.parentElement.id);
  };

  const navHandler = () => {
    setNav(!nav);
  };

  const clickHandlerDetails = (e) => {
    e.preventDefault();
    setElement(e.target.id);
  };
  return (
    <>
      <header>
        <Burger nav={nav} navHandler={navHandler} />
        <nav className={nav ? styles.show : styles.container}>
          <ul className={styles.menu}>
            <li className={element === "home" ? styles.active : ""} id="home">
              <Link to="/products" onClick={clickHandler}>
                صفحه اصلی
              </Link>
            </li>

            <li
              className={element === "product" ? styles.active : ""}
              id="product"
            >
              <Link to="/products" onClick={clickHandler}>
                محصولات
              </Link>
              <ul className={styles.productDetails}>
                <li>
                  <a
                    href="1"
                    onClick={clickHandlerDetails}
                    id="proOne"
                    className={element === "proOne" ? styles.activeDetails : ""}
                  >
                    محصولات اول
                  </a>
                </li>
                <li>
                  <a
                    href="2"
                    onClick={clickHandlerDetails}
                    id="proTwo"
                    className={element === "proTwo" ? styles.activeDetails : ""}
                  >
                    محصولات دوم
                  </a>
                </li>
                <li>
                  <a
                    href="3"
                    onClick={clickHandlerDetails}
                    id="proThree"
                    className={
                      element === "proThree" ? styles.activeDetails : ""
                    }
                  >
                    {" "}
                    محصولات سوم
                  </a>
                </li>
              </ul>
            </li>

            <li
              className={element === "aboutUs" ? styles.active : ""}
              id="aboutUs"
            >
              <Link to="aboutUs" onClick={clickHandler}>
                درباره ما
              </Link>
              <ul className={styles.productDetails}>
                <li>
                  <a
                    href="1"
                    onClick={clickHandlerDetails}
                    id="proOne"
                    className={element === "proOne" ? styles.activeDetails : ""}
                  >
                    محصولات اول
                  </a>
                </li>
                <li>
                  <a
                    href="2"
                    onClick={clickHandlerDetails}
                    id="proTwo"
                    className={element === "proTwo" ? styles.activeDetails : ""}
                  >
                    محصولات دوم
                  </a>
                </li>
                <li>
                  <a
                    href="3"
                    onClick={clickHandlerDetails}
                    id="proThree"
                    className={
                      element === "proThree" ? styles.activeDetails : ""
                    }
                  >
                    {" "}
                    محصولات سوم
                  </a>
                </li>
              </ul>
            </li>

            <li
              className={element === "services" ? styles.active : ""}
              id="services"
            >
              <Link to="/services" onClick={clickHandler}>
                سرویس ها
              </Link>
              <ul className={styles.productDetails}>
                <li>
                  <a
                    href="1"
                    onClick={clickHandlerDetails}
                    id="serOne"
                    className={element === "serOne" ? styles.activeDetails : ""}
                  >
                    سرویس اول
                  </a>
                </li>
                <li>
                  <a
                    href="2"
                    onClick={clickHandlerDetails}
                    id="serTwo"
                    className={element === "serTwo" ? styles.activeDetails : ""}
                  >
                    سرویس دوم
                  </a>
                </li>
                <li>
                  <a
                    href="3"
                    onClick={clickHandlerDetails}
                    id="serThree"
                    className={
                      element === "serThree" ? styles.activeDetails : ""
                    }
                  >
                    {" "}
                    سرویس سوم
                  </a>
                </li>
              </ul>
            </li>

            <li className={styles.signUp}>
              <Link to="/signUp">ثبت نام</Link>
            </li>

            <li>
              <div className={styles.iconContainer}>
                <Link to="/cart">
                  <img alt="" src={cart} />
                </Link>
                <span>{state.itemCounter}</span>
              </div>
            </li>
          </ul>
        </nav>

        <div className={styles.information}>
          <h1>آنلاین شاپ بوتواستارت</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است{" "}
          </p>
        </div>
        <img src={picHeader} alt="pic" className={styles.picHeader} />
      </header>
    </>
  );
};

export default Header;
