import React from 'react';
import { FaFileAlt, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Publications.css';

const Publications: React.FC = () => {
  const publications = [
    {
      title: "Federated Learning-powered DDoS Attack Detection for Securing Cyber Physical Systems in 5G and Beyond Networks",
      conference: "IoT4Safety Workshop",
      year: "2024",
      type: "Workshop Paper",
      abstract: "This paper presents a novel federated learning approach for detecting DDoS attacks in cyber-physical systems within 5G and beyond networks. The proposed method enables privacy-preserving collaborative learning across distributed edge nodes while maintaining high detection accuracy.",
      keywords: ["Federated Learning", "DDoS Detection", "5G Networks", "Cyber-Physical Systems", "Edge Computing"],
      link: "https://doi.org/example1",
      status: "Published"
    },
    {
      title: "Simulation of IIoT-Driven Attack Vectors on 5G Core Networks: Dataset Generation and Machine Learning Based Detection",
      conference: "IoT 2024, Oulu",
      year: "2024",
      type: "Conference Paper",
      abstract: "We present a comprehensive study on IIoT-driven attack vectors targeting 5G core networks. This work includes the generation of realistic attack datasets using Kubernetes-based testbeds and the development of machine learning models for effective attack detection.",
      keywords: ["Industrial IoT", "5G Core Networks", "Attack Detection", "Machine Learning", "Dataset Generation"],
      link: "https://doi.org/example2",
      status: "Published"
    },
    {
      title: "Comparative Analysis of Intrusion Detection Using Different Datasets in 5G Core Networks",
      conference: "EUCNC 2025, Poznan",
      year: "2025",
      type: "Conference Paper",
      abstract: "This paper provides a comparative analysis of various intrusion detection approaches applied to different datasets in 5G core network environments. We evaluate the performance of multiple machine learning algorithms across diverse attack scenarios and network configurations.",
      keywords: ["Intrusion Detection", "5G Core Networks", "Machine Learning", "Comparative Analysis", "Network Security"],
      link: "https://doi.org/example3",
      status: "Accepted"
    }
  ];

  return (
    <section id="publications" className="publications">
      <div className="container">
        <h2>Research Publications</h2>
        <p className="section-description">
          Peer-reviewed research contributions in 5G/6G networks, machine learning, and cybersecurity
        </p>
        
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-card">
              <div className="publication-header">
                <div className="publication-icon">
                  <FaFileAlt />
                </div>
                <div className="publication-meta">
                  <span className={`status ${pub.status.toLowerCase()}`}>
                    {pub.status}
                  </span>
                  <span className="type">{pub.type}</span>
                </div>
              </div>
              
              <div className="publication-content">
                <h3>{pub.title}</h3>
                
                <div className="publication-details">
                  <div className="conference-info">
                    <strong>{pub.conference}</strong>
                    <span className="year">
                      <FaCalendarAlt className="icon" />
                      {pub.year}
                    </span>
                  </div>
                </div>
                
                <p className="abstract">{pub.abstract}</p>
                
                <div className="keywords">
                  <h4>Keywords:</h4>
                  <div className="keyword-tags">
                    {pub.keywords.map((keyword, idx) => (
                      <span key={idx} className="keyword-tag">{keyword}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="publication-actions">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaExternalLinkAlt className="icon" />
                  View Paper
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="research-stats">
          <div className="stat">
            <h3>3</h3>
            <p>Publications</p>
          </div>
          <div className="stat">
            <h3>2</h3>
            <p>Conferences</p>
          </div>
          <div className="stat">
            <h3>1</h3>
            <p>Workshop</p>
          </div>
          <div className="stat">
            <h3>2024-2025</h3>
            <p>Publication Years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
