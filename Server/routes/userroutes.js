// user.routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original name of the file
  },
});
const upload = multer({ storage: storage });
const UserController = require('../Controller/userController.js');

router.post('/users',upload.single('profilePicture'), UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.post('/login', UserController.loginUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
