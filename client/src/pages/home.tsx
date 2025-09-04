import { useEffect } from 'react';
import { Link } from 'wouter';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Lightbox from '@/components/lightbox';
import { useLightbox } from '@/hooks/use-lightbox';
import { getFeaturedWorks } from '@/lib/artwork-data';
import { Instagram, Facebook } from 'lucide-react';

export default function Home() {
  const { isOpen, currentArtwork, openLightbox, closeLightbox } = useLightbox();
  const featuredWorks = getFeaturedWorks();

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.gallery-item, .animate-slide-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            Elizabeth<br />
            <span className="italic">Thatchers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-2xl mx-auto">
            Contemporary artist exploring the depths of human emotion through
            portraits, landscapes, and abstract expressions
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <Link to="/gallery">
              <button className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                View Gallery
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-black text-black px-8 py-4 text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300">
                Get in Touch
              </button>
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Selected Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredWorks.map((artwork) => (
              <div
                key={artwork.id}
                className="gallery-item cursor-pointer"
                onClick={() => openLightbox(artwork)}
              >
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-80 object-cover grayscale filter"
                  loading="lazy"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-serif font-medium">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {artwork.technique}, {artwork.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery">
              <button className="bg-black text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                View All Works
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Bio */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">
            About the Artist
          </h2>
          <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Elizabeth Thatchers is a contemporary artist whose work explores the intricate 
            relationship between emotion, memory, and visual expression. Working primarily 
            in monochrome, she creates pieces that capture not just physical forms but 
            psychological depth.
          </p>
          <Link to="/biography">
            <button className="border-2 border-black text-black px-8 py-3 text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300">
              Read Full Biography
            </button>
          </Link>
        </div>
      </section>
      
      <Footer />
      
      <Lightbox
        isOpen={isOpen}
        artwork={currentArtwork}
        onClose={closeLightbox}
      />
    </div>
  );
}
