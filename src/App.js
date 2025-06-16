


// src/App.js
import React from 'react';
import './App.css';
// import './components/ShowcaseSection.css'; // Import ShowcaseSection styles

// --- COMPONENT IMPORTS ---
import Header from './components/Header';
import ShowcaseSection from './components/ShowcaseSection';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import ServicesSection from './components/ServicesSection';
import './components/MissionSection'; 
import MissionSection from './components/MissionSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-container">
      <Header />

      {/* Main content sections */}
      <main>
      <ShowcaseSection />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection /> 
      <MissionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;