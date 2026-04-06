const navigationItems = [
  { label: "Menu", href: "#", active: true },
  { label: "Locations", href: "#" },
  { label: "Our Story", href: "#" },
  { label: "Journal", href: "#" },
];

export function SiteNavbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#fcf9f4]/80 shadow-[0_20px_40px_rgba(28,28,25,0.06)] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between gap-6 px-6 sm:px-8">
        <a href="#" className="font-headline text-3xl italic text-primary">
          The Artisanal Editorial
        </a>

        <div className="hidden items-center space-x-10 font-label font-semibold tracking-tight md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.active
                  ? "border-b-2 border-primary pb-1 text-primary"
                  : "text-secondary transition-colors duration-300 hover:text-primary"
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3 sm:space-x-6">
          <button
            aria-label="Shopping bag"
            className="text-primary"
          >
            <ShoppingBagIcon className="size-6" />
          </button>
          <button className="rounded-xl bg-primary px-5 py-3 font-semibold text-on-primary transition-transform hover:scale-95 active:scale-90 sm:px-8">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
}

function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M6 8h12l-1 11H7L6 8Z" />
      <path d="M9 10V7a3 3 0 1 1 6 0v3" />
    </svg>
  );
}
