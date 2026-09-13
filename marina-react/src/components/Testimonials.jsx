import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    quote: '"Beautiful quality and the perfect everyday bag!"',
    author: 'Emily R.',
  },
  {
    id: 2,
    quote: '"The leather is luxurious and it goes with everything."',
    author: 'Sarah M.',
  },
  {
    id: 3,
    quote: '"Fast shipping and even better in person. Highly recommend!"',
    author: 'Jessica L.',
  },
];

function SliderArrow({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center
        text-2xl shadow-sm hover:bg-marina-bg transition-colors z-10
        ${direction === 'prev' ? '-left-5' : '-right-5'}`}
    >
      {direction === 'prev' ? '‹' : '›'}
    </button>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[0];
    const amount = card.getBoundingClientRect().width + 32;
    trackRef.current.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="bg-marina-cream py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <h3 className="font-playfair text-2xl tracking-[0.05em] uppercase font-medium text-center mb-16">
          LOVED BY OUR CUSTOMERS
        </h3>
        <div className="relative">
          <SliderArrow direction="prev" onClick={() => scroll('prev')} />
          {/* On md+ show as a 3-col grid; on mobile scroll horizontally */}
          <div
            ref={trackRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-hidden scroll-smooth"
          >
            {testimonials.map(t => (
              <div key={t.id} className="bg-marina-bg p-16 border border-marina-border">
                <div className="text-[#555] mb-4 tracking-[2px]">★★★★★</div>
                <p className="font-playfair text-xl italic leading-relaxed mb-6">{t.quote}</p>
                <div className="flex justify-between items-center text-sm text-marina-light">
                  <span>- {t.author}</span>
                  <div className="w-10 h-10 rounded-full bg-[#ccc]" />
                </div>
              </div>
            ))}
          </div>
          <SliderArrow direction="next" onClick={() => scroll('next')} />
        </div>
      </div>
    </section>
  );
}
