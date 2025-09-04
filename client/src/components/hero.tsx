export default function Hero({ onNavigate }: { onNavigate: (sectionId: string) => void }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Elizabeth<br />
          <span className="italic">Thatchers</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-2xl mx-auto">
          Contemporary artist exploring the depths of human emotion through
          portraits, landscapes, and abstract expressions
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => onNavigate('gallery')}
            className="inline-block bg-black text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors duration-300 border border-black hover:border-gray-800"
          >
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
