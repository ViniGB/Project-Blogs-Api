const { Router } = require('express');

const usersController = require('../controllers/usersController');
const tokenValidation = require('../middlewares/tokenValidation');

const router = Router();

router.post('/', usersController.createUser);

router.delete('/me', tokenValidation, usersController.deleteUser);

router.get('/', tokenValidation, usersController.listUsers);
router.get('/:id', tokenValidation, usersController.getUserById);

module.exports = router;