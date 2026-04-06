import Image from "next/image";

const values = [
  {
    label: "Sourcing",
    title: "Direct relationships over anonymous supply.",
    description:
      "We partner with small producers across Ethiopia, Colombia, and Sumatra to preserve traceability, quality, and equitable pricing.",
  },
  {
    label: "Roasting",
    title: "Precision over volume.",
    description:
      "Every lot is profiled in small batches to preserve structure, sweetness, and the origin’s natural aromatics.",
  },
  {
    label: "Service",
    title: "Ritual over routine.",
    description:
      "The bar is designed to slow the morning down, turning a daily coffee into a composed, intentional experience.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "The first editorial roast",
    description:
      "We launched with a single espresso blend built around chocolate depth and floral lift.",
  },
  {
    year: "2025",
    title: "Brooklyn flagship opened",
    description:
      "The DUMBO roastery became our public home for tasting flights, seasonal drinks, and education.",
  },
  {
    year: "Now",
    title: "A living journal of flavor",
    description:
      "Every menu, brew guide, and collaboration extends the same philosophy: craft with clarity, serve with soul.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <main className="pb-24 pt-32">
        <section className="mx-auto max-w-screen-2xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="mb-4 block font-label text-xs uppercase tracking-[0.35em] text-secondary">
                The Editorial Ethos
              </span>
              <h1 className="max-w-3xl font-headline text-6xl leading-[0.92] font-bold text-primary md:text-8xl">
                Crafted for the
                <br />
                <span className="font-normal italic">Modern Alchemist.</span>
              </h1>
            </div>
            <div className="md:col-span-5">
              <p className="max-w-md text-lg leading-relaxed text-secondary">
                The Artisanal Editorial began as a study in how coffee can feel
                cinematic, precise, and deeply human all at once.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-screen-2xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-2xl lg:col-span-7">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRTvmE9ukU4LQ21OBSyY8pK8pR22NvvFK58YrlNGHTHdBZPpW7TS3qlg8Bts--RABaK9XT-34u1EEb4WSZqjwgL0CutTd8dox6xXT5qvG3GE_OHQddmBEyyw3XXDPJxJq_UDfvfuXd1psm31GQfcNL7KGFrJpnKosYiVBJuDYYTOQz0e5V8g-fF6ULEDor2td7mgi0PRM33deMR4rDheWG5Rj8d0lpGzeLNZoucrFCI04_7UqH4NStwhlgzHUnnbUvBe9uaHsLhA"
                alt="Warm, intentional coffee shop interior with mid-century seating and sunlight pouring through tall windows."
                width={1400}
                height={980}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-between rounded-2xl bg-surface-container-low p-8 lg:col-span-5 lg:p-10">
              <div>
                <span className="mb-4 block font-label text-xs uppercase tracking-[0.35em] text-tertiary">
                  Our Perspective
                </span>
                <h2 className="font-headline text-4xl font-bold text-primary">
                  Coffee as atmosphere, narrative, and ritual.
                </h2>
                <p className="mt-6 leading-relaxed text-secondary">
                  We built the brand around a simple belief: extraordinary
                  coffee deserves a setting that feels considered from the first
                  aroma to the final sip. That means thoughtful sourcing,
                  deliberate roasting, and spaces that invite attention rather
                  than urgency.
                </p>
              </div>
              <blockquote className="mt-10 border-l-2 border-tertiary pl-6 font-headline text-2xl italic text-primary">
                “The best cup is not only tasted. It is remembered.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="mt-24 bg-surface-container-low py-24">
          <div className="mx-auto max-w-screen-2xl px-6 sm:px-8">
            <div className="mb-14 max-w-xl">
              <span className="mb-3 block font-label text-xs uppercase tracking-[0.35em] text-secondary">
                The Framework
              </span>
              <h2 className="font-headline text-5xl font-bold text-primary">
                What guides every roast and room.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.label}
                  className="rounded-2xl bg-surface p-8 shadow-[0_20px_40px_rgba(28,28,25,0.04)]"
                >
                  <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.35em] text-tertiary">
                    {value.label}
                  </span>
                  <h3 className="font-headline text-3xl font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-secondary">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-screen-2xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="mb-3 block font-label text-xs uppercase tracking-[0.35em] text-secondary">
                Timeline
              </span>
              <h2 className="font-headline text-5xl font-bold text-primary">
                Built slowly, refined deliberately.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-secondary">
                The business grew through a sequence of deliberate moves rather
                than scale for scale’s sake. Each chapter sharpened the point of
                view.
              </p>
            </div>
            <div className="space-y-8 lg:col-span-7">
              {milestones.map((milestone) => (
                <article
                  key={milestone.year}
                  className="grid grid-cols-1 gap-4 border-b border-outline-variant/20 pb-8 md:grid-cols-[120px_1fr]"
                >
                  <span className="font-label text-xs font-bold uppercase tracking-[0.35em] text-tertiary">
                    {milestone.year}
                  </span>
                  <div>
                    <h3 className="font-headline text-3xl font-bold text-primary">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-secondary">
                      {milestone.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-screen-2xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCapszkoyc4K5q3QStTb-6JDhWxdj0MFJxSM3yeVMDbiJBWAtLA5K6C-qiCf0hRcsePNiYIkvS6VPUyhJYZXMJ4OXem9mel0BIWn0hfleIhRTKDXHHhpHZMBU9Bk_G6jbwLIf-1fDRnswq9ZtJ-NuwYG0SVzvyPSYTTgHqP1GyiWm18iSOl181BZ28xZw0qVqLZhLBbNraalFRBgzo23nZw26z2FsiiHoo_BGfXUVjHP4_frLx168sTXQlCNQYpBmn4mxnJ6GmHEw"
                alt="Barista preparing a meticulous pour-over with focused steam and warm directional light."
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-primary p-10 text-on-primary lg:p-14">
              <span className="mb-4 font-label text-xs uppercase tracking-[0.35em] text-[#e5e2dd]">
                The Invitation
              </span>
              <h2 className="font-headline text-5xl font-bold">
                Visit the spaces where the story is still being written.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-[#e5e2dd]">
                Our locations are designed as quiet sanctuaries for tasting,
                learning, and conversation. The menu changes with the season;
                the philosophy stays exact.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/locations"
                  className="rounded-xl bg-on-primary px-6 py-4 font-label text-xs font-bold uppercase tracking-[0.35em] text-primary transition-transform hover:scale-[0.98]"
                >
                  Explore Locations
                </a>
                <a
                  href="/menu"
                  className="rounded-xl border border-on-primary/30 px-6 py-4 font-label text-xs font-bold uppercase tracking-[0.35em] text-on-primary transition-colors hover:border-on-primary"
                >
                  View Menu
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
