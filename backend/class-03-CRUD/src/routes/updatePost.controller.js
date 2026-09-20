const Post = require('../../config/post.model');


const updatePost = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { id } = req.params;

        if (!title || !description) {
            return res.status(400).json({
                message: "Title and description are required"
            });
        }

        const post = await Post.findByIdAndUpdate(id, { title, description }, { new: true })

        return res.status(201).json({ status: 200, message: 'post updated successfully', post: post });
    } catch (error) {
        res.status(400).json({
            message: 'error'
        })
    }
}

module.exports = updatePost;