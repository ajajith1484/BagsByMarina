const badges = [
  {
    label: 'MADE TO ORDER',
    sub: 'Customised for you.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'DELHI, INDIA',
    sub: 'Located in Delhi 110005.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'COD NOT AVAILABLE',
    sub: 'Prepaid orders only.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: 'PAN INDIA SHIPPING',
    sub: 'Shipping across India.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-white border-t border-b border-marina-border py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map(badge => (
            <div key={badge.label} className="flex items-center gap-4 justify-center sm:text-left text-center sm:flex-row flex-col">
              <span className="text-marina-light shrink-0">{badge.icon}</span>
              <div className="flex flex-col">
                <strong className="text-[0.85rem] tracking-[0.05em]">{badge.label}</strong>
                <span className="text-[0.85rem] text-marina-light">{badge.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
