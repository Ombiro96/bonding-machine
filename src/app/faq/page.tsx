import type { Metadata } from "next";
import { FAQ } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Screen Repair FAQ Kenya | Common Questions Answered | Phillips ScreenCare",
  description:
    "Answers to frequently asked questions about screen repair in Kenya. How long does it take, what is OCA bonding, warranty, pricing and more.",
};

export default function FAQPage() {
  return (
    <>

      <FAQ />

    </>
  );
}
