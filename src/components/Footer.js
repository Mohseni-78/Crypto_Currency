import React from 'react';
import styles from "./Footer.module.css"
import instagram from "../assets/svg/instagram.svg"
import twitter from "../assets/svg/twitter.svg"
import facebook from "../assets/svg/facebook.svg"
import telegram from "../assets/svg/telegram.svg"

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logos}>
                    <span><img src={instagram}  alt=""/></span>
                    <span><img src={twitter}  alt=""/></span>
                    <span><img src={facebook}  alt=""/></span>
                    <span><img src={telegram}  alt=""/></span>
                </div>
                <div className={styles.links}>
                    <span>صفحه اصلی </span>
                    <span>درباره ما </span>
                    <span>محصولات </span>
                    <span>ارتباط با ما </span>
                    <span>سرویس ها </span>
                </div>
                <div className={styles.copyRight}>
                    <p>Copyright © <span>Alireza Mohseni</span></p>
                </div>
            </div>
        </>
    );
};

export default Footer;