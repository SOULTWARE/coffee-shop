"use client";

import Image from "next/image";
import { useState } from "react";

const orderItems = [
  {
    name: "The Velvet Cortado",
    details: "Oat Milk • Balanced",
    price: "$5.50",
  },
  {
    name: "Forest Matcha",
    details: "Pine Honey • Oat Milk",
    price: "$8.25",
  },
];

const paymentMethods = [
  { id: "card", eyebrow: "Selected", label: "Card Ending 2419" },
  { id: "wallet", eyebrow: "Wallet", label: "Apple Pay" },
  { id: "gift", eyebrow: "Alternative", label: "Gift Balance" },
] as const;

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] =
    useState<(typeof paymentMethods)[number]["id"]>("card");
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({
    name: "Avery Sinclair",
    phone: "(555) 041-2024",
    email: "avery@editorial.coffee",
  });

  return (
    <>
      <main className="mx-auto max-w-screen-2xl px-6 pt-32 pb-20 sm:px-8">
        <header className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="mb-4 block font-label text-xs uppercase tracking-[0.35em] text-secondary">
              Final Composition
            </span>
            <h1 className="max-w-2xl font-headline text-5xl leading-[1.02] font-bold text-primary md:text-7xl">
              Checkout for the
              <br />
              <span className="font-normal italic">Morning Ritual.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-secondary">
              Confirm your selection, choose your pickup details, and complete
              the order with the same precision we bring to every cup.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <section className="space-y-10 lg:col-span-7">
            <div className="overflow-hidden rounded-2xl bg-surface-container-low shadow-[0_20px_40px_rgba(28,28,25,0.06)]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative min-h-[320px]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSih1bMOoBHxg-4OEZZCD5rZVrju6nIkppJDH0MXLuR5X8VQX3qqtvwMeS4tqH6nat5U8H2PwqIoBkzGxoyLWUiNQtNrrvw0xcpAExLFmiSH2o491sceLoRlNA1Yp7Hv6zTbzU76yJnhRG-rpNuVlFBlsI0Mj7wQPxmZK4FtYYhsy9Z1vxG461kC2lQpzMjh8iUIX13gs-TUaoucXCFCZwRqvswJLeSEb5JbxgWfZJLrLSjQrC6kyRP78wyEQ4le0Bp23lCQMDxw"
                    alt="Interior of a refined coffee bar with warm amber lighting and minimalist wood counters."
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="space-y-8 p-8 lg:p-10">
                  <div>
                    <span className="mb-3 block font-label text-xs font-bold uppercase tracking-[0.35em] text-tertiary">
                      Pickup Editorial
                    </span>
                    <h2 className="font-headline text-3xl font-bold text-primary">
                      The DUMBO Roastery
                    </h2>
                    <p className="mt-3 leading-relaxed text-secondary">
                      45 Washington St, Brooklyn, NY 11201. Your order will be
                      prepared fresh and held at the walnut collection counter.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <DetailRow label="Pickup Location" value="The DUMBO Roastery" />
                    <DetailRow label="Ready By" value="10-15 Minutes" />
                    <DetailRow label="Order Type" value="Takeaway" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-surface p-8 shadow-[0_20px_40px_rgba(28,28,25,0.04)] ring-1 ring-outline-variant/10">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="font-headline text-3xl font-bold text-primary">
                  Contact Details
                </h3>
                <span className="font-label text-xs uppercase tracking-[0.35em] text-secondary">
                  Step 1
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field
                  label="Full Name"
                  value={form.name}
                  onChange={(value) => setForm((current) => ({ ...current, name: value }))}
                />
                <Field
                  label="Phone Number"
                  value={form.phone}
                  onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
                />
                <Field
                  label="Email Address"
                  value={form.email}
                  className="md:col-span-2"
                  onChange={(value) => setForm((current) => ({ ...current, email: value }))}
                />
              </div>
            </div>

            <div className="rounded-2xl bg-surface-container-low p-8 shadow-[0_20px_40px_rgba(28,28,25,0.04)]">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="font-headline text-3xl font-bold text-primary">
                  Payment Method
                </h3>
                <span className="font-label text-xs uppercase tracking-[0.35em] text-secondary">
                  Step 2
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={
                      paymentMethod === method.id
                        ? "rounded-xl border border-primary bg-primary px-5 py-4 text-left text-on-primary"
                        : "rounded-xl border border-outline-variant bg-surface px-5 py-4 text-left text-primary transition-colors hover:border-primary"
                    }
                  >
                    <span
                      className={`block font-label text-[10px] uppercase tracking-[0.35em] ${
                        paymentMethod === method.id ? "opacity-80" : "text-outline"
                      }`}
                    >
                      {method.eyebrow}
                    </span>
                    <span className="mt-2 block font-semibold">{method.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <aside className="lg:col-span-5">
            <div className="sticky top-32 rounded-2xl bg-surface-container-low p-8 shadow-[0_20px_40px_rgba(28,28,25,0.06)]">
              <div className="mb-8 border-b border-outline-variant/20 pb-6">
                <span className="mb-3 block font-label text-xs uppercase tracking-[0.35em] text-secondary">
                  Order Summary
                </span>
                <h2 className="font-headline text-3xl font-bold text-primary">
                  Your Selection
                </h2>
              </div>

              <div className="mb-8 space-y-6">
                {orderItems.map((item) => (
                  <div key={item.name} className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-primary">{item.name}</h4>
                      <p className="mt-1 font-label text-xs uppercase tracking-[0.3em] text-secondary">
                        {item.details}
                      </p>
                    </div>
                    <span className="font-semibold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8 space-y-4 border-t border-outline-variant/20 pt-6">
                <PriceRow label="Subtotal" value="$13.75" />
                <PriceRow label="Service Fee" value="$0.95" />
                <PriceRow label="Tax" value="$1.18" />
                <div className="flex justify-between pt-2 text-lg font-bold text-primary">
                  <span>Total</span>
                  <span>$15.88</span>
                </div>
              </div>

              <button
                onClick={() => setPlaced(true)}
                className="w-full rounded-xl bg-tertiary px-6 py-5 font-label text-xs font-bold uppercase tracking-[0.35em] text-on-tertiary shadow-xl transition-colors hover:bg-tertiary-container"
              >
                Place Order
              </button>

              <p className="mt-6 text-center font-label text-[10px] uppercase tracking-[0.35em] text-outline">
                Secure checkout • Pickup notification by SMS • Prepared fresh
              </p>

              {placed ? (
                <div className="mt-8 rounded-xl bg-surface p-6 text-sm leading-relaxed text-secondary">
                  <p className="font-headline text-2xl text-primary">
                    Order confirmed.
                  </p>
                  <p className="mt-2">
                    A pickup confirmation has been prepared for {form.name}. We
                    will notify {form.phone} when the order is ready.
                  </p>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  className,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <label className={className ? `space-y-3 ${className}` : "space-y-3"}>
      <span className="font-label text-xs font-bold uppercase tracking-[0.35em] text-primary">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl bg-surface-container-low px-5 py-4 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </label>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
      <span className="font-label text-xs uppercase tracking-[0.35em] text-outline">
        {label}
      </span>
      <span className="font-medium text-primary">{value}</span>
    </div>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-secondary">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
