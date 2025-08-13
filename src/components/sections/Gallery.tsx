import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ImageModal from '@/components/ImageModal';
import portrait1 from '@/assets/portrait-1.jpg';
import portrait2 from '@/assets/portrait-2.jpg';
import landscape1 from '@/assets/landscape-1.jpg';
import landscape2 from '@/assets/landscape-2.jpg';
import abstract1 from '@/assets/abstract-1.jpg';
import abstract2 from '@/assets/abstract-2.jpg';

interface Artwork {
  id: string;
  src: string;
  title: string;
  year: string;
  technique: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const artworks: Artwork[] = [
    {
      id: '1',
      src: portrait1,
      title: 'Contemplation',
      year: '2024',
      technique: 'Oil on Canvas',
      category: 'portraits'
    },
    {
      id: '2', 
      src: portrait2,
      title: 'Wisdom Lines',
      year: '2024',
      technique: 'Charcoal Drawing',
      category: 'portraits'
    },
    {
      id: '3',
      src: landscape1,
      title: 'Mountain Mist',
      year: '2024',
      technique: 'Watercolor',
      category: 'landscapes'
    },
    {
      id: '4',
      src: landscape2,
      title: 'Forest Silence',
      year: '2023',
      technique: 'Ink Wash',
      category: 'landscapes'
    },
    {
      id: '5',
      src: abstract1,
      title: 'Geometric Flow',
      year: '2023',
      technique: 'Acrylic on Canvas',
      category: 'abstractions'
    },
    {
      id: '6',
      src: abstract2,
      title: 'Dynamic Balance',
      year: '2024',
      technique: 'Mixed Media',
      category: 'abstractions'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'landscapes', label: 'Landscapes' },
    { id: 'abstractions', label: 'Abstractions' }
  ];

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const handleImageClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedArtwork) return;
    
    const currentIndex = filteredArtworks.findIndex(a => a.id === selectedArtwork.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredArtworks.length - 1;
    } else {
      newIndex = currentIndex < filteredArtworks.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedArtwork(filteredArtworks[newIndex]);
  };

  return (
    <main className="min-h-screen md:ml-80 py-section px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-light tracking-wide mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive collection of works spanning portraits, landscapes, and abstract compositions, 
            each piece exploring the interplay between light, shadow, and emotion.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="nav-item px-6 py-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid gallery-grid-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div 
              key={artwork.id}
              className="group cursor-pointer"
              onClick={() => handleImageClick(artwork)}
            >
              <div className="relative overflow-hidden bg-white">
                <img
                  src={artwork.src}
                  alt={artwork.title}
                  className="gallery-image w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <p className="text-sm font-light">Click to view</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="font-heading text-xl font-light">{artwork.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {artwork.year} • {artwork.technique}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No works found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        artwork={selectedArtwork}
        artworks={filteredArtworks}
        onNavigate={handleNavigate}
      />
    </main>
  );
};

export default Gallery;