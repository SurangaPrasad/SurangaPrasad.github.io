import React from 'react';
import { FaAws, FaDocker, FaPython, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiJenkins, SiGo, SiReact } from 'react-icons/si';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", icon: <FaAws />, level: 90 },
        { name: "Hybrid Cloud", icon: <FaAws />, level: 85 },
        { name: "Azure", icon: <FaAws />, level: 75 }
      ]
    },
    {
      title: "Containerization & Orchestration",
      skills: [
        { name: "Kubernetes", icon: <SiKubernetes />, level: 95 },
        { name: "Docker", icon: <FaDocker />, level: 90 },
        { name: "Helm", icon: <SiKubernetes />, level: 85 }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", icon: <SiTerraform />, level: 90 },
        { name: "Ansible", icon: <FaLinux />, level: 85 },
        { name: "Crossplane", icon: <SiKubernetes />, level: 80 }
      ]
    },
    {
      title: "CI/CD & Automation",
      skills: [
        { name: "GitHub Actions", icon: <FaGitAlt />, level: 90 },
        { name: "Jenkins", icon: <SiJenkins />, level: 85 },
        { name: "Robot Framework", icon: <FaPython />, level: 80 }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", icon: <SiPrometheus />, level: 90 },
        { name: "Grafana", icon: <SiGrafana />, level: 90 },
        { name: "ELK Stack", icon: <FaLinux />, level: 85 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, level: 90 },
        { name: "Go", icon: <SiGo />, level: 85 },
        { name: "TypeScript", icon: <SiReact />, level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <p className="section-description">
          Technologies and tools I work with to build scalable, reliable systems
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Additional Expertise</h3>
          <div className="tech-tags">
            <span className="tech-tag">5G/6G Core Networks</span>
            <span className="tech-tag">NFV/SDN</span>
            <span className="tech-tag">MIMO Systems</span>
            <span className="tech-tag">Machine Learning</span>
            <span className="tech-tag">Federated Learning</span>
            <span className="tech-tag">Network Security</span>
            <span className="tech-tag">Intrusion Detection</span>
            <span className="tech-tag">O-RAN</span>
            <span className="tech-tag">Open5GS</span>
            <span className="tech-tag">MATLAB</span>
            <span className="tech-tag">SQL</span>
            <span className="tech-tag">C++</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
