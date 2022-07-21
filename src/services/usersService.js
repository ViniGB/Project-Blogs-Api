const Joi = require('joi');
const db = require('../database/models');
const blogPostsService = require('./blogPostsService');

const usersService = {
  async validateUserBody(data) {
    const schema = Joi.object({
      displayName: Joi.string().required().min(8),
      email: Joi.string().required().email().max(255),
      password: Joi.string().required().min(6),
      image: Joi.string().max(255),
    });
    const { error, value } = schema.validate(data);
    if (error) return error;
    return value;
  },

  async createUser(data) {
    const checkIfUserExists = await db.User.findOne({
      where: { email: data.email },
    });

    if (checkIfUserExists) {
      return { error: { code: 409, message: 'User already registered' } };
    }

    const newUser = await db.User.create(data);
    return newUser;
  },

  async listUsers() {
    const users = await db.User.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
  },

  async getUserByIdLazy(id) {
    const user = await db.User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });
    return user;
  },

  async deleteUser(id) {
    const getPostsIds = await blogPostsService.findPostsByUserId(id);
    await Promise.all(getPostsIds
      .map((postId) => db.PostCategory.destroy({ 
        where: { postId },
      })));
    await db.BlogPost.destroy(
      { where: { userId: id } },
    );
    await db.User.destroy({
      where: { id },
    });
    return true;
  },
};

module.exports = usersService;