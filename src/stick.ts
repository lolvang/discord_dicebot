import {randint} from "./util"
export function Stick(val, loc){
  if(val >= 20){
    if(loc===1){return [`Dödslag ${val+10}`, "1 Smärta", "Blödning 2/30"];}
    else if(loc<5){return [`Dödslag ${val+10}`, "Blödning 3/36", "Inre skada"];}
    else if(loc<9){return [`Dödslag 10`, "Tappar", "Sår", "Infektion 3/10"];}
    else{return ["Dödslag 10", "Faller", "Sår", "Infektion 3/10"];}
  }
  else if(val === 19){
    if(loc===1){return ["Dödslag 26", "Sår", "Inre skada", `${randint(1,6)+randint(1,6)} Tänder utslagna`];}
    else if(loc<5){return ["Dödslag 26", "Infektion 5/22", "Inre skada"];}
    else if(loc<9){return ["Dödslag 8", "Blödning 2/10", "Sår"];}
    else{return ["Dödslag 8", "Blödning 2/10", "Sår"];}
  }
  else if(val === 18){
    if(loc===1){return ["Dödslag 24", "1 Smärta", "Inre skada", "Öga förstört"];}
    else if(loc<5){return ["Dödslag 24", "Blödning 3/20"];}
    else if(loc<9){return ["Dödslag 6", "Tappar", "1 Smärta", "Sår"];}
    else{return ["Dödslag 6", "Faller", "1 Smärta", "Sår"];}
  }
  else if(val === 17){
    if(loc===1){return ["Dödslag 22", "1 Smärta", "Blödning 2/20"];}
    else if(loc<5){return ["Dödslag 22", "Inre skada"];}
    else if(loc<9){return ["Blödning 1/20"];}
    else{return ["Blödning 1/20"];}
  }
  else if(val === 16){
    if(loc===1){return ["Dödslag 20", "Sår", "Infektion 3/12"];}
    else if(loc<5){return ["Dödslag 20", "Omtöcknad", "2 Smärta"];}
    else if(loc<9){return ["Tappar", "1 Smärta", "Sår"];}
    else{return ["Faller", "1 Smärta", "Sår"];}
  }
  else if(val === 15){
    if(loc===1){return ["Dödslag 18", "1 Smärta", "Tappar", "Öga förstört"];}
    else if(loc<5){return ["Dödslag 18", "Blödning 2/16"];}
    else if(loc<9){return ["1 Smärta", "Sår"];}
    else{return ["1 Smärta", "Sår"];}
  }
  else if(val === 14){
    if(loc===1){return ["Dödslag 16", "Tillbakaknuffad", "Blödning 1/20"];}
    else if(loc<5){return ["Dödslag 16", "Infektion 2/18"];}
    else if(loc<9){return ["Tappar", "Sår"];}
    else{return ["Faller", "Sår"];}
  }
  else if(val === 13){
    if(loc===1){return ["Dödslag 14", "1 Smärta", "Omtöcknad"];}
    else if(loc<5){return ["Dödslag 15", "Inre skada"];}
    else if(loc<9){return ["Blödning 1/16"];}
    else{return ["Blödning 1/16"];}
  }
  else if(val === 12){
    if(loc===1){return ["Dödslag 12", "Infektion 2/10"];}
    else if(loc<5){return ["Dödslag 14", "1 Smärta"];}
    else if(loc<9){return ["Tappar", "Brytrisk 10 arm"];}
    else{return ["Faller", "Brytrisk 10 ben"];}
  }
  else if(val === 11){
    if(loc===1){return ["Dödslag 11", "Brytrisk 10 nacke"];}
    else if(loc<5){return ["Dödslag 13", "Blödning 1/16"];}
    else if(loc<9){return ["Infektion 2/10"];}
    else{return ["infektion 2/10"];}
  }
  else if(val === 10){
    if(loc===1){return ["Dödslag 10", "1 Smärta"];}
    else if(loc<5){return ["Dödslag 12", "Omtöcknad", "Infektion 2/12"];}
    else if(loc<9){return ["Tappar", "Sår"];}
    else{return ["Faller", "Sår"];}
  }
  else if(val === 9){
    if(loc===1){return ["Dödslag 9", "Blödning 1/16"];}
    else if(loc<5){return ["Dödslag 11", "Brytrisk 10 ryggrad"];}
    else if(loc<9){return ["Blödning 1/10"];}
    else{return ["Blödning 1/10"];}
  }
  else if(val === 8){
    if(loc===1){return ["Dödslag 8", "Tappar"];}
    else if(loc<5){return ["Dödslag 10", "Blödning 1/10"];}
    else if(loc<9){return ["Tappar", "1 Smärta"];}
    else{return ["Faller", "1 Smärta"];}
  }
  else if(val === 7){
    if(loc===1){return ["Dödslag 6", "Blödning 1/10"];}
    else if(loc<5){return ["Dödslag 8", "1 Smärta"];}
    else if(loc<9){return ["1 Smärta"];}
    else{return ["1 Smärta"];}
  }
  else if(val === 6){
    if(loc===1){return ["Dödslag 4", "1 Smärta", `${randint(1,6)} Tänder utslagna`];}
    else if(loc<5){return ["Dödslag 6", "Infektion 2/10"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
  }
  else if(val === 5){
    if(loc===1){return ["Blödning 1/6"];}
    else if(loc<5){return ["1 Smärta"];}
    else if(loc<9){return ["Infektion 1/4"];}
    else{return ["Infektion 1/4"];}
  }
  else if(val === 4){
    if(loc===1){return ["1 Smärta"];}
    else if(loc<5){return ["Infektion 2/4"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
  }
  else if(val === 3){
    if(loc===1){return ["Omtöcknad"];}
    else if(loc<5){return ["Omtöcknad"];}
    else if(loc<9){return ["Blödning 1/5"];}
    else{return ["Blödning 1/5"];}
  }
  else if(val === 2){
    if(loc===1){return ["Infektion 2/4"];}
    else if(loc<5){return ["Blödning 1/6"];}
    else if(loc<9){return ["Tappar"];}
    else{return ["Faller"];}
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