const bcrypt = require('bcrypt');
const User = require('../config/auth.model');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: 400,
                message: "All fields are required",
            })
        }

        const existedUser = await User.findOne({ email })
        // delete method but not professional
        // .then(res => res.toObject())
        
        if(!existedUser){
            return res.status(401).json({
                status: 401,
                message: "email not found",
            })
        }

        const passwordMatch = await bcrypt.compare(password, existedUser.password)

        if(!passwordMatch){
            return res.status(401).json({
                status: 401,
                message: "password not match",
            })
        }

        // delete method but not professional
        // delete existedUser.password;


        // 👉 delete method professional 
        const isLoggedInUser = await User.findById(existedUser._id).select("-password -username -phone");
        
        return res.status(201).json({ status: 201, message: "User register successfully", data: isLoggedInUser })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "internal server error",
            error: error.message
        })
    }
}

module.exports = loginUser;