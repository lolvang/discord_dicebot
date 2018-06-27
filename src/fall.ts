import { randint} from "./util"
export function Fall(val, loc) {
  if (val >= 20) {
    return [
      `Dödslag ${val+10}`, "Faller", "Tappar", "Inre skada", "Brytrisk 18 arm",
      "Brytrisk 18 ben", "Sår torso", "2 Smärta"
    ];
  } else if (val === 19) {
    return [
      "Dödslag 20", "Faller", "Tappar", "Brytrisk 16 nacke", "Sår huvud",
      "1 Smärta", `${randint(1,6)+randint(1,6)} Tänder utslagna`
    ];
  } else if (val === 18) {
    return [
      "Dödslag 18", "Faller", "Tappar", "Inre skada", "Brytrisk 14 ben",
      "Brytrisk 14 arm", "Brytrisk 14 ryggrad", "Sår torso", "1 Smärta"
    ];
  } else if (val === 17) {
    return [
      "Dödslag 16", "Faller", "Tappar", "Brytrisk 14 arm", "Brytrisk 14 nacke",
      "Sår huvud"
    ];
  } else if (val === 16) {
    return [
      "Dödslag 14", "Faller", "Tappar", "Sår vänster ben", "Sår höger ben",
      "Brytrisk 12 vänster ben", "Brytrisk 12 höger ben"
    ];
  } else if (val === 15) {
    return [
      "Dödslag 13", "Faller", "Tappar", "Sår torso", "Sår huvud", "Brytrisk 12 nacke"
    ];
  } else if (val === 14) {
    return [
      "Dödslag 12", "Faller", "Tappar", "1 Smärta", "Sår ben", "Brytrisk 14 ben"
    ];
  } else if (val === 13) {
    return [
      "Dödslag 11", "Faller", "Tappar", "Omtöcknad", "Brytrisk 14 ben", "Sår huvud",
      `${randint(1,6)} Tänder utslagna`
    ];
  } else if (val === 12) {
    return [
      "Dödslag 10", "Faller", "Tappar", "Omtöcknad", "Brytrisk 14 arm", "Sår torso"
    ];
  } else if (val === 11) {
    return [
      "Dödslag 9", "Faller", "Tappar", "1 Smärta", "Sår arm", "Brytrisk 14 arm"
    ];
  } else if (val === 10) {
    return [
      "Dödslag 8", "Faller", "Tappar", "Brytrisk 10 vänster ben", "Brytrisk 10 höger ben",
      "Brytrisk 10 vänster arm", "Brytrisk 10 höger arm"
    ];
  } else if (val === 9) {
    return [
      "Dödslag 6", "Faller", "Tappar", "Brytrisk 12 ben", "Brytrisk 12 arm", "1 Smärta"
    ];
  } else if (val === 8) {
    return [
      "Faller", "Brytrisk 12 vänster ben", "Brytrisk 12 höger ben", "1 Smärta"
    ];
  } else if (val === 7) {
    return [
      "Faller", "Brytrisk 12 ben"
    ];
  } else if (val === 6) {
    return [
      "Tappar", "Brytrisk 8 vänster arm", "Brytrisk 8 höger arm", "1 Smärta"
    ];
  } else if (val === 5) {
    return [
      "Tappar", "1 Smärta", "Brytrisk 8 arm"
    ];
  } else if (val === 4) {
    return [
      "Faller", "1 Smärta", "Brytrisk 8 ben"
    ];
  } else if (val === 3) {
    return [
      "Faller", "Brytrisk 8 ben"
    ];
  } else if (val === 2) {
    return [
      "Tappar"
    ];
  } else if (val === 1) {
    return [
      "Faller"
    ];
  } else {
    return ["error negativ skada", val, loc];
  }
}