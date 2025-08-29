const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, intent } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    // Email via Nodemailer (e.g., Gmail SMTP)
    const smtpUser = process.env.GMAIL_USER;
    const smtpPass = process.env.GMAIL_APP_PASSWORD;
    const destinationEmail = process.env.DESTINATION_EMAIL || 'shub33475@gmail.com';

    let emailResult = null;
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: smtpUser, pass: smtpPass }
      });

      const mailOptions = {
        from: `Portfolio Contact <${smtpUser}>`,
        to: destinationEmail,
        subject: `[Portfolio] ${intent ? `${intent}: ` : ''}${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nIntent: ${intent || 'General'}\n\nMessage:\n${message}`
      };

      emailResult = await transporter.sendMail(mailOptions);
    }

    // SMS via Twilio
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_FROM_NUMBER;
    const destinationPhone = (process.env.DESTINATION_PHONE || '+918009835782').replace(/\s+/g, '');

    let smsResult = null;
    if (accountSid && authToken && fromNumber) {
      const client = twilio(accountSid, authToken);
      smsResult = await client.messages.create({
        body: `New ${intent || 'Contact'} from ${name} <${email}>: ${subject} - ${message.substring(0, 140)}...`,
        from: fromNumber,
        to: destinationPhone
      });
    }

    // If neither email nor SMS configured, still respond OK for development
    if (!emailResult && !smsResult) {
      console.warn('Contact received but no notification services configured. Set Gmail/Twilio env vars to enable.');
      return res.json({ ok: true, note: 'Delivered locally (no email/SMS configured)' });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('Contact endpoint error:', err);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'Shubham Yadav',
    title: 'Web Developer',
    about: 'Second-year BTech CSE student with hands-on full-stack development experience. Proficient in React, Node.js, and Python with proven ability to build end-to-end web applications. Seeking software development internships to contribute technical skills and grow in a collaborative environment.',
    experience: [
      {
        company: 'Yuga Yatra Retail Pvt. Ltd.',
        position: 'Software Engineering Intern',
        duration: 'August 2025 – Present',
        description: 'Contributes on a real world or live projects like Upwork. Using tools like Cursor AI, Google Cloud and Android Studio.'
      }
    ],
    education: [
      {
        institution: 'Abdul Kalam Technical University, Lucknow',
        degree: 'B.Tech in Computer Science & Engineering',
        duration: '2024 – 2028'
      },
      {
        institution: 'Cross Belly International School, Azamgarh',
        degree: '12th Grade (CBSE)',
        duration: '2022 – 2023'
      }
    ],
    projects: [
      {
        name: 'Location Finder',
        technology: 'Python',
        description: 'Developed a location tracking tool. Enabled real-time search and display of geographic data.'
      },
      {
        name: 'World-Class University Website',
        technology: 'HTML, CSS, JavaScript',
        description: 'Created a responsive university webpage using HTML, CSS, and JavaScript. Optimized performance and accessibility for diverse user groups.'
      }
    ],
    skills: {
      frontend: ['HTML5', 'CSS', 'JavaScript', 'React'],
      backend: ['Django', 'Node.js', 'PHP', 'Python'],
      databases: ['MySQL'],
      programming: ['Java', 'Python'],
      concepts: ['Data Structures & Algorithms'],
      tools: ['Git', 'VS Code', 'Linux']
    },
    certifications: ['Cybersecurity Analyst Virtual Internship - Tata Group(Forage)'],
    languages: ['English', 'Hindi']
  });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
