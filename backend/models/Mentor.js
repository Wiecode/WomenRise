const mongoose = require('mongoose');
const {Schema} = mongoose;

const MentorSchema=new mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 email:{
    type:String,
    required:true,
    unique:true
 },
 password:{
    type:String,
    required:true
 },

});
module.exports =mongoose.model('Mentor',MentorSchema);
