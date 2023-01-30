import http from "http"
import {app} from "./app.js"

export default async function createServer(serverPort) { 
    const httpServer = await http.createServer(app); 
    const server = await httpServer.listen(serverPort, ()=>{ 
        
        console.log(`Express server running at serverPort ${serverPort}.`)
    })

    server.on("error", (error) => { 
        console.log(error)
    })
}