import { getFeaturedWorks, Artwork } from '@/lib/artwork-data';

interface FeaturedWorksProps {
  onArtworkClick: (artwork: Artwork) => void;
}

export default function FeaturedWorks({ onArtworkClick }: FeaturedWorksProps) {
  const featuredWorks = getFeaturedWorks();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">
          Selected Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorks.map((artwork) => (
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
