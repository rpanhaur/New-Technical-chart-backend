
const express = require('express');
const emailRouter = express.Router();
const nodemailer = require('nodemailer');
const { config } = require('dotenv')
config()
const cors = require('cors');

emailRouter.use(cors());

// Nodemailer transporter using Gmail

console.log(process.env.EMAIL_USER, 'check check');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});




// POST /api/send-email
emailRouter.post('/send-email', async (req, res) => {
    const { pdfBase64, email, subject = 'Engineering Report' } = req.body;

    console.log(email, 'this is email');
    console.log(subject, 'this is subject');



    if (!pdfBase64 || !email) {
        return res.status(400).json({ error: 'Missing PDF or email' });
    }

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject,
            text: 'Attached is your engineering report.',
            attachments: [{
                filename: 'Report.pdf',
                content: Buffer.from(pdfBase64.split(',')[1], 'base64'),
                contentType: 'application/pdf'
            }]
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (err) {
        console.error('Error sending email:', err);
        return res.status(500).json({ error: 'Failed to send email' });
    }
});

module.exports = emailRouter;

// const express = require('express');
// const { sendEmailWithPDF } = require('../controller/emailController');

// const emailRouter = express.Router();

// // POST /api/email/send
// emailRouter.route('/send-email').post( sendEmailWithPDF);

// module.exports = emailRouter;