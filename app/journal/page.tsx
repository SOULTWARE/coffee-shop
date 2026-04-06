"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  "All",
  "Brewing Guides",
  "Origins",
  "City Notes",
  "Editorial Essays",
] as const;

const articles = [
  {
    title: "The Science of Water Temperature",
    category: "Brewing Guides",
    excerpt:
      "A practical study in how a few degrees can sharpen sweetness, mute bitterness, and reshape extraction.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5UwirvrXB4hu11i-vRUzcSIdp601ZbF8S_UIhssplteBJBZn5VA4NLBiQwduUdpDu7EZnJioRpXsIUP4mSc9R_J8ulATjnLvlbvMegTigM_wcmt-ofuEax5RuNgJd21KbQ_ZsEA6JmZZwQn-poyscYPRWN0PYlVvlqMgXG-m377AQtyIg8ubDH5564c1RXUaN35mN-1L_GjdvhbuhgHHvSzOQuJc4KvrZVWj3GzHgyT38Tvm1_jB2Ww08Y7pgV31vIS43L6Q8vg",
  },
  {
    title: "Sourcing the Season",
    category: "Origins",
    excerpt:
      "How seasonal buying windows affect fruit character, fermentation, and why freshness at origin matters.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbU3Ik3Vj4VXPSiqMlDHUwZlmfbqDddkzc4pbmOfC1vMeF6ASyCTERDE0u_hAT4iVWdrK-Htggb2GpmdXgnWhlm0aunqeKRIHnpIs6uMiexfU6HwUrWqNGEn79WZb6Kn3OFFLGBxN2A6sSvzLz_hDNzX3Ol906ItylJoNHT5tkHtJI9ORXQbFDC5I1vwYe7zYce6pqitWyhIW66ujfp-mG_sPNXjZ6W0NacGKhr63e0-bgivvLVM9HrrQ5UNBYDCG91dbUtifm9A",
  },
  {
    title: "New York City: Opening Day",
    category: "City Notes",
    excerpt:
      "The first morning in DUMBO, the sound of the grinders, and the quiet choreography behind an opening service.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1tPTliun2kjAhv7ctyjudQa2dGd9Mn62eYTiJlvQ_LpG7f2VfAJ2dS_7bZ3dZpPEYbrSKnCOodOJXgFnV5YR7Zg6GAtCjjewPnDVvzaf-PAg78G31i1Ii2ZgOzFh_1s61o_K46TTaxk9e06xiCuoaTP9rDB0CsXBHA4z3KuX9XXGrD94rxyvKMCMxXavv6RCIjMrwLNTfOHZCLy6qXkbw_c0WRo0SGxBqaMTwtertHE13v2iVZU4s0IxYuIyW0trEh97sdXQGYg",
  },
  {
    title: "Why Atmosphere Matters at the Bar",
    category: "Editorial Essays",
    excerpt:
      "On sound, light, pace, and why the environment of a cafe changes the way coffee is perceived.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRTvmE9ukU4LQ21OBSyY8pK8pR22NvvFK58YrlNGHTHdBZPpW7TS3qlg8Bts--RABaK9XT-34u1EEb4WSZqjwgL0CutTd8dox6xXT5qvG3GE_OHQddmBEyyw3XXDPJxJq_UDfvfuXd1psm31GQfcNL7KGFrJpnKosYiVBJuDYYTOQz0e5V8g-fF6ULEDor2td7mgi0PRM33deMR4rDheWG5Rj8d0lpGzeLNZoucrFCI04_7UqH4NStwhlgzHUnnbUvBe9uaHsLhA",
  },
];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const visibleArticles = articles.filter(
    (article) =>
      activeCategory === "All" || article.category === activeCategory,
  );

  return (
    <>
      <main className="pb-24 pt-32">
        <section className="mx-auto max-w-screen-2xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="mb-4 block font-label text-xs uppercase tracking-[0.35em] text-secondary">
                Notes, Methods, Dispatches
              </span>
              <h1 className="font-headline text-6xl leading-[0.92] font-bold text-primary md:text-8xl">
                From the
                <br />
                <span className="font-normal italic">Journal.</span>
              </h1>
            </div>
            <div className="md:col-span-5">
              <p className="max-w-md text-lg leading-relaxed text-secondary">
                A living editorial archive of brewing technique, sourcing
                context, city openings, and the culture around the morning
                ritual.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-screen-2xl px-6 sm:px-8">
          <div className="no-scrollbar flex gap-3 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "rounded-full bg-primary px-6 py-3 font-label text-xs font-bold uppercase tracking-[0.35em] text-on-primary"
                    : "rounded-full bg-surface-container-low px-6 py-3 font-label text-xs font-bold uppercase tracking-[0.35em] text-secondary transition-colors hover:bg-surface-container"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-screen-2xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <article className="overflow-hidden rounded-2xl bg-surface-container-low lg:col-span-7">
              <div className="relative min-h-[420px]">
                <Image
                  src={visibleArticles[0]?.image ?? articles[0].image}
                  alt={visibleArticles[0]?.title ?? articles[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="p-8 lg:p-10">
                <span className="mb-3 block font-label text-xs font-bold uppercase tracking-[0.35em] text-tertiary">
                  {visibleArticles[0]?.category ?? articles[0].category}
                </span>
                <h2 className="font-headline text-4xl font-bold text-primary">
                  {visibleArticles[0]?.title ?? articles[0].title}
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-secondary">
                  {visibleArticles[0]?.excerpt ?? articles[0].excerpt}
                </p>
                <Link
                  href="/menu"
                  className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 font-label text-xs font-bold uppercase tracking-[0.35em] text-primary"
                >
                  Read Alongside the Menu
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </article>

            <div className="space-y-6 lg:col-span-5">
              {visibleArticles.slice(1).map((article) => (
                <article
                  key={article.title}
                  className="grid grid-cols-[120px_1fr] gap-5 rounded-2xl bg-surface p-5 shadow-[0_20px_40px_rgba(28,28,25,0.04)]"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </div>
                  <div>
                    <span className="mb-2 block font-label text-[10px] font-bold uppercase tracking-[0.35em] text-secondary">
                      {article.category}
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-screen-2xl px-6 sm:px-8">
          <div className="rounded-2xl bg-primary px-8 py-12 text-on-primary md:px-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <span className="mb-4 block font-label text-xs uppercase tracking-[0.35em] text-[#e5e2dd]">
                  Editorial Dispatch
                </span>
                <h2 className="font-headline text-5xl font-bold">
                  Keep the journal in your morning rotation.
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-[#e5e2dd]">
                  New essays, brew notes, and seasonal releases arrive together.
                </p>
              </div>
              <div className="md:col-span-4">
                <Link
                  href="/order"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-on-primary px-6 py-5 font-label text-xs font-bold uppercase tracking-[0.35em] text-primary transition-transform hover:scale-[0.98]"
                >
                  Build an Order
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
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
