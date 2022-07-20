// const Joi = require('joi');
const db = require('../database/models');

const validateTitle = (title) => {
  if (!title || title === '') return false;
  return true;
};

const validateContent = (content) => {
  if (!content || content === '') return false;
  return true;
};

const validateIds = (ids) => {
  if (!ids || ids.length === 0) return false;
  return true;
};

const blogPostsService = {
  async validatePostBody(data) {
    if (!validateTitle(data.title)) return false;
    if (!validateContent(data.content)) return false;
    if (!validateIds(data.categoryIds)) return false;
    return true;
  },

  async validateUpdateBody(data) {
    if (!validateTitle(data.title)) return false;
    if (!validateContent(data.content)) return false;
    return true;
  },

  async validateCategoryId(idData) {
    const booleanData = await Promise.all(idData.map(async (id) => {
      const checkId = await db.Category.findOne({
        where: { id },
      });
      if (!checkId) return false;
      return true;
    }));
    const validationResult = booleanData.some((boolean) => boolean);
    if (!validationResult) return false;
    return true;
  },

  async createPost(data) {
    const newData = new Date();
    const post = await db.BlogPost.create({ ...data, published: newData, updated: newData });
    const { id } = post;
    await Promise.all(data.categoryIds
        .map((categoryId) => db.PostCategory.create({ postId: id, categoryId })));
    return post;
  },

  async listPosts() {
    const posts = await db.BlogPost.findAll({
      include: [{ 
        model: db.User,
        as: 'user',
        attributes: { exclude: ['password'] },
      }, {
        model: db.Category,
        as: 'categories',
        attributes: { exclude: ['PostCategory'] },
      }],
    });
    return posts;
  },

  async getPostById(id) {
    const post = await db.BlogPost.findOne({
      where: { id },
      include: [{ 
        model: db.User,
        as: 'user',
        attributes: { exclude: ['password'] },
      }, {
        model: db.Category,
        as: 'categories',
        attributes: { exclude: ['PostCategory'] },
      }],
    });
    return post;
  },

  async updatePostById(id, payload) {
    const { title, content } = payload;
    const [updatedPost] = await db.BlogPost.update(
      { title, content },
      { where: { id } },
    );
    return updatedPost;
  },

  async deletePostById(id) {
    await db.PostCategory.destroy(
      { where: { postId: id } },
    );
    await db.BlogPost.destroy(
      { where: { id } },
    );
    return true;
  },
};

module.exports = blogPostsService;