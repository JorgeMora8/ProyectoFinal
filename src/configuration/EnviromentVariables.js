import {config} from "dotenv"
config()

export const MONGODB_LOCAL_DEVELOP = process.env.MONGODB_LOCAL_DEVELOP
export const MONGODB_CLOUD_DEVELOP = process.env.MONGODB_CLOUD_DEVELOP
export const SECRET_WORD = process.env.SECRET_WORD
