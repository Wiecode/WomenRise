const express = require('express');
const Course = require('../models/Course');
const fetchmentor = require('../middleware/fetchmentor');
const router = express.Router();

// Route to handle course upload by mentor
router.post('/upload-course', fetchmentor, async (req, res) => {
  const { title, description, price, Accno } = req.body;

  try {
    const newCourse = new Course({
      title,
      description,
      price,
      Accno,
      mentor: req.user.id 
    });

    await newCourse.save();
    res.status(201).json({ success: true, course: newCourse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to fetch all courses for users
router.get('/courses/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('mentor', 'name email');
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json({ course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});



router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find().populate('mentor', 'name email');
    res.json({ courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;