import * as winston from "winston";

let levels = {
   emergency: 0,
   emerg: 0,
   alert: 1,
   critical: 2,
   crit: 2,
   error: 3,
   err: 3,
   warning: 4,
   warn: 4,
   notice: 5,
   note: 5,
   information: 6,
   info: 6,
   debug: 7,
   verbose: 8
};

const line_format = winston.format.printf(info=>{     
   if(info.metadata && Object.keys(info.metadata).length > 0 && info.metadata.constructor === Object) {
      info.metadata = JSON.stringify(info.metadata);
      return `${info.timestamp} [${info.label}] ${info.level}: ${info.message} ${info.metadata}`;
   } else {
      return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
   }
   
});

let console_log = new winston.transports.Console({
   level: "debug",
   format: winston.format.combine(      
      winston.format.label({label:"dicebot"}),
      winston.format.timestamp(), 
      winston.format.metadata({fillExcept: ['message', 'label', 'level', 'timestamp']}),     
      line_format      
   )
});

let log = winston.createLogger({
   levels: levels,
   transports: [
      console_log,
   ],
   exitOnError: false
});

log.on('error', (err:any) => {
   // internal winston problems
   console.error('!error: ', err);
});

export {log};
export default log;
