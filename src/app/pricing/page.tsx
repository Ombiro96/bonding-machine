import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Pricing } from "@/components/sections/pricing";

export const metadata: Metadata = {
  title: "Screen Repair Pricing Kisii | Phone Screen Repair Price Kenya",
  description:
    "Transparent screen repair pricing in Kisii, Kenya. Phone screen repair from KSh 800, laptops from KSh 4,000. No hidden fees. WhatsApp for an exact quote.",
};

const FAQ_PRICING = [
  {
    q: "Are the prices fixed or estimates?",
    a: "The prices shown are starting prices. The exact quote depends on your specific device model and the extent of damage. We always confirm the price before starting any work.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept M-Pesa, cash, and bank transfer. Payment is collected after the repair is complete and you're satisfied.",
  },
  {
    q: "Do you charge for diagnosis?",
    a: "No — diagnosis is free. If we can't fix your device, you don't pay anything.",
  },
  {
    q: "Is there a price-match guarantee?",
    a: "Yes. Found a cheaper genuine repair quote elsewhere? Share it with us and we'll match it.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Pricing" }]}
        heading="Transparent Screen Repair Pricing"
        subheading="Phone screen repair from KSh 800. Laptops from KSh 4,000. No hidden fees — exact quote confirmed before any work begins."
        ctaLabel="Get an Exact Quote"
        ctaMessage="Hi Phillips ScreenCare, I'd like a screen repair price quote"
      />

      <Pricing />

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
            Pricing FAQ
          </h2>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {FAQ_PRICING.map((item) => (
              <div key={item.q} className="px-6 py-5">
                <h3 className="mb-2 font-semibold text-slate-900">{item.q}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
