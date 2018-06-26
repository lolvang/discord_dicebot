import {randint} from "./util"
export function Kross(val, loc){
  if(val >= 20){
    if(loc===1){return [`Dödslag ${val+10}`, "Sår", "Infektion 5/22", "Inre skada"];}
    else if(loc<5){return [`Dödslag ${val+10}`, "Sår", "Infektion 5/22", "Inre skada"];}
    else if(loc<9){return [`Dödslag 10`, "Tappar", "2 Smärta", "Brytrisk 16 arm"];}
    else{return [`Dödslag 10`, "Faller", "2 Smärta", "Brytrisk 16 ben"];}
  }
  else if(val === 19){
    if(loc===1){return ["Dödslag 26", "Tappar", "Faller", "2 Smärta", `${randint(1,6)+randint(1,6)} Tänder utslagna`];}
    else if(loc<5){return ["Dödslag 26", "1 Smärta", "Faller", "Blödning 1/24"];}
    else if(loc<9){return ["Dödslag 8", "Blödning 1/16"];}
    else{return ["Dödslag 8", "Blödning 1/16"];}
  }
  else if(val === 18){
    if(loc===1){return ["Dödslag 24", "2 Smärta", "Inre skada"];}
    else if(loc<5){return ["Dödslag 24", "Omtöcknad", "Inre skada"];}
    else if(loc<9){return ["Dödslag 6", "2 Smärta"];}
    else{return ["Dödslag 6", "2 Smärta"];}
  }
  else if(val === 17){
    if(loc===1){return ["Dödslag 22", "Brytrisk 14 nacke", "Faller"];}
    else if(loc<5){return ["Dödslag 22", "2 Smärta", "Omtöcknad"];}
    else if(loc<9){return ["Tappar", "Brytrisk 14 arm"];}
    else{return ["Faller", "Brytrisk 14 ben"];}
  }
  else if(val === 16){
    if(loc===1){return ["Dödslag 20", "3 Smärta"];}
    else if(loc<5){return ["Dödslag 20", "1 Smärta", "Brytrisk 12 ryggrad"];}
    else if(loc<9){return ["1 Smärta", "Sår"];}
    else{return ["1 Smärta", "Sår"];}
  }
  else if(val === 15){
    if(loc===1){return ["Dödslag 18", "Brytrisk 12 nacke", "Omtöcknad"];}
    else if(loc<5){return ["Dödslag 18", "Sår"];}
    else if(loc<9){return ["Tappar", "Sår", "Infektion 2/4"];}
    else{return ["Faller", "Sår", "Infektion 2/4"];}
  }
  else if(val === 14){
    if(loc===1){return ["Dödslag 16", "Omtöcknad", "Faller"];}
    else if(loc<5){return ["Dödslag 16", "1 Smärta", "Tillbakaknuffad"];}
    else if(loc<9){return ["Tappar", "Brytrisk 12 arm"];}
    else{return ["Faller", "Brytrisk 12 ben"];}
  }
  else if(val === 13){
    if(loc===1){return ["Dödslag 14", `${randint(1,6)+randint(1,6)} Tänder utslagna`, "Sår"];}
    else if(loc<5){return ["Dödslag 14", "Brytrisk 12 ryggrad"];}
    else if(loc<9){return ["Brytrisk 12 arm"];}
    else{return ["Brytrisk 12 ben"];}
  }
  else if(val === 12){
    if(loc===1){return ["Dödslag 12", "Omtöcknad", "Tillbakakuffad"];}
    else if(loc<5){return ["Dödslag 12", "1 Smärta", "Omtöcknad"];}
    else if(loc<9){return ["Tappar", "Sår"];}
    else{return ["Faller", "Sår"];}
  }
  else if(val === 11){
    if(loc===1){return ["Dödslag 10", "1 Smärta", `${randint(1,6)} Tänder utslagna`];}
    else if(loc<5){return ["Dödslag 10", "Faller"];}
    else if(loc<9){return ["Tappar", "Brytrisk 10 arm"];}
    else{return ["Faller", "Brytrisk 10 ben"];}
  }
  else if(val === 10){
    if(loc===1){return ["Dödslag 8", "Rustningskada", "Omtöcknad", "Tillbakaknuffad"];}
    else if(loc<5){return ["Dödslag 8", "1 Smärta", "Omtöcknad"];}
    else if(loc<9){return ["Tappar", "Brytrisk 10 arm"];}
    else{return ["Faller", "Brytrisk 10 ben"];}
  }
  else if(val === 9){
    if(loc===1){return ["Dödslag 7", "Tappar", "Omtöcknad"];}
    else if(loc<5){return ["Dödslag 7", "Blödning 1/6"];}
    else if(loc<9){return ["1 Smärta"];}
    else{return ["1 Smärta"];}
  }
  else if(val === 8){
    if(loc===1){return ["Dödslag 6", "1 Smärta"];}
    else if(loc<5){return ["Dödslag 6", "Tillbakaknuffad"];}
    else if(loc<9){return ["Sår"];}
    else{return ["Sår"];}
  }
  else if(val === 7){
    if(loc===1){return ["Dödslag 5", "Omtöcknad", `${randint(1,6)} Tänder utslagna`];}
    else if(loc<5){return ["Dödslag 5", "Faller"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
  }
  else if(val === 6){
    if(loc===1){return ["Dödslag 4", "Faller"];}
    else if(loc<5){return ["Dödslag 4", "Tillbakaknuffad"];}
    else if(loc<9){return ["1 Smärta"];}
    else{return ["1 Smärta"];}
  }
  else if(val === 5){
    if(loc===1){return ["1 Smärta"];}
    else if(loc<5){return ["1 Smärta"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
  }
  else if(val === 4){
    if(loc===1){return ["Tappar"];}
    else if(loc<5){return ["Omtöcknad"];}
    else if(loc<9){return ["Omtöcknad"];}
    else{return ["Omtöcknad"];}
  }
  else if(val === 3){
    if(loc===1){return ["Tillbakaknuffad"];}
    else if(loc<5){return ["Tappar"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
  }
  else if(val === 2){
    if(loc===1){return ["Rustningskada"];}
    else if(loc<5){return ["Tillbakaknuffad"];}
    else if(loc<9){return ["Rustningskada"];}
    else{return ["Rustningskada"];}
  }
  else if(val === 1){
    if(loc===1){return ["Omtöcknad"];}
    else if(loc<5){return ["Omtöcknad"];}
    else if(loc<9){return ["Omtöcknad"];}
    else{return ["Omtöcknad"];}
  }
  else {
    return ["error negativ skada", val, loc];
  }  
}