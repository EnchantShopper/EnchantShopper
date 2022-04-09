import React from "react";
import styles from "./Material.module.css";

export const Material = ({ materialData }) => {
  return (
    <div className={`${styles.material} `}>
      <div className={styles["material-row-amount"]}>
        <p className={styles.amount}>{materialData.amount} x</p>
      </div>
      <div className={styles["material-row-icon"]}>
        <img
          src={materialData.iconUrl}
          alt={materialData.material_name}
          width="35px"
        />
      </div>
      <div className={styles["material-row-text"]}>
        <p className={styles[materialData.rarity]}>
          {materialData.material_name}
        </p>
      </div>
    </div>
  );
};
