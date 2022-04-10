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
  SRS,
  AQM,
  LNE,
  LBS,
  RO,
} from "./constants";

export const getIconUrl = (s) => {
  switch (s) {
    case AD:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_dustarcane.jpg";
    case LPS:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_shardprismaticlarge.jpg";
    case VC:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg";
    case GPE:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_essencearcanelarge.jpg";
    case SPS:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_shardprismaticsmall.jpg";
    case PA:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_air.jpg";
    case PS:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_shadow.jpg";
    case EoF:
      return "https://wow.zamimg.com/images/wow/icons/large/spell_fire_volcano.jpg";
    case PM:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_mana.jpg";
    case PE:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_earth.jpg";
    case PF:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_fire.jpg";
    case PW:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_water.jpg";
    case FL:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_fellotus.jpg";
    case LE:
      return "https://wow.zamimg.com/images/wow/icons/large/spell_nature_abolishmagic.jpg";
    case LPE:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_essencearcanesmall.jpg";
    case EO:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_ore_eternium.jpg";
    case PL:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_life.jpg";
    case PN:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_elemental_primal_nether.jpg";
    case MMP:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_potion_76.jpg";
    case EoMS:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_potion_147.jpg";
    case MHP:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_potion_54.jpg";
    case PMIGHT:
      return "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningoverload.jpg";
    case SRS:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_shardradientsmall.jpg";
    case AQM:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_misc_gem_crystal_02.jpg";
    case LNE:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_essencenethersmall.jpg";
    case LBS:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_shardbrilliantlarge.jpg";
    case RO:
      return "https://wow.zamimg.com/images/wow/icons/large/inv_misc_gem_pearl_03.jpg";
    default:
      break;
  }
};
