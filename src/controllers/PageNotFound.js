import { loggerError } from "../loggers/loggers.js"

export function pageNotFound(req, res) { 
    loggerError.error(`Page not found url: http://localhost:8080${req.url}`)
    res.status(404).json({Error:"Page not found"})
}