import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education: React.FC = () => {
  const education = [
    {
      degree: "MSc, Wireless Communication Engineering",
      institution: "University of Oulu",
      location: "Oulu, Finland",
      year: "2024",
      description: "Specialized in 5G/6G networks, machine learning applications in wireless systems, and network security. Thesis focused on federated learning for DDoS detection in cyber-physical systems.",
      achievements: [
        "Published 3 research papers in international conferences",
        "Developed ML-based intrusion detection systems",
        "Worked on O-RAN and Open5GS testbeds"
      ]
    },
    {
      degree: "MSc, Telecommunication Engineering",
      institution: "University of Moratuwa",
      location: "Moratuwa, Sri Lanka",
      year: "2021",
      description: "Advanced studies in telecommunications, signal processing, and network optimization. Focus on core network technologies and wireless communication systems.",
      achievements: [
        "Graduated with distinction",
        "Research on MIMO systems optimization",
        "Core network security specialization"
      ]
    },
    {
      degree: "BSc, Electrical & Electronic Engineering",
      institution: "University of Peradeniya",
      location: "Peradeniya, Sri Lanka",
      year: "2015",
      description: "Foundation in electrical engineering, electronics, telecommunications, and computer systems. Strong background in mathematics, physics, and engineering fundamentals.",
      achievements: [
        "Dean's List recognition",
        "Active in IEEE student branch",
        "Final year project on wireless sensor networks"
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <div className="education-meta">
                    <h4>{edu.institution}</h4>
                    <div className="meta-info">
                      <span className="location">
                        <FaMapMarkerAlt className="icon" />
                        {edu.location}
                      </span>
                      <span className="year">
                        <FaCalendarAlt className="icon" />
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="education-description">{edu.description}</p>
                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
