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
};

module.exports = categoriesController;