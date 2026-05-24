import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact Phillips ScreenCare | Screen Repair in Kisii, Kenya",
  description:
    "Contact Phillips ScreenCare for laptop or TV screen repair in Kisii. Send us a photo of the damage and get a quote. Walk-ins welcome Mon–Sat, 8am–6pm.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
