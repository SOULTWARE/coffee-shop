"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const filters = ["Nearby", "Brooklyn", "Manhattan", "Queens"] as const;

const locations = [
  {
    status: "Open Until 8:00 PM",
    title: "The DUMBO Roastery",
    address: "45 Washington St, Brooklyn, NY 11201",
    borough: "Brooklyn",
    zip: "11201",
    distance: "0.4 MI",
    amenities: ["High-speed Wifi", "Quiet Zone"],
    mapPosition: { top: "35%", left: "25%" },
    cardTitle: "The DUMBO Experience",
    cardCopy:
      "Our flagship roastery overlooks the East River, offering a curated selection of rare microlots and a panoramic view of the Manhattan bridge.",
    cardImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSih1bMOoBHxg-4OEZZCD5rZVrju6nIkppJDH0MXLuR5X8VQX3qqtvwMeS4tqH6nat5U8H2PwqIoBkzGxoyLWUiNQtNrrvw0xcpAExLFmiSH2o491sceLoRlNA1Yp7Hv6zTbzU76yJnhRG-rpNuVlFBlsI0Mj7wQPxmZK4FtYYhsy9Z1vxG461kC2lQpzMjh8iUIX13gs-TUaoucXCFCZwRqvswJLeSEb5JbxgWfZJLrLSjQrC6kyRP78wyEQ4le0Bp23lCQMDxw",
  },
  {
    status: "Opens at 7:00 AM",
    title: "SoHo Editorial Suite",
    address: "128 Prince St, New York, NY 10012",
    borough: "Manhattan",
    zip: "10012",
    distance: "1.2 MI",
    amenities: ["Pour-over Bar", "Studio Seating"],
    mapPosition: { top: "52%", left: "61%" },
    cardTitle: "The SoHo Suite",
    cardCopy:
      "A quieter study in espresso and editorial calm, designed for slower meetings, notebooks, and measured pours.",
    cardImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRTvmE9ukU4LQ21OBSyY8pK8pR22NvvFK58YrlNGHTHdBZPpW7TS3qlg8Bts--RABaK9XT-34u1EEb4WSZqjwgL0CutTd8dox6xXT5qvG3GE_OHQddmBEyyw3XXDPJxJq_UDfvfuXd1psm31GQfcNL7KGFrJpnKosYiVBJuDYYTOQz0e5V8g-fF6ULEDor2td7mgi0PRM33deMR4rDheWG5Rj8d0lpGzeLNZoucrFCI04_7UqH4NStwhlgzHUnnbUvBe9uaHsLhA",
  },
  {
    status: "Open Until 9:00 PM",
    title: "Williamsburg Wharf",
    address: "2 North 6th St, Brooklyn, NY 11249",
    borough: "Brooklyn",
    zip: "11249",
    distance: "2.8 MI",
    amenities: ["Riverside Seating", "Late Hours"],
    mapPosition: { top: "30%", left: "74%" },
    cardTitle: "The Williamsburg Wharf",
    cardCopy:
      "Built for longer evenings with deep roasts, seasonal pastries, and a slower view over the waterfront.",
    cardImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCapszkoyc4K5q3QStTb-6JDhWxdj0MFJxSM3yeVMDbiJBWAtLA5K6C-qiCf0hRcsePNiYIkvS6VPUyhJYZXMJ4OXem9mel0BIWn0hfleIhRTKDXHHhpHZMBU9Bk_G6jbwLIf-1fDRnswq9ZtJ-NuwYG0SVzvyPSYTTgHqP1GyiWm18iSOl181BZ28xZw0qVqLZhLBbNraalFRBgzo23nZw26z2FsiiHoo_BGfXUVjHP4_frLx168sTXQlCNQYpBmn4mxnJ6GmHEw",
  },
] as const;

export default function LocationsPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("Nearby");
  const [query, setQuery] = useState("");
  const [selectedTitle, setSelectedTitle] = useState<string>(locations[0].title);
  const [zoom, setZoom] = useState(100);

  const visibleLocations = locations.filter((location) => {
    const matchesFilter =
      activeFilter === "Nearby" || location.borough === activeFilter;
    const haystack = `${location.title} ${location.address} ${location.borough} ${location.zip}`.toLowerCase();
    const matchesQuery = haystack.includes(query.trim().toLowerCase());

    return matchesFilter && matchesQuery;
  });

  const selectedLocation =
    visibleLocations.find((location) => location.title === selectedTitle) ??
    visibleLocations[0] ??
    locations[0];

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
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by city, neighborhood, or zip code"
                className="w-full rounded-xl bg-surface-container-lowest py-4 pr-4 pl-12 font-body text-on-surface-variant shadow-sm outline-none ring-0 transition focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={
                    activeFilter === filter
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
            {visibleLocations.length > 0 ? (
              visibleLocations.map((location) => {
                const isSelected = location.title === selectedLocation.title;

                return (
                  <article
                    key={location.title}
                    onClick={() => setSelectedTitle(location.title)}
                    className={
                      isSelected
                        ? "group cursor-pointer border-l-4 border-primary bg-surface p-8 transition-all"
                        : "group cursor-pointer border-l-4 border-transparent bg-surface-container-low p-8 transition-all hover:bg-surface"
                    }
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <span
                          className={`mb-1 block font-label text-[10px] font-bold uppercase tracking-[0.35em] ${
                            location.status.startsWith("Open")
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

                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        href={`/order?location=${encodeURIComponent(location.title)}`}
                        className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container"
                      >
                        <CartIcon className="size-4" />
                        Order Here
                      </Link>
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedTitle(location.title);
                        }}
                        className="rounded-xl bg-surface-container-highest px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-variant"
                      >
                        Details
                      </button>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="p-8 text-secondary">
                No locations match that search. Try another neighborhood or zip
                code.
              </div>
            )}
          </div>
        </section>

        <section className="relative hidden flex-1 bg-surface-container md:block">
          <div
            className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply grayscale transition-transform duration-300"
            style={{ transform: `scale(${zoom / 100})` }}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyLJa5IT2ACTDnOhmTu_NTKXMAK8QMpLPxNQESbFdxWn4Xe1yiXA_mS9mOEqfJFmoX6ihmn8azSTkgG8NI91QyYu5U0NevbcQZyzP5me3OCPzqFSNy48BviTWT6P4KwtJov4toL2fI5skLPjt7G1mHwHPvHTtAPExok3G_sg1WqidRFPDX5XknE0Xzd6R6sPKZUb4gIcFwwwrZWBfSqcndoEo-h9CR-4zz3tCgyI3gg1Inf8r2kVG6eYlqMSvIhFsu5DaOLTLtjQ"
              alt="Abstract minimalist city map with clean lines and neutral tones soft shadows and elegant cartography."
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent" />

          {visibleLocations.map((location) => {
            const isSelected = location.title === selectedLocation.title;

            return (
              <button
                key={location.title}
                onClick={() => setSelectedTitle(location.title)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={location.mapPosition}
              >
                <div className="group relative flex flex-col items-center">
                  <div
                    className={`mb-2 rounded-lg px-4 py-2 text-sm font-bold shadow-xl transition-opacity ${
                      isSelected
                        ? "bg-primary text-on-primary opacity-100"
                        : "bg-surface text-primary opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {location.title}
                  </div>
                  <div
                    className={`flex items-center justify-center rounded-full border-4 shadow-2xl transition-transform hover:scale-105 ${
                      isSelected
                        ? "size-10 border-on-primary bg-primary text-on-primary"
                        : "size-8 border-on-primary bg-surface-container-highest text-primary"
                    }`}
                  >
                    {isSelected ? (
                      <CoffeeIcon className="size-5" />
                    ) : (
                      <div className="size-2 rounded-full bg-primary" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}

          <div className="absolute right-12 bottom-12 max-w-sm">
            <div className="rounded-2xl border border-white/20 bg-surface/80 p-8 shadow-[0_20px_40px_rgba(28,28,25,0.06)] backdrop-blur-xl">
              <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={selectedLocation.cardImage}
                  alt={selectedLocation.cardTitle}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-headline text-xl font-bold text-primary">
                {selectedLocation.cardTitle}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {selectedLocation.cardCopy}
              </p>
            </div>
          </div>

          <div className="absolute top-12 right-12 flex flex-col space-y-4">
            <button
              onClick={() => setZoom((value) => Math.min(value + 10, 130))}
              className="flex size-12 items-center justify-center rounded-xl bg-surface text-primary shadow-lg transition-colors hover:bg-surface-container-high"
            >
              <PlusIcon className="size-5" />
            </button>
            <button
              onClick={() => setZoom((value) => Math.max(value - 10, 80))}
              className="flex size-12 items-center justify-center rounded-xl bg-surface text-primary shadow-lg transition-colors hover:bg-surface-container-high"
            >
              <MinusIcon className="size-5" />
            </button>
            <button
              onClick={() => {
                setActiveFilter("Nearby");
                setQuery("");
                setSelectedTitle(locations[0].title);
                setZoom(100);
              }}
              className="flex size-12 items-center justify-center rounded-xl bg-surface text-primary shadow-lg transition-colors hover:bg-surface-container-high"
            >
              <LocationIcon className="size-5" />
            </button>
          </div>
        </section>
      </main>
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
