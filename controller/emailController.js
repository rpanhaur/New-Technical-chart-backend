// const fs = require('fs');
// const path = require('path');
// const transporter = require('../services/emailConfigure');

// // Function to send email with optional PDF
// async function sendEmailWithPDF(req, res) {
//   const { to, subject, text, filename } = req.body;

//   // Build PDF path
//   const pdfPath = path.join(__dirname, '../reports', filename);

//   // Check if file exists
//   if (!fs.existsSync(pdfPath)) {
//     return res.status(404).json({ error: 'PDF file not found' });
//   }

//   const mailOptions = {
//     from: '"Shift Engineer" <rpanhaur@gmail.com>',
//     to,
//     subject,
//     text,
//     // attachments: [
//     //   {
//     //     filename,
//     //     path: pdfPath,
//     //     contentType: 'application/pdf'
//     //   }
//     // ]

//     attachments: [{
//       filename,
//       content: Buffer.from(base64Data, 'base64'),
//       contentType: 'application/pdf'
//     }]
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.json({ message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error('Email error:', error.message);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// }

// module.exports = { sendEmailWithPDF };

// controllers/emailController.js


// const transporter = require('../services/emailConfigure');

// async function sendEmailWithPDF(req, res) {

//   console.log('mail checking and checking');
//   const { pdfBase64, to, subject = 'Engineering Report', text = 'Attached is your engineering report.' } = req.body;
//   console.log(to);
//   console.log(subject);


//   if (!pdfBase64 || !to) {
//     return res.status(400).json({ error: 'Missing required fields (pdfBase64, to)' });
//   }

//   // Extract base64 content (remove data URI prefix)
//   const base64Content = pdfBase64.replace(/^data:application\/pdf;base64,/, '');

//   const mailOptions = {
//     from: '"Shift Engineer" <rpanhaur@gmail.com>',
//     to,
//     subject,
//     text,
//     // attachments: [{
//     //   filename: 'Report.pdf',
//     //   content: Buffer.from(base64Content, 'base64'),
//     //   contentType: 'application/pdf'
//     // }]

//     attachments: [{
//       filename: 'technical_chart.pdf',
//       content: fs.readFileSync('path/to/technical_chart.pdf').toString('base64'),
//       encoding: 'base64',
//       contentType: 'application/pdf'
//     }]
//   };

//   try {

//     await transporter.sendMail(mailOptions);
//     res.json({ message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error.message);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// }

// module.exports = { sendEmailWithPDF };


// const fs = require('fs'); // <-- Add this line to import fs
// const transporter = require('../services/emailConfigure');

// async function sendEmailWithPDF(req, res) {
//   console.log('mail checking and checking');
//   const { pdfBase64, to, subject = 'Engineering Duty Schedule', text = 'Attached is your engineering report.' } = req.body;

//   console.log(to);
//   console.log(subject);

//   if (!pdfBase64 || !to) {
//     return res.status(400).json({ error: 'Missing required fields (pdfBase64, to)' });
//   }

//   // Remove data URI prefix if present
//   const base64Content = pdfBase64.replace(/^data:application\/pdf;base64,/, '');

//   const mailOptions = {
//     from: '"Shift Engineer" <rpanhaur@gmail.com>',
//     to,
//     subject,
//     text,
//     attachments: [{
//       filename: 'technical_chart.pdf',
//       content: base64Content,
//       encoding: 'base64',
//       contentType: 'application/pdf'
//     }]
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.json({ message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error.message);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// }

// module.exports = { sendEmailWithPDF };

