export interface Artwork {
  id: string;
  title: string;
  year: string;
  technique: string;
  category: 'portraits' | 'landscapes' | 'abstractions';
  imageUrl: string;
  description: string;
}

export const artworkData: Artwork[] = [
  // Featured Works
  {
    id: 'featured1',
    title: 'Portrait Study III',
    year: '2023',
    technique: 'Oil on Canvas',
    category: 'portraits',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000',
    description: 'A deep exploration of human expression and emotional depth.'
  },
  {
    id: 'featured2',
    title: 'Mountain Solitude',
    year: '2023',
    technique: 'Acrylic on Canvas',
    category: 'landscapes',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000',
    description: 'Capturing the sublime majesty of untouched wilderness.'
  },
  {
    id: 'featured3',
    title: 'Emotional Flow',
    year: '2023',
    technique: 'Mixed Media',
    category: 'abstractions',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000',
    description: 'An abstract exploration of human emotion through fluid forms.'
  },
  
  // Portraits
  {
    id: 'portrait1',
    title: 'Wisdom Lines',
    year: '2023',
    technique: 'Oil on Canvas',
    category: 'portraits',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800',
    description: 'Capturing the stories written in every line and wrinkle.'
  },
  {
    id: 'portrait2',
    title: 'The Artist\'s Gaze',
    year: '2023',
    technique: 'Charcoal on Paper',
    category: 'portraits',
    imageUrl: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800',
    description: 'A study of creative contemplation and artistic vision.'
  },
  {
    id: 'portrait3',
    title: 'Contemplation',
    year: '2022',
    technique: 'Oil on Canvas',
    category: 'portraits',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800',
    description: 'A moment of quiet reflection captured in paint.'
  },
  {
    id: 'portrait4',
    title: 'The Musician',
    year: '2022',
    technique: 'Acrylic on Canvas',
    category: 'portraits',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800',
    description: 'Capturing the passion and dedication of musical artistry.'
  },
  {
    id: 'portrait5',
    title: 'Inner Storm',
    year: '2021',
    technique: 'Oil on Canvas',
    category: 'portraits',
    imageUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800',
    description: 'An exploration of internal emotional turbulence.'
  },
  {
    id: 'portrait6',
    title: 'Innocence',
    year: '2021',
    technique: 'Watercolor on Paper',
    category: 'portraits',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800',
    description: 'The pure wonder of childhood captured in delicate watercolors.'
  },

  // Landscapes
  {
    id: 'landscape1',
    title: 'Alpine Majesty',
    year: '2023',
    technique: 'Oil on Canvas',
    category: 'landscapes',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    description: 'The commanding presence of mountain peaks at dawn.'
  },
  {
    id: 'landscape2',
    title: 'Forest Whispers',
    year: '2023',
    technique: 'Acrylic on Canvas',
    category: 'landscapes',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    description: 'The secret conversations of ancient trees.'
  },
  {
    id: 'landscape3',
    title: 'Ocean\'s Fury',
    year: '2022',
    technique: 'Oil on Canvas',
    category: 'landscapes',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    description: 'The raw power and beauty of stormy seas.'
  },
  {
    id: 'landscape4',
    title: 'Desert Solitude',
    year: '2022',
    technique: 'Watercolor on Paper',
    category: 'landscapes',
    imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    description: 'The stark beauty and silence of desert landscapes.'
  },
  {
    id: 'landscape5',
    title: 'Rural Dreams',
    year: '2021',
    technique: 'Oil on Canvas',
    category: 'landscapes',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    description: 'The nostalgic charm of countryside meadows.'
  },
  {
    id: 'landscape6',
    title: 'Urban Rhythms',
    year: '2021',
    technique: 'Acrylic on Canvas',
    category: 'landscapes',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    description: 'The dynamic pulse and energy of city life.'
  },

  // Abstractions
  {
    id: 'abstract1',
    title: 'Fluid Emotions',
    year: '2023',
    technique: 'Mixed Media',
    category: 'abstractions',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    description: 'An exploration of emotional states through flowing forms.'
  },
  {
    id: 'abstract2',
    title: 'Structured Chaos',
    year: '2023',
    technique: 'Acrylic on Canvas',
    category: 'abstractions',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    description: 'Finding order within seemingly random arrangements.'
  },
  {
    id: 'abstract3',
    title: 'Surface Tension',
    year: '2022',
    technique: 'Oil and Sand',
    category: 'abstractions',
    imageUrl: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    description: 'Exploring texture and depth through mixed media techniques.'
  },
  {
    id: 'abstract4',
    title: 'Energy Burst',
    year: '2022',
    technique: 'Acrylic on Canvas',
    category: 'abstractions',
    imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    description: 'Capturing kinetic energy through dynamic brushstrokes.'
  },
  {
    id: 'abstract5',
    title: 'Quiet Contemplation',
    year: '2021',
    technique: 'Oil on Canvas',
    category: 'abstractions',
    imageUrl: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    description: 'Minimalist exploration of space and silence.'
  },
  {
    id: 'abstract6',
    title: 'Natural Rhythms',
    year: '2021',
    technique: 'Watercolor and Ink',
    category: 'abstractions',
    imageUrl: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
    description: 'Organic patterns inspired by natural growth and decay.'
  },
];

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworkData.find(artwork => artwork.id === id);
};

export const getArtworkByCategory = (category: 'portraits' | 'landscapes' | 'abstractions'): Artwork[] => {
  return artworkData.filter(artwork => artwork.category === category);
};

export const getFeaturedWorks = (): Artwork[] => {
  return artworkData.filter(artwork => artwork.id.startsWith('featured'));
};
