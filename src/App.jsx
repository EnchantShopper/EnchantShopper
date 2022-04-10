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
  SRS,
  AQM,
  LNE,
  LBS,
  RO,
} from "./utils/constants";
import { getIconUrl } from "./utils/URLFunctions";
import { Header } from "./components/Header/Header";

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
    let srs = 0;
    let aqm = 0;
    let lne = 0;
    let lbs = 0;
    let ro = 0;
    materialsArray.forEach((a) => {
      a.forEach((m) => {
        switch (m.material_name) {
          case GPE:
            gpe += m.amount;
            break;
          case AD:
            ad += m.amount;
            break;
          case LPS:
            lps += m.amount;
            break;
          case VC:
            vc += m.amount;
            break;
          case SPS:
            sps += m.amount;
            break;
          case PA:
            pa += m.amount;
            break;
          case PS:
            ps += m.amount;
            break;
          case PF:
            pf += m.amount;
            break;
          case PL:
            pl += m.amount;
            break;
          case PW:
            pw += m.amount;
            break;
          case PM:
            pm += m.amount;
            break;
          case FL:
            fl += m.amount;
            break;
          case LE:
            le += m.amount;
            break;
          case LPE:
            lpe += m.amount;
            break;
          case EO:
            eo += m.amount;
            break;
          case PN:
            pn += m.amount;
            break;
          case EoMS:
            eoms += m.amount;
            break;
          case PMIGHT:
            pmight += m.amount;
            break;
          case MHP:
            mhp += m.amount;
            break;
          case MMP:
            mmp += m.amount;
            break;
          case EoF:
            eof += m.amount;
            break;
          case SRS:
            srs += m.amount;
            break;
          case AQM:
            aqm += m.amount;
            break;
          case LNE:
            lne += m.amount;
            break;
          case LBS:
            lbs += m.amount;
            break;
          case RO:
            ro += m.amount;
            break;
          default:
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
      {
        material_name: SRS,
        amount: srs,
        rarity: "rare",
        iconUrl: getIconUrl(SRS),
      },
      {
        material_name: AQM,
        amount: aqm,
        rarity: "uncommon",
        iconUrl: getIconUrl(AQM),
      },
      {
        material_name: LNE,
        amount: lne,
        rarity: "uncommon",
        iconUrl: getIconUrl(LNE),
      },
      {
        material_name: LBS,
        amount: lbs,
        rarity: "rare",
        iconUrl: getIconUrl(LBS),
      },
      {
        material_name: RO,
        amount: ro,
        rarity: "uncommon",
        iconUrl: getIconUrl(RO),
      },
    ];
    setMaterialList(tempArray);
  };
  return (
    <div className={styles.content}>
      <Header />
      <span className={styles.signature}>Made by Bium, Firemaw EU (H)</span>
      <div className={styles["first-row"]}>
        <Card>
          <EnchantPicker addItem={setShoppingList} />
        </Card>
        <Card>
          <ShoppingList items={materialList} clearList={setShoppingList} />
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
