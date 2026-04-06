import Image from "next/image";
import Link from "next/link";

const espressoDrinks = [
  {
    name: "Classic Latte",
    price: "$5.50",
    description:
      "Double shot of espresso with silky steamed oat milk and a micro-foam finish.",
  },
  {
    name: "Flat White",
    price: "$5.00",
    description:
      "Pure espresso velvet with a thin layer of microfoam, originating from our Melbourne roots.",
  },
  {
    name: "Cortado",
    price: "$4.50",
    description:
      "Equal parts espresso and warm milk to reduce acidity without losing intensity.",
  },
  {
    name: "Cappuccino",
    price: "$5.00",
    description:
      "Balanced layers of espresso, steamed milk, and a deep cap of dense foam.",
  },
];

const summerCurations = [
  {
    name: "Ceremonial Matcha",
    price: "$6.50",
    description:
      "Stone-ground from Uji, whisked with maple and macadamia milk.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCY1QrC7df2usHLy4CUvLKJXj5n3_M0FJprpOPNZpuG5U556YanX1bVXazYDsLB1vX3qoQAWn_Um9FbQdG69bQ3gLCRBpUtqAONFDy5MNqoIax9wTPsZt_XI0s2YTKWieA65r4hDu40cFVK8ECVlyE_uX7BY9HZRSbpZKLL9Md5zSBTvOmLWLemxJ4D6J2EJ3MbYXVLqaRnnET2690zxZGHSVq9kSZ_t4YUij7g7EXtcz036Iue48K4bl2haY4yOI8Yfl7eyHsUhA",
    alt: "Artisanal matcha latte with intricate heart-shaped latte art in a textured ceramic mug.",
  },
  {
    name: "Hibiscus Tonic",
    price: "$6.00",
    description:
      "Sparkling espresso with organic hibiscus reduction and citrus bitters.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7IsGIYrpxqvvPTkw_6FrK3OXuhbmUfuElv3OJ3P3NProayhsR4Vmtc3bQMAMRfKCYrFy7vZ0uUitcpFQT2WT6V01Irb-vt7zBaTMe7AjIO7KLUPj8hd3vRXD2EbMHZSzIWIy91-CBKe_O4m85g8eVJFmaR-71WhklidYFZft9RPFGYj9Zauact7N0U8LLSqYEjt0axm154qPua--2LYUmOVx1a3FE-uA9zQv6pLDRYeOfnJ_BUxiWqAOeyEMIYeIenKZNNhSPTQ",
    alt: "A glass of deep red hibiscus iced tea with a slice of orange and ice cubes.",
  },
];

const pastries = [
  {
    name: "Wildberry Galette",
    price: "$6.25",
    description:
      "Flaky rye crust filled with seasonal berries and a hint of vanilla bean.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZi6mXtA5kIa8Lu81icWGUW_C7BqoQQ00XB7-nXvb_r6Wv_7Ksfrk95VcgfdDvirGQCatM88eK2GedDUpDf6aN5y5FFietAIlGeDYrhqTKeg2SUWpjcW4Stm7NW8RASu5OmyQE85Vw6RAtzsnY2cIqF7e8Yjr9dOkUJHmrPLZpe3BjDvhuiAF5tvU-pHkMEFxh8OCNr3Co6Fx0nvvlJLdsCG8AuI3xxjA1UhY8DArn108lLVUAnqfg58A5wUC5rJXzm-L7h95_sw",
    alt: "Golden flaky croissants stacked on a wire cooling rack in a warm bakery kitchen.",
  },
  {
    name: "Honey Sea Salt Brioche",
    price: "$5.50",
    description:
      "Rich, buttery dough glazed with local honey and topped with Maldon flakes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe0NB334gnRf7DLDcPqdJQkUQOwknnzc_BE9BRx4_KykT2O0ZkiS2-qvXWwpxjHY5JyS1sjT14FLo6uBcexKkCtIj_0qEjOOm5GCk82GxFlJU37QAa6IOstoyZTiilvqXKCeTLgEW_hLIDudxvtDBOR_EvUtppHgysaJMZTdnZObr6l3hVuTIxSePL4CPDC7nsCqgIXLuDVcVAqq2Lf0zA3xh2ORuquOqpD9IvpQI5jGN5u28gFehQvCNJIX66CyXx_IfMpKOJSQ",
    alt: "Sourdough bread with a crispy crust and flour dusting on a rustic wooden table.",
  },
  {
    name: "Dark Chocolate Pain",
    price: "$5.75",
    description:
      "72% single-origin chocolate encased in 36 layers of hand-laminated dough.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4zldeIDRKw1QciaopXKRXpnmZvsTqbi5tk4JP7colNZZHQEoUcG96iy15wzcJygQQJ3DVx8UrZR-YZ73pnIVP80C7d1oTPRyV7G0qUjFwkTH8QK6s7qTcYrpP-_dUNyYAuXn7pjoxwWQE9gGfJrfoZMBudVtwOEMvGBbLOcDNHczTZfsxBVAk38li1V1gwfwOTY7_-_oANg1SimIa9lpMCLXN1LRIr7z292AetKg6Eyqv4Wjw3LOr4D0wz7WTihf_u-UehzeUyQ",
    alt: "Close-up of a chocolate pain au chocolat with visible flaky layers and rich chocolate center.",
  },
];

export default function MenuPage() {
  return (
    <>
      <main className="pb-24 pt-32">
        <header className="mx-auto mb-20 max-w-screen-2xl px-6 sm:px-8">
          <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="mb-4 block font-label text-xs uppercase tracking-[0.35em] text-secondary">
                The Daily Curated List
              </span>
              <h1 className="font-headline text-6xl leading-[0.9] font-bold tracking-tighter text-primary md:text-8xl">
                Morning
                <br />
                <span className="font-normal italic">Rituals.</span>
              </h1>
            </div>
            <div className="pb-4 md:col-span-5">
              <p className="max-w-md text-lg leading-relaxed text-secondary">
                A selection of sustainably sourced beans, precision-roasted in
                small batches and paired with house-made syrups and local dairy.
              </p>
            </div>
          </div>
        </header>

        <div className="sticky top-20 z-40 mb-16 border-y border-outline-variant/10 bg-background/95 py-6 backdrop-blur-sm">
          <div className="mx-auto max-w-screen-2xl px-6 sm:px-8">
            <div className="no-scrollbar flex space-x-12 overflow-x-auto">
              <a
                href="#espresso"
                className="whitespace-nowrap font-label text-xs font-bold uppercase tracking-[0.35em] text-primary"
              >
                Espresso Drinks
              </a>
              <a
                href="#brewed"
                className="whitespace-nowrap font-label text-xs uppercase tracking-[0.35em] text-secondary transition-colors hover:text-primary"
              >
                Brewed Coffee
              </a>
              <a
                href="#seasonal"
                className="whitespace-nowrap font-label text-xs uppercase tracking-[0.35em] text-secondary transition-colors hover:text-primary"
              >
                Seasonal Specials
              </a>
              <a
                href="#pastries"
                className="whitespace-nowrap font-label text-xs uppercase tracking-[0.35em] text-secondary transition-colors hover:text-primary"
              >
                Pastries
              </a>
            </div>
          </div>
        </div>

        <section
          id="espresso"
          className="mx-auto mb-32 max-w-screen-2xl px-6 sm:px-8"
        >
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="group aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4XQMHdcdBn4eYJlUBCYip2f_jAq1eq7l43zMl1jqfDgfvkMdvuKvGoMmw68stXuE-C0JJ65uxRmmf1rCerGWo54Kk6NPCYnk-XPnLuUKzKnOsfViXF9hbXaO0n5wvQG7K7XBOXnm9y-6E_JBPS1ZrvLf3qTTenQVBl8pZijuj097fBqO5ZRJARaOv6EJv591mC0emckgnH7BHxlczDlF0bQQMDm2gidxgK-eb3Dkekgg1CaReTnYIeZ_J-C_JqutqDr11MWTLEw"
                  alt="Close-up of a perfectly pulled espresso shot with rich crema in a ceramic cup on a dark stone surface with warm lighting."
                  width={900}
                  height={1125}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-8">
                <h2 className="mb-4 font-headline text-3xl font-bold">
                  The Espresso Bar
                </h2>
                <p className="leading-relaxed text-secondary">
                  Our signature house blend, featuring notes of dark chocolate,
                  toasted hazelnut, and dried plum.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:col-span-8">
              {espressoDrinks.map((drink) => (
                <article
                  key={drink.name}
                  className="group border-b border-outline-variant/20 pb-8 transition-colors hover:border-primary"
                >
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <h3 className="font-headline text-xl font-bold">
                      {drink.name}
                    </h3>
                    <span className="font-label text-primary">{drink.price}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary">
                    {drink.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="seasonal" className="mb-32 bg-surface-container-low py-24">
          <div className="mx-auto max-w-screen-2xl px-6 sm:px-8">
            <div className="mb-16">
              <span className="mb-2 block font-label text-xs font-bold uppercase tracking-[0.35em] text-tertiary">
                Limited Release
              </span>
              <h2 className="font-headline text-5xl font-bold text-primary">
                Summer Curations
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <article className="group overflow-hidden rounded-xl bg-surface shadow-sm md:col-span-2 md:row-span-2">
                <div className="h-80 overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEXDLiO0uIROXk96TvdOtBu6IJY0mZVga8-iDaupqreKHE3OoLVThYq3LzCnHYdDooVH8El46ryKnw1nyo6euko7jdImJAntg_3LUtQ9rIaKtgEadpBkcVvF93Hvf01BKkTlqNmHduXnWOP7e1Qo2gg_W4Jd1E3jQan4juOAYEFROdMuAymaSwMh7BYKDnOBGY4mr8BAIlaWhs83Bzn6qc1OWM9QB_6ub-I2iRM_xtONGOrNV8wHh1FZX5M3vORV1sEEc3Gk8ckQ"
                    alt="A tall glass of iced specialty coffee with aesthetic layers of cream and botanical garnishes in a sunlit setting."
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="font-headline text-2xl font-bold">
                      Elderflower Cold Brew
                    </h3>
                    <span className="font-label text-xl">$7.50</span>
                  </div>
                  <p className="mb-6 text-secondary">
                    Our 18-hour cold brew infused with botanical elderflower
                    syrup and topped with a sprig of fresh mint.
                  </p>
                  <Link
                    href="/order"
                    className="flex items-center font-label text-xs font-bold uppercase tracking-[0.35em] text-tertiary transition-transform hover:translate-x-2"
                  >
                    Explore The Blend
                    <ArrowRightIcon className="ml-2 size-4" />
                  </Link>
                </div>
              </article>

              {summerCurations.map((item) => (
                <article
                  key={item.name}
                  className="flex items-center gap-8 rounded-xl bg-surface p-8 group md:col-span-2"
                >
                  <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-surface-container-high">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={256}
                      height={256}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 font-headline text-xl font-bold">
                      {item.name}
                    </h3>
                    <p className="mb-2 text-sm text-secondary">
                      {item.description}
                    </p>
                    <span className="font-label text-primary">{item.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pastries"
          className="mx-auto mb-32 max-w-screen-2xl px-6 sm:px-8"
        >
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h2 className="mb-4 font-headline text-5xl font-bold">
                From the Hearth.
              </h2>
              <p className="leading-relaxed text-secondary">
                Baked daily at dawn. We use heritage grains and seasonal fruits
                sourced from local orchards to create pastries that complement
                our roasts.
              </p>
            </div>
            <div className="border-b border-primary pb-2 font-label text-xs uppercase tracking-[0.35em] text-primary">
              View Full Bakery List
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {pastries.map((pastry, index) => (
              <article
                key={pastry.name}
                className={index === 1 ? "space-y-4 md:mt-24" : "space-y-4"}
              >
                <div className="mb-6 aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={pastry.image}
                    alt={pastry.alt}
                    width={700}
                    height={700}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-headline text-xl font-bold">
                    {pastry.name}
                  </h3>
                  <span className="font-label text-primary">{pastry.price}</span>
                </div>
                <p className="text-sm leading-relaxed text-secondary">
                  {pastry.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto w-full bg-[#f6f3ee] px-6 py-16 sm:px-8">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <div className="font-headline text-3xl italic text-primary">
              The Artisanal Editorial
            </div>
            <p className="text-sm leading-relaxed text-secondary">
              A curated coffee experience dedicated to the modern alchemist. We
              source ethical, roast intentional, and serve with soul.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Discover
            </span>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-secondary transition-colors hover:text-[#0e2d15]"
                  href="#"
                >
                  Wholesale
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-secondary transition-colors hover:text-[#0e2d15]"
                  href="#"
                >
                  Brewing Guides
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-secondary transition-colors hover:text-[#0e2d15]"
                  href="#"
                >
                  Subscription
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-secondary transition-colors hover:text-[#0e2d15]"
                  href="#"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Support
            </span>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-secondary transition-colors hover:text-[#0e2d15]"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-secondary transition-colors hover:text-[#0e2d15]"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-secondary transition-colors hover:text-[#0e2d15]"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Follow
            </span>
            <div className="flex space-x-4">
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest transition-all duration-300 hover:bg-primary hover:text-on-primary"
                href="#"
              >
                <ShareIcon className="size-5" />
              </a>
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest transition-all duration-300 hover:bg-primary hover:text-on-primary"
                href="#"
              >
                <MailIcon className="size-5" />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-[10px] leading-relaxed uppercase tracking-[0.2em] text-secondary">
                © 2024 The Artisanal Editorial. Crafted for the modern
                alchemist.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
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
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="m8.2 11 7.2-4.2" />
      <path d="m8.2 13 7.2 4.2" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
