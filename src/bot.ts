var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
import {Hugg} from "./hugg";
import {Stick} from "./stick";
import {Kross} from "./kross";
import {Slag} from "./slag";
import {Fall} from "./fall";
import {Eld} from "./eld";
import {randint,dice,obdice} from "./util"

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

function damage_message(inp, func){
  inp = inp.replace(/ /g, "");
  logger.info("hit message inp:", inp);
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
  let [sum,rolls] = expression(comp,obdice);
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

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
  token: auth.token,
  autorun: true
});

bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
  // Our bot needs to know if it needs to execute a command
  // for this script it will listen for messages that will start with `!`
  if (message.substring(0, 1) == '!') {
    try {
      var args = message.substring(1).toLowerCase();
      var resp = {to:channelID,message:""};
      if ("ob" === args.substring(0, 2)) {
        resp.message = roll_message(args.substring(2), obdice);        
      } else if ("roll" === args.substring(0, 4)) {
        resp.message = roll_message(args.substring(4), dice);        
      } else if("hit" === args.substring(0,3)){
        resp.message = hit_message();
      } else if("hugg" === args.substring(0,4)){
        resp.message = damage_message(args.substring(4),Hugg);
      } else if("stick" === args.substring(0,5)){
        resp.message = damage_message(args.substring(5),Stick);
      } else if("kross" === args.substring(0,5)){
        resp.message = damage_message(args.substring(5),Kross);
      } else if("eld" === args.substring(0,3)){
        resp.message = damage_message(args.substring(3),Eld);
      } else if("fall" === args.substring(0,4)){
        resp.message = damage_message(args.substring(4),Fall);
      } else if("slag" === args.substring(0,4)){
        resp.message = damage_message(args.substring(4),Slag);
      } else {
        resp.message = 'Unknown command.';        
      }
      resp.message = `${user}:\n`+"```"+resp.message+"```"
      bot.sendMessage(resp);
    } catch (error) {
      bot.sendMessage({
        to: channelID,
        message: `${error}`
      });
      logger.error(error);
    }
  }
})