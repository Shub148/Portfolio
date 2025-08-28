const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API Routes
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
