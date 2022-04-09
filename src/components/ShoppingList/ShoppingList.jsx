import React, { useEffect, useState } from "react";
import styles from "./ShoppingList.module.css";
import { AD, GPE, LPS, SPS, VC } from "../../utils/constants.js";
import { Material } from "./Material";

export const ShoppingList = ({ items }) => {
  return (
    <div className={styles["shopping-list__wrapper"]}>
      <p>SHOPPING LIST</p>
      <div className={styles["horizontal-line"]}></div>
      <div className={styles["material-list"]}>
        {items.filter((i) => i.amount > 0).length > 0 ? (
          items
            .filter((i) => i.amount > 0)
            .map((i) => (
              <Material key={Math.random().toString()} materialData={i} />
            ))
        ) : (
          <p className={styles["empty-list"]}>Shopping list is empty</p>
        )}
      </div>
    </div>
  );
};
