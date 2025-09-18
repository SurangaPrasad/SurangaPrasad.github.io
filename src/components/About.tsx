import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm passionate about cloud-native infrastructure, Kubernetes, and automation, with a strong background in 
              wireless communication systems and signal processing. My career bridges both industry and research: I've 
              worked as a Lead Core Network Engineer & DevOps Specialist in telecom, and as a Researcher at the 
              University of Oulu focusing on 5G/6G testbeds, machine learning, and Kubernetes orchestration.
            </p>
            <p>
              Currently working as a Project Researcher at the University of Oulu, I deploy Kubernetes-based 5G/6G testbeds, 
              develop automation scripts in Python/Go, and implement monitoring solutions with Prometheus & Grafana. 
              Previously, I led core network operations at Dialog Axiata, managing multi-vendor 3G/4G/5G packet core systems 
              and implementing CI/CD pipelines.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>8+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>3</h3>
                <p>Research Publications</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Certifications</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
          <div className="about-skills">
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <ul>
                <li>AWS (EC2, Lambda, Route53)</li>
                <li>Kubernetes & Docker</li>
                <li>Terraform & Ansible</li>
                <li>CI/CD with GitHub Actions</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Monitoring & Observability</h3>
              <ul>
                <li>Prometheus & Grafana</li>
                <li>ELK Stack</li>
                <li>Alertmanager</li>
                <li>System Reliability</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Telecom & Networking</h3>
              <ul>
                <li>5G/6G Core Networks</li>
                <li>NFV/SDN</li>
                <li>MIMO Systems</li>
                <li>Network Function Virtualization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
