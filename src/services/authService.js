const jwt = require('jsonwebtoken');
const db = require('../database/models');

const secret = process.env.JWT_SECRET;

const authService = {
  async validateBody(data) {
    if (!data.email || !data.password) return false;
    return true;
  },

  async validateUser(data) {
    const user = await db.User.findOne({
      where: { email: data.email },
    });

    if (!user || user.password !== data.password) {
      return {
        error: { code: 400, message: 'Invalid fields' },
      };
    }

    return user;
  },

  async createToken(data) {
    const { id, email } = data;
    const payload = { data: { id, email } };
    const token = jwt.sign(payload, secret);
    return token;
  },
};

module.exports = authService;