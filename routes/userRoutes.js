const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.registerUser);
router.get('/:userId', UserController.getUserById);
router.get('/', UserController.findAll);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUserById);

module.exports = router;