import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./SignUp.module.css";
//                Helper
import hasError from "../helper/hasError";

//              Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//                  Services
import toastify from "../services/toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [touch, setTouch] = useState({
    email: false,
    password: false,
  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setErrors(hasError(value, "signIn"));
  }, [value]);

  const changeHandler = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const touchHandler = (e) => {
    setTouch({
      ...touch,
      [e.target.name]: true,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!!!Object.keys(errors).length) {
      toastify("success", "وارد سایت شدید");
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } else {
      toastify("error", "ایمیل یا رمز شما اشتباه است");
      setTouch({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.all}>
      <section>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.box}>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.container}>
            <div className={styles.form}>
              <h2>ورود</h2>
              <form onSubmit={submitHandler}>
                <div className={styles.inputBox}>
                  <input
                    type="email"
                    placeholder="ایمیل "
                    value={value.email}
                    name="email"
                    onChange={changeHandler}
                    onFocus={touchHandler}
                    id="email"
                  />
                  <span>{errors.email && touch.email && errors.email}</span>
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="password"
                    placeholder="رمز عبور "
                    value={value.password}
                    name="password"
                    onChange={changeHandler}
                    onFocus={touchHandler}
                  />
                  <span>
                    {errors.password && touch.password && errors.password}
                  </span>
                </div>

                <div className={styles.inputBox}>
                  <input type="submit" value="ورود" />
                </div>

                <p className={styles.forget}>
                  رمز عبور خود را فراموش کرده اید؟<a href="1">کلیک کنید</a>
                </p>
                <p className={styles.forget}>
                  کاربر سایت نیستید‌؟<Link to="/signUp">کلیک کنید</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
