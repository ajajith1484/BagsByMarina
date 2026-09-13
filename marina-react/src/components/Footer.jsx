import { useState } from 'react';

const socialColors = ['#D39F6B', '#F1EFE9', '#A3AA9A', '#DCD9D4', '#8C6A53', '#A19889', '#C1B4A5'];

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const shopLinks = ['All Bags', 'New Arrivals', 'Bestsellers', 'Gift Cards', 'Sale'];
const helpLinks = ['Shipping & Delivery', 'Returns & Exchanges', 'FAQs', 'Care Guide', 'Track Your Order'];
const aboutLinks = ['Our Story', 'Craftsmanship', 'Sustainability', 'Journal', 'Contact Us'];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-marina-footer text-white" id="about">
      {/* Social Feed Strip */}
      <div className="flex flex-col md:flex-row bg-[#6D7260]">
        <div className="px-8 py-6 md:min-w-[250px] flex items-center justify-center md:justify-start text-white text-[0.85rem] tracking-[0.1em]">
          FOLLOW @STYLE_BAG_HUB
        </div>
        <div className="flex flex-1">
          {socialColors.map((color, i) => (
            <div key={i} className="flex-1 aspect-square" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-16">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex flex-col items-start mb-6">
              <span className="font-playfair text-xl tracking-[0.15em] font-medium text-center">STYLE BAG HUB</span>
              <span className="text-[0.65rem] tracking-[0.25em] text-[#999]">BAG BOUTIQUE STORE</span>
            </a>
            <div className="text-[#999] text-[0.85rem] mb-6 flex flex-col gap-2">
              <p>Customised bags & accessories.<br/>Premium quality made to order.</p>
              <address className="not-italic mt-2">
                Delhi, India 110005<br/>
                GSTIN: 07AATFB8725GZ2
              </address>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/style_bag_hub" target="_blank" rel="noopener" aria-label="Instagram Main" className="text-[#999] hover:text-white transition-colors"><InstagramIcon /></a>
              <a href="#" aria-label="TikTok" className="text-[#999] hover:text-white transition-colors"><TikTokIcon /></a>
              <a href="#" aria-label="Email" className="text-[#999] hover:text-white transition-colors"><EmailIcon /></a>
            </div>
          </div>

          {/* Shop Links */}
          <FooterLinkColumn title="SHOP" links={shopLinks} />

          {/* Help Links */}
          <FooterLinkColumn title="HELP" links={helpLinks} />

          {/* About Links */}
          <FooterLinkColumn title="ABOUT" links={aboutLinks} />

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-[0.85rem] tracking-[0.1em] font-medium mb-6">STAY IN THE LOOP</h4>
            <p className="text-[#999] text-sm mb-6">Be the first to know about new arrivals, exclusive offers, and more.</p>
            <form onSubmit={handleSubmit} className="flex border-b border-[#555] pb-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-transparent border-none text-white flex-1 outline-none text-sm placeholder-[#666]"
              />
              <button type="submit" aria-label="Subscribe" className="text-[#999] hover:text-white transition-colors">
                <ArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-[0.85rem] tracking-[0.1em] font-medium mb-6">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map(link => (
          <li key={link}>
            <a href="#" className="text-[#999] text-sm hover:text-white transition-colors">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
