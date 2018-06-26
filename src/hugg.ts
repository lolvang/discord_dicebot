import {randint} from "./util"
export function Hugg(val, loc){
  if(val >= 20){
    if(loc===1){return [`Dödslag ${val+10}`, "1 Smärta", "Infektion 5/34", "Inre skada"];}
    else if(loc<5){return [`Dödslag ${val+10}`, "Sår", "Infektion 5/26", "Inre skada"];}
    else if(loc<9){return [`Dödslag 12`, "Tappar", "Sår", "Amputationsrisk 14 armbåge"];}
    else{return [`Dödslag 12`, "Faller", "Sår", "Amputationsrisk 14 knä"];}
  }
  else if(val === 19){
    if(loc===1){return ["Dödslag 26", "1 Smärta", "Infektion 3/22", "Öga förstört"];}
    else if(loc<5){return ["Dödslag 26", "1 Smärta", "Blödning 3/30"];}
    else if(loc<9){return ["Dödslag 10", "Sår", "Blödning 1/20"];}
    else{return ["Dödslag 10", "Sår", "Blödning 1/20"];}
  }
  else if(val === 18){
    if(loc===1){return ["Dödslag 24", "1 Smärta", "Inre skada"];}
    else if(loc<5){return ["Dödslag 24", "Faller", "Sår", "Infektion 3/20"];}
    else if(loc<9){return ["Dödslag 8", "1 Smärta", "Tappar", "Amputationsrisk 12 axel"];}
    else{return ["Dödslag 8", "1 Smärta", "Faller","Amputationsrisk 12 höft"];}
  }
  else if(val === 17){
    if(loc===1){return ["Dödslag 22", "1 Smärta", "Sår"];}
    else if(loc<5){return ["Dödslag 22", "1 Smärta", "Blödning 2/24"];}
    else if(loc<9){return ["Amputationsrisk 12 överarm", "Infektion 2/10"];}
    else{return ["Amputationsrisk 12 lår", "Infektion 2/10"];}
  }
  else if(val === 16){
    if(loc===1){return ["Dödslag 20", "Sår", "Amputationsrisk 14 nacke"];}
    else if(loc<5){return ["Dödslag 20", "1 Smärta", "Brytrisk 12 ryggrad"];}
    else if(loc<9){return ["Amputationsrisk 12 armbåge", "1 Smärta"];}
    else{return ["Amputationsrisk 12 knä", "1 Smärta"];}
  }
  else if(val === 15){
    if(loc===1){return ["Dödslag 18", "1 Smärta", "Tappar", "Öga förstört"];}
    else if(loc<5){return ["Dödslag 18", "Sår"];}
    else if(loc<9){return ["Tappar", "Sår"];}
    else{return ["Faller", "Sår"];}
  }
  else if(val === 14){
    if(loc===1){return ["Dödslag 16", "Blödning 2/20"];}
    else if(loc<5){return ["Dödslag 16", "1 Smärta", "Inre skada"];}
    else if(loc<9){return ["Amputationsrisk 12 underarm"];}
    else{return ["Amputationsrisk 12 vad"];}
  }
  else if(val === 13){
    if(loc===1){return ["Dödslag 15", "Tappar", "Amputationsrisk 12 nacke"];}
    else if(loc<5){return ["Dödslag 14", "Tillbakaknuffad", "Infektionsrisk 2/12"];}
    else if(loc<9){return ["Blödning 1/10"];}
    else{return ["Blödning 1/10"];}
  }
  else if(val === 12){
    if(loc===1){return ["Dödslag 14", "Sår", `${randint(1,6)+randint(1,6)} Tänder utslagna`];}
    else if(loc<5){return ["Dödslag 12", "Faller", "Omtöcknad"];}
    else if(loc<9){return ["Tappar", "Sår"];}
    else{return ["Faller", "Sår"];}
  }
  else if(val === 11){
    if(loc===1){return ["Dödslag 13", "Faller", "-1 Reaktion"];}
    else if(loc<5){return ["Dödslag 11", "Blödning 1/16"];}
    else if(loc<9){return ["Amputationsrisk 12 hand"];}
    else{return ["Amputationsrisk 12 fot"];}
  }
  else if(val === 10){
    if(loc===1){return ["Dödslag 12", "Rustningskada", "Tillbakaknuffad"];}
    else if(loc<5){return ["Dödslag 10", "Sår"];}
    else if(loc<9){return ["Tappar", "Sår"];}
    else{return ["Faller", "Sår"];}
  }
  else if(val === 9){
    if(loc===1){return ["Dödslag 11", "Blödning 1/10"];}
    else if(loc<5){return ["Dödslag 9", "Omtöcknad"];}
    else if(loc<9){return ["Blödning 1/6"];}
    else{return ["Blödning 1/6"];}
  }
  else if(val === 8){
    if(loc===1){return ["Dödslag 10", "Omtöcknad"];}
    else if(loc<5){return ["Dödslag 8", "Tillbakaknuffad"];}
    else if(loc<9){return ["Sår"];}
    else{return ["Sår"];}
  }
  else if(val === 7){
    if(loc===1){return ["Dödslag 8", "1 Smärta"];}
    else if(loc<5){return ["Dödslag 8", "Blödning 1/10"];}
    else if(loc<9){return ["Tappar", "Brytrisk:10 arm"];}
    else{return ["Faller", "Brytrisk 10 arm"];}
  }
  else if(val === 6){
    if(loc===1){return ["Dödslag 6","Tillbakaknuffad", `${randint(1,6)} Tänder utslagna`];}
    else if(loc<5){return ["Dödslag 4", "1 Smärta"];}
    else if(loc<9){return ["1 Smärta"];}
    else{return ["1 Smärta"];}
  }
  else if(val === 5){
    if(loc===1){return ["Faller"];}
    else if(loc<5){return ["Tappar"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
  }
  else if(val === 4){
    if(loc===1){return ["Tappar"];}
    else if(loc<5){return ["Omtöcknad"];}
    else if(loc<9){return ["1 Smärta"];}
    else{return ["1 Smärta"];}
  }
  else if(val === 3){
    if(loc===1){return ["Tillbakaknuffad"];}
    else if(loc<5){return ["Tillbakaknuffad"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
  }
  else if(val === 2){
    if(loc===1){return ["Infektion 2/4"];}
    else if(loc<5){return ["Infektion 2/4"];}
    else if(loc<9){return ["1 Smärta"];}
    else{return ["1 Smärta"];}
  }
  else if(val === 1){
    if(loc===1){return ["Rustningskada"];}
    else if(loc<5){return ["Rustningskada"];}
    else if(loc<9){return ["Rustningskada"];}
    else{return ["Rustningskada"];}
  }
  else {
    return ["error negativ skada", val, loc];
  }  
}