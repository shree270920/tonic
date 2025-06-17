// src/components/ServicesSection.js
import React from 'react';
// This now imports the array with all 6 services from your updated file
import { servicesData } from '../data/projectData';

// This component is already scalable and requires no changes.
// It will automatically render all 6 service cards.
const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className='container'>
      <div className="services-header">
        <h2 className="section-super-title text-orange">Our Services</h2>
        <p className="section-intro-paragraph">
          We push the boundaries of technology and imagination through finely
          crafted visual effects. Tonic offers a full range of services, including
          conceptual design, look development, 3D animation/CGI, motion graphics,
          digital installations, augmented reality and retail apps.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.title} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <div className='service-tile'> 
            <div className="service-image-container">
              <img src={service.image} alt={service.title} />
            </div>
            {/* <p className="service-description">{service.description}</p> */}
            <p >{service.description}</p>
          </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;