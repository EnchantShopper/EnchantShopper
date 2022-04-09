import {
  AD,
  GPE,
  LPS,
  VC,
  SPS,
  PA,
  PS,
  EoF,
  PM,
  PE,
  PF,
  PW,
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
} from "./constants";

export const getIconUrl = (s) => {
  if (s === AD) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_dustarcane.jpg";
  } else if (s === LPS) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_shardprismaticlarge.jpg";
  } else if (s === VC) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg";
  } else if (s === GPE) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_essencearcanelarge.jpg";
  } else if (s === SPS) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_shardprismaticsmall.jpg";
  } else if (s === PA) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_air.jpg";
  } else if (s === PS) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_shadow.jpg";
  } else if (s === EoF) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_fire_volcano.jpg";
  } else if (s === PM) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_mana.jpg";
  } else if (s === PE) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_earth.jpg";
  } else if (s === PF) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_fire.jpg";
  } else if (s === PW) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_water.jpg";
  } else if (s === FL) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_fellotus.jpg";
  } else if (s === LE) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_nature_abolishmagic.jpg";
  } else if (s === LPE) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_essencearcanesmall.jpg";
  } else if (s === EO) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_ore_eternium.jpg";
  } else if (s === PL) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_life.jpg";
  } else if (s === PN) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_nether.jpg";
  } else if (s === MMP) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_potion_76.jpg";
  } else if (s === MHP) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_potion_54.jpg";
  } else if (s === EoMS) {
    return "https://wow.zamimg.com/images/wow/icons/large/inv_potion_147.jpg";
  } else if (s === PMIGHT) {
    return "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningoverload.jpg";
  }
};
