const express = require("express");
const Contact = require('../Models/Contact')
const Router = express.Router();

Router.post("/contact", async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  console.log(name, email, subject, message);
  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Please Add Name To Contact",
    });
  }
  if (!email || !subject) {
    return res.status(400).json({
      success: false,
      message: "Please Add All Fields",
    });
  }
  if (!message) {
    return res.status(400).json({
      success: false,
      message: "Please Enter Your Concern",
    });
  }
  await Contact.create({
    name,
    email,
    subject,
    message,
  });
  res.status(200).json({
    success: true,
    message: "Thanks For Contact Me",
  });
});

module.exports = Router;
