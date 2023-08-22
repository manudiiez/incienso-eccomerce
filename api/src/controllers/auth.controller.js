// import User from '../models/user.model.js'
// import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createAccessToken } from '../libs/jwt.js'
import { TOKEN_SECRET } from '../config.js'

class ControllerAuth {

    constructor(container) {
        this.container = container
    }

    register = async (req, res) => {
        const { email, password, username } = req.body
        try {
            const userFound = await this.container.getOneByParameters({ email })
            if (userFound) return res.status(400).json(["The email already exist"])

            const newUser = new this.container.model();
            newUser.email = email;
            newUser.username = username
            newUser.password = newUser.encryptPassword(password);
            const userSaved = await newUser.save()
            const token = await createAccessToken({ id: userSaved._id })
            res.cookie('token', token)
            res.json({
                user: {
                    id: userSaved._id,
                    username: userSaved.username,
                    email: userSaved.email,
                    createdAt: userSaved.createdAt,
                    updatedAt: userSaved.updatedAt
                },
                token: token
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error.message })
        }
    }

    login = async (req, res) => {
        const { email, password } = req.body
        try {
            const userFound = await this.container.getOneByParameters({ email })
            if (!userFound) return res.status(400).json(["User not found"])
            const isMatch = await userFound.comparePassword(password)
            if (!isMatch) return res.status(400).json(["Incorrect password"])
            const token = await createAccessToken({ id: userFound._id })
            res.cookie('token', token, {
                sameSite: 'none',
                secure: true,
                httpOnly: false
            });
            // res.cookie('token', token);
            res.json({
                user: {
                    id: userFound._id, 
                    username: userFound.username,
                    email: userFound.email,
                    createdAt: userFound.createdAt,
                    updatedAt: userFound.updatedAt
                },
                token: token
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error.message })
        }
    }

    logout = async (req, res) => {
        try {
            res.cookie('token', "", {
                expires: new Date(0)
            });
            return res.sendStatus(200)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    profile = async (req, res) => {
        const userFound = await this.container.getById(req.user.id)
        if (!userFound) return res.status(400).json({ message: "User not found" })
        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
    }

    verifyToken = async (req, res) => {
        const { token } = req.cookies
        if (!token) return res.status(400).json({ message: "Unauthorized" })
        jwt.verify(token, TOKEN_SECRET, async (err, user) => {
            if (err) return res.status(400).json({ message: "Unauthorized" })
            const userFound = await this.container.getById(user.id)
            if (!userFound) return res.status(400).json({ message: "Unauthorized" })
            return res.json({
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
                createdAt: userFound.createdAt,
                updatedAt: userFound.updatedAt
            })
        })
    }


}



export default ControllerAuth
