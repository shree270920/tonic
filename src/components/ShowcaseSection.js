import React, { useState, useEffect } from 'react';

// Slick slider imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { projectData, defaultProject } from '../data/projectData';
import './ShowcaseSection.css';

const MOBILE_BREAKPOINT = 768;

const ShowcaseSection = () => {
  const [activeProjectId, setActiveProjectId] = useState(defaultProject.id);
  const [isMobileView, setIsMobileView] = useState(false);
  // State to track the current slide index for the mobile slider
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= MOBILE_BREAKPOINT);
    };
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Slick slider settings for mobile
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
    // This is crucial: it updates our state when the slide changes
    afterChange: (index) => setCurrentSlideIndex(index),
  };

  // Helper to render video or image
  const renderMedia = (project) => (
    project.type === 'video' ? (
      <video
        key={project.id}
        src={project.asset}
        autoPlay loop muted playsInline preload="auto"
        className={project.id === 5 ? 'shaze-video' : ''}
      />
    ) : (
      <img  src={project.asset} alt={project.title} loading="eager" />
    )
  );
  const renderMobileMedia = (project) => (
    project.type === 'video' ? (
      <video
        key={project.id}
        src={project.asset}
        autoPlay loop muted playsInline preload="auto" style={{objectFit: project.id === 5 ? 'fit' : 'contain'}} 
         
      />
    ) : (
      <img style={{objectFit:'fit'}} src={project.mobileAsset} alt={project.title} loading="eager" />
    )
  );

  // Get the project data for the currently visible slide on mobile
  const currentSlideData = projectData[currentSlideIndex];

  return (
    <section className="showcase-section">
      {isMobileView ? (
        // --- MOBILE VIEW RENDER ---
        <div className='mobile-view-overlay'>
          {/* Slider for background media ONLY */}
          <Slider {...sliderSettings}>
            {projectData.map((project) => (
              <div className="media-layer active" key={project.id}>
                {renderMobileMedia(project)}
              </div>
            ))}
          </Slider>

          {/* Static text overlay that reads from the current slide's data */}
          <div className="slide-text-overlay">
            {currentSlideData && (
              <>
                <p className="project-category">{currentSlideData.category}</p>
                <h2 className="project-title">{currentSlideData.title}</h2>
                {/* Conditionally render the "View Project" link for the correct project */}
                {currentSlideData.id === 1 && ( // Assuming Ather is id: 1
                  <a href="#" className="project-view-link mobile">
                    View Project
                  </a>
                )}
              </>
            )}
          </div>
        </div>

      ) : (

        // --- DESKTOP VIEW RENDER (Untouched) ---
        <>
          <div className="background-stack">
            {projectData.map((project) => (
              <div
                key={project.id}
                className={`media-layer ${activeProjectId === project.id ? 'active' : ''} ${project.id === 'shaze' ? 'shaze-layout-style' : ''}`}
              >
                {renderMedia(project)}
              </div>
            ))}
          </div>
          <div className="content-overlay">
            <main
              className="projects-list"
              onMouseLeave={() => setActiveProjectId(defaultProject.id)}
            >
              {projectData.map((project) => (
                <div
                  key={project.id}
                  className={`project-item project-id-${project.id}`}
                  onMouseEnter={() => setActiveProjectId(project.id)}
                >
                  <p className="project-category">{project.category}</p>
                  <h2 className="project-title">{project.title}</h2>
                  {project.id === defaultProject.id && (
                    <a href="#" className="project-view-link">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </main>
          </div>
        </>
      )}
    </section>
  );
};

export default ShowcaseSection;