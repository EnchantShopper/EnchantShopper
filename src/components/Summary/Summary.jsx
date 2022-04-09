import React, { useEffect } from "react";
import styles from "./Summary.module.css";
import { SummaryItem } from "./SummaryItem";

export const Summary = ({ items, removeItem }) => {
  return (
    <div className={styles["summary__wrapper"]}>
      {items.length > 0 && <p style={{ textAlign: "center" }}>SUMMARY</p>}
      {items &&
        items.map((i) => (
          <SummaryItem
            itemData={i}
            removeItem={removeItem}
            key={Math.random().toString()}
          ></SummaryItem>
        ))}
    </div>
  );
};
