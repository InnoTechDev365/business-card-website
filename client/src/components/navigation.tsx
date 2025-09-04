import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Instagram, Facebook } from 'lucide-react';

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-serif text-xl font-semibold">
              Elizabeth Thatchers
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded transition-colors duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-full h-0.5 bg-black mb-1 transition-all duration-300 ${
                    isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-black mb-1 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-black transition-all duration-300 ${
                    isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 menu-overlay transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center min-h-screen w-full">
          <nav className="text-center w-full max-w-lg mx-auto px-8">
            <ul className="space-y-12">
              <li>
                <Link to="/" onClick={handleMenuClick}>
                  <span className="text-white text-5xl md:text-6xl font-serif hover:text-gray-300 transition-colors duration-300 block w-full py-2 cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={handleMenuClick}>
                  <span className="text-white text-5xl md:text-6xl font-serif hover:text-gray-300 transition-colors duration-300 block w-full py-2 cursor-pointer">
                    Gallery
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/biography" onClick={handleMenuClick}>
                  <span className="text-white text-5xl md:text-6xl font-serif hover:text-gray-300 transition-colors duration-300 block w-full py-2 cursor-pointer">
                    Biography
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleMenuClick}>
                  <span className="text-white text-5xl md:text-6xl font-serif hover:text-gray-300 transition-colors duration-300 block w-full py-2 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
            <div className="mt-20 flex justify-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="w-8 h-8" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
