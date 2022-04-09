import React, { useEffect, useState } from "react";
import { Enchant } from "./Enchant";
import styles from "./EnchantList.module.css";

export const EnchantList = ({ enchants, selected, addItem }) => {
  return (
    <div className={styles["enchant-list__wrapper"]}>
      <p>ENCHANT</p>
      <div className={styles["horizontal-line"]}></div>

      {enchants ? (
        enchants.enchants.map((e) => (
          <Enchant
            key={Math.random().toString()}
            enchantData={e}
            addItem={addItem}
          />
        ))
      ) : (
        <p className={styles["empty-list"]}>Select an item slot</p>
      )}
    </div>
  );
};
