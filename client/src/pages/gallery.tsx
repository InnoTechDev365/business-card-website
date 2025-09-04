import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Lightbox from '@/components/lightbox';
import { getArtworkByCategory, Artwork } from '@/lib/artwork-data';
import { useLightbox } from '@/hooks/use-lightbox';

type Category = 'portraits' | 'landscapes' | 'abstractions';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('portraits');
  const { isOpen, currentArtwork, openLightbox, closeLightbox } = useLightbox();

  const categories = [
    { id: 'portraits' as Category, label: 'Portraits' },
    { id: 'landscapes' as Category, label: 'Landscapes' },
    { id: 'abstractions' as Category, label: 'Abstractions' },
  ];

  const artworks = getArtworkByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my collection of contemporary artwork across different categories
            </p>
          </div>

          {/* Gallery Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-8 border-b border-gray-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`pb-2 text-lg font-medium border-b-2 transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'border-black'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {artworks.map((artwork) => (
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
                  <p className="text-gray-500 text-sm mt-1">
                    {artwork.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
      
      <Lightbox
        isOpen={isOpen}
        artwork={currentArtwork}
        onClose={closeLightbox}
      />
    </div>
  );
}