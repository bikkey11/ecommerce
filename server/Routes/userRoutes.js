const express = require("express");
const userModel = require("../Models/userModel");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

app.post("/register", async (req, res) => {
  
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }
    // encrypt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);
    const newUser = userModel(req.body);
    newUser.password = hasedPassword;
    // console.log(newUser)
    await newUser.save();
    res.status(200).send({message:"User registered sucessfully"});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    userModel.findOne({ email }).then(async (user) => {
      if (!user) {
        return res.status(401).json({ error: "Invalid email or passwords" })
      }
      // validate password
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password" })
      }
      // Generate token
      const token = jwt.sign({ userId: user._id }, "SecretKey")
      const {email,Address,FirstName,LastName,DOB}=user
      const loggedUser={"email":email,"Address":Address,"FirstName":FirstName,"LastName":LastName,"DOB":DOB}
      res.status(200).json({token,loggedUser})
    }).catch((error) => {
      res.status(500).json({ error: "Error occured" })
    })


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occured while logging" })


  }
})

module.exports = app;
