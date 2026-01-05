const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    // Uname
    uName :{
        type:String,
        required:[true,"Please Enter Your Name"],
    },
    // Uemail
    uEmail :{
        type:String,
        required:[]
    }
}
);

module.exports = userSchema