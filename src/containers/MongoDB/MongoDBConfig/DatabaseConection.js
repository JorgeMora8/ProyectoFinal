import mongoose from "mongoose";
import {SERVER_DB} from "../../../configuration/ConfigFile.js"
import { MONGODB_CLOUD_DEVELOP, MONGODB_LOCAL_DEVELOP } from "../../../configuration/EnviromentVariables.js";

mongoose.set('strictQuery', false)

let databaseLink;

if (SERVER_DB == "local") databaseLink = MONGODB_LOCAL_DEVELOP
else if (SERVER_DB == "dev") databaseLink = MONGODB_CLOUD_DEVELOP
else databaseLink = MONGODB_LOCAL_DEVELOP


export default async function databaseConection(){ 
    await mongoose.connect(databaseLink)
}