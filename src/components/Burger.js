import styles from "./Burger.module.css";
import styled from "styled-components";

const Burger = ({ nav, navHandler }) => {
  const divStyleC = {
    top: nav ? "30px" : "18px",
    right: nav ? "20px" : "15px",
  };
  const divStyle1 = {
    margin: nav ? "0" : "4px",
    transform: nav ? "rotate(45deg)" : "rotate(0)",
  };
  const divStyle2 = {
    margin: nav ? "0" : "4px",
    transform: nav ? "translateX(-100%)" : "rotate(0)",
    opacity: nav ? "0" : "1",
  };
  const divStyle3 = {
    margin: nav ? "0" : "4px",
    transform: nav ? "rotate(-45deg)" : "rotate(0)",
  };
  return (
    <>
      <div style={divStyleC} onClick={navHandler} className={styles.container}>
        <div style={divStyle1}></div>
        <div style={divStyle2}></div>
        <div style={divStyle3}></div>
      </div>
    </>
  );
};

export default Burger;
