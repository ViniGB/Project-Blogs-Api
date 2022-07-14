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
};

module.exports = blogPostsController;