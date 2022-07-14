const { Router } = require('express');

const categoriesController = require('../controllers/categoriesController');
const tokenValidation = require('../middlewares/tokenValidation');

const router = Router();

router.post('/', tokenValidation, categoriesController.createCategory);

module.exports = router;