import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/portfolio');
        const portfolioData = await response.json();
        setData(portfolioData);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        // Fallback data if API fails
        setData({
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="loading">
        <p>Error loading portfolio data</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Hero data={data} />
        <About data={data} />
        <Experience data={data} />
        <Education data={data} />
        <Projects data={data} />
        <Skills data={data} />
        <Contact data={data} />
      </main>
    </div>
  );
}

export default App;
