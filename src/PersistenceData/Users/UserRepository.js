import User from "./Users.js"

export default class UserRepository { 
    constructor(dao){ 
        this.dao = dao
    }

    async save(classAdded){ 
        let itemData = classAdded.asDTO()
        await this.dao.save(itemData)
        return itemData
    }

    async get() { 
        let usersSaved = await this.dao.getAll(); 
        return usersSaved.map(user => new User(user))
    }

    async getById(userId){ 
        let userSearched = await this.dao.getById(userId)
        if (userSearched == undefined){ 
            throw new Error ("Theres no user saved with this ID")
        }
        return new User(userSearched)
    }

    async deleteById(userId){ 
        await this.dao.deleteById(userId)
    }


    async getByEmail(email){ 
        return await this.dao.getByEmail(email); 
    }
}