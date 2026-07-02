import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

export default function Projects() {
  const projectsList = [
    {
      title: "Gym Management System",
      category: "Full-Stack MERN Application",
      description:
        "A full-stack Gym Management System developed using the MERN stack. Features JWT authentication with role-based access control for administrators and users, along with membership management, bookings management through RESTful APIs.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST API"],
      github: "https://github.com/nipuninduwaraedu",
      demo: "#",
    },

    {
      title: "Movie Explorer Application",
      category: "React.js | Web, Desktop & PWA",
      description:
        "A movie exploration application built from a single React.js codebase and deployed as a Web, Desktop (Electron), and Progressive Web App (PWA). Integrated the TMDB API to provide movie search and watchlist functionality with a responsive user interface.",
      tags: [
        "React.js",
        "Electron.js",
        "PWA",
        "TMDB API",
        "REST API",
        "Responsive UI",
      ],
      github: "https://github.com/nipuninduwaraedu",
      demo: "#",
    },

    {
      title: "Banking Management System",
      category: "Python Console Application",
      description:
        "A console-based Banking Management System developed using Python. Supports account creation, deposits, withdrawals, balance inquiries while applying object-oriented programming principles, modular code organization, and file handling for persistent data storage.",
      tags: ["Python", "OOP", "File Handling", "CLI", "Data Persistence"],
      github: "https://github.com/nipuninduwaraedu",
      demo: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-title-wrapper">
        <h2 className="section-title">My Projects</h2>
      </div>

      <div className="projects-intro">
        <p>
          A showcase of some academic, collaborative, and personal projects I
          have built.
        </p>
      </div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
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
                {project.demo !== "#" && (
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
                  <span key={tagIdx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
