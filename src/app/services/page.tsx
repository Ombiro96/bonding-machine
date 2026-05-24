import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Laptop & TV Screen Repair Services in Kisii, Kenya | Phillips ScreenCare",
  description:
    "Professional laptop and TV screen repair in Kisii, Kenya. OCA bonding technology. Same-day laptop repairs, 90-day warranty on all work.",
};

const SERVICES = [
  {
    icon: "💻",
    title: "Laptop Screen Repair",
    description:
      "Cracked display, dead pixels, broken lines, or black screen? We source and bond replacement panels for Dell, HP, Lenovo, Asus, Acer, MacBook, MSI and more — most repairs done the same day.",
    href: "/services/laptop-screen-repair",
    tags: ["Dell", "HP", "Lenovo", "Asus", "Acer", "MacBook", "MSI"],
  },
  {
    icon: "📺",
    title: "TV Screen Repair",
    description:
      "Cracked panel, lines on screen, dark patches, or no picture? We repair Samsung, LG, Sony, Hisense, TCL, Skyworth and more — all sizes from 32\" to 85\".",
    href: "/services/tv-screen-repair",
    tags: ["Samsung", "LG", "Sony", "Hisense", "TCL", "Skyworth"],
  },
];

const TRUST_SIGNALS = [
  "Same-day repairs on most devices",
  "90-day warranty on every repair",
  "Free diagnosis — no fix, no fee",
  "OCA bonding technology — bubble-free",
  "Certified, experienced technicians",
  "Transparent pricing, no hidden fees",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Services" }]}
        heading="Laptop & TV Screen Repair in Kisii"
        subheading="Professional screen repair using OCA bonding technology. Same-day laptop repairs and expert TV panel replacement — all with a 90-day warranty."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <div
                key={service.href}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 text-5xl">{service.icon}</div>
                <h2 className="mb-3 text-xl font-bold text-slate-900">{service.title}</h2>
                <p className="mb-5 flex-1 leading-relaxed text-slate-500">{service.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
            Why Choose Phillips ScreenCare?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600">
                  &#10003;
                </span>
                <span className="text-sm font-medium text-slate-700">{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
