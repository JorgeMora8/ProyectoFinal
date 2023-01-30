import log4js from "log4js";

log4js.configure({
    appenders:{
        consola:{type:"console"}, 
        archivoErrores:{type:"file", filename:"./src/loggers/error.log"}, 
        archivoWarn:{type:"file", filename:"./src/loggers/warn.log"}, 
        archivoInfo:{type:"file", filename:"./src/loggers/info.log"},

        loggerWarn:{
            type:"logLevelFilter", 
            appender:"archivoWarn", 
            level:"warn"
        }, 

        loggerError:{
            type:"logLevelFilter", 
            appender:"archivoErrores", 
            level:"error"
        }, 

        loggerInfo:{
            type:"logLevelFilter", 
            appender:"archivoInfo", 
            level:"info"
        }
    }, 

    categories:{
        default:{
            appenders:["consola"], 
            level:"trace"
        }, 

        info:{
            appenders:["loggerInfo"], 
            level:"all"
        }, 
        warn:{
            appenders:["loggerWarn", "loggerInfo" ], 
            level:"all"
        }, 
        error:{
            appenders:["loggerError", "loggerInfo"], 
            level:"all"
        }

    }
})

//=>Loggers a usar [ INFO / WARN / ERROR ]; 
export const loggerInfo = log4js.getLogger("info"); 
export const loggerWarn = log4js.getLogger("warn"); 
export const loggerError = log4js.getLogger("error"); 
