const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/womenrise"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
        console.log("connected to mongoo");
    }

module.exports = connectToMongo