export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-full z-0 overflow-hidden">
        <img
          src="/assets/herosection.webp"
          alt="Style Bag Hub"
          className="w-full h-full object-cover object-right"
          fetchPriority="high"
          loading="eager"
        />
      </div>



      {/* Content */}
      <div className="relative z-20 max-w-[600px] px-8 md:px-24">
        <p className="text-[0.75rem] tracking-[0.15em] uppercase text-marina-light mb-8 font-medium">
          DELHI, INDIA · PAN INDIA SHIPPING · MADE TO ORDER
        </p>
        <h2 className="font-playfair text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-medium mb-8">
          Your Style,<br />Your Bag.
        </h2>
        <p className="text-[1.1rem] text-marina-light mb-16 max-w-[400px]">
          Customised bags & accessories. Premium quality, made to order.
          Pan India shipping. (COD not available)
        </p>
        <a
          href="#shop"
          className="inline-block px-10 py-4 text-[0.85rem] tracking-[0.1em] uppercase bg-marina-sage text-white hover:bg-marina-sage-hover transition-colors duration-300"
        >
          SHOP THE COLLECTION
        </a>
      </div>
    </section>
  );
}
