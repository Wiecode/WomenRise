const express = require("express");
const mentor = require("../models/Mentor");
const router = express.Router();
var bcrypt = require('bcryptjs');
var jwt=require('jsonwebtoken');
const JWT_SECRET='welcome';
const fetchmentor=require("../middleware/fetchmentor")
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

router.post('/creatementor', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', "Enter a valid Email").isEmail(),
  body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  let success=false;
    //enadru errors idre input kodbekare this will show up
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success,errors: errors.array() });
  }
 
  const salt=await bcrypt.genSalt(10)
  const secPass= await bcrypt.hash(req.body.password,salt);

   //idu already user with same email idre error will be displayed else user is created
  try {
    const user = await mentor.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });
    const data={
      user: {
        id:user.id
      }
    }
     const authtoken=jwt.sign(data,JWT_SECRET)
     success=true;
    res.json({success,authtoken});
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

//login route
router.post('/login', [
  body('email', "Enter a valid Email").isEmail(),
  body('password', 'Password needs to be entered').exists(),
], async (req, res) => {
  let success=false;
    //enadru errors idre input kodbekare this will show up
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success=false;
      return res.status(400).json({ success,errors: errors.array() });
    }
    const {email,password} =req.body;
    try{
      let user = await mentor.findOne({email});
     if(!user){
      success=false;
      return res.status(400).json({success,error:"user doesnot exists"});
    }
    const passwordcompare = await bcrypt.compare(password, user.password);
     if(!passwordcompare){
      success=false;
     return res.status(400).json({success,error:"Enter correct password"})
    }
  const data={
    user: {
      id:user.id
    }
  }
   const authtoken = jwt.sign(data,JWT_SECRET)
   success=true;
  res.json({success,authtoken});
}
catch (error) {
  if (error.code === 11000) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  console.error(error);
  res.status(500).json({ error: 'Server error' });
}



});

//get logged in user details.login required
router.post('/getmentor',fetchmentor,  async (req, res) => {

try{
  const userId=req.user.id;
  const user=await mentor.findById(userId).select("-password")
  res.send(user)

}
  catch (error) {
  if (error.code === 11000) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  console.error(error);
  res.status(500).json({ error: 'Server error' });
}});

// Signup User Route
router.post('/signupuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  let success = false;
  // Check for validation errors in the input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create new user
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const data = {
      user: {
        id: user.id,
      },
    };

    // Create JWT token with expiration (1 hour)
    const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });
    success = true;

    res.json({ success, authtoken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// User Login Route
router.post('/userlogin', [
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password needs to be entered').exists(),
], async (req, res) => {
  let success = false;
  // Check for validation errors in the input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    // Find user by email
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success, error: 'User does not exist' });
    }

    // Compare passwords
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ success, error: 'Enter correct password' });
    }

    // Create JWT token with expiration (1 hour)
    const data = {
      user: {
        id: user.id,
      },
    };

    const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });
    success = true;

    res.json({ success, authtoken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;