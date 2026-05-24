import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Brands } from "@/components/sections/brands";
import { Coverage } from "@/components/sections/coverage";
import { Testimonials } from "@/components/sections/testimonials";
import { ServiceCtaStrip } from "@/components/sections/service-cta-strip";

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
      <ServiceCtaStrip />
    </>
  );
}
