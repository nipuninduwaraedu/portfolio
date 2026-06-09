import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaSearch } from 'react-icons/fa';

export default function About() {
  const infoCards = [
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      desc: 'BSc (Hons) in Information Technology',
      detail: 'SLIIT Sri Lanka (2023 - 2027)'
    },
    {
      icon: <FaCode />,
      title: 'Specialization',
      desc: 'MERN Stack Development',
      detail: 'React, Node.js, Express, MongoDB'
    },
    {
      icon: <FaSearch />,
      title: 'Current Focus',
      desc: 'Seeking Internships',
      detail: 'Ready for full-stack opportunities'
    }
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content-wrapper">
        <motion.div 
          className="about-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3>Passionate IT Undergraduate & MERN Stack Developer</h3>
          <p className="about-bio">
            I am currently pursuing a BSc (Hons) in Information Technology at the Sri Lanka Institute 
            of Information Technology (SLIIT), expected to graduate in 2027. My programming journey 
            has led me to specialize in MERN stack development, where I love building efficient backend 
            services and interactive frontends.
          </p>
          <p className="about-bio">
            I'm highly motivated, adapt quickly to new tech stacks, and enjoy solving complex web development 
            challenges. I am actively seeking internship opportunities where I can contribute to real-world 
            projects, learn from seasoned professionals, and take my engineering skills to the next level.
          </p>

          <div className="about-cards">
            {infoCards.map((card, idx) => (
              <div key={idx} className="about-card glass-card" id={`about-info-card-${idx}`}>
                <div className="about-card-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p className="card-desc">{card.desc}</p>
                <span className="card-detail">{card.detail}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
