import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomePage from '@/components/sections/HomePage';
import Gallery from '@/components/sections/Gallery';
import Biography from '@/components/sections/Biography';
import Contact from '@/components/sections/Contact';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomePage onSectionChange={setCurrentSection} />;
      case 'gallery':
        return <Gallery />;
      case 'biography':
        return <Biography />;
      case 'contact':
        return <Contact />;
      default:
        return <HomePage onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      <main className="page-enter page-enter-active">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;