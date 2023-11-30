// user.controller.js
const User = require('../models/usermodel.js');

async function createUser(req, res) {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email' });
  }

  if (password !== user.password) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  res.json({ success: true });
}

async function updateUser(req, res) {
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { ...req.body }, { new: false });
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send('Internal Server Error');
  }
}

async function deleteUser(req, res) {
  const userId = req.params.id;

  try {
    await User.findByIdAndDelete(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  createUser,
  getAllUsers,
  loginUser,
  updateUser,
  deleteUser,
};
