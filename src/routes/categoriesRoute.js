const { Router } = require('express');

const categoriesController = require('../controllers/categoriesController');
const tokenValidation = require('../middlewares/tokenValidation');

const router = Router();

router.post('/', tokenValidation, categoriesController.createCategory);

router.get('/', tokenValidation, categoriesController.listCategories);

module.exports = router;