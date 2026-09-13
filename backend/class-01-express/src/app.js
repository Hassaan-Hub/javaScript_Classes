const express = require('express');

const app = express();

app.use(express.json());

const users = [];


app.post('/', (req, res)=>{
    users.push(req.body)
    res.status(201).json({
        message: "users add successfully"
    })
    
})

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to the Express server!",
        users: users
    })
});


module.exports = app;