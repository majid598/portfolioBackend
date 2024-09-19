const express = require("express");
const Contact = require("../Models/Contact");
const Router = express.Router();

Router.post("/contact", async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  console.log(name, email, subject, message);
  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Please enter name to contact",
    });
  }
  if (!email || !subject) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  if (!message) {
    return res.status(400).json({
      success: false,
      message: "Please enter your message",
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

Router.get("/contact/all", async (req, res) => {
  const key = req.query.key;
  const myKey = "code_with_raju";
  if (key !== myKey)
    return res.status(404).json({
      success: false,
      message: "You not owner",
    });
  const messages = await Contact.find().sort({ createdAt: -1 });
  return res.status(200).json({
    success: true,
    messages,
  });
});

module.exports = Router;
