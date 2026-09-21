const User = require("../config/auth.model");
const bcrypt = require('bcrypt');

const signupUser = async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;
        if (!username || !email || !password || !phone) {
            return res.status(400).json({
                status: 400,
                message: "All fields are required",
                error: error.message
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const createUser = await User.create({
            username,
            email,
            password: hashPassword,
            phone
        })
        return res.status(201).json({ status: 201, message: "User register successfully", data: createUser })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "internal server error",
            error: error.message
        })
    }
}

module.exports = signupUser;