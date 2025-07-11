const FoodBank = require('../models/FoodBank');

exports.getAllFoodBanks = async (req, res) => {
  try {
    const banks = await FoodBank.find();
    res.json(banks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching food banks' });
  }
};
