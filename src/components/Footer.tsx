import React from 'react';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Suranga Prasad</h3>
            <p>DevOps Engineer & Researcher passionate about cloud-native infrastructure and wireless networks.</p>
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
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Research</h4>
            <ul>
              <li><a href="#publications">Publications</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul>
              <li>Kubernetes & Docker</li>
              <li>AWS & Cloud Platforms</li>
              <li>5G/6G Networks</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>
              © {currentYear} Suranga Prasad. Made with <FaHeart className="heart" /> using React & TypeScript
            </p>
          </div>
          <div className="footer-note">
            <p>Always learning. Always building. Open to collaborations.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
