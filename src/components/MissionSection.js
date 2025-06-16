// src/components/MissionSection.js
import React from 'react';
import teamImage from '../assets/images/tonic_studio_01.avif';
const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-content">
        <p>
          The tonic team has an appetite for opportunities afforded by new
          technologies. We work with brands, studios, artists and
          organisations to create inspiring, immersive experiences for
          audiences worldwide. We’re curious, passionate about tech and
          always have an eye on the future.
        </p>
      </div>

      <div className="mission-image-container">
        <div className='mission-container'>
          <div className='mission-container1'>
        <img src={teamImage} alt="The tonic team at work" />
      </div>
      </div>
      </div>
      <div className="footer-cta">
        <h2 className="cta-heading text-orange">Tell us about your project.</h2>
        <a href="#contact" className="cta-button">Start a project</a>
      </div>
    </section>
  );
};

export default MissionSection;