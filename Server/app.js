// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 5001

// Define the User model schema
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the User model from the schema
const User = mongoose.model('User', UserSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle MongoDB connection events
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Initialize the Express application
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Define routes for the application

// Route for creating a new user
app.post('/users', async (req, res) => {
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      // If the email is already present, send an alert and return an error response
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // If the email is not present, create the new user
    const user = await User.create(req.body);
    res.status(201).json(user); // Use status 201 for resource creation
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route for fetching all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route for user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email});

  if (!user) {
    return res.status(401).json({ message: 'Invalid email' });
  }

  if (password !== user.password) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  res.json({ success: true });
});

// Route for updating user information
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Use the spread operator to extract all fields from req.body
    const updatedUser = await User.findByIdAndUpdate(id, { ...req.body }, { new: false });
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route for deleting a user
app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    await User.findByIdAndDelete(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server and listen on port 5000
app.listen(PORT, () => {
  console.log(`'Server is listening on port ${PORT}'`);
});
