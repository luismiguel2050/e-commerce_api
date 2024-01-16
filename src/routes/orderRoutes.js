const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

router.post('/', OrderController.createNew);
router.get('/:productId', OrderController.getOrderById);
router.get('/', OrderController.findAll);
router.put('/:userId', OrderController.updateOrder);
router.delete('/:userId', OrderController.deleteOrderById);

module.exports = router;