import { useState } from 'react';

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const products = [
  { id: 1, name: 'The Aurelia Tote', price: '₹1,899', image: '/assets/bag1.webp' },
  { id: 2, name: 'The Soft Curve', price: '₹1,599', image: '/assets/bag2.webp' },
  { id: 3, name: 'The Siena Satchel', price: '₹1,999', image: '/assets/bag3.webp' },
  { id: 4, name: 'The Luna Mini', price: '₹1,299', image: '/assets/bag1.webp' },
];

function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="group">
      <div className="relative aspect-square bg-[#E2E4E0] mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <button
          aria-label="Add to wishlist"
          onClick={() => setWishlisted(w => !w)}
          className={`absolute bottom-4 right-4 bg-white rounded-full w-9 h-9 flex items-center justify-center
            opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300 hover:text-red-500
            ${wishlisted ? 'opacity-100 translate-y-0 text-red-500' : ''}`}
        >
          <HeartIcon />
        </button>
      </div>
      <div className="flex justify-between items-baseline">
        <h4 className="font-inter font-normal text-base">{product.name}</h4>
        <span className="font-medium">{product.price}</span>
      </div>
    </div>
  );
}

export default function NewArrivals() {
  return (
    <section id="shop" className="py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="flex justify-between items-baseline mb-16 border-b border-marina-border pb-4">
          <h3 className="font-playfair text-2xl tracking-[0.05em] uppercase font-medium">NEW ARRIVALS</h3>
          <a href="#" className="text-[0.8rem] tracking-[0.1em] uppercase font-medium border-b border-current pb-0.5 hover:text-marina-primary transition-colors">
            VIEW ALL
          </a>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
