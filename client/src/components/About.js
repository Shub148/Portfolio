import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaGraduationCap, FaHeart } from 'react-icons/fa';
import './About.css';

const About = ({ data }) => {
  const features = [
    {
      icon: <FaCode />,
      title: 'Full-Stack Development',
      description: 'Proficient in building end-to-end web applications using modern technologies.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Continuous Learning',
      description: 'Always eager to learn new technologies and improve my skills.'
    },
    {
      icon: <FaHeart />,
      title: 'Problem Solving',
      description: 'Passionate about solving complex problems with innovative solutions.'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-header">
              <div className="about-avatar">
                <FaUser />
              </div>
              <h3>Who I Am</h3>
            </div>
            
            <p className="about-description">
              {data.about}
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{data.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Title:</span>
                <span className="detail-value">{data.title}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Experience:</span>
                <span className="detail-value">Fresher</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Greater Noida, India</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>What I Do</h3>
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Interested in working together? Let's discuss your project!</p>
          <button className="btn btn-primary">Get In Touch</button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
