const { Router } = require('express');

const blogPostsController = require('../controllers/blogPostsController');
const tokenValidation = require('../middlewares/tokenValidation');

const router = Router();

router.post('/', tokenValidation, blogPostsController.createPost);

router.put('/:id', tokenValidation, blogPostsController.updatePost);

router.delete('/:id', tokenValidation, blogPostsController.deletePost);

router.get('/', tokenValidation, blogPostsController.listPosts);
router.get('/:id', tokenValidation, blogPostsController.getPostById);

module.exports = router;