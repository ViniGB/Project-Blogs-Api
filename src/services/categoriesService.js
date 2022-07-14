const Joi = require('joi');
const db = require('../database/models');

const categoriesService = {
  async validateCategoryBody(data) {
    const schema = Joi.object({
      name: Joi.string().required().max(255),
    });
    const { error, value } = schema.validate(data);
    if (error) return error;
    return value;
  },

  async createCategory(data) {
    const newCategory = await db.Category.create(data);
    return newCategory;
  },

  async listCategories() {
    const categories = await db.Category.findAll();
    return categories;
  },
};

module.exports = categoriesService;