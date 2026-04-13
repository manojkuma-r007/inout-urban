const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const User = require('./models/User'); 

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors());

// Connect to MongoDB
// Replace with your actual MongoDB URI, or set it via environment variables (process.env.MONGO_URI)
const MONGO_URI = "mongodb://127.0.0.1:27017/inout_urban"; 
mongoose.connect(MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


// ==========================================
// REGISTER ROUTE
// ==========================================
app.post('/api/register', async (req, res) => {
  try {
    const { 
      name, email, password, phone, bloodGroup, address, position, 
      company, salary, department, qualification, dateOfJoining, roles, skills 
    } = req.body;

    // 1. Check if the user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // 2. Hash the password for security
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Create the new user
    const newUser = new User({
      name, email, password: hashedPassword, phone, bloodGroup, address,
      position, company, salary, department, qualification, dateOfJoining, roles, skills
    });

    // 4. Save to MongoDB
    await newUser.save();

    // 5. Send success back to the frontend
    res.status(201).json({ 
      message: "Registration successful", 
      user: { name: newUser.name, email: newUser.email } 
    });

  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});


// ==========================================
// LOGIN ROUTE
// ==========================================
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" }); 
    }

    // 2. Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 4. Send success
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email }
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend Server running on port ${PORT}`);
});
