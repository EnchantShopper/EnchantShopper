import React from "react";
import styles from "./Item.module.css";

export const Item = ({ itemName, isSelected, select }) => {
  const handleSelectClick = (e) => {
    select(itemName);
  };
  return (
    <div className={styles.item} onClick={handleSelectClick}>
      <p className={`${styles.itemName} ${isSelected && styles.selected}`}>
        {itemName}
      </p>
    </div>
  );
};
