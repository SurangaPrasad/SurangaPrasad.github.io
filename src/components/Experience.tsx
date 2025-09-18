import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Project Researcher",
      company: "University of Oulu",
      location: "Oulu, Finland",
      period: "2024 – Present",
      description: [
        "Deployed Kubernetes-based 5G/6G testbeds, containerized rApps for O-RAN",
        "Developed automation scripts in Python/Go for dataset generation and orchestration",
        "Implemented monitoring with Prometheus & Grafana for reliability",
        "Research on federated learning and machine learning-based attack detection"
      ]
    },
    {
      title: "Lead Engineer – Core Network Operations & DevOps",
      company: "Dialog Axiata",
      location: "Colombo, Sri Lanka",
      period: "2016 – 2023",
      description: [
        "Managed multi-vendor 3G/4G/5G packet core systems",
        "Automated service provisioning & monitoring with CI/CD pipelines",
        "Improved reliability by integrating observability and proactive fault detection",
        "Led cross-functional teams for network optimization projects"
      ]
    },
    {
      title: "Engineer – Online Charging Systems",
      company: "Huawei Technologies",
      location: "Colombo, Sri Lanka",
      period: "2015 – 2016",
      description: [
        "Automated system upgrades and troubleshooting procedures",
        "Supported large-scale telecom billing systems",
        "Implemented monitoring solutions for system performance",
        "Collaborated with international teams on system integration"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <div className="company-info">
                    <h4>{exp.company}</h4>
                    <div className="meta-info">
                      <span className="location">
                        <FaMapMarkerAlt className="icon" />
                        {exp.location}
                      </span>
                      <span className="period">
                        <FaCalendarAlt className="icon" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="achievements">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
