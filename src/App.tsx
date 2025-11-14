import React from 'react';
import HeroSection from './components/HeroSection';
import TransformationSection from './components/TransformationSection';
import ModulesSection from './components/ModulesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTASection from './components/FinalCTASection';
import FAQSection from './components/FAQSection';
import './App.css';
import './styles/Professional.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <TransformationSection />
      <ModulesSection />
      <TestimonialsSection />
      <FinalCTASection />
      <FAQSection />
    </div>
  );
}

export default App;