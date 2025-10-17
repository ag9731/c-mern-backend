const mongoose = require("mongoose");
const dotenv = require("dotenv");

const db = dotenv.config({path:"./config/config.env"});

async function connectDB() {
    try{
      await  mongoose.connect(process.env.DB);  
      console.log("connected to database successfully");
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;