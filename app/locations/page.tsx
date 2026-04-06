import Image from "next/image";

const filters = ["Nearby", "Brooklyn", "Manhattan", "Queens"];

const locations = [
  {
    status: "Open Until 8:00 PM",
    title: "The DUMBO Roastery",
    address: "45 Washington St, Brooklyn, NY 11201",
    distance: "0.4 MI",
    amenities: ["High-speed Wifi", "Quiet Zone"],
    active: true,
  },
  {
    status: "Opens at 7:00 AM",
    title: "SoHo Editorial Suite",
    address: "128 Prince St, New York, NY 10012",
    distance: "1.2 MI",
    amenities: [],
  },
  {
    status: "Open Until 9:00 PM",
    title: "Williamsburg Wharf",
    address: "2 North 6th St, Brooklyn, NY 11249",
    distance: "2.8 MI",
    amenities: [],
  },
];

export default function LocationsPage() {
  return (
    <>
      <main className="flex h-screen flex-col overflow-hidden pt-20 md:flex-row">
        <section className="no-scrollbar z-10 flex h-full w-full flex-col overflow-y-auto bg-surface-container-low shadow-xl md:w-[450px] lg:w-[550px]">
          <div className="space-y-8 p-8 pt-12">
            <div className="space-y-2">
              <span className="font-label text-xs uppercase tracking-[0.35em] text-secondary">
                Find a Sanctuary
              </span>
              <h1 className="font-headline text-4xl font-bold leading-tight text-primary">
                Our Locations
              </h1>
            </div>

            <div className="relative">
              <SearchIcon className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-outline" />
              <input
                type="text"
                placeholder="Search by city, neighborhood, or zip code"
                className="w-full rounded-xl bg-surface-container-lowest py-4 pr-4 pl-12 font-body text-on-surface-variant shadow-sm outline-none ring-0 transition focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  className={
                    index === 0
                      ? "whitespace-nowrap rounded-full bg-primary px-6 py-2 text-sm font-medium text-on-primary"
                      : "whitespace-nowrap rounded-full bg-surface-container-highest px-6 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-variant"
                  }
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-px">
            {locations.map((location) => (
              <article
                key={location.title}
                className={
                  location.active
                    ? "group cursor-pointer border-l-4 border-primary bg-surface p-8 transition-all"
                    : "group cursor-pointer border-l-4 border-transparent bg-surface-container-low p-8 transition-all hover:bg-surface"
                }
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span
                      className={`mb-1 block font-label text-[10px] font-bold uppercase tracking-[0.35em] ${
                        location.active || location.title === "Williamsburg Wharf"
                          ? "text-tertiary"
                          : "text-secondary"
                      }`}
                    >
                      {location.status}
                    </span>
                    <h3 className="font-headline text-xl font-bold text-primary">
                      {location.title}
                    </h3>
                    <p className="mt-1 text-sm text-secondary">
                      {location.address}
                    </p>
                  </div>
                  <span className="font-label text-xs text-outline">
                    {location.distance}
                  </span>
                </div>

                {location.amenities.length > 0 ? (
                  <div className="mb-6 flex items-center space-x-6 text-xs text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <WifiIcon className="size-4" />
                      <span>{location.amenities[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChairIcon className="size-4" />
                      <span>{location.amenities[1]}</span>
                    </div>
                  </div>
                ) : null}

                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container">
                    <CartIcon className="size-4" />
                    Order Here
                  </button>
                  <button className="rounded-xl bg-surface-container-highest px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-variant">
                    Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative hidden flex-1 bg-surface-container md:block">
          <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply grayscale">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyLJa5IT2ACTDnOhmTu_NTKXMAK8QMpLPxNQESbFdxWn4Xe1yiXA_mS9mOEqfJFmoX6ihmn8azSTkgG8NI91QyYu5U0NevbcQZyzP5me3OCPzqFSNy48BviTWT6P4KwtJov4toL2fI5skLPjt7G1mHwHPvHTtAPExok3G_sg1WqidRFPDX5XknE0Xzd6R6sPKZUb4gIcFwwwrZWBfSqcndoEo-h9CR-4zz3tCgyI3gg1Inf8r2kVG6eYlqMSvIhFsu5DaOLTLtjQ"
              alt="Abstract minimalist city map with clean lines and neutral tones soft shadows and elegant cartography."
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent" />

          <div className="absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2">
            <div className="group relative flex flex-col items-center">
              <div className="mb-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-on-primary opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                DUMBO Roastery
              </div>
              <div className="flex size-10 items-center justify-center rounded-full border-4 border-on-primary bg-primary shadow-2xl">
                <CoffeeIcon className="size-5 text-on-primary" />
              </div>
            </div>
          </div>

          <div className="absolute top-[55%] left-[65%] -translate-x-1/2 -translate-y-1/2">
            <button className="flex size-8 cursor-pointer items-center justify-center rounded-full border-4 border-on-primary bg-surface-container-highest shadow-lg transition-transform hover:scale-110">
              <div className="size-2 rounded-full bg-primary" />
            </button>
          </div>

          <div className="absolute right-12 bottom-12 max-w-sm">
            <div className="rounded-2xl border border-white/20 bg-surface/80 p-8 shadow-[0_20px_40px_rgba(28,28,25,0.06)] backdrop-blur-xl">
              <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSih1bMOoBHxg-4OEZZCD5rZVrju6nIkppJDH0MXLuR5X8VQX3qqtvwMeS4tqH6nat5U8H2PwqIoBkzGxoyLWUiNQtNrrvw0xcpAExLFmiSH2o491sceLoRlNA1Yp7Hv6zTbzU76yJnhRG-rpNuVlFBlsI0Mj7wQPxmZK4FtYYhsy9Z1vxG461kC2lQpzMjh8iUIX13gs-TUaoucXCFCZwRqvswJLeSEb5JbxgWfZJLrLSjQrC6kyRP78wyEQ4le0Bp23lCQMDxw"
                  alt="Interior of a luxury artisanal coffee shop with soft amber lighting curved wood counters and minimalist glass jars."
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-headline text-xl font-bold text-primary">
                The DUMBO Experience
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                Our flagship roastery overlooks the East River, offering a
                curated selection of rare microlots and a panoramic view of the
                Manhattan bridge.
              </p>
            </div>
          </div>

          <div className="absolute top-12 right-12 flex flex-col space-y-4">
            <button className="flex size-12 items-center justify-center rounded-xl bg-surface text-primary shadow-lg transition-colors hover:bg-surface-container-high">
              <PlusIcon className="size-5" />
            </button>
            <button className="flex size-12 items-center justify-center rounded-xl bg-surface text-primary shadow-lg transition-colors hover:bg-surface-container-high">
              <MinusIcon className="size-5" />
            </button>
            <button className="flex size-12 items-center justify-center rounded-xl bg-surface text-primary shadow-lg transition-colors hover:bg-surface-container-high">
              <LocationIcon className="size-5" />
            </button>
          </div>
        </section>
      </main>

      <footer className="hidden w-full bg-[#f6f3ee] px-8 py-16 md:block">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <a href="#" className="font-headline text-3xl italic text-primary">
              The Artisanal Editorial
            </a>
            <p className="mt-4 text-sm leading-relaxed text-secondary">
              © 2024 The Artisanal Editorial. Crafted for the modern alchemist.
            </p>
          </div>
          <div>
            <span className="mb-6 block font-label text-xs uppercase tracking-[0.35em] text-primary">
              Shop
            </span>
            <ul className="space-y-4">
              <li>
                <a className="text-sm text-secondary transition-colors hover:text-[#0e2d15]" href="#">
                  Our Coffee
                </a>
              </li>
              <li>
                <a className="text-sm text-secondary transition-colors hover:text-[#0e2d15]" href="#">
                  Brewing Gear
                </a>
              </li>
              <li>
                <a className="text-sm text-secondary transition-colors hover:text-[#0e2d15]" href="#">
                  Subscriptions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="mb-6 block font-label text-xs uppercase tracking-[0.35em] text-primary">
              Company
            </span>
            <ul className="space-y-4">
              <li>
                <a className="text-sm text-secondary transition-colors hover:text-[#0e2d15]" href="#">
                  Our Story
                </a>
              </li>
              <li>
                <a className="text-sm text-secondary transition-colors hover:text-[#0e2d15]" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-sm text-secondary transition-colors hover:text-[#0e2d15]" href="#">
                  Wholesale
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="mb-6 block font-label text-xs uppercase tracking-[0.35em] text-primary">
              Connect
            </span>
            <ul className="space-y-4">
              <li>
                <a className="text-sm text-secondary transition-colors hover:text-[#0e2d15]" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-sm text-secondary transition-colors hover:text-[#0e2d15]" href="#">
                  Journal
                </a>
              </li>
              <li>
                <a className="text-sm text-secondary transition-colors hover:text-[#0e2d15]" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M4.5 9.5a11 11 0 0 1 15 0" />
      <path d="M7.5 12.5a7 7 0 0 1 9 0" />
      <path d="M10.5 15.5a3 3 0 0 1 3 0" />
      <circle cx="12" cy="18.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChairIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M7 11V7a2 2 0 1 1 4 0v4" />
      <path d="M13 11V8a2 2 0 1 1 4 0v3" />
      <path d="M5 12h14v4H5z" />
      <path d="M7 16v3" />
      <path d="M17 16v3" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M3 4h2l2.4 10.5a1 1 0 0 0 1 .8h9.9a1 1 0 0 0 1-.8L21 7H7" />
    </svg>
  );
}

function CoffeeIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M5 9h10v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
      <path d="M15 10h2a2 2 0 1 1 0 4h-2" />
      <path d="M8 4c1 1 .5 2 0 3" />
      <path d="M12 4c1 1 .5 2 0 3" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
