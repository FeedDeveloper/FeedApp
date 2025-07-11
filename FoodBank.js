const mongoose = require('mongoose');

const foodBankSchema = new mongoose.Schema({
  name: String,
  address: String,
  latitude: Number,
  longitude: Number,
  vegan: Boolean,
  halal: Boolean,
  openHours: String
}, { timestamps: true });

module.exports = mongoose.model('FoodBank', foodBankSchema);
