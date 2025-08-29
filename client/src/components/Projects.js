import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = ({ data }) => {
  const projects = [
    ...data.projects,
    {
      name: 'Portfolio Website',
      technology: 'React, Node.js',
      description: 'A modern, responsive portfolio website built with React and Node.js, featuring smooth animations and mobile-first design.',
      github: '#',
      live: '#',
      image: 'portfolio'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" title="View Code">
                      <FaGithub />
                    </a>
                    <a href={project.live} className="project-link" title="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="project-placeholder">
                  <FaCode />
                  <span>{project.name}</span>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.name}</h3>
                  <span className="project-tech">{project.technology}</span>
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.name === 'Location Finder' && (
                      <>
                        <li>Real-time location tracking</li>
                        <li>Geographic data visualization</li>
                        <li>Search functionality</li>
                      </>
                    )}
                    {project.name === 'World-Class University Website' && (
                      <>
                        <li>Responsive design</li>
                        <li>Performance optimization</li>
                        <li>Accessibility features</li>
                      </>
                    )}
                    {project.name === 'Portfolio Website' && (
                      <>
                        <li>Modern UI/UX design</li>
                        <li>Smooth animations</li>
                        <li>Mobile responsive</li>
                      </>
                    )}
                  </ul>
                </div>
                
                <div className="project-footer">
                  <div className="project-stats">
                    <span className="stat">
                      <FaEye />
                      <span>100+ views</span>
                    </span>
                    <span className="stat">
                      <FaCode />
                      <span>Clean code</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Have a project in mind?</h3>
          <p>I'm always interested in hearing about new projects and opportunities. Let's discuss how we can work together!</p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
              window.dispatchEvent(new CustomEvent('contact-intent', { detail: 'Project Inquiry' }));
            }}>Start a Project</button>
            <button className="btn btn-secondary">View More Work</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
