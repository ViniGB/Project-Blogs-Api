const { Router } = require('express');

const blogPostsController = require('../controllers/blogPostsController');
const tokenValidation = require('../middlewares/tokenValidation');

const router = Router();

router.post('/', tokenValidation, blogPostsController.createPost);

router.put('/:id', tokenValidation, blogPostsController.updatePost);

router.delete('/:id', tokenValidation, blogPostsController.deletePost);

router.get('/search', tokenValidation, blogPostsController.findPostsByQuery);
router.get('/:id', tokenValidation, blogPostsController.getPostById);
router.get('/', tokenValidation, blogPostsController.listPosts);

module.exports = router;