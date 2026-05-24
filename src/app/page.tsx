import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Brands } from "@/components/sections/brands";
import { Coverage } from "@/components/sections/coverage";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Phillips ScreenCare — Laptop & TV Screen Repair in Kisii, Kenya",
  description:
    "Professional laptop and TV screen repair in Kisii. OCA bonding technology. Same-day laptop repairs, 90-day warranty. Call or WhatsApp for a free quote.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Brands />
      <Coverage />
      <Testimonials />
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get a Repair Quote
            </h2>
            <p className="mt-3 text-slate-400">
              Send us a photo of the damage and we&rsquo;ll get back to you with a price.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
