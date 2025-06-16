import React from 'react';
import './AboutSection.css';

const AboutSection = () => (
  // This section is now only the white part
  <section className="about-section">
    <div className="about-intro">
    <div className="about-content">
      {/* <h3 className="section-title text-orange">Crafting moving experiences</h3> */}
      <h2>Crafting moving experiences</h2>
      <p className="section-paragraph">
        For over a decade, tonic has created high end photorealistic imagery, video and digital interaction projects detailed to perfection. We have a full service production studio in London and Mumbai, filled with an exceptional bunch of skilled technologists who thrive online to cater to clients worldwide.
      </p>
    </div>
    </div>
  </section>
);

export default AboutSection;