import React from "react";
import { getIconUrl } from "../../utils/URLFunctions";
import styles from "./SummaryItem.module.css";
import { BsFillTrashFill } from "react-icons/bs";

export const SummaryItem = ({ itemData, removeItem }) => {
  const removeItemHandler = (ID) => {
    removeItem((prev) => {
      return prev.filter((i) => ID !== i.id);
    });
  };

  return (
    <div className={styles["summary-item"]}>
      <div className={styles["summary-row-col"]}>
        <p style={{ color: "white" }}>1x</p>
      </div>
      <div className={styles["summary-row-col"]}>
        <p className={styles[itemData.rarity]}>{itemData.enchant}</p>
      </div>
      <div
        className={`${styles["summary-row-col"]} ${styles["summary-icons"]}`}
      >
        {itemData.materials.map((m) => (
          <div className={styles["number-overlay"]}>
            <img src={getIconUrl(m.material_name)} width="35px" />
            <p className={styles.botRight}>{m.amount}</p>
          </div>
        ))}
      </div>
      <div className={styles["summary-row-col"]}>
        <BsFillTrashFill
          className={styles.bin}
          onClick={() => removeItemHandler(itemData.id)}
        ></BsFillTrashFill>
      </div>
    </div>
  );
};
