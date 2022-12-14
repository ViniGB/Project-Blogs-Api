const categoriesService = require('../services/categoriesService');

const categoriesController = {
  async createCategory(req, res) {
    const data = req.body;
    const validateCategoryBody = await categoriesService.validateCategoryBody(data);
    if (validateCategoryBody.details) {
      return res.status(400).json({ message: validateCategoryBody.details[0].message });
    }
    const category = await categoriesService.createCategory(data);
    res.status(201).json(category);
  },

  async listCategories(_req, res) {
    const categories = await categoriesService.listCategories();
    res.status(200).json(categories);
  },
};

module.exports = categoriesController;