const categories = [
  {
    label: 'WORK BAGS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    label: 'TRAVEL BAGS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: 'EVERYDAY BAGS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    label: 'EVENING BAGS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v16H4z" />
        <path d="M4 8h16" />
        <path d="M10 4v4" />
      </svg>
    ),
  },
  {
    label: 'MINI BAGS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <rect x="4" y="8" width="16" height="12" rx="2" />
      </svg>
    ),
  },
];

export default function Categories() {
  return (
    <section className="border-b border-marina-border bg-marina-bg">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-between overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat, idx) => (
            <a
              key={cat.label}
              href="#"
              className={`flex items-center gap-4 px-4 py-8 flex-1 justify-center min-w-max hover:text-marina-primary transition-colors duration-200
                ${idx !== categories.length - 1 ? 'border-r border-marina-border' : ''}`}
            >
              {cat.icon}
              <span className="text-[0.8rem] tracking-[0.1em] uppercase font-medium">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
