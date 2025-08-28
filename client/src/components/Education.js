import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import './Education.css';

const Education = ({ data }) => {
  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        
        <div className="education-grid">
          {data.education.map((edu, index) => (
            <motion.div 
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="education-header">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <div className="education-info">
                  <h3 className="institution">{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                </div>
              </div>
              
              <div className="education-details">
                <div className="detail-item">
                  <FaCalendarAlt />
                  {/* <span>{edu.duration}</span> */}
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt />
                  <span>Greater Noida, India</span>
                </div>
                <div className="detail-item">
                  <FaAward />
                  {/* <span>CGPA: 8.5+</span> */}
                </div>
              </div>
              
              <div className="education-description">
                <p>
                  {index === 0 
                    ? "Currently pursuing Computer Science & Engineering with focus on software development, algorithms, and modern web technologies."
                    : "Completed higher secondary education with strong foundation in science and mathematics."
                  }
                </p>
              </div>
              
              <div className="education-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {index === 0 ? (
                    <>
                      <li>Active participation in coding competitions</li>
                      <li>Member of technical clubs and societies</li>
                      <li>Projects in web development and AI</li>
                    </>
                  ) : (
                    <>
                      <li>Excellent academic performance</li>
                      <li>Participated in science exhibitions</li>
                      <li>Strong foundation in core subjects</li>
                    </>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="education-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Always Learning & Growing</h3>
          <p>I believe in continuous learning and staying updated with the latest technologies and industry trends.</p>
          <div className="learning-areas">
            <span className="learning-tag">Web Development</span>
            <span className="learning-tag">Machine Learning</span>
            <span className="learning-tag">DSA</span>
            <span className="learning-tag">DevOps</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
