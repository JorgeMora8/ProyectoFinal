export default async function adminMiddleware(req, res, next) { 
    let isAdmin = req.user.role

    if(isAdmin) next()
    else res.status(401).json({Error:"Just admin-users can enter on this page... "})
}