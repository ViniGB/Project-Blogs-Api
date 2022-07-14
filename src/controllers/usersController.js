const usersService = require('../services/usersService');
const authService = require('../services/authService');

const usersController = {
  async createUser(req, res) {
    const data = req.body;
    const validateUserBody = await usersService.validateUserBody(data);
    if (validateUserBody.details) {
      return res.status(400).json({ message: validateUserBody.details[0].message });
    }
    const user = await usersService.createUser(validateUserBody);
    if (user.error) {
      const { code, message } = user.error;
      return res.status(code).json({ message });
    }
    const token = await authService.createToken(user);
    res.status(201).json({ token });
  },
};

module.exports = usersController;