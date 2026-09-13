export default function PromoBanner() {
  return (
    <section className="flex flex-col-reverse md:flex-row">
      {/* Image Side */}
      <div className="flex-1 min-h-[300px] md:min-h-[400px] bg-[#A3AA9A]" />

      {/* Content Side */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-16 py-24 bg-marina-bg">
        <span className="text-[0.8rem] tracking-[0.15em] uppercase mb-4">LIMITED TIME</span>
        <h2 className="font-playfair text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-medium mb-10">
          Summer Edit<br />Up To 20% Off
        </h2>
        <a
          href="#"
          className="inline-block px-10 py-4 text-[0.85rem] tracking-[0.1em] uppercase bg-marina-sage text-white hover:bg-marina-sage-hover transition-colors duration-300"
        >
          SHOP THE SALE
        </a>
      </div>
    </section>
  );
}
