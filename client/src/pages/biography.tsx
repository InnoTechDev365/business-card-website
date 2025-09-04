import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function BiographyPage() {
  const achievements = [
    'Solo Exhibition at Modern Art Gallery, 2023',
    'Featured Artist at Contemporary Art Fair, 2022',
    'Winner of Emerging Artist Award, 2021',
    'Commissioned work for City Hall Collection, 2020',
    'Group exhibitions across North America and Europe',
  ];

  const exhibitionPhotos = [
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      alt: 'Gallery opening event',
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      alt: 'Artwork on gallery wall',
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      alt: 'Exhibition installation',
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      alt: 'Artist presentation',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Biography
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn about my artistic journey and creative philosophy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Elizabeth Thatchers is a contemporary artist whose work explores
                the intricate relationship between emotion, memory, and visual
                expression. Born in 1985, she has spent over a decade developing
                her distinctive style that bridges the gap between traditional
                techniques and modern artistic vision.
              </p>

              <p className="text-lg leading-relaxed">
                Her journey began at the prestigious Art Institute, where she
                studied under renowned masters who taught her the importance of
                technical precision while encouraging creative experimentation.
                This foundation became the cornerstone of her artistic philosophy.
              </p>

              <p className="text-lg leading-relaxed">
                Working primarily in monochrome, Elizabeth believes that the
                absence of color allows viewers to focus on the essential
                emotional core of each piece. Her portraits capture not just
                physical likeness but psychological depth, while her landscapes
                evoke the sublime connection between humanity and nature.
              </p>

              <div className="border-l-4 border-black pl-6 py-4 bg-gray-50">
                <p className="text-xl font-serif italic">
                  "Art should be a conversation between the artist's soul and the
                  viewer's heart, transcending words and touching something deeper
                  within us."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Elizabeth in her studio"
                className="w-full rounded-lg grayscale filter"
                loading="lazy"
              />

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-semibold mb-4">
                  Achievements
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {achievements.map((achievement, index) => (
                    <li key={index}>• {achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Exhibition Photos */}
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
              Exhibition Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exhibitionPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-48 object-cover rounded-lg grayscale filter"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}