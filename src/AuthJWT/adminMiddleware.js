export default async function adminMiddleware(req, res, next) { 
    let isAdmin = req.user.admin

    if(isAdmin) next()
    else res.status(401).json({Error:"Just admin-users can enter on this page... "})
}