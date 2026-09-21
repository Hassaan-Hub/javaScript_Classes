require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const post = require('./src/app');
const authRouter = require('./src/routes/auth.route');

const app = express();

app.use('/', post);
app.use('/', authRouter);

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});