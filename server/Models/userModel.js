const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required:true
  },
  LastName: {
    type: String,
    required:true
  },
  DOB: {
    type: String,
    required:true
  },
  Address: {
    type:Object ,
  },
  email: {
    type: String,
    required:true,
    unique: true
  },
  password: {
    type: String,
    required:true,
  },
  // cart:{
  //   type:[Str]
  // }


});

const User = mongoose.model("User", UserSchema);

module.exports = User;