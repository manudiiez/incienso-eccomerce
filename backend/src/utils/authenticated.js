import User from "../models/User.js"


export async function isAuthenticated(req, res, next) {
    if (req.session.user) {
        try {
            const user = await User.findOne({ email: req.session.user.email })
            if (!user) {
                res.json({ error: "Debe autenticarse para poder acceder a esta funciones(1)" })
            } else {
                return next()
            }
        }
        
        catch (error) {
            
            res.json({ error: error })
        }
    } else {
        res.json({ error: "Debe autenticarse para poder acceder a esta funciones" })
    }
}

