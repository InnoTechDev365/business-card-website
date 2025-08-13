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
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-6 right-6 z-navigation md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 h-full w-80 bg-gallery-white border-r border-border z-navigation flex-col justify-between p-8">
        <div className="space-y-8">
          <div className="text-center border-b border-border pb-8">
            <h1 className="font-heading text-3xl font-light tracking-wider">
              Elizabeth Thatchers
            </h1>
            <p className="text-muted-foreground mt-2 text-sm tracking-wide">
              Contemporary Artist
            </p>
          </div>

          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-item w-full text-left text-lg font-light tracking-wide transition-colors duration-300 ${
                    currentSection === item.id 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="flex space-x-4 justify-center">
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>Studio Inquiries</p>
            <p className="mt-1">contact@elizabeththatchers.com</p>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-background z-navigation transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full flex flex-col justify-center items-center space-y-8 p-8">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-light tracking-wider">
              Elizabeth Thatchers
            </h1>
            <p className="text-muted-foreground mt-2 text-sm tracking-wide">
              Contemporary Artist
            </p>
          </div>

          <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-item text-2xl font-light tracking-wide transition-colors duration-300 ${
                    currentSection === item.id 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="space-y-4">
            <div className="flex space-x-4 justify-center">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>contact@elizabeththatchers.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;