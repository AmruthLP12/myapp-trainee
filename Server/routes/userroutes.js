// user.routes.js
const express = require('express');
const router = express.Router();
const UserController = require('../Controller/userController.js');

router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.post('/login', UserController.loginUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
