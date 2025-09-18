import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:suranga.fin@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="section-description">
          Let's connect and discuss opportunities in DevOps, cloud-native infrastructure, or wireless research
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new opportunities, collaborations, or just having a chat about 
              technology. Whether you're looking for a DevOps engineer, need help with cloud-native solutions, 
              or want to collaborate on research projects, I'd love to hear from you.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <FaEnvelope />
                </div>
                <div className="method-details">
                  <h4>Email</h4>
                  <a href="mailto:suranga.fin@gmail.com">suranga.fin@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FaLinkedin />
                </div>
                <div className="method-details">
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/suranga-prasad" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/suranga-prasad
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FaGithub />
                </div>
                <div className="method-details">
                  <h4>GitHub</h4>
                  <a href="https://github.com/SurangaPrasad" target="_blank" rel="noopener noreferrer">
                    github.com/SurangaPrasad
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="method-details">
                  <h4>Location</h4>
                  <span>Oulu, Finland</span>
                </div>
              </div>
            </div>
            
            <div className="availability">
              <h4>Current Status</h4>
              <p>
                <span className="status-indicator available"></span>
                Open to new opportunities and collaborations
              </p>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button type="submit" className="btn btn-primary">
                <FaPaperPlane className="icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
