export function Stick(val, loc){
  if(val >= 20){
    if(loc===1){return [`Dödslag:${val+10}`, "1 Smärta", "Infektion 5/34", "Inre skada"];}
    else if(loc<5){return [`Dödslag:${val+10}`, "Sår", "Infektion 5/26", "Inre skada"];}
    else if(loc<9){return [`Dödslag:12`, "Tappar", "Sår", "Amputationsrisk 14 armbåge"];}
    else{return [];}
  }
  else if(val === 19){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 18){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 17){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 16){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 15){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 14){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 13){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 12){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 11){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 10){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 9){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 8){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 7){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 6){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 5){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 4){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 3){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 2){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else if(val === 1){
    if(loc===1){return [];}
    else if(loc<5){return [];}
    else if(loc<9){return [];}
    else{return [];}
  }
  else {
    return ["error negativ skada", val, loc];
  }  
}