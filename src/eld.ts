import { randint } from "./util"
export function Eld(val, loc) {
  if (val >= 20) {
    return [`Dödslag ${val+10}`, "Infektion 5/26", "Inre skada", "Sår alla kroppsdelar"];
  } else if (val === 19) {
    return ["Dödlslag 26", "Sår alla kroppsdelar"];
  } else if (val === 18) {
    return ["Dödslag 24", "2 Smärta", "Infektion 5/22"];
  } else if (val === 17) {
    return ["Dödslag 22", "Sår huvud", "-2 Reaktion", "-2 Vaksamhet"];
  } else if (val === 16) {
    return ["Dödslag 20", "2 Smärta", "Öga förstört"];
  } else if (val === 15) {
    return ["Dödslag 18", "Tappar", "Sår båda armarna"];
  } else if (val === 14) {
    return ["Dödslag 16", "Infektion 5/10", "-2 Kroppsbygnad"];
  } else if (val === 13) {
    return ["Dödslag 14", "Faller", "2 Smärta"];
  } else if (val === 12) {
    let lu = (n) => {
      if (n < 5)      { return "vänster arm";  } 
      else if (n < 9) { return "höger arm";    } 
      else            { return "båda armarna"; }
    };
    return ["Dödslag 12", "Tappar", `Sår ${lu(randint(1,10))}`];
  } else if (val === 11) {
    return ["Dödslag 10", "Sår huvud"];
  } else if (val === 10) {
    return ["Dödslag 8", "2 Smärta"];
  } else if (val === 9) {
    return ["Dödslag 7", "Infektion 4/10"];
  } else if (val === 8) {
    return ["Dödslag 6", "Omtöcknad", "1 Smärta"];
  } else if (val === 7) {
    let lu = (n)=>{
      if(n<3)       {return "vänster arm";  }
      else if(n<5)  {return "höger arm";    }
      else if(n<9)  {return "höger ben";    }
      else if(n<10) {return "båda armarna"; }
      else          {return "båda benen";   }
    }
    return ["Dödslag 5", `Sår ${lu(randint(1,10))}`];
  } else if (val === 6) {
    return ["Dödslag 4", "Infektion 3/6"];
  } else if (val === 5) {
    return ["1 Smärta"];
  } else if (val === 4) {
    return ["Tappar", "Faller"];
  } else if (val === 3) {
    return ["Tappar"];
  } else if (val === 2) {
    return ["Tillbakaknuffad"];
  } else if (val === 1) {
    return ["Omtöcknad"];
  } else {
    return ["error negativ skada", val, loc];
  }
}