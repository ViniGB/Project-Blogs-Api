const { Router } = require('express');

const usersController = require('../controllers/usersController');
const tokenValidation = require('../middlewares/tokenValidation');

const router = Router();

router.get('/', tokenValidation, usersController.listUsers);
router.post('/', usersController.createUser);

module.exports = router;