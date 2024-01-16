const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.post('/', ProductController.createNew);
router.get('/:productId', ProductController.getProductById);
router.get('/', ProductController.findAll);
router.put('/:userId', ProductController.updateProduct);
router.delete('/:userId', ProductController.deleteProductById);

module.exports = router;