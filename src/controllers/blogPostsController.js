const blogPostsService = require('../services/blogPostsService');

const blogPostsController = {
  async createPost(req, res) {
    const { id } = req.user.dataValues;
    const data = req.body;
    const newData = { ...data, userId: id };
    const validatePostBody = await blogPostsService.validatePostBody(data);
    if (!validatePostBody) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const validateCategoryId = await blogPostsService.validateCategoryId(data.categoryIds);
    if (!validateCategoryId) return res.status(400).json({ message: '"categoryIds" not found' });
    const post = await blogPostsService.createPost(newData);
    res.status(201).json(post);
  },

  async listPosts(req, res) {
    const posts = await blogPostsService.listPosts();
    res.status(200).json(posts);
  },

  async getPostById(req, res) {
    const { id } = req.params;
    const post = await blogPostsService.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    res.status(200).json(post);
  },

  async updatePost(req, res) {
    const { id } = req.params;
    const data = req.body;
    const validatePostBody = await blogPostsService.validateUpdateBody(data);
    if (!validatePostBody) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const post = await blogPostsService.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    const userId = req.user.dataValues.id;
    if (post.userId !== userId) return res.status(401).json({ message: 'Unauthorized user' });
    await blogPostsService.updatePostById(id, data);
    const newPost = await blogPostsService.getPostById(id);
    res.status(200).json(newPost);
  },
};

module.exports = blogPostsController;