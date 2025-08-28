import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaGraduationCap, FaLanguage } from 'react-icons/fa';
import './Skills.css';

const Skills = ({ data }) => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Frontend',
      skills: data.skills.frontend.map(skill => ({ name: skill, level: Math.floor(Math.random() * 30) + 70 }))
    },
    {
      icon: <FaDatabase />,
      title: 'Backend',
      skills: data.skills.backend.map(skill => ({ name: skill, level: Math.floor(Math.random() * 30) + 70 }))
    },
    {
      icon: <FaDatabase />,
      title: 'Databases',
      skills: data.skills.databases.map(skill => ({ name: skill, level: Math.floor(Math.random() * 30) + 70 }))
    },
    {
      icon: <FaCode />,
      title: 'Programming',
      skills: data.skills.programming.map(skill => ({ name: skill, level: Math.floor(Math.random() * 30) + 70 }))
    },
    {
      icon: <FaGraduationCap />,
      title: 'Concepts',
      skills: data.skills.concepts.map(skill => ({ name: skill, level: Math.floor(Math.random() * 30) + 70 }))
    },
    {
      icon: <FaTools />,
      title: 'Tools',
      skills: data.skills.tools.map(skill => ({ name: skill, level: Math.floor(Math.random() * 30) + 70 }))
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <motion.div 
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="skills-extra">
          <motion.div 
            className="certifications"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>
              <FaLanguage />
              Certifications & Languages
            </h3>
            <div className="cert-grid">
              {data.certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="cert-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaGraduationCap />
                  <span>{cert}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="languages">
              <h4>Languages</h4>
              <div className="language-tags">
                {data.languages.map((lang, index) => (
                  <span key={index} className="language-tag">{lang}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="skills-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Always Learning New Technologies</h3>
          <p>I'm constantly expanding my skill set and staying updated with the latest industry trends and technologies.</p>
          <div className="learning-progress">
            <div className="progress-item">
              <span className="progress-label">Currently Learning</span>
              <span className="progress-value">Machine Learning & AI</span>
            </div>
            <div className="progress-item">
              <span className="progress-label">Next Goal</span>
              <span className="progress-value">Cloud Architecture</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
