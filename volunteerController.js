const Volunteer = require('../models/Volunteer');

exports.getAllVolunteers = async (req, res) => {
  try {
    const opportunities = await Volunteer.find();
    res.json(opportunities);
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch volunteer opportunities' });
  }
};

exports.createVolunteer = async (req, res) => {
  try {
    const newPost = new Volunteer(req.body);
    await newPost.save();
    res.status(201).json({ message: 'Volunteer opportunity posted!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to post opportunity' });
  }
};
