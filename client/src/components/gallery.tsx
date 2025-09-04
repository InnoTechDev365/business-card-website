import { useState } from 'react';
import { getArtworkByCategory, Artwork } from '@/lib/artwork-data';

interface GalleryProps {
  onArtworkClick: (artwork: Artwork) => void;
}

type Category = 'portraits' | 'landscapes' | 'abstractions';

export default function Gallery({ onArtworkClick }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('portraits');

  const categories = [
    { id: 'portraits' as Category, label: 'Portraits' },
    { id: 'landscapes' as Category, label: 'Landscapes' },
    { id: 'abstractions' as Category, label: 'Abstractions' },
  ];

  const artworks = getArtworkByCategory(activeCategory);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">
          Gallery
        </h2>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="gallery-item cursor-pointer"
              onClick={() => onArtworkClick(artwork)}
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
      </div>
    </section>
  );
}
