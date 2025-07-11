const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  location: String,
  spotsAvailable: Number,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Volunteer', volunteerSchema);
