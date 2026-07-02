import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const name = formRef.current.user_name.value;
    const email = formRef.current.user_email.value;
    const message = formRef.current.message.value;

    // Direct FormSubmit.co AJAX API endpoint
    fetch("https://formsubmit.co/ajax/nipuninduwara.edu@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
      .then((res) => {
        return res.json().then((data) => ({ status: res.status, data }));
      })
      .then(({ status, data }) => {
        setLoading(false);
        if (status === 200 && (data.success === "true" || data.success === true)) {
          setStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully.'
          });
          formRef.current.reset();
        } else if (data.message && (data.message.toLowerCase().includes('activate') || data.message.toLowerCase().includes('confirm'))) {
          // If it is the first submit (activation notice), show in green instead of red!
          setStatus({
            type: 'success',
            message: 'Activation link sent! Please check nipuninduwara.edu@gmail.com to confirm this form.'
          });
          formRef.current.reset();
        } else {
          // Display other actual error messages
          setStatus({
            type: 'error',
            message: data.message || 'Failed to send. Please use the direct email link below.'
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        setStatus({
          type: 'error',
          message: 'Transmission error. Please check your network connection or use the direct email link below.'
        });
        console.error('FormSubmit Error:', error);
      });
  };

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: 'Email Me',
      value: 'nipuninduwara.edu@gmail.com',
      link: 'mailto:nipuninduwara.edu@gmail.com'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp / Phone',
      value: '+94 71 456 1109',
      link: 'https://wa.me/94714561109'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Eppawala, Sri Lanka',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/nipun-induwara', label: 'LinkedIn' },
    { icon: <FaGithub />, link: 'https://github.com/nipuninduwaraedu', label: 'GitHub' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/94714561109', label: 'WhatsApp' }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-intro">
        <p>Feel free to reach out to me! Whether you have a question, want to collaborate on a project, or discuss internship opportunities.</p>
      </div>

      <div className="contact-grid">
        {/* Info Column */}
        <motion.div 
          className="contact-info-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Let's talk about everything!</h3>
          <p className="contact-info-desc">
            Don't like forms? You can send me an email, reach out on WhatsApp, or connect with me via LinkedIn. I'm always open to new connections!
          </p>

          <div className="contact-detail-cards">
            {contactDetails.map((detail, idx) => (
              <a 
                href={detail.link} 
                className="contact-detail-card glass-card" 
                key={idx}
                target={detail.link !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                id={`contact-detail-link-${idx}`}
              >
                <div className="detail-icon">{detail.icon}</div>
                <div className="detail-content">
                  <h4>{detail.title}</h4>
                  <p>{detail.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-socials-wrapper">
            <h4>Follow Me</h4>
            <div className="contact-socials">
              {socialLinks.map((social, idx) => (
                <a 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={idx}
                  aria-label={social.label}
                  className="social-btn glass-card"
                  id={`contact-social-link-${social.label.toLowerCase()}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div 
          className="contact-form-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form ref={formRef} onSubmit={sendEmail} className="contact-form glass-card" id="contact-form-element">
            <div className="form-group">
              <label htmlFor="name-input">Name</label>
              <input 
                type="text" 
                name="user_name" 
                id="name-input" 
                required 
                placeholder="Enter your name" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email-input">Email</label>
              <input 
                type="email" 
                name="user_email" 
                id="email-input" 
                required 
                placeholder="Enter your email" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message-input">Message</label>
              <textarea 
                name="message" 
                id="message-input" 
                rows="6" 
                required 
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`} id="form-status-alert">
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary submit-btn" 
              disabled={loading}
              id="contact-submit-btn"
            >
              {loading ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
            </button>

            {/* Direct mail fallback button */}
            <div style={{ textAlign: 'center', marginTop: '18px' }}>
              <a href="mailto:nipuninduwara.edu@gmail.com" className="contact-direct-mailto" id="contact-mailto-link">
                <FaEnvelope /> Send directly via email client
              </a>
            </div>
          </form>
        </motion.div>
      </div>

      <footer className="footer">
        <div className="footer-line"></div>
        <p>&copy; {new Date().getFullYear()} Nipun Induwara. All Rights Reserved.</p>
      </footer>
    </section>
  );
}
