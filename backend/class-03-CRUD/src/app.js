const express = require('express');
const getAllPost = require('./routes/getAllPost.controller.js');
const createPost = require('./routes/createPost.controller.js');
const updatePost = require('./routes/updatePost.controller.js');
const deletePost = require('./routes/deletePost.controller.js');

const app = express();

app.use(express.json());

app.get('/posts', getAllPost);
app.post('/posts', createPost);
app.delete('/posts/:id', deletePost);
app.put('/posts/:id', updatePost);

module.exports = app;