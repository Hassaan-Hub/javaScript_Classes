const Joi = require("joi");
const User = require("../config/auth.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone: Joi.number().max(18),
});

const signupUser = async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;
        // if (!username || !email || !password || !phone) {
        //     return res.status(400).json({
        //         status: 400,
        //         message: "All fields are required",
        //         error: error.message
        //     })
        // }
        const hashPassword = await bcrypt.hash(password, 10)
        const createUser = await User.create({
            username,
            email,
            password: hashPassword,
            phone
        })

        const token = jwt.sign({ userId: createUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })

        return res.status(201).json({
            status: 201,
            message: "User register successfully",
            data: createUser,
            token
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "internal server error",
            error: error.message
        })
    }
}

module.exports = signupUser;