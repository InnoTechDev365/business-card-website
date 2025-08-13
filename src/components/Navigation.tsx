import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram, Mail, Phone } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'biography', label: 'Biography' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Burger Menu Button - All Screen Sizes */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-6 right-6 z-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Full Screen Navigation - All Screen Sizes */}
      <div className={`fixed inset-0 bg-background z-navigation transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="h-full w-full flex flex-col justify-center items-center relative">
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gallery-white to-background opacity-50"></div>
          
          {/* Menu content */}
          <div className={`relative z-10 text-center transform transition-all duration-700 ease-out ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Artist name with delayed animation */}
            <div className={`mb-16 transform transition-all duration-500 delay-200 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <h1 className="font-heading text-4xl font-light tracking-wider mb-3">
                Elizabeth Thatchers
              </h1>
              <div className="w-24 h-px bg-foreground mx-auto mb-3"></div>
              <p className="text-muted-foreground text-lg tracking-wide">
                Contemporary Artist
              </p>
            </div>

            {/* Navigation items with staggered animation */}
            <ul className="space-y-8 mb-16">
              {navItems.map((item, index) => (
                <li key={item.id} className={`transform transition-all duration-500 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-item text-3xl font-light tracking-wider transition-all duration-300 relative group ${
                      currentSection === item.id 
                        ? 'text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Social links with delayed animation */}
            <div className={`transform transition-all duration-500 delay-700 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="flex space-x-8 justify-center mb-6">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
                  <Instagram className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
                  <Mail className="h-6 w-6" />
                </Button>
              </div>
              <div className="text-center text-muted-foreground">
                <p className="text-sm tracking-wide">contact@elizabeththatchers.com</p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-8 w-px h-16 bg-gradient-to-b from-transparent via-muted to-transparent opacity-30"></div>
          <div className="absolute bottom-1/4 right-8 w-px h-16 bg-gradient-to-b from-transparent via-muted to-transparent opacity-30"></div>
        </div>
      </div>
    </>
  );
};

export default Navigation;