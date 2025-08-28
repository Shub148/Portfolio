import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="experience-timeline">
          {data.experience.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="company-name">{exp.company}</h3>
                  <div className="experience-meta">
                    <span className="position">{exp.position}</span>
                    <div className="experience-details">
                      <span className="duration">
                        <FaCalendarAlt />
                        {exp.duration}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt />
                        Remote
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="experience-description">
                  <p>{exp.description}</p>
                </div>
                
                <div className="experience-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Python</span>
                  <span className="tag">Full-Stack</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="experience-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Looking for new opportunities!</h3>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <button className="btn btn-primary">Hire Me</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
