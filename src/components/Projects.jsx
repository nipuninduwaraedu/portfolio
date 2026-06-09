import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

export default function Projects() {
  const projectsList = [
    {
      title: 'University Resource Booking System',
      category: 'Full-Stack (MERN)',
      description: 'A role-based booking system for university facilities, labs, and equipment. Features user authentication, interactive availability calendars, and comprehensive admin dashboards to manage resources.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'TailwindCSS'],
      github: 'https://github.com/nipuninduwaraedu',
      demo: '#',
    },
    {
      title: 'Student Management System',
      category: 'Team Project | MERN',
      description: 'An educational management platform. My primary contribution was developing and integrating an intelligent AI chatbot module to assist students with schedule queries and resource location.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI Integration', 'WebSockets'],
      github: 'https://github.com/nipuninduwaraedu',
      demo: '#',
    },
    {
      title: 'Movie Explorer Application',
      category: 'Frontend Development',
      description: 'A responsive movie searching application. Leverages a public movie REST API to retrieve real-time search queries, display detailed movie specifications, reviews, ratings, and trailers.',
      tags: ['React.js', 'CSS Modules', 'REST API', 'Framer Motion'],
      github: 'https://github.com/nipuninduwaraedu',
      demo: '#',
    },
    {
      title: 'Bank Management System',
      category: 'Python Application',
      description: 'A terminal-based banking application designed to handle account creations, deposits, withdrawals, transfers, and balance inquiries. Features file handling for user account persistence.',
      tags: ['Python', 'File Handling', 'OOP', 'CLI'],
      github: 'https://github.com/nipuninduwaraedu',
      demo: '#',
    },
    {
      title: 'Calculator Application',
      category: 'Web Basics',
      description: 'A sleek, glassmorphic calculator application supporting standard arithmetic operations. Fully responsive, featuring dark/light mode toggle with smooth animations.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Glassmorphism'],
      github: 'https://github.com/nipuninduwaraedu',
      demo: '#',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-intro">
        <p>A showcase of some academic, collaborative, and personal projects I have built.</p>
      </div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projectsList.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card glass-card"
            variants={cardVariants}
            id={`project-card-${index}`}
          >
            <div className="project-card-header">
              <FaFolder className="folder-icon" />
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`GitHub Repository for ${project.title}`}
                  id={`project-github-link-${index}`}
                >
                  <FaGithub />
                </a>
                {project.demo !== '#' && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Live Demo for ${project.title}`}
                    id={`project-demo-link-${index}`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>

            <div className="project-card-body">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-card-footer">
              <div className="project-tags">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
