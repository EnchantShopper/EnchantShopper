import React, { useEffect, useState } from "react";
import styles from "./ShoppingList.module.css";
import { AD, GPE, LPS, SPS, VC } from "../../utils/constants.js";
import { Material } from "./Material";
import { IoIosRefresh } from "react-icons/io";

export const ShoppingList = ({ items, clearList }) => {
  const resetListHandler = () => {
    clearList((prev) => {
      return [];
    });
  };
  return (
    <div className={styles["shopping-list__wrapper"]}>
      {items.filter((i) => i.amount > 0).length > 0 && (
        <IoIosRefresh
          size={25}
          className={[styles.reset]}
          onClick={resetListHandler}
        ></IoIosRefresh>
      )}

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
