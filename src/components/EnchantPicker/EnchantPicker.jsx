import React, { useState } from "react";
import { EnchantList } from "../EnchantList/EnchantList";
import { ItemSlots } from "../ItemSlots/ItemSlots";
import styles from "./EnchantPicker.module.css";
import gloves from "../../data/gloves.json";
import cloak from "../../data/cloak";
import boots from "../../data/boots.json";
import chest from "../../data/chest.json";
import bracer from "../../data/bracer.json";
import onehanded from "../../data/1h.json";
import twohanded from "../../data/2h.json";

export const EnchantPicker = ({ addItem }) => {
  const [selectedItemSlot, setSelectedItemSlot] = useState("");
  const enchantData = [
    gloves,
    cloak,
    chest,
    bracer,
    onehanded,
    twohanded,
    boots,
  ];
  return (
    <div className={styles["enchant-picker__wrapper"]}>
      <ItemSlots selected={selectedItemSlot} select={setSelectedItemSlot} />
      <>
        <EnchantList
          addItem={addItem}
          enchants={enchantData.find(
            (e) => e.item_slot.toLowerCase() === selectedItemSlot.toLowerCase()
          )}
          selected={selectedItemSlot}
        />
      </>
    </div>
  );
};
