import ParsedArgs from "minimist"

const configData = ParsedArgs(process.argv.slice(2), {default:{p:8080, DDBB:"local"}, alias:{p:"PORT",DDBB:"DATABASE"}})

const SERVER_PORT = configData.PORT 
const SERVER_DB = configData.DATABASE
const adminEmail = "jorgeandresmm2002@gmail.com"

export { 
    SERVER_PORT, 
    SERVER_DB, 
    adminEmail
}