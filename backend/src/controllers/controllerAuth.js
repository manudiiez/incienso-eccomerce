
import User from '../models/User.js'


class ControllerAuth {

    constructor(contenedor) {
        this.contenedor = contenedor
    }

    

    signup = async (req, res) => {
        const email = req.body.email
        const password = req.body.password
        try {
            const newUser = new User();
            newUser.email = email;
            newUser.password = newUser.encryptPassword(password);
            await newUser.save();
            res.status(201).json({ user: newUser })

        } catch (error) {
            res.status(404).json({ error: `${error}` })
        }
    }

    login = async (req, res) => {
        try {
            const user = await this.contenedor.signin(req.body)
            req.session.user = user
            res.status(200).json(user)
        } catch (error) {
            // logger.error(req, error)
            res.status(404).json({ error: `${error.message}` })
        }
    }

    login2 = async (req, res) => {
        try {
            const user = await this.contenedor.signin2(req.body)
            req.session.user = user
            res.status(200).json(user)
        } catch (error) {
            // logger.error(req, error)
            res.status(404).json({ error: `${error.message}` })
        }
    }

}



export default ControllerAuth
