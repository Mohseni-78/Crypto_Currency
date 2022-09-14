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

const SignUp = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [touch, setTouch] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setErrors(hasError(value, "signUp"));
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
      toastify("success", "ثبت نام شما با موفقیت انجام شد");
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } else {
      toastify("error", "لطفا فرم را با دقت پر کنید");
      setTouch({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
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
              <h2>ثبت نام</h2>
              <form onSubmit={submitHandler}>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    placeholder="نام "
                    value={value.name}
                    name="name"
                    onChange={changeHandler}
                    onFocus={touchHandler}
                    id="name"
                  />
                  <span>{errors.name && touch.name && errors.name}</span>
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="email"
                    placeholder="ایمیل"
                    value={value.email}
                    name="email"
                    onChange={changeHandler}
                    onFocus={touchHandler}
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
                  <input
                    type="text"
                    placeholder="تکرار رمز عبور "
                    value={value.confirmPassword}
                    name="confirmPassword"
                    onChange={changeHandler}
                    onFocus={touchHandler}
                  />
                  <span>
                    {errors.confirmPassword &&
                      touch.confirmPassword &&
                      errors.confirmPassword}
                  </span>
                </div>

                <div className={styles.inputBox}>
                  <input type="submit" value="ثبت نام" />
                </div>

                <p className={styles.forget}>
                  در حال حاضر کاربر سایت هستید؟
                  <Link to="/signIn">کلیک کنید</Link>
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

export default SignUp;
