import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { EnchantPicker } from "./components/EnchantPicker/EnchantPicker";
import { Card } from "./components/Card/Card";
import { ShoppingList } from "./components/ShoppingList/ShoppingList";
import { Summary } from "./components/Summary/Summary";
import {
  AD,
  GPE,
  LPS,
  SPS,
  VC,
  PA,
  PS,
  EoF,
  PM,
  PE,
  PW,
  PF,
  FL,
  LE,
  LPE,
  EO,
  PL,
  PN,
  MMP,
  MHP,
  EoMS,
  PMIGHT,
} from "./utils/constants";
import { getIconUrl } from "./utils/URLFunctions";
import { Header } from "./components/Header/Header";
import tbcLogo from "./images/logo_na.webp";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [materialList, setMaterialList] = useState([]);

  useEffect(() => {
    let materialsArray = shoppingList.map((m) => m.materials);
    // shoppingList.forEach((m) => materialsArray.push(m.materials));
    parseEnchantValues(materialsArray);
  }, [shoppingList]);

  //TOOD: refactor, this is so so so so bad
  const parseEnchantValues = (materialsArray) => {
    let gpe = 0;
    let ad = 0;
    let lps = 0;
    let sps = 0;
    let vc = 0;
    let pa = 0;
    let ps = 0;
    let eof = 0;
    let pm = 0;
    let pe = 0;
    let pw = 0;
    let pf = 0;
    let fl = 0;
    let le = 0;
    let lpe = 0;
    let eo = 0;
    let pl = 0;
    let pn = 0;
    let mmp = 0;
    let mhp = 0;
    let eoms = 0;
    let pmight = 0;
    materialsArray.forEach((a) => {
      a.forEach((m) => {
        if (m.material_name === GPE) {
          gpe += m.amount;
        } else if (m.material_name === AD) {
          ad += m.amount;
        } else if (m.material_name === SPS) {
          sps += m.amount;
        } else if (m.material_name === VC) {
          vc += m.amount;
        } else if (m.material_name === LPS) {
          lps += m.amount;
        } else if (m.material_name === PA) {
          pa += m.amount;
        } else if (m.material_name === PS) {
          ps += m.amount;
        } else if (m.material_name === EoF) {
          eof += m.amount;
        } else if (m.material_name === PM) {
          pm += m.amount;
        } else if (m.material_name === PE) {
          pe += m.amount;
        } else if (m.material_name === PW) {
          pw += m.amount;
        } else if (m.material_name === PF) {
          pf += m.amount;
        } else if (m.material_name === FL) {
          fl += m.amount;
        } else if (m.material_name === LE) {
          le += m.amount;
        } else if (m.material_name === LPE) {
          lpe += m.amount;
        } else if (m.material_name === EO) {
          eo += m.amount;
        } else if (m.material_name === PL) {
          pl += m.amount;
        } else if (m.material_name === PN) {
          pn += m.amount;
        } else if (m.material_name === MMP) {
          mmp += m.amount;
        } else if (m.material_name === MHP) {
          mhp += m.amount;
        } else if (m.material_name === EoMS) {
          eoms += m.amount;
        } else if (m.material_name === PMIGHT) {
          pmight += m.amount;
        }
      });
    });
    let tempArray = [
      {
        material_name: GPE,
        amount: gpe,
        rarity: "uncommon",
        iconUrl: getIconUrl(GPE),
      },
      {
        material_name: AD,
        amount: ad,
        rarity: "common",
        iconUrl: getIconUrl(AD),
      },
      {
        material_name: SPS,
        amount: sps,
        rarity: "rare",
        iconUrl: getIconUrl(SPS),
      },
      {
        material_name: VC,
        amount: vc,
        rarity: "epic",
        iconUrl: getIconUrl(VC),
      },
      {
        material_name: LPS,
        amount: lps,
        rarity: "rare",
        iconUrl: getIconUrl(LPS),
      },
      {
        material_name: PA,
        amount: pa,
        rarity: "uncommon",
        iconUrl: getIconUrl(PA),
      },
      {
        material_name: PS,
        amount: ps,
        rarity: "uncommon",
        iconUrl: getIconUrl(PS),
      },
      {
        material_name: EoF,
        amount: eof,
        rarity: "uncommon",
        iconUrl: getIconUrl(EoF),
      },
      {
        material_name: PM,
        amount: pm,
        rarity: "uncommon",
        iconUrl: getIconUrl(PM),
      },
      {
        material_name: PE,
        amount: pe,
        rarity: "uncommon",
        iconUrl: getIconUrl(PE),
      },
      {
        material_name: PF,
        amount: pf,
        rarity: "uncommon",
        iconUrl: getIconUrl(PF),
      },
      {
        material_name: PW,
        amount: pw,
        rarity: "uncommon",
        iconUrl: getIconUrl(PW),
      },
      {
        material_name: FL,
        amount: fl,
        rarity: "uncommon",
        iconUrl: getIconUrl(FL),
      },
      {
        material_name: LE,
        amount: le,
        rarity: "uncommon",
        iconUrl: getIconUrl(LE),
      },
      {
        material_name: LPE,
        amount: lpe,
        rarity: "uncommon",
        iconUrl: getIconUrl(LPE),
      },
      {
        material_name: EO,
        amount: eo,
        rarity: "uncommon",
        iconUrl: getIconUrl(EO),
      },
      {
        material_name: PL,
        amount: pl,
        rarity: "uncommon",
        iconUrl: getIconUrl(PL),
      },
      {
        material_name: PN,
        amount: pn,
        rarity: "rare",
        iconUrl: getIconUrl(PN),
      },
      {
        material_name: MMP,
        amount: mmp,
        rarity: "common",
        iconUrl: getIconUrl(MMP),
      },
      {
        material_name: MHP,
        amount: mhp,
        rarity: "uncommon",
        iconUrl: getIconUrl(MHP),
      },
      {
        material_name: EoMS,
        amount: eoms,
        rarity: "common",
        iconUrl: getIconUrl(EoMS),
      },
      {
        material_name: PMIGHT,
        amount: pmight,
        rarity: "rare",
        iconUrl: getIconUrl(PMIGHT),
      },
    ];
    setMaterialList(tempArray);
  };
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles["first-row"]}>
        <Card>
          <EnchantPicker addItem={setShoppingList} />
        </Card>
        <Card>
          <ShoppingList items={materialList} />
        </Card>
      </div>
      <div className={styles["second-row"]}>
        {shoppingList.length > 0 && (
          <Card>
            <Summary items={shoppingList} removeItem={setShoppingList} />
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
