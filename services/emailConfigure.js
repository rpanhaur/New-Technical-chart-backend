// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   port: 587,
//   secure: false, // TLS
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// module.exports = transporter;

// services/emailConfigure.js

const nodemailer = require('nodemailer');
require('dotenv').config();
console.log(process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Must be a Gmail App Password
  },
  logger: true // Optional: Logs SMTP interaction
});

module.exports = transporter;