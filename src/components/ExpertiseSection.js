import React, { useState } from 'react';
import { automotiveServices, foodServices } from '../data/projectData';
import automotiveExteriorVideo from '../assets/videos/BMW_3GL_Interior.mp4';
import automotiveInterior from '../assets/images/Automotive.avif';
import foodDrinkImage from '../assets/images/food.avif';

import './ExpertiseSection.css';

const ExpertiseSection = () => {
  const defaultAutomotiveState = { type: 'image', asset: automotiveInterior };
  const hoverAutomotiveState = { type: 'video', asset: automotiveExteriorVideo };
  const [currentAutomotiveMedia, setCurrentAutomotiveMedia] = useState(defaultAutomotiveState);

  return (
    <section className="expertise-section">
      <div className='container'>
        <div className="expertise-intro">
          <h2 className="text-orange">Our expertise</h2>
          <p>
            At tonic, we create digital experiences for all sorts of products and brands, but do admit we have a not-so-secret passion for projects involving automobiles, food & drink.
          </p>
        </div> 
      
        {/*
          The old shared header is removed.
          The layout is now a grid of self-contained cards.
        */}
        <div className="expertise-content-grid">
          {/* --- AUTOMOTIVE CARD --- */}
          <div className="expertise-column">
            {/* Header for this specific card */}
            <div className="expertise-card-header">
              <h3 className="expertise-category-title">Automotive</h3>
              <a href="#automotive" className="read-more-link">Read more</a>
            </div>
            
            <div
              className="image-container"
              onMouseEnter={() => setCurrentAutomotiveMedia(hoverAutomotiveState)}
              onMouseLeave={() => setCurrentAutomotiveMedia(defaultAutomotiveState)}
            >
              {currentAutomotiveMedia.type === 'video' ? (
                <video key={currentAutomotiveMedia.asset} autoPlay loop muted playsInline>
                  <source src={currentAutomotiveMedia.asset} type="video/mp4" />
                </video>
              ) : (
                <img src={currentAutomotiveMedia.asset} alt="Automotive project interior" />
              )}
            </div>
            
            <div className="service-list">
              <ul>
                {/* The dot will be added with CSS for better control */}
                {/* {automotiveServices.map(service => <li key={service}>{service}</li>)} */}
                {automotiveServices.map((service, index) => (
              <li key={index}>
                
                {Array.isArray(service)
                  ? service.join(' • ')
                  : service
                }
                 •
              </li>
            ))}
              </ul>
            </div>
          </div>

          {/* --- FOOD & DRINK CARD --- */}
          <div className="expertise-column">
            {/* Header for this specific card */}
            <div className="expertise-card-header">
              <h3 className="expertise-category-title">Food & Drink</h3>
            </div>
            
            <div className="image-container">
              <img src={foodDrinkImage} alt="Food and Drink project" />
            </div>
            
            <div  className="service-list">
              <ul>
                {foodServices.map(service => <li key={service}>{service} •</li>)}
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default ExpertiseSection;