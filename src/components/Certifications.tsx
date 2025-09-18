import React from 'react';
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { SiAmazonaws, SiCisco, SiRedhat, SiKubernetes, SiNvidia } from 'react-icons/si';
import './Certifications.css';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      validUntil: "2026",
      credentialId: "AWS-CSA-2023-001",
      icon: <SiAmazonaws />,
      description: "Validates expertise in designing distributed systems on AWS platform, including compute, storage, database, and networking services.",
      skills: ["AWS Architecture", "Security", "Cost Optimization", "High Availability"],
      link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
    },
    {
      title: "Cisco Certified Specialist – Enterprise Core",
      issuer: "Cisco Systems",
      date: "2022",
      validUntil: "2025",
      credentialId: "CISCO-ECS-2022-001",
      icon: <SiCisco />,
      description: "Demonstrates skills in implementing core enterprise network technologies including dual stack architecture and virtualization.",
      skills: ["Enterprise Networking", "Routing & Switching", "Network Security", "Network Architecture"],
      link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/specialist/enterprise-core.html"
    },
    {
      title: "Red Hat Certified System Administrator",
      issuer: "Red Hat",
      date: "2021",
      validUntil: "2024",
      credentialId: "RHCSA-2021-001",
      icon: <SiRedhat />,
      description: "Validates skills in Red Hat Enterprise Linux system administration, including system configuration, management, and troubleshooting.",
      skills: ["Linux Administration", "System Configuration", "Security", "Storage Management"],
      link: "https://www.redhat.com/en/services/certification/rhcsa"
    },
    {
      title: "OpenStack Administrator",
      issuer: "OpenStack Foundation",
      date: "2020",
      validUntil: "2023",
      credentialId: "OSA-2020-001",
      icon: <SiKubernetes />,
      description: "Demonstrates competency in OpenStack cloud platform administration and management of virtualized infrastructure.",
      skills: ["Cloud Infrastructure", "Virtualization", "OpenStack Services", "Cloud Operations"],
      link: "https://www.openstack.org/coa/"
    },
    {
      title: "Fundamentals of Accelerated Computing with CUDA Python",
      issuer: "NVIDIA Deep Learning Institute",
      date: "2023",
      validUntil: "N/A",
      credentialId: "NVIDIA-CUDA-2023-001",
      icon: <SiNvidia />,
      description: "Covers fundamentals of accelerated computing using CUDA Python for parallel programming and GPU acceleration.",
      skills: ["CUDA Programming", "GPU Computing", "Parallel Processing", "Python"],
      link: "https://www.nvidia.com/en-us/training/instructor-led-workshops/fundamentals-of-accelerated-computing-with-cuda-python/"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>Professional Certifications</h2>
        <p className="section-description">
          Industry-recognized certifications validating my expertise in cloud computing, networking, and system administration
        </p>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-header">
                <div className="cert-icon">
                  {cert.icon}
                </div>
                <div className="cert-status">
                  <span className={`status ${cert.validUntil === 'N/A' || new Date(cert.validUntil) > new Date() ? 'active' : 'expired'}`}>
                    {cert.validUntil === 'N/A' ? 'Completed' : new Date(cert.validUntil) > new Date() ? 'Active' : 'Expired'}
                  </span>
                </div>
              </div>
              
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <h4>{cert.issuer}</h4>
                
                <div className="cert-details">
                  <div className="cert-date">
                    <FaCalendarAlt className="icon" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  {cert.validUntil !== 'N/A' && (
                    <div className="cert-validity">
                      <FaCertificate className="icon" />
                      <span>Valid until: {cert.validUntil}</span>
                    </div>
                  )}
                </div>
                
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-skills">
                  <h5>Key Skills:</h5>
                  <div className="skill-tags">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div className="credential-id">
                  <strong>Credential ID:</strong> {cert.credentialId}
                </div>
              </div>
              
              <div className="certification-actions">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaExternalLinkAlt className="icon" />
                  Verify Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
