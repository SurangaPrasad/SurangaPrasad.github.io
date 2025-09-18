import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaCloud, FaNetworkWired } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "5G Core Network Security Dataset",
      description: "Comprehensive dataset for machine learning-based intrusion detection in 5G core networks. Generated using Kubernetes-based testbeds with Open5GS and various attack scenarios.",
      technologies: ["Python", "Kubernetes", "Open5GS", "Machine Learning", "Docker"],
      github: "https://github.com/SurangaPrasad/5g-security-dataset",
      demo: "https://demo-link.com",
      category: "research",
      icon: <FaNetworkWired />
    },
    {
      title: "Kubernetes 5G/6G Testbed Automation",
      description: "Automated deployment and orchestration platform for 5G/6G network functions using Kubernetes. Features automated scaling, monitoring, and lifecycle management.",
      technologies: ["Go", "Kubernetes", "Helm", "Prometheus", "Grafana"],
      github: "https://github.com/SurangaPrasad/k8s-5g-testbed",
      demo: null,
      category: "infrastructure",
      icon: <FaCloud />
    },
    {
      title: "Federated Learning for DDoS Detection",
      description: "Federated learning framework for detecting DDoS attacks in cyber-physical systems. Implements privacy-preserving machine learning across distributed 5G edge nodes.",
      technologies: ["Python", "TensorFlow", "Kubernetes", "gRPC", "Docker"],
      github: "https://github.com/SurangaPrasad/federated-ddos-detection",
      demo: "https://demo-link.com",
      category: "research",
      icon: <FaCode />
    },
    {
      title: "Cloud-Native Network Monitoring",
      description: "Comprehensive monitoring solution for cloud-native network functions with real-time alerting, custom dashboards, and automated incident response.",
      technologies: ["Prometheus", "Grafana", "AlertManager", "Python", "Go"],
      github: "https://github.com/SurangaPrasad/network-monitoring",
      demo: "https://monitoring-demo.com",
      category: "infrastructure",
      icon: <FaCloud />
    },
    {
      title: "O-RAN Intelligent Controller",
      description: "Intelligent controller for O-RAN networks with ML-based optimization algorithms. Includes rApp development framework and xApp integration.",
      technologies: ["Go", "Python", "Kubernetes", "gRPC", "TensorFlow"],
      github: "https://github.com/SurangaPrasad/oran-controller",
      demo: null,
      category: "research",
      icon: <FaNetworkWired />
    },
    {
      title: "Multi-Cloud Infrastructure Automation",
      description: "Infrastructure as Code solution for multi-cloud deployments with automated provisioning, scaling, and disaster recovery across AWS, Azure, and GCP.",
      technologies: ["Terraform", "Ansible", "AWS", "Python", "GitHub Actions"],
      github: "https://github.com/SurangaPrasad/multi-cloud-iac",
      demo: null,
      category: "infrastructure",
      icon: <FaCloud />
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'research', label: 'Research' },
    { id: 'infrastructure', label: 'Infrastructure' }
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="section-description">
          A showcase of my work in cloud-native infrastructure, 5G/6G research, and automation solutions.
        </p>
        
        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-category">
                  {project.category}
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FaGithub className="icon" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt className="icon" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
