import createServer from "./src/server/server.js";
import { SERVER_PORT } from "./src/configuration/ConfigFile.js";

await createServer(SERVER_PORT)