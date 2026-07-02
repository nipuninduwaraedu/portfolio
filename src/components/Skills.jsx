import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman } from 'react-icons/si';

export default function Skills() {
  const skillsList = [
    { name: 'React.js', icon: <FaReact />, color: '#00f3ff', level: 'Beginner' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063', level: 'Beginner' },
    { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', level: 'Beginner' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#4db33d', level: 'Beginner' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e', level: 'Beginner' },
    { name: 'Python', icon: <FaPython />, color: '#3776ab', level: 'Intermediate' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26', level: 'Intermediate' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6', level: 'Intermediate' },
    { name: 'Git', icon: <FaGitAlt />, color: '#f05032', level: 'Beginner' },
    { name: 'GitHub', icon: <FaGithub />, color: '#8c44fc', level: 'Intermediate' },
    { name: 'Postman', icon: <SiPostman />, color: '#ff6c37', level: 'Beginner' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-title-wrapper">
        <h2 className="section-title">My Skills</h2>
      </div>
      
      <div className="skills-intro">
        <p>Here are the technologies and tools I specialize in to build state-of-the-art web applications.</p>
      </div>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {skillsList.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card glass-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              borderColor: skill.color,
              boxShadow: `0 10px 25px -5px ${skill.color}33`
            }}
            id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
          >
            <div className="skill-icon-wrapper" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <span className="skill-level" style={{ color: skill.color }}>{skill.level}</span>
            </div>
            <div className="skill-progress-bar-bg">
              <div 
                className="skill-progress-bar-fill" 
                style={{ 
                  backgroundColor: skill.color,
                  width: skill.level === 'Advanced' ? '85%' : '70%'
                }}
              ></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
