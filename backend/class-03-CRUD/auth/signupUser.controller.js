const Joi = require("joi");
const User = require("../config/auth.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const transporter = require("../helper/index");

const userSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone: Joi.number().optional(),
});

const signupUser = async (req, res) => {
    try {
        await userSchema.validateAsync(req.body)

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

        transporter.sendMail({
            from: `"My App" <${process.env.SMTP_USER}>`,
            to: createUser.email,
            subject: "Welcome to My App 🎉",

            html: `
                <div style="
                    font-family: Arial, sans-serif;
                    padding: 30px;
                    background-color: #f4f4f4;
                ">
                    <div style="
                        max-width: 600px;
                        margin: auto;
                        background: white;
                        padding: 30px;
                        border-radius: 10px;
                    ">
                        <h2 style="color: #333;">
                            Welcome ${username}! 👋
                        </h2>

                        <p>
                            Your account has been successfully created.
                        </p>

                        <p>
                            Thank you for joining our application.
                        </p>

                        <a href="http://localhost:5173"
                           style="
                           display: inline-block;
                           padding: 12px 20px;
                           background: #007bff;
                           color: white;
                           text-decoration: none;
                           border-radius: 5px;
                           ">
                           Open App
                        </a>

                        <p style="margin-top: 25px; color: #777;">
                            Regards,<br>
                            My App Team
                        </p>
                    </div>
                </div>
            `
        });

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