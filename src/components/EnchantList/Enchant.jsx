import React from "react";
import styles from "./Enchant.module.css";
import { BsPlusSquareFill } from "react-icons/bs";
export const Enchant = ({ enchantData, addItem }) => {
  const addToShoppingListHandler = () => {
    addItem((prev) => {
      return [...prev, { ...enchantData, id: Math.random().toString() }];
    });
  };
  return (
    <div className={styles.enchant}>
      <img
        src={
          enchantData.formula
            ? "https://wow.zamimg.com/images/wow/icons/large/inv_misc_note_01.jpg"
            : "https://wow.zamimg.com/images/wow/icons/large/spell_holy_greaterheal.jpg"
        }
        width="35px"
      />
      <p className={`${styles.enchantName} ${styles[enchantData.rarity]}`}>
        {enchantData.enchant}
      </p>
      <BsPlusSquareFill
        onClick={addToShoppingListHandler}
        className={styles.addBtn}
      >
        +
      </BsPlusSquareFill>
    </div>
  );
};
