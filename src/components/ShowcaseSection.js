import React, { useState } from 'react';
// Import the defaultProject we just defined
import { projectData, defaultProject } from '../data/projectData'; 
// We will create this CSS file next
import './ShowcaseSection.css'; 

const ShowcaseSection = () => {
  // State now holds the *ID* of the active project.
  // Initialize it with the ID from the default project.
  const [activeProjectId, setActiveProjectId] = useState(defaultProject.id);

  // For better UX, we put onMouseLeave on the parent list.
  const handleMouseLeaveList = () => {
    setActiveProjectId(defaultProject.id);
  };

  return (
    <section className="showcase-section">
      {/* --- BACKGROUND STACK --- */}
      {/* <div className="background-stack">
        {projectData.map((project) => (
          <div
            key={project.id}
            // Add 'active' class to the visible layer
            className={`media-layer ${activeProjectId === project.id ? 'active' : ''}`}
          >
            {project.type === 'video' ? (
              <video
                src={project.asset}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            ) : (
              <img
                src={project.asset}
                alt={project.title}
                loading="eager"
              />
            )}
          </div>
        ))}
      </div> */}


            <div className="background-stack">
        {projectData.map((project) => (
          <div
            key={project.id}
            // We add the new conditional class here
            className={`
              media-layer 
              ${activeProjectId === project.id ? 'active' : ''}
              ${project.id === 'shaze' ? 'shaze-layout-style' : ''}
            `}
          >
            {project.type === 'video' ? (
              <video
                src={project.asset}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                 className={project.title === 'Shaze' ? 'shaze-video' : ''}
              />
            ) : (
              <img
                src={project.asset}
                alt={project.title}
                loading="eager"
              />
            )}
          </div>
        ))}
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="content-overlay">
        <main
          className="projects-list"
          // Set the reset handler on the entire list
          onMouseLeave={handleMouseLeaveList}
        >
          {projectData.map((project) => (
            <div
              key={project.id}
              className="project-item"
              // Update the active ID on hover
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
    </section>
  );
};

export default ShowcaseSection;