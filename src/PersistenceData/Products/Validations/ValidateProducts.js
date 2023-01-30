export function validateId(id_added){ 
    if(!id_added){ 
        throw new Error("id missing")
    } 
    return id_added
}

export function validateName(name_added) { 
    if(!name_added) { 
        throw new Error("Name missing")
    }

    return name_added
}

export function validatePrice(price_added) {

    if (!price_added){ 
        throw new Error("price missing")
    }
    
    if (price_added <= 0){ 
        throw new Error("The price cant be equal or lower than 0")
    }
    
    return price_added
}

export function validateDescription(description_added) { 
    if(!description_added){ 
        throw new Error("description missing")
    }

    if(description_added.lenght <= 5) { 
        throw new Error("description too short. Please add more info about the product")
    }

    return description_added
}

export function validateImage(url) { 
    if (!url) { 
        throw new Error("image url missing")
    }

    return url
}