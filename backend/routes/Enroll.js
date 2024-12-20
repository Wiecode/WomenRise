const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Course');
const sendEmail = require('../utils/sendEmail');
const Enrolled=require('../models/Enrolled')
router.post('/enroll', async (req, res) => {
    try {
      const { userId, courseId } = req.body;
  
      // Validate input
      if (!userId || !courseId) {
        return res.status(400).json({ error: 'UserId and CourseId are required.' });
      }
  
      const user = await User.findById(userId);
      const course = await Course.findById(courseId).populate('mentor');
  
      if (!user || !course) {
        return res.status(404).json({ error: 'User or Course not found.' });
      }
  
      if (user.enrolledCourses.includes(courseId)) {
        return res.status(400).json({ message: 'You are already enrolled in this course.' });
      }
  
      user.enrolledCourses.push(courseId);
      await user.save();
  
      // Notify mentor
      const mentorEmail = course.mentor.email;
      const subject = `New Enrollment for ${course.title}`;
      const message = `${user.name} (${user.email}) has enrolled in your course: ${course.title}`;
      await sendEmail(mentorEmail, subject, message);
  
      res.status(200).json({ message: 'Enrollment successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Enrollment failed.' });
    }
  });
  // This is a route to get all users enrolled in a specific course
router.get('/mentor/courses/:courseId/enrollments', async (req, res) => {
    try {
      const { courseId } = req.params;
      console.log(courseId)
      const enrollments = await Enrolled.find({ course: courseId })
        .populate('user', 'name email')  // Populate user info
        .populate('course', 'title');   // Populate course info
  
      res.json({ success: true, enrollments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Unable to fetch enrollments' });
    }
  });
  
  
module.exports = router;

