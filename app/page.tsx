import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    origin: "Ethiopia — Yirgacheffe",
    title: "Floral & Citrus Notes",
    description: "Light Roast | Washed Process",
    price: "$28.00 / 250g",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzUkm3XXh3sDoOJpjilq33qLAKvj2qbMfh6FR0ii9gTKJpECXGzcEFT7otPyaJWKkjXZMEuVDLHFM71JMwC8AfdLXgvGfYyID73eK-8VYi6vc5RFJV73kBDDRxPqWsqnNVhZxSdGvijfhrYfyG3FBi6UJ3Bck03hDEuoqrApFIVlMr0GgAUvhNICpbk-T1xXH1Jz8STcQ2QL3umO0q-AMDza1Qj3dlWhyJMggPStd3GawFvZcqGASJWZ-veOs_aKv87TWXBy31eA",
    alt: "Minimalist white coffee bean bag with black typography on a textured light wooden surface with loose coffee beans.",
  },
  {
    origin: "Colombia — Huila",
    title: "Caramel & Red Fruit",
    description: "Medium Roast | Natural Process",
    price: "$24.00 / 250g",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1sAqn9nJG-EtcIMlzatM49LpgP_Pkp2NzHneavc2GJ_dgiQGdeX7RZ6T1_40Sdi-DrxD_cKc826VyjVIIpMJw8loDrEbLeVOrspymU92Q_Ad4yg8OJWBv5sK0Uot-ZATSDqvRcTjWg9Y9IR6eK7HjrJP1oqiZaYkCnnuEXrHhw1VeNEOgusDH--erJleJwusrk_V7v3XYsIccLbm4tXsKkXzuGrv3uJ2ib0qWlf0XZx74dskcyRgjQc0pyUSXgGJqicSd2fJwSw",
    alt: "Dark coffee bean packaging with gold embossed details resting against a branch of dried coffee cherries.",
  },
  {
    origin: "Sumatra — Gayo",
    title: "Earthy & Dark Cacao",
    description: "Dark Roast | Wet Hulled",
    price: "$32.00 / 250g",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJnUX4NbioH7nm4UpilcUlrjWYHDubdDGXxarYsmjHVnHPA0kmo-8SJuGrHPDuDy51neZlC5_xhbVHfZCOiBwowFwJnvlCuhc0esM8hQP3mlcQuJFEw8vK75HegP3aQthjMv5cVQMTzYvlmCBHZjz1lkHtMr8ZSfotC3QryY--MetbNzuA90k4duEq3EN9ZzFT3y6x3ORdMSwXDGErdiltO_27Zb2fw2ZVznPD7p2tI1fbTHfYDov1xN2tbb1OAFxfYVC5t4QpCA",
    alt: "Luxury coffee storage canister with a minimalist label on a dark marble countertop with soft warm highlights.",
  },
];

const journalEntries = [
  {
    title: "The Science of Water Temperature",
    label: "Brewing Guides",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5UwirvrXB4hu11i-vRUzcSIdp601ZbF8S_UIhssplteBJBZn5VA4NLBiQwduUdpDu7EZnJioRpXsIUP4mSc9R_J8ulATjnLvlbvMegTigM_wcmt-ofuEax5RuNgJd21KbQ_ZsEA6JmZZwQn-poyscYPRWN0PYlVvlqMgXG-m377AQtyIg8ubDH5564c1RXUaN35mN-1L_GjdvhbuhgHHvSzOQuJc4KvrZVWj3GzHgyT38Tvm1_jB2Ww08Y7pgV31vIS43L6Q8vg",
    alt: "Detailed close-up of steam rising from a freshly poured cup of black coffee in a dimly lit setting.",
  },
  {
    title: "Sourcing the Season",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbU3Ik3Vj4VXPSiqMlDHUwZlmfbqDddkzc4pbmOfC1vMeF6ASyCTERDE0u_hAT4iVWdrK-Htggb2GpmdXgnWhlm0aunqeKRIHnpIs6uMiexfU6HwUrWqNGEn79WZb6Kn3OFFLGBxN2A6sSvzLz_hDNzX3Ol906ItylJoNHT5tkHtJI9ORXQbFDC5I1vwYe7zYce6pqitWyhIW66ujfp-mG_sPNXjZ6W0NacGKhr63e0-bgivvLVM9HrrQ5UNBYDCG91dbUtifm9A",
    alt: "Aesthetic arrangement of coffee beans and fresh green leaves on a white linen surface.",
  },
  {
    title: "New York City: Opening Day",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1tPTliun2kjAhv7ctyjudQa2dGd9Mn62eYTiJlvQ_LpG7f2VfAJ2dS_7bZ3dZpPEYbrSKnCOodOJXgFnV5YR7Zg6GAtCjjewPnDVvzaf-PAg78G31i1Ii2ZgOzFh_1s61o_K46TTaxk9e06xiCuoaTP9rDB0CsXBHA4z3KuX9XXGrD94rxyvKMCMxXavv6RCIjMrwLNTfOHZCLy6qXkbw_c0WRo0SGxBqaMTwtertHE13v2iVZU4s0IxYuIyW0trEh97sdXQGYg",
    alt: "Blurred motion of a busy cafe at dusk with lights reflecting on the pavement outside.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <main className="pt-20">
        <section className="relative flex min-h-[921px] items-center overflow-hidden px-6 sm:px-8 md:px-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbsr9sbET4KI0g3z-I4hLgXBjB1SeQHPZ-NwMYpGpY0Py4NUna-PpyfbFBM5X8VtVws-WgBaUDMa5TFflWlAV9uUy4BIUZ0j9SWXxcPO0kw1RSEteYHP3-00WpmEH2xRrTej2QeIrZHJ-BFtvik32-_e6JvVb_rXougZ0Ka-zAasoICRYK0SPwBKqlRdjD4KU0zLxH5sRaGFArzKwXekE9-HlF96R68LUdJlltQsNr8uXVJEKP9BTR3LgCJDW1o8YJJJMFJE0dCA"
              alt="Cinematic wide shot of a high-end minimalist coffee bar with warm atmospheric lighting, brass accents, and a professional espresso machine."
              fill
              priority
              className="object-cover grayscale-[20%] contrast-[1.1]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c19]/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-2xl text-on-primary">
            <span className="mb-4 block font-label text-xs uppercase tracking-[0.35em]">
              Established 2024
            </span>
            <h1 className="mb-8 font-headline text-5xl leading-tight font-bold md:text-7xl">
              The Art of the <br />
              <span className="font-normal italic">Morning Ritual</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-[#e5e2dd] opacity-90 md:text-xl">
              Discover a curated selection of single-origin beans, roasted with
              precision for the modern alchemist.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/menu"
                className="rounded-xl bg-gradient-to-br from-primary to-primary-container px-10 py-4 font-bold text-on-primary shadow-xl transition-transform hover:scale-[0.98] active:scale-95"
              >
                Shop the Collection
              </Link>
              <Link
                href="/menu#seasonal"
                className="flex items-center gap-2 border-b border-on-primary/30 pb-1 font-semibold transition-all hover:border-on-primary"
              >
                Discover Our Blends
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-24 sm:px-8 md:px-16">
          <div className="mx-auto grid max-w-screen-2xl items-center gap-16 md:grid-cols-2">
            <div className="group relative">
              <div className="absolute -inset-4 -rotate-2 rounded-xl bg-surface-container-highest" />
              <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDtjgT2v3HBj22nI3FyqPuv5g7jxYzlTHBCS16I7sKloy9IWKlUA-OkXOGrMrGsYlrEQnxOANZ1Jo4OFo_UTAFvK88TRaDXdVMgy8EeU1a3fyl_SLnSSr7qCYfpHX4QYzAeatXyMhDky7T5eKR9aHanR4HaHh8X6v1DeCto_TwgRbRrf7nUtiLiqo2HaYIKHWkuRIzf2dU4l1dqdo7vdRgxbYoPCncxIKGR9BFee1GM8TIsYMGRCHp5VXp67TMdTVVqcefhVNm8A"
                  alt="Top-down close-up of a perfectly poured ceramic cup of latte with intricate rosette latte art on a dark stone coaster."
                  width={900}
                  height={900}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block rounded-full bg-tertiary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.35em] text-tertiary">
                Daily Feature
              </div>
              <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
                The Oat Milk <br />
                <span className="font-normal italic">Gold Rush</span>
              </h2>
              <p className="text-lg leading-relaxed text-secondary">
                Our signature house-made honey-lavender syrup folded into
                double-shot espresso and creamy micro-foam oat milk. Topped
                with a dusting of organic bee pollen.
              </p>
              <div className="flex items-baseline gap-4">
                <span className="font-headline text-3xl font-bold text-primary">
                  $7.50
                </span>
                <span className="text-secondary line-through">$9.00</span>
              </div>
              <Link
                href="/order"
                className="block w-full rounded-xl bg-primary px-12 py-4 text-center font-bold text-on-primary transition-all hover:shadow-2xl md:w-auto"
              >
                Reserve a Cup
              </Link>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-surface px-6 py-24 sm:px-8 md:px-16">
          <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-20 md:flex-row-reverse">
            <div className="grid w-full grid-cols-2 gap-4 md:w-1/2">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRTvmE9ukU4LQ21OBSyY8pK8pR22NvvFK58YrlNGHTHdBZPpW7TS3qlg8Bts--RABaK9XT-34u1EEb4WSZqjwgL0CutTd8dox6xXT5qvG3GE_OHQddmBEyyw3XXDPJxJq_UDfvfuXd1psm31GQfcNL7KGFrJpnKosYiVBJuDYYTOQz0e5V8g-fF6ULEDor2td7mgi0PRM33deMR4rDheWG5Rj8d0lpGzeLNZoucrFCI04_7UqH4NStwhlgzHUnnbUvBe9uaHsLhA"
                alt="Stylish interior of a coffee shop with mid-century modern furniture, large windows, and plants in warm sunlight."
                width={700}
                height={875}
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCapszkoyc4K5q3QStTb-6JDhWxdj0MFJxSM3yeVMDbiJBWAtLA5K6C-qiCf0hRcsePNiYIkvS6VPUyhJYZXMJ4OXem9mel0BIWn0hfleIhRTKDXHHhpHZMBU9Bk_G6jbwLIf-1fDRnswq9ZtJ-NuwYG0SVzvyPSYTTgHqP1GyiWm18iSOl181BZ28xZw0qVqLZhLBbNraalFRBgzo23nZw26z2FsiiHoo_BGfXUVjHP4_frLx168sTXQlCNQYpBmn4mxnJ6GmHEw"
                alt="Barista in a leather apron carefully preparing a pour-over coffee with focused lighting on the steam and glass dripper."
                width={700}
                height={875}
                className="mt-12 aspect-[4/5] w-full rounded-xl object-cover"
              />
            </div>
            <div className="w-full space-y-8 md:w-1/2">
              <h2 className="font-headline text-4xl leading-tight font-bold text-primary md:text-6xl">
                Crafted for the <br />
                <span className="font-normal italic">Modern Alchemist</span>
              </h2>
              <div className="h-1 w-20 bg-tertiary" />
              <p className="text-lg leading-relaxed text-secondary">
                We believe that coffee is more than just caffeine; it is a
                ritual of transformation. Since our founding in 2024, we&apos;ve
                partnered directly with small-batch farmers from Ethiopia to
                Colombia to bring you beans that tell a story of the soil and
                the hands that harvested them.
              </p>
              <p className="text-lg leading-relaxed text-secondary italic">
                &quot;The Artisanal Editorial isn&apos;t just a shop; it&apos;s a
                living journal of flavor and community.&quot;
              </p>
              <Link
                href="/our-story"
                className="flex items-center gap-4 font-label text-xs font-bold uppercase tracking-[0.35em] text-primary transition-all hover:gap-6"
              >
                Read Our Full Story
                <ExternalLinkIcon className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface-container px-6 py-24 sm:px-8 md:px-16">
          <div className="mx-auto max-w-screen-2xl">
            <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-md">
                <span className="mb-2 block font-label text-xs uppercase tracking-[0.35em] text-secondary">
                  The Archive
                </span>
                <h2 className="font-headline text-4xl font-bold text-primary">
                  Single-Origin Reserve
                </h2>
              </div>
              <Link
                href="/menu"
                className="hidden border-b-2 border-primary pb-1 font-bold text-primary md:block"
              >
                View All Beans
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {featuredProducts.map((product) => (
                <article key={product.title} className="group">
                  <div className="mb-8 overflow-hidden rounded-xl bg-surface-container-lowest p-8 transition-all hover:bg-surface-bright">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={720}
                      height={720}
                      className="aspect-square w-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-[0.35em] text-tertiary">
                      {product.origin}
                    </span>
                    <h3 className="font-headline text-xl font-bold text-primary">
                      {product.title}
                    </h3>
                    <p className="text-sm text-secondary">{product.description}</p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="font-bold text-primary">
                        {product.price}
                      </span>
                      <Link
                        href="/order"
                        aria-label={`Add ${product.title} to cart`}
                        className="text-primary transition-colors hover:text-tertiary"
                      >
                        <CartPlusIcon className="size-5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface px-6 py-24 sm:px-8 md:px-16">
          <div className="mx-auto max-w-screen-2xl">
            <h2 className="mb-16 text-center font-headline text-4xl font-bold text-primary">
              From the Journal
            </h2>
            <div className="grid grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
              <Link
                href="/journal"
                className="group relative overflow-hidden rounded-xl md:col-span-8"
              >
                <Image
                  src={journalEntries[0].image}
                  alt={journalEntries[0].alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-10">
                  <span className="mb-2 font-label text-xs uppercase tracking-[0.35em] text-white/80">
                    {journalEntries[0].label}
                  </span>
                  <h3 className="font-headline text-3xl font-bold text-white">
                    {journalEntries[0].title}
                  </h3>
                </div>
              </Link>
              <div className="grid gap-6 md:col-span-4 md:grid-rows-2">
                {journalEntries.slice(1).map((entry) => (
                  <Link
                    href="/journal"
                    key={entry.title}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <Image
                      src={entry.image}
                      alt={entry.alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="font-headline text-xl font-bold text-white">
                        {entry.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto w-full bg-[#f6f3ee] px-6 py-16 sm:px-8 md:px-16">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <div className="font-headline text-3xl italic text-primary">
              The Artisanal Editorial
            </div>
            <p className="leading-relaxed text-secondary">
              Crafting moments of clarity through the science and soul of
              coffee.
            </p>
            <div className="flex gap-4">
              <ShareIcon className="size-5 text-primary" />
              <MailIcon className="size-5 text-primary" />
            </div>
          </div>
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Discover
            </span>
            <ul className="space-y-4 text-secondary">
              <li className="transition-colors hover:text-[#0e2d15]">
                <a href="#">Single Origins</a>
              </li>
              <li className="transition-colors hover:text-[#0e2d15]">
                <a href="#">Wholesale</a>
              </li>
              <li className="transition-colors hover:text-[#0e2d15]">
                <a href="#">Brew Equipment</a>
              </li>
              <li className="transition-colors hover:text-[#0e2d15]">
                <a href="#">Gift Cards</a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Company
            </span>
            <ul className="space-y-4 text-secondary">
              <li className="transition-colors hover:text-[#0e2d15]">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="transition-colors hover:text-[#0e2d15]">
                <a href="#">Terms of Service</a>
              </li>
              <li className="transition-colors hover:text-[#0e2d15]">
                <a href="#">Careers</a>
              </li>
              <li className="transition-colors hover:text-[#0e2d15]">
                <a href="#">Press Kit</a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Stay Refined
            </span>
            <p className="text-xs text-secondary">
              Join our list for seasonal releases and brewing journals.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-b border-outline bg-transparent py-2 text-primary placeholder:text-outline focus:border-primary focus:outline-none"
              />
              <Link
                href="/journal"
                className="absolute right-0 bottom-2 text-xs font-bold uppercase tracking-[0.35em] text-primary"
              >
                Join
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-screen-2xl border-t border-outline-variant/30 pt-8 text-center md:text-left">
          <p className="text-xs tracking-[0.2em] text-[#817471]">
            © 2024 The Artisanal Editorial. Crafted for the modern alchemist.
          </p>
        </div>
      </footer>
    </div>
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

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 14v5h-14v-14h5" />
    </svg>
  );
}

function CartPlusIcon({ className }: { className?: string }) {
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
      <path d="M12 9v4" />
      <path d="M10 11h4" />
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
