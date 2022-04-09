import React from "react";
import styles from "./Item.module.css";

export const Item = ({ itemName, isSelected, select }) => {
  const handleSelectClick = (e) => {
    select(e.target.innerHTML);
  };
  return (
    <div className={styles.item}>
      <p
        className={`${styles.itemName} ${isSelected && styles.selected}`}
        onClick={handleSelectClick}
      >
        {itemName}
      </p>
    </div>
  );
};
