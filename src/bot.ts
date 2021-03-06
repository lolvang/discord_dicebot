const Discord = require('discord.io');
const auth = require('./auth.json');

import {Hugg} from "./hugg";
import {Stick} from "./stick";
import {Kross} from "./kross";
import {Slag} from "./slag";
import {Fall} from "./fall";
import {Eld} from "./eld";
import {randint,dice,obdice,sobdice,mobdice,fobdice} from "./util"
import {log} from "./logger"

let hit_location = {
  1:"Huvud",
  2:"Torso",
  3:"Torso",
  4:"Torso",
  5:"Höger arm",
  6:"Höger arm",
  7:"Vänster arm",
  8:"Vänster arm",
  9:"Höger ben",
  10:"Vänster ben"
}



function d_eval(inp,func) {  
  let x = inp.replace(/t/g, "d");
  if (x.indexOf("d") >= 0) {
    let i = x.indexOf("d");
    let d_size = parseInt(x.substring(i + 1).replace(/\D/g, ""));    
    let d_nr = parseInt(i>0 ? x.substring(0, i).replace(/\D/g, ""): "1");
    if (d_nr > 100) {
      throw `${d_nr} is to many dice, maximum number of dice to roll is 100`;
    }    
    return func(d_nr, d_size);
  } else {
    let y = x.replace(/\D/g, "");
    return [y ? parseInt(y) : 0, [y ? parseInt(y) : 0]];
  }
}

function expression(inp, func){
  inp = inp.replace(/ /g, "");
  let sum = 0;
  let rolls = [];
  for (let add of inp.split("+")) {
    let sub = add.split("-");
    let [v, r] = d_eval(sub[0],func);
    sum += v;
    rolls = rolls.concat(r);
    for (let s of sub.splice(1)) {
      let [v, r] = d_eval(s,func);
      sum -= v;
      rolls = rolls.concat(r.map(x => -x));
    }
  }
  return [sum,rolls];
}


function skade_effekt(dam, mod, loc,func):{utmattning:number,extraskada:string,resultat:string[]}{
  if(dam<1){return {utmattning:0,extraskada:"ingen", resultat:[]};}
  else if(dam<5){return {utmattning:1,extraskada:"ingen", resultat:[]};}
  else if(dam<10){return {utmattning:2,extraskada:"ingen", resultat:[]};}
  else {
    let utm = Math.ceil((dam-9)/5)*2 + 2
    let ext_b = Math.ceil((dam-9)/5)*2 -2
    let ext_r = randint(1,10);
    let ext = ext_r + ext_b +mod;
    return {utmattning:utm, extraskada:`${ext_r}+${ext_b}+${mod}=${ext}`, resultat:func(ext,loc)};
  }  
}

function roll_message(inp, func) {
  let [sum, rolls] = expression(inp,func);
  return `${inp}=${sum}\n(${rolls})`;
}

function damage_message(inp, func, dice_func=obdice){
  inp = inp.replace(/ /g, "");
  log.info("hit message inp:", inp);
  let [param,comp] = ["",inp];
  if(inp.indexOf(",")>=0){
    [param,comp] = inp.split(/,/);
  }  
  let mod = param.indexOf("m") >=0 ? parseInt(param.substring(param.indexOf("m")+1)) : 0;
  let loc = randint(1,10);
  if(param.indexOf("hb")>=0){loc = 9;}
  else if(param.indexOf("t")>=0){loc = 2;}
  else if(param.indexOf("ha")>=0){loc = 5;}
  else if(param.indexOf("va")>=0){loc = 7;}
  else if(param.indexOf("h")>=0){loc = 1;}  
  else if(param.indexOf("vb")>=0){loc = 10;}  
  let [sum,rolls] = expression(comp,dice_func);
  let se = skade_effekt(sum,mod,loc,func);
  if(["Fall", "Eld"].indexOf(func.name) >= 0){
    return `${func.name}: utmattning:${se.utmattning}, resultat:[${se.resultat}]\nskada=${sum},slag=(${rolls}),extraskada=${se.extraskada}`;
  }
  else {
    return `${func.name} ${hit_location[loc]}: utmattning:${se.utmattning}, resultat:[${se.resultat}]\nskada=${sum},slag=(${rolls}),extraskada=${se.extraskada}`;
  }  
}

function hit_message(){  
  return hit_location[randint(1,10)];
}

// Initialize Discord Bot
var bot = new Discord.Client({
  token: auth.token,
  autorun: true
});

bot.on('ready', function (evt) {
  log.info('Connected');
  log.info('Logged in as: ');
  log.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
  // Our bot needs to know if it needs to execute a command
  // for this script it will listen for messages that will start with `!`
  if (message.substring(0, 1) == '!') {
    log.info(`bot read: ${message}`);
    try {
      var args = message.substring(1).toLowerCase();
      var resp = {to:channelID,message:""};
      if ("ob" === args.substring(0, 2)) {
        resp.message = roll_message(args.substring(2), obdice);        
      } else if("sob" === args.substring(0,3)){
        resp.message = roll_message(args.substring(3), sobdice);
      } else if("mob" === args.substring(0,3)){
        resp.message = roll_message(args.substring(3), mobdice);
      } else if("fob" === args.substring(0,3)){
        resp.message = roll_message(args.substring(3), fobdice);
      } else if ("roll" === args.substring(0, 4)) {
        resp.message = roll_message(args.substring(4), dice);        
      } else if("hit" === args.substring(0,3)){
        resp.message = hit_message();
      } else if("hugg" === args.substring(0,4)){
        resp.message = damage_message(args.substring(4),Hugg);
      } else if("shugg" === args.substring(0,5)){
        resp.message = damage_message(args.substring(4),Hugg, sobdice);
      } else if("mhugg" === args.substring(0,5)){
        resp.message = damage_message(args.substring(4),Hugg, mobdice);
      } else if("fhugg" === args.substring(0,5)){
        resp.message = damage_message(args.substring(4),Hugg, fobdice);
      } else if("stick" === args.substring(0,5)){
        resp.message = damage_message(args.substring(5),Stick);
      } else if("sstick" === args.substring(0,6)){
        resp.message = damage_message(args.substring(6),Stick, sobdice);
      } else if("mstick" === args.substring(0,6)){
        resp.message = damage_message(args.substring(6),Stick, mobdice);
      } else if("fstick" === args.substring(0,6)){
        resp.message = damage_message(args.substring(6),Stick, fobdice);
      } else if("kross" === args.substring(0,5)){
        resp.message = damage_message(args.substring(5),Kross);
      } else if("skross" === args.substring(0,6)){
        resp.message = damage_message(args.substring(6),Kross, sobdice);
      } else if("mkross" === args.substring(0,6)){
        resp.message = damage_message(args.substring(6),Kross, mobdice);
      } else if("fkross" === args.substring(0,6)){
        resp.message = damage_message(args.substring(6),Kross, fobdice);
      } else if("eld" === args.substring(0,3)){
        resp.message = damage_message(args.substring(3),Eld);
      } else if("seld" === args.substring(0,4)){
        resp.message = damage_message(args.substring(4),Eld, sobdice);
      } else if("meld" === args.substring(0,4)){
        resp.message = damage_message(args.substring(4),Eld, mobdice);
      } else if("feld" === args.substring(0,4)){
        resp.message = damage_message(args.substring(4),Eld, fobdice);
      } else if("fall" === args.substring(0,4)){
        resp.message = damage_message(args.substring(4),Fall);
      } else if("sfall" === args.substring(0,5)){
        resp.message = damage_message(args.substring(5),Fall, sobdice);
      } else if("mfall" === args.substring(0,5)){
        resp.message = damage_message(args.substring(5),Fall, mobdice);
      } else if("ffall" === args.substring(0,5)){
        resp.message = damage_message(args.substring(5),Fall, mobdice);
      } else if("slag" === args.substring(0,4)){
        resp.message = damage_message(args.substring(4),Slag);
      } else if("sslag" === args.substring(0,5)){
        resp.message = damage_message(args.substring(5),Slag, sobdice);
      } else if("mslag" === args.substring(0,5)){
        resp.message = damage_message(args.substring(5),Slag, mobdice);
      } else if("fslag" === args.substring(0,5)){
        resp.message = damage_message(args.substring(5),Slag, mobdice);
      } else {
        resp.message = 'Unknown command.';        
      }
      resp.message = `${user}:\n`+"```"+resp.message+"```"
      log.info(`bot sending reply: ${resp.message}`);
      bot.sendMessage(resp);
    } catch (error) {
      bot.sendMessage({
        to: channelID,
        message: `${error}`
      });
      log.error(error);
    }
  }
})