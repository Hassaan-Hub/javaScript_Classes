const express = require('express');
const getAllPost = require('./routes/getAllPost.controller.js');
const createPost = require('./routes/createPost.controller.js');
const updatePost = require('./routes/updatePost.controller.js');
const deletePost = require('./routes/deletePost.controller.js');

const post = express();

post.use(express.json());

post.get('/posts', getAllPost);
post.post('/posts', createPost);
post.delete('/posts/:id', deletePost);
post.put('/posts/:id', updatePost);

module.exports = post;