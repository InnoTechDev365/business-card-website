import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Artwork {
  id: string;
  src: string;
  title: string;
  year: string;
  technique: string;
  category: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  artwork: Artwork | null;
  artworks: Artwork[];
  onNavigate: (direction: 'prev' | 'next') => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  onClose, 
  artwork, 
  artworks, 
  onNavigate 
}) => {
  if (!artwork) return null;

  const currentIndex = artworks.findIndex(a => a.id === artwork.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < artworks.length - 1;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-background/95 backdrop-blur-sm">
        <div className="relative h-full w-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-foreground hover:bg-accent"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navigation Buttons */}
          {hasPrev && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-foreground hover:bg-accent"
              onClick={() => onNavigate('prev')}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          )}

          {hasNext && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-foreground hover:bg-accent"
              onClick={() => onNavigate('next')}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          )}

          <div className="flex flex-col items-center max-w-full max-h-full p-8">
            {/* Image */}
            <img
              src={artwork.src}
              alt={artwork.title}
              className="max-w-full max-h-[70vh] object-contain"
            />

            {/* Artwork Information */}
            <div className="mt-6 text-center space-y-2">
              <h3 className="font-heading text-2xl font-light">{artwork.title}</h3>
              <p className="text-muted-foreground">{artwork.year} • {artwork.technique}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;