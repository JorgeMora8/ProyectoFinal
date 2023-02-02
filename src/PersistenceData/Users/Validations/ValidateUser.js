

export function validateId(id_added){ 
    if(!id_added) { 
        throw new Error("id missing")
    }
    return id_added
}

export function validateEmail(email_added){ 
    if (!email_added.includes("@")) { 
        throw new Error("missing the @ character into the email addresss")
    }
    return email_added
}

export function validatePassword(password_added) { 
    // console.log(password_added)
    if (!password_added) { 
        throw new Error("passwpord missing")
    }
    
    if(password_added.lenght <=4){ 
        throw new Error("short password, please add a strong password... ")
    }

    return password_added
}

export function validateName(name_added) {
   if(!name_added) throw new Error("name missing")
   return name_added
}

export function validateLastName(lastName_added) { 
    if(!lastName_added) { 
        throw new Error("lastname missing")
    }

    return lastName_added
}

export function validateUrl(url_image) { 
    if(!url_image) { 
        throw new Error("url missing")
    }

    return url_image
}

export function validateAdmin(adminState){ 
    if(adminState == null || undefined) { 
        throw new Error("Admin missing. [true or false]")
    }
    return adminState
}