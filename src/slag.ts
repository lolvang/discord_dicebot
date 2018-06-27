import {randint} from "./util"
export function Slag(val, loc){
  if(val >= 20){
    if(loc===1){return [`Dödslag 24`, "1 Smärta", "Inre skada"];}
    else if(loc<5){return [`Dödslag 20`, "1 Smärta", "Inre skada"];}
    else if(loc<9){return [`Tappar`, "Faller", "2 Sår"];}
    else{return ["Tappar", "Faller", "2 Sår"];}
  }
  else if(val === 19){
    if(loc===1){return ["Dödslag 16", "Omtöcknad", "Brytrisk 14 nacke"];}
    else if(loc<5){return ["Dödslag 12", "1 Smärta", "Sår"];}
    else if(loc<9){return ["Tappar", "Brytrisk 16 arm"];}
    else{return ["Faller", "Brytrisk 16 ben"];}
  }
  else if(val === 18){
    if(loc===1){return ["Dödslag 14", "Omtöcknad", "Sår"];}
    else if(loc<5){return ["Dödslag 10", "1 Smärta", "Brytrisk 12 ryggrad"];}
    else if(loc<9){return ["Omtöcknad", "Sår"];}
    else{return ["Omtöcknad", "Sår"];}
  }
  else if(val === 17){
    if(loc===1){return ["Dödslag 12", "Faller", "Brytrisk 12 nacke"];}
    else if(loc<5){return ["Dödslag 8", "Sår"];}
    else if(loc<9){return ["Tappar", "1 Smärta"];}
    else{return ["Faller", "1 Smärta"];}
  }
  else if(val === 16){
    if(loc===1){return ["Dödslag 10", "Omtöcknad", "Sår"];}
    else if(loc<5){return ["Dödslag 6", "Omtöcknad", "1 Smärta"];}
    else if(loc<9){return ["Tappar", "Brytrisk 14 arm"];}
    else{return ["Faller", "Brytrisk 14 ben"];}
  }
  else if(val === 15){
    if(loc===1){return ["Dödslag 8", "Omtöcknad", "Tappar"];}
    else if(loc<5){return ["Faller", "Omtöcknad", "Tappar"];}
    else if(loc<9){return ["Tappar", "Infektion 2/4"];}
    else{return ["Faller", "Infektion 2/4"];}
  }
  else if(val === 14){
    if(loc===1){return ["Dödslag 6", "Omtöcknad", "Tillbakaknuffad"];}
    else if(loc<5){return ["Faller", "1 Smärta"];}
    else if(loc<9){return ["Omtöcknad", "Tillbackaknuffad"];}
    else{return ["Omtöcknad", "Tillbackaknuffad"];}
  }
  else if(val === 13){
    if(loc===1){return ["1 Smärta"];}
    else if(loc<5){return ["Omtöcknad", "Tillbackaknuffad"];}
    else if(loc<9){return ["Brytrisk 12 arm"];}
    else{return ["Brytrisk 12 ben"];}
  }
  else if(val === 12){
    if(loc===1){return ["Blödning 1/2"];}
    else if(loc<5){return ["1 Smärta"];}
    else if(loc<9){return ["Omtöcknad", "Tappar"];}
    else{return ["Omtöcknad", "Faller"];}
  }
  else if(val === 11){
    if(loc===1){return ["Rustningsskada", "Faller"];}
    else if(loc<5){return ["Faller", "Omtöcknad"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
  }
  else if(val === 10){
    if(loc===1){return ["Omtöcknad", `${randint(1,6)} Tänder utslagna`];}
    else if(loc<5){return ["Omtöcknad"];}
    else if(loc<9){return ["Brytrisk 10 arm", "Omtöcknad"];}
    else{return ["Brytrisk 10 ben", "Omtöcknad"];}
  }
  else if(val === 9){
    if(loc===1){return ["Faller"];}
    else if(loc<5){return ["Tappar"];}
    else if(loc<9){return ["Faller", "Omtöcknad"];}
    else{return ["Faller", "Omtöcknad"];}
  }
  else if(val === 8){
    if(loc===1){return ["Tillbakaknuffad", `${randint(1,6)+randint(1,6)} Tänder utslagna`];}
    else if(loc<5){return ["Tillbakaknuffad"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
  }
  else if(val === 7){
    if(loc===1){return ["Omtöcknad"];}
    else if(loc<5){return ["Omtöcknad"];}
    else if(loc<9){return ["Tillbakaknuffad"];}
    else{return ["Tillbakaknuffad"];}
  }
  else if(val === 6){
    if(loc===1){return ["Faller"];}
    else if(loc<5){return ["Faller"];}
    else if(loc<9){return ["Faller"];}
    else{return ["Faller"];}
  }
  else if(val === 5){
    if(loc===1){return ["Omtöcknad", "1 Tand utslagen"];}
    else if(loc<5){return ["Tillbakaknuffad"];}
    else if(loc<9){return ["Omtöcknad"];}
    else{return ["Omtöcknad"];}
  }
  else if(val === 4){
    if(loc===1){return ["Rustningskada"];}
    else if(loc<5){return ["Omtöcknad"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
  }
  else if(val === 3){
    if(loc===1){return ["Omtöcknad"];}
    else if(loc<5){return ["Faller"];}
    else if(loc<9){return ["Omtöcknad"];}
    else{return ["Omtöcknad"];}
  }
  else if(val === 2){
    if(loc===1){return ["Tappar"];}
    else if(loc<5){return ["Omtöcknad"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
  }
  else if(val === 1){
    if(loc===1){return ["Faller"];}
    else if(loc<5){return ["Tillbakaknuffad"];}
    else if(loc<9){return ["Rustningskada"];}
    else{return ["Rustningskada"];}
  }
  else {
    return ["error negativ skada", val, loc];
  }  
}