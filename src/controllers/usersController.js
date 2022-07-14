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

  async listUsers(_req, res) {
    const users = await usersService.listUsers();
    res.status(200).json(users);
  },

  async getUserById(req, res) {
    const { id } = req.params;
    const user = await usersService.getUserByIdLazy(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    res.status(200).json(user);
  },
};

module.exports = usersController;