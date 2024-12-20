const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enrolledSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Make sure you reference the User model
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Make sure you reference the Course model
    required: true,
  },
  // other fields if needed
});

const Enrolled = mongoose.model('Enrolled', enrolledSchema);

module.exports = Enrolled;
