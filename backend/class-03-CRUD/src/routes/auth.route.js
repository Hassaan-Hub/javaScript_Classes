const express = require('express');
const signupUser = require('../../auth/signupUser.controller');
const loginUser = require('../../auth/loginUser.controller');


const authRouter = express.Router()


authRouter.post('/register', signupUser)
authRouter.post('/login', loginUser)


module.exports = authRouter;