import React from "react";
import styles from "./Header.module.css";
import tbcLogo from "../../images/logo_na.webp";
import enchantMe from "../../images/EnchantMe.png";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles["tbcLogo"]} src={tbcLogo} alt="" />
      <img className={styles["enchantMe"]} src={enchantMe} alt="" />
      <img className={styles["tbcLogo"]} src={tbcLogo} alt="" />
    </div>
  );
};
