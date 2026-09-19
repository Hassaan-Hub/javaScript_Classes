require('dotenv').config();

const express = require('express');
const notesRoute =  require('./src/routes/notes');
const connectDB = require('./src/db/mongoos.js');

const app = express();
app.use('/notes', notesRoute);

connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});