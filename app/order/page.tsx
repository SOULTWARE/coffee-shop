import Image from "next/image";
import Link from "next/link";

const categoryTabs = [
  "Signature Espresso",
  "Botanical Brews",
  "Cold Press",
  "Seasonal Specialties",
];

const menuItems = [
  {
    name: "The Velvet Cortado",
    price: "$5.50",
    description:
      "Equal parts espresso and steamed oat milk, creating a silky, balanced experience.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjCSFVGeo7iu9icKQ7wcE-NMAScC_yqZIAQKIeDjPlGiiPJfN7M0r9u6rXNZArl6UfV40kavxel9yEbKFnjZIWX4ynHT_qfJ0qb7pk1jeBELQ7HtThO_ZJEkonbWB5qIP8BJ-0DS4uBu6-sgaMLh46Eyv70WEafeP095ulwLIkCBiL5XAmKHLxYgye5MxynfuG5DwtNUFjI32WKKrnAbpgUH8UzXJtzL0W9z8bPxOp6FOdnZFM-PwnmjCz-NlBYCNDrYBVbsaMhA",
    alt: "Close-up of a perfectly poured cortado with intricate latte art on a dark stone coaster, warm morning sunlight hitting the glass.",
  },
  {
    name: "Smoked Vanilla Latte",
    price: "$6.75",
    description:
      "House-made vanilla bean syrup with a hint of hickory smoke and sea salt.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEchKwdUoAkjarf-P1-2s6kt-iSEJBzclzvpyGY3PcSKWHZnYBn5bhAeyqlgmhG8nk7H8AyjJY0JYktKRquX3FFvFzIN0yWPG38rBblMtqaSGlbCryPk9UCizj6iv4F6Z4KP6TDUJwbFYaYxfH2024LRvBaRdOTEUBXEQd-ZU_Yq_13OD6412vY7-vasp26RwDd-LLG3cD8rIWD7-yrk5yorYqPXUzmhK8aMmALHIEJL1pDe1WOew55pIeNFtNNlAMVNb1-TFHGQ",
    alt: "A tall glass latte with layered milk and espresso, topped with a dusting of charcoal, against a minimalist cream background.",
  },
];

const basketItems = [
  {
    name: "The Velvet Cortado",
    details: "Oat Milk • Regular",
    price: "$5.50",
  },
  {
    name: "Ethiopian Cold Brew",
    details: "Black • Over Ice",
    price: "$6.00",
  },
];

const milkOptions = [
  { label: "Oat Milk", active: true },
  { label: "Almond Milk" },
  { label: "Pistachio Milk" },
  { label: "Spelled Milk" },
];

export default function OrderPage() {
  return (
    <>
      <main className="mx-auto max-w-screen-2xl px-6 pt-32 pb-20 sm:px-8">
        <header className="mb-16">
          <span className="mb-4 block font-label text-xs uppercase tracking-[0.35em] text-secondary">
            Curated Selection
          </span>
          <h1 className="mb-6 max-w-2xl font-headline text-5xl leading-[1.1] font-bold text-primary md:text-6xl">
            The Morning Ritual.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-secondary">
            Choose from our meticulously sourced seasonal beans and handcrafted
            botanicals. Each cup is an alchemy of precision and passion.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <div className="no-scrollbar flex space-x-8 overflow-x-auto pb-4">
              {categoryTabs.map((tab, index) => (
                <button
                  key={tab}
                  className={
                    index === 0
                      ? "whitespace-nowrap border-b-2 border-primary pb-2 font-label text-xs font-bold uppercase tracking-[0.35em]"
                      : "whitespace-nowrap pb-2 font-label text-xs uppercase tracking-[0.35em] text-outline transition-colors hover:text-primary"
                  }
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {menuItems.map((item) => (
                <article
                  key={item.name}
                  className="group overflow-hidden rounded-xl bg-surface-container-low transition-colors duration-500 hover:bg-surface-container"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={900}
                      height={675}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="font-headline text-2xl font-semibold text-primary">
                        {item.name}
                      </h3>
                      <span className="font-body text-secondary">
                        {item.price}
                      </span>
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-secondary">
                      {item.description}
                    </p>
                    <button className="w-full rounded-xl bg-primary py-4 font-label text-xs uppercase tracking-[0.35em] text-on-primary transition-colors duration-300 hover:bg-primary-container">
                      Customize & Add
                    </button>
                  </div>
                </article>
              ))}

              <section className="rounded-xl border border-outline-variant/10 bg-surface-container-highest p-8 md:col-span-2 lg:p-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                  <div className="space-y-6">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnYIe6v6chbHUixBgohMk1XD0C_ubRZRJU7_fvOQY8D2yBO0lT3owGQ9f0K5LCRNlWq7YW1xPzovF5maiOmzZCQoNX8BT7ypdtWJEctp3p-T7WnWA-oICYd46d7-GILhH09kDuWDdB_ZGIXG5OcEqHit5PkRyjtc4TmBSj-er73_OTzeCa0SPZD4A8m_pPv5FhQ8a2brqCRVrkRNmju1oIXYgm5ztKiwE9TlBNH-7mYFu5G-el_lQNa3BM98Ld60z6f3SChvHu2A"
                        alt="Ceremonial grade matcha whisked into a deep green frothy liquid in a textured ceramic bowl on a dark wood surface."
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="mb-2 font-headline text-3xl font-semibold text-primary">
                        Forest Matcha
                      </h3>
                      <p className="leading-relaxed text-secondary">
                        Ceremonial grade matcha from Uji, paired with house-made
                        pine honey and cedar-infused milk.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="space-y-8">
                      <div>
                        <label className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.35em] text-primary">
                          Select Milk Base
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {milkOptions.map((option) => (
                            <button
                              key={option.label}
                              className={
                                option.active
                                  ? "rounded-lg bg-primary py-3 text-sm text-on-primary transition-colors"
                                  : "rounded-lg bg-surface-container-low py-3 text-sm text-secondary transition-colors hover:bg-surface-container-high"
                              }
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.35em] text-primary">
                          Sweetness Level
                        </label>
                        <div className="flex items-center justify-between space-x-4">
                          <span className="font-label text-xs uppercase text-outline">
                            Unsweet
                          </span>
                          <div className="relative h-2 flex-1 rounded-full bg-surface-container-low">
                            <div className="h-full w-1/2 rounded-full bg-tertiary-fixed-dim" />
                            <div className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-surface-container-highest bg-primary" />
                          </div>
                          <span className="font-label text-xs uppercase text-outline">
                            Full
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <div className="mb-6 flex items-center justify-between">
                        <span className="font-semibold text-primary">$8.25</span>
                        <div className="flex items-center space-x-4">
                          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-outline text-secondary">
                            -
                          </button>
                          <span className="font-bold text-primary">1</span>
                          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-outline text-secondary">
                            +
                          </button>
                        </div>
                      </div>
                      <button className="flex w-full items-center justify-center space-x-2 rounded-xl bg-primary py-5 font-label text-xs uppercase tracking-[0.35em] text-on-primary shadow-xl transition-all hover:bg-primary-container active:scale-95">
                        <CartPlusIcon className="size-4" />
                        <span>Add to Basket</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 rounded-xl bg-surface-container-low p-8 shadow-[0_20px_40px_rgba(28,28,25,0.06)]">
              <h2 className="mb-8 border-b border-outline-variant/20 pb-4 font-headline text-2xl font-semibold text-primary">
                Your Selection
              </h2>

              <div className="mb-12 space-y-6">
                {basketItems.map((item) => (
                  <div key={item.name} className="group flex justify-between">
                    <div className="space-y-1">
                      <h4 className="font-body font-bold text-primary">
                        {item.name}
                      </h4>
                      <p className="font-label text-xs uppercase tracking-wider text-secondary">
                        {item.details}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">
                        {item.price}
                      </div>
                      <button className="text-[10px] font-bold uppercase tracking-[0.35em] text-error opacity-0 transition-opacity group-hover:opacity-100">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8 space-y-4 border-t border-outline-variant/20 pt-8">
                <div className="flex justify-between text-secondary">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm">$11.50</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span className="text-sm">Service Fee</span>
                  <span className="text-sm">$0.95</span>
                </div>
                <div className="flex justify-between pt-2 text-lg font-bold text-primary">
                  <span>Total</span>
                  <span>$12.45</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="group flex w-full items-center justify-center space-x-3 rounded-xl bg-tertiary py-5 font-label text-xs uppercase tracking-[0.35em] text-on-tertiary shadow-xl transition-all hover:bg-tertiary-container"
              >
                <span>Go to Checkout</span>
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="mt-6 text-center font-label text-[10px] uppercase leading-relaxed tracking-[0.35em] text-outline">
                Ethically sourced • Prepared fresh • Ready in 10-15 mins
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="mt-auto w-full bg-[#f6f3ee] px-8 py-16">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 font-headline text-3xl italic text-primary">
              The Artisanal Editorial
            </div>
            <p className="text-sm leading-relaxed text-secondary">
              © 2024 The Artisanal Editorial. Crafted for the modern alchemist.
            </p>
          </div>
          <div>
            <span className="mb-6 block text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Quick Links
            </span>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary transition-colors hover:text-[#0e2d15]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary transition-colors hover:text-[#0e2d15]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="mb-6 block text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Partnerships
            </span>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary transition-colors hover:text-[#0e2d15]"
                >
                  Wholesale
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary transition-colors hover:text-[#0e2d15]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="mb-6 block text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Newsletter
            </span>
            <div className="relative">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full border-b border-outline bg-transparent py-2 pr-10 text-sm uppercase tracking-[0.35em] placeholder:text-outline/50 focus:border-primary focus:outline-none"
              />
              <button className="absolute top-1/2 right-0 -translate-y-1/2 text-primary">
                <ExternalArrowIcon className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
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

function ExternalArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}
