import bcrypt from "bcryptjs"

export async function encryptPassword(password){ 
    const hash = await bcrypt.hash(password, 10)
    return hash

}

export async function comparePassword(passwordAdded, passwordHashed){ 
    return await bcrypt.compare(passwordAdded, passwordHashed)
}