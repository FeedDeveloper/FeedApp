const express = require('express');
const router = express.Router();
const foodBankController = require('../controllers/foodBankController');

router.get('/', foodBankController.getAllFoodBanks);

module.exports = router;
