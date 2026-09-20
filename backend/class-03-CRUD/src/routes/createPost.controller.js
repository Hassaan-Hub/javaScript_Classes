const Post = require("../../config/post.model");

const createPost = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }

        await Post.create({ title, description });
        res.status(201).json({ message: 'Post created successfully', status: 201 });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = createPost;