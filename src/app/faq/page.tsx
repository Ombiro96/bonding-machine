import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FAQ } from "@/components/sections/faq";
import { ServiceCtaStrip } from "@/components/sections/service-cta-strip";

export const metadata: Metadata = {
  title: "Screen Repair FAQ Kenya | Common Questions Answered | Phillips ScreenCare",
  description:
    "Answers to frequently asked questions about screen repair in Kenya. How long does it take, what is OCA bonding, warranty, pricing and more.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "FAQ" }]}
        heading="Frequently Asked Questions"
        subheading="Everything you need to know about screen repair in Nairobi — before you bring in your device."
        ctaLabel="Still Have a Question?"
        ctaMessage="Hi Phillips ScreenCare, I have a question about screen repair"
      />

      <FAQ />

      <ServiceCtaStrip message="Hi Phillips ScreenCare, I have a question about screen repair" />
    </>
  );
}
