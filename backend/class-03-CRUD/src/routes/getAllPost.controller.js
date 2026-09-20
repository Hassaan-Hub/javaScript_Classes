const Post = require("../../config/post.model");

const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json({
            message: 'Posts retrieved successfully',
            status: '200',
            data: posts
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllPost;