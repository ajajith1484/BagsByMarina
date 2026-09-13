import { useState } from 'react';

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const AccountIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export default function Header({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'SHOP', href: '#shop' },
    { label: 'COLLECTIONS', href: '#collections' },
    { label: 'ABOUT', href: '#about' },
    { label: 'JOURNAL', href: '#journal' },
  ];

  return (
    <>
      <header className="bg-[rgba(248,247,243,0.95)] backdrop-blur-md sticky top-0 z-50 border-b border-marina-border">
        <div className="max-w-[1600px] mx-auto px-8 py-4 flex justify-between items-center">

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden transition-transform hover:scale-110"
            aria-label="Open Menu"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </button>

          {/* Logo */}
          <a href="/" className="flex flex-col items-center text-center">
            <h1 className="font-playfair text-[1.5rem] tracking-[0.15em] leading-none font-medium text-center">STYLE BAG HUB</h1>
            <span className="text-[0.65rem] tracking-[0.25em] text-marina-light">BAG BOUTIQUE STORE</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex gap-12">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.85rem] tracking-[0.1em] uppercase font-medium hover:text-marina-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex gap-6 items-center">
            <button aria-label="Search" className="transition-transform hover:scale-110"><SearchIcon /></button>
            <button aria-label="Account" className="transition-transform hover:scale-110"><AccountIcon /></button>
            <button aria-label="Cart" className="relative transition-transform hover:scale-110">
              <CartIcon />
              <span className="absolute -top-2 -right-2 bg-marina-dark text-white text-[0.65rem] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] bg-marina-bg flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <a href="/" className="flex flex-col items-center">
              <span className="font-playfair text-xl tracking-[0.15em] font-medium text-center">STYLE BAG HUB</span>
              <span className="text-[0.65rem] tracking-[0.25em] text-marina-light">BAG BOUTIQUE STORE</span>
            </a>
            <button onClick={() => setMobileOpen(false)} aria-label="Close Menu">
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-playfair text-3xl font-medium tracking-wide hover:text-marina-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
