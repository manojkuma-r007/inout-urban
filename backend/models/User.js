const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  bloodGroup: { type: String },
  address: { type: String },
  position: { type: String },
  company: { type: String },
  salary: { type: String },
  department: { type: String },
  qualification: { type: String },
  dateOfJoining: { type: String },
  roles: { type: String },
  skills: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
