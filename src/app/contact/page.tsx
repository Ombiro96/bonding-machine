import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact BondFix | Screen Repair in Nairobi, Kenya",
  description:
    "Contact BondFix for laptop or TV screen repair in Nairobi. Send us a photo of the damage and get a quote. Walk-ins welcome Mon–Sat, 8am–6pm.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Contact" }]}
        heading="Get in Touch"
        subheading="Send us a photo of the damage and we'll get back to you with a quote. Walk-ins also welcome — no appointment needed."
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
