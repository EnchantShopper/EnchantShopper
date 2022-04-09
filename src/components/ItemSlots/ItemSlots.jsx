import React from "react";
import { Item } from "./Item";
import styles from "./ItemSlots.module.css";

export const ItemSlots = ({ selected, select }) => {
  const ITEM_SLOTS = [
    "Cloak",
    "Chest",
    "Bracer",
    "Gloves",
    "Boots",
    "Weapon",
    "2H - Weapon",
  ];
  return (
    <div className={styles["item-slots__wrapper"]}>
      <p>ITEM SLOT</p>
      <div className={styles["horizontal-line"]}></div>
      {ITEM_SLOTS.map((i) => (
        <Item
          key={Math.random().toString()}
          itemName={i}
          select={select}
          isSelected={i === selected}
        />
      ))}
    </div>
  );
};
