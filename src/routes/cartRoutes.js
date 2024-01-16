const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');

router.post('/', CartController.createNew);
router.get('/:productId', CartController.getCartById);
router.get('/', CartController.findAll);
router.put('/:userId', CartController.updateCart);
router.delete('/:userId', CartController.deleteCartById);

module.exports = router;