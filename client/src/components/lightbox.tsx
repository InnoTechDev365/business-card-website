import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Artwork } from '@/lib/artwork-data';

interface LightboxProps {
  isOpen: boolean;
  artwork: Artwork | null;
  onClose: () => void;
}

export default function Lightbox({ isOpen, artwork, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 lightbox bg-black bg-opacity-95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors duration-200"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="max-w-full max-h-full object-contain grayscale filter"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent p-6">
          <h3 className="text-white text-xl font-serif font-semibold mb-2">
            {artwork.title}
          </h3>
          <p className="text-gray-300">
            {artwork.technique}, {artwork.year} - {artwork.description}
          </p>
        </div>
      </div>
    </div>
  );
}
