import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Brands } from "@/components/sections/brands";
import { Coverage } from "@/components/sections/coverage";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Phillips ScreenCare — Laptop & TV Screen Repair in Kisii, Kenya",
  description:
    "Professional laptop and TV screen repair in Kisii. OCA bonding technology. Same-day laptop repairs, 90-day warranty. Call or WhatsApp for a free quote.",
};

function Divider() {
  return <hr className="mx-auto max-w-6xl border-t border-slate-200 px-4 sm:px-6" />;
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <WhyChooseUs />
      <Divider />
      <Brands />
      <Divider />
      <Coverage />
      <Divider />
      <Testimonials />
    </>
  );
}
