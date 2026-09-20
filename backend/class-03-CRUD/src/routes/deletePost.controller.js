const Post = require('../../config/post.model');

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findByIdAndDelete(id)

        return res.status(201).json({ status: 200, message: 'post deleted successfully' });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'interval server error',
            error: error.message
        })
    }
}

module.exports = deletePost;