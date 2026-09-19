const express = require('express');
const {createNote,createNote1} = require('../../controller/createNote');

const routes = express.Router();

routes.use(express.json());

// const users = [];


// routes.post('/', createNote1)

routes.get('/', createNote);


module.exports = routes;