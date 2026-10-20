"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

const categoryTabs = [
  "Signature Espresso",
  "Botanical Brews",
  "Cold Press",
  "Seasonal Specialties",
] as const;

const menuItems = [
  {
    name: "The Velvet Cortado",
    price: 5.5,
    category: "Signature Espresso",
    description:
      "Equal parts espresso and steamed oat milk, creating a silky, balanced experience.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjCSFVGeo7iu9icKQ7wcE-NMAScC_yqZIAQKIeDjPlGiiPJfN7M0r9u6rXNZArl6UfV40kavxel9yEbKFnjZIWX4ynHT_qfJ0qb7pk1jeBELQ7HtThO_ZJEkonbWB5qIP8BJ-0DS4uBu6-sgaMLh46Eyv70WEafeP095ulwLIkCBiL5XAmKHLxYgye5MxynfuG5DwtNUFjI32WKKrnAbpgUH8UzXJtzL0W9z8bPxOp6FOdnZFM-PwnmjCz-NlBYCNDrYBVbsaMhA",
    alt: "Close-up of a perfectly poured cortado with intricate latte art on a dark stone coaster, warm morning sunlight hitting the glass.",
  },
  {
    name: "Smoked Vanilla Latte",
    price: 6.75,
    category: "Signature Espresso",
    description:
      "House-made vanilla bean syrup with a hint of hickory smoke and sea salt.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEchKwdUoAkjarf-P1-2s6kt-iSEJBzclzvpyGY3PcSKWHZnYBn5bhAeyqlgmhG8nk7H8AyjJY0JYktKRquX3FFvFzIN0yWPG38rBblMtqaSGlbCryPk9UCizj6iv4F6Z4KP6TDUJwbFYaYxfH2024LRvBaRdOTEUBXEQd-ZU_Yq_13OD6412vY7-vasp26RwDd-LLG3cD8rIWD7-yrk5yorYqPXUzmhK8aMmALHIEJL1pDe1WOew55pIeNFtNNlAMVNb1-TFHGQ",
    alt: "A tall glass latte with layered milk and espresso, topped with a dusting of charcoal, against a minimalist cream background.",
  },
  {
    name: "Forest Matcha",
    price: 8.25,
    category: "Botanical Brews",
    description:
      "Ceremonial grade matcha from Uji, paired with house-made pine honey and cedar-infused milk.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnYIe6v6chbHUixBgohMk1XD0C_ubRZRJU7_fvOQY8D2yBO0lT3owGQ9f0K5LCRNlWq7YW1xPzovF5maiOmzZCQoNX8BT7ypdtWJEctp3p-T7WnWA-oICYd46d7-GILhH09kDuWDdB_ZGIXG5OcEqHit5PkRyjtc4TmBSj-er73_OTzeCa0SPZD4A8m_pPv5FhQ8a2brqCRVrkRNmju1oIXYgm5ztKiwE9TlBNH-7mYFu5G-el_lQNa3BM98Ld60z6f3SChvHu2A",
    alt: "Ceremonial grade matcha whisked into a deep green frothy liquid in a textured ceramic bowl on a dark wood surface.",
  },
  {
    name: "Ethiopian Cold Brew",
    price: 6,
    category: "Cold Press",
    description:
      "Bright, berry-led cold brew with a refined cocoa finish, served over carved ice.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEXDLiO0uIROXk96TvdOtBu6IJY0mZVga8-iDaupqreKHE3OoLVThYq3LzCnHYdDooVH8El46ryKnw1nyo6euko7jdImJAntg_3LUtQ9rIaKtgEadpBkcVvF93Hvf01BKkTlqNmHduXnWOP7e1Qo2gg_W4Jd1E3jQan4juOAYEFROdMuAymaSwMh7BYKDnOBGY4mr8BAIlaWhs83Bzn6qc1OWM9QB_6ub-I2iRM_xtONGOrNV8wHh1FZX5M3vORV1sEEc3Gk8ckQ",
    alt: "Iced specialty coffee with layered crema in warm light.",
  },
  {
    name: "Solstice Tonic",
    price: 7.25,
    category: "Seasonal Specialties",
    description:
      "Sparkling espresso, orange bitters, and rosemary-citrus syrup for a bright finish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7IsGIYrpxqvvPTkw_6FrK3OXuhbmUfuElv3OJ3P3NProayhsR4Vmtc3bQMAMRfKCYrFy7vZ0uUitcpFQT2WT6V01Irb-vt7zBaTMe7AjIO7KLUPj8hd3vRXD2EbMHZSzIWIy91-CBKe_O4m85g8eVJFmaR-71WhklidYFZft9RPFGYj9Zauact7N0U8LLSqYEjt0axm154qPua--2LYUmOVx1a3FE-uA9zQv6pLDRYeOfnJ_BUxiWqAOeyEMIYeIenKZNNhSPTQ",
    alt: "Glass of deep red seasonal tonic over ice.",
  },
] as const;

const milkOptions = ["Oat Milk", "Almond Milk", "Pistachio Milk", "Spelled Milk"];
const sweetnessOptions = ["Unsweet", "Balanced", "Full"] as const;

type BasketItem = {
  id: string;
  name: string;
  details: string;
  price: number;
  quantity: number;
};

type OrderPageClientProps = {
  pickupLocation?: string;
};

function PickupLocationNote({ pickupLocation }: OrderPageClientProps) {
  const searchParams = useSearchParams();
  const location = pickupLocation ?? searchParams.get("location");

  return location ? <> Pickup set for {location}.</> : null;
}

export function OrderPageClient({ pickupLocation }: OrderPageClientProps) {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categoryTabs)[number]>("Signature Espresso");
  const [selectedDrinkName, setSelectedDrinkName] = useState("Forest Matcha");
  const [selectedMilk, setSelectedMilk] = useState("Oat Milk");
  const [selectedSweetness, setSelectedSweetness] =
    useState<(typeof sweetnessOptions)[number]>("Balanced");
  const [quantity, setQuantity] = useState(1);
  const [basketItems, setBasketItems] = useState<BasketItem[]>([
    {
      id: "velvet-cortado",
      name: "The Velvet Cortado",
      details: "Oat Milk • Balanced",
      price: 5.5,
      quantity: 1,
    },
    {
      id: "ethiopian-cold-brew",
      name: "Ethiopian Cold Brew",
      details: "Black • Over Ice",
      price: 6,
      quantity: 1,
    },
  ]);

  const filteredMenuItems = menuItems.filter(
    (item) => item.category === activeCategory,
  );
  const selectedDrink =
    menuItems.find((item) => item.name === selectedDrinkName) ?? menuItems[2];

  const subtotal = basketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const serviceFee = basketItems.length > 0 ? 0.95 : 0;
  const total = subtotal + serviceFee;

  function addToBasket() {
    const details = `${selectedMilk} • ${selectedSweetness}`;
    setBasketItems((current) => [
      ...current,
      {
        id: `${selectedDrink.name}-${selectedMilk}-${selectedSweetness}-${current.length}`,
        name: selectedDrink.name,
        details,
        price: selectedDrink.price,
        quantity,
      },
    ]);
    setQuantity(1);
  }

  return (
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
          <Suspense
            fallback={
              pickupLocation ? ` Pickup set for ${pickupLocation}.` : null
            }
          >
            <PickupLocationNote pickupLocation={pickupLocation} />
          </Suspense>
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="space-y-12 lg:col-span-8">
          <div className="no-scrollbar flex space-x-8 overflow-x-auto pb-4">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={
                  activeCategory === tab
                    ? "whitespace-nowrap border-b-2 border-primary pb-2 font-label text-xs font-bold uppercase tracking-[0.35em]"
                    : "whitespace-nowrap pb-2 font-label text-xs uppercase tracking-[0.35em] text-outline transition-colors hover:text-primary"
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredMenuItems.map((item) => (
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
                      {formatMoney(item.price)}
                    </span>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-secondary">
                    {item.description}
                  </p>
                  <button
                    onClick={() => setSelectedDrinkName(item.name)}
                    className="w-full rounded-xl bg-primary py-4 font-label text-xs uppercase tracking-[0.35em] text-on-primary transition-colors duration-300 hover:bg-primary-container"
                  >
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
                      src={selectedDrink.image}
                      alt={selectedDrink.alt}
                      width={800}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 font-headline text-3xl font-semibold text-primary">
                      {selectedDrink.name}
                    </h3>
                    <p className="leading-relaxed text-secondary">
                      {selectedDrink.description}
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
                            key={option}
                            onClick={() => setSelectedMilk(option)}
                            className={
                              selectedMilk === option
                                ? "rounded-lg bg-primary py-3 text-sm text-on-primary transition-colors"
                                : "rounded-lg bg-surface-container-low py-3 text-sm text-secondary transition-colors hover:bg-surface-container-high"
                            }
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.35em] text-primary">
                        Sweetness Level
                      </label>
                      <div className="flex gap-3">
                        {sweetnessOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() => setSelectedSweetness(option)}
                            className={
                              selectedSweetness === option
                                ? "flex-1 rounded-lg bg-tertiary px-4 py-3 text-xs font-bold uppercase tracking-[0.35em] text-on-tertiary"
                                : "flex-1 rounded-lg bg-surface-container-low px-4 py-3 text-xs font-bold uppercase tracking-[0.35em] text-secondary transition-colors hover:bg-surface-container-high"
                            }
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="font-semibold text-primary">
                        {formatMoney(selectedDrink.price)}
                      </span>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-outline text-secondary"
                        >
                          -
                        </button>
                        <span className="font-bold text-primary">{quantity}</span>
                        <button
                          onClick={() => setQuantity((value) => value + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-outline text-secondary"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={addToBasket}
                      className="flex w-full items-center justify-center space-x-2 rounded-xl bg-primary py-5 font-label text-xs uppercase tracking-[0.35em] text-on-primary shadow-xl transition-all hover:bg-primary-container active:scale-95"
                    >
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
              {basketItems.length > 0 ? (
                basketItems.map((item) => (
                  <div key={item.id} className="group flex justify-between">
                    <div className="space-y-1">
                      <h4 className="font-body font-bold text-primary">
                        {item.name}
                      </h4>
                      <p className="font-label text-xs uppercase tracking-wider text-secondary">
                        {item.details}
                        {item.quantity > 1 ? ` • Qty ${item.quantity}` : ""}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">
                        {formatMoney(item.price * item.quantity)}
                      </div>
                      <button
                        onClick={() =>
                          setBasketItems((current) =>
                            current.filter((entry) => entry.id !== item.id),
                          )
                        }
                        className="text-[10px] font-bold uppercase tracking-[0.35em] text-error opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-secondary">
                  Your basket is empty. Add a drink to continue to checkout.
                </p>
              )}
            </div>

            <div className="mb-8 space-y-4 border-t border-outline-variant/20 pt-8">
              <div className="flex justify-between text-secondary">
                <span className="text-sm">Subtotal</span>
                <span className="text-sm">{formatMoney(subtotal)}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span className="text-sm">Service Fee</span>
                <span className="text-sm">{formatMoney(serviceFee)}</span>
              </div>
              <div className="flex justify-between pt-2 text-lg font-bold text-primary">
                <span>Total</span>
                <span>{formatMoney(total)}</span>
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
  );
}

function formatMoney(value: number) {
  return `$${value.toFixed(2)}`;
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
