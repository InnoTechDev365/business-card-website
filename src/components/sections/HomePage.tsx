import React from 'react';
import { Button } from '@/components/ui/button';
import portrait1 from '@/assets/portrait-1.jpg';
import landscape1 from '@/assets/landscape-1.jpg';
import abstract1 from '@/assets/abstract-1.jpg';

interface HomePageProps {
  onSectionChange: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSectionChange }) => {
  const featuredWorks = [
    {
      src: portrait1,
      title: "Contemplation",
      category: "Portrait",
      year: "2025"
    },
    {
      src: landscape1,
      title: "Mountain Mist",
      category: "Landscape", 
      year: "2025"
    },
    {
      src: abstract1,
      title: "Geometric Flow",
      category: "Abstract",
      year: "2024"
    }
  ];

  return (
    <main className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-4xl text-center space-y-8">
          <div className="text-reveal animate">
            <h1 className="font-heading text-5xl md:text-7xl font-light tracking-wider">
              <div className="text-reveal-line">Elizabeth</div>
              <div className="text-reveal-line">Thatchers</div>
            </h1>
          </div>
          
          <div className="text-reveal animate" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide leading-relaxed text-reveal-line">
              Contemporary artist exploring the intersection of light, form, and emotion through 
              portraits, landscapes, and abstract compositions.
            </p>
          </div>

          <div className="text-reveal animate" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="outline" 
              size="lg"
              className="text-reveal-line border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
              onClick={() => onSectionChange('gallery')}
            >
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-section px-6 md:px-12 bg-gallery-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-light tracking-wide mb-4">
              Selected Works
            </h2>
            <p className="text-muted-foreground text-lg">
              A curated selection from recent exhibitions
            </p>
          </div>

          <div className="gallery-grid gallery-grid-3">
            {featuredWorks.map((work, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => onSectionChange('gallery')}
              >
                <div className="relative overflow-hidden bg-white">
                  <img
                    src={work.src}
                    alt={work.title}
                    className="gallery-image w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="font-heading text-xl font-light">{work.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {work.category} • {work.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="ghost" 
              className="nav-item text-lg"
              onClick={() => onSectionChange('gallery')}
            >
              View Complete Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl font-light tracking-wide">
            Artist Statement
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              My work explores the profound beauty found in simplicity—the way light falls across 
              a face, the gentle curve of a mountainside, or the unexpected harmony in abstract forms. 
              Working primarily in black and white, I seek to distill each subject to its essential 
              emotional core.
            </p>
            <p>
              Through portraits, I capture the quiet moments of human introspection. In landscapes, 
              I find solace in nature's enduring presence. My abstract pieces emerge from a dialogue 
              between intuition and technique, allowing each composition to reveal itself organically.
            </p>
          </div>
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background"
            onClick={() => onSectionChange('biography')}
          >
            Learn More About My Journey
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;