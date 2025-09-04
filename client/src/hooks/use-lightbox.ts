import { useState } from 'react';
import { Artwork } from '@/lib/artwork-data';

export function useLightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentArtwork, setCurrentArtwork] = useState<Artwork | null>(null);

  const openLightbox = (artwork: Artwork) => {
    setCurrentArtwork(artwork);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentArtwork(null);
    document.body.style.overflow = '';
  };

  return {
    isOpen,
    currentArtwork,
    openLightbox,
    closeLightbox,
  };
}
