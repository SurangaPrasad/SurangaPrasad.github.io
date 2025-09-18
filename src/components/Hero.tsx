import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi there, I'm <span className="highlight">Suranga</span> 👋</h1>
          <h2 className="subtitle">🚀 DevOps / Platform Engineer | Researcher in Wireless Networks & Cloud-Native Systems</h2>
          <p className="description">
            I'm passionate about cloud-native infrastructure, Kubernetes, and automation, with a strong background in 
            wireless communication systems and signal processing. My career bridges both industry and research.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="/resume.pdf" className="btn btn-secondary" download>
              <FaDownload className="icon" /> Download CV
            </a>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/suranga-prasad" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/SurangaPrasad" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:suranga.fin@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-placeholder">
              <div className="avatar">SP</div>
            </div>
            <div className="floating-icons">
              <div className="tech-icon">⚡</div>
              <div className="tech-icon">🚀</div>
              <div className="tech-icon">☸️</div>
              <div className="tech-icon">🔧</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
