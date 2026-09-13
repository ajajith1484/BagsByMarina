import { useRef } from 'react';

const bestsellers = [
  { id: 1, name: 'The Milan Tote', price: '₹1,799', bg: '#222' },
  { id: 2, name: 'The Riviera Shoulder', price: '₹1,649', bg: '#C08F68' },
  { id: 3, name: 'The Classic Satchel', price: '₹1,849', bg: '#A3AA9A' },
];

const guideCards = [
  { id: 1, title: '5 Ways To Style Your Everyday Tote', bg: '#E2E4E0' },
  { id: 2, title: 'From Desk To Dinner: Effortless Transitions', bg: '#79836B' },
];

function SliderArrow({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      className={`absolute top-[40%] -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center
        text-2xl shadow-sm hover:bg-marina-bg transition-colors z-10
        ${direction === 'prev' ? '-left-5' : '-right-5'}`}
    >
      {direction === 'prev' ? '‹' : '›'}
    </button>
  );
}

export default function BestsellersAndGuide() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[0];
    const amount = card.getBoundingClientRect().width + 32;
    trackRef.current.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-24">

          {/* Bestsellers */}
          <div>
            <div className="flex justify-between items-baseline mb-16 border-b border-marina-border pb-4">
              <h3 className="font-playfair text-2xl tracking-[0.05em] uppercase font-medium">BESTSELLERS</h3>
              <a href="#" className="text-[0.8rem] tracking-[0.1em] uppercase font-medium border-b border-current pb-0.5 hover:text-marina-primary transition-colors">
                VIEW ALL
              </a>
            </div>
            <div className="relative">
              <SliderArrow direction="prev" onClick={() => scroll('prev')} />
              <div
                ref={trackRef}
                className="flex gap-8 overflow-x-hidden scroll-smooth"
              >
                {bestsellers.map(item => (
                  <div key={item.id} className="group min-w-0 flex-1">
                    <div className="aspect-square mb-4 overflow-hidden" style={{ backgroundColor: item.bg }}>
                      {item.image && (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      )}
                    </div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-normal text-base">{item.name}</h4>
                      <span className="font-medium">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <SliderArrow direction="next" onClick={() => scroll('next')} />
            </div>
          </div>

          {/* Styling Guide */}
          <div>
            <div className="flex justify-between items-baseline mb-16 border-b border-marina-border pb-4">
              <h3 className="font-playfair text-2xl tracking-[0.05em] uppercase font-medium">STYLING GUIDE</h3>
              <a href="#" className="text-[0.8rem] tracking-[0.1em] uppercase font-medium border-b border-current pb-0.5 hover:text-marina-primary transition-colors">
                VIEW ALL
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {guideCards.map(card => (
                <div key={card.id} className="group cursor-pointer">
                  <div
                    className="aspect-[4/5] mb-4 overflow-hidden"
                    style={{ backgroundColor: card.bg }}
                  />
                  <p className="font-playfair text-xl leading-snug">{card.title}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
