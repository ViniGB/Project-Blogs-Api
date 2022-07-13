const authService = require('../services/authService');

const authController = {
  async login(req, res) {
    const validateBody = await authService.validateBody(req.body);
    if (!validateBody) return res.status(400).json({ message: 'Some required fields are missing' });
    const validateUser = await authService.validateUser(req.body);
    if (validateUser.error) {
      const { code, message } = validateUser.error;
      return res.status(code).json({ message });
    }
    const token = await authService.createToken(validateUser);
    res.status(200).json({ token });
  },
};

module.exports = authController;