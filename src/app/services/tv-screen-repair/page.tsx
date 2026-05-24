import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCtaStrip } from "@/components/sections/service-cta-strip";

export const metadata: Metadata = {
  title: "TV Screen Repair Nairobi Kenya | Fix My TV Screen | BondFix",
  description:
    "Repair my TV in Nairobi Kenya. Samsung, LG, Sony, Hisense, TCL TV screen repair. Fix cracked TV screen, lines on screen, no picture. 90-day warranty. WhatsApp for a quote.",
};

const TV_BRANDS = [
  { name: "Samsung", models: "QLED, Crystal UHD, Smart TV, Frame TV" },
  { name: "LG", models: "OLED, NanoCell, 4K, Smart TV" },
  { name: "Sony", models: "Bravia 4K, OLED, Android TV" },
  { name: "Hisense", models: "ULED, 4K, Smart TV" },
  { name: "TCL", models: "4K, Roku TV, QLED" },
  { name: "Skyworth", models: "Android TV, 4K Smart TV" },
  { name: "Syinix", models: "LED, Smart TV series" },
  { name: "Vitron", models: "LED, Smart TV series" },
];

const TV_DAMAGE_TYPES = [
  { icon: "💔", label: "Cracked or shattered TV screen" },
  { icon: "📊", label: "Vertical or horizontal lines on screen" },
  { icon: "🌑", label: "Dark patches or half-black screen" },
  { icon: "🔌", label: "TV turns on but no picture" },
  { icon: "🌈", label: "Colour distortion or white screen" },
  { icon: "📍", label: "Dead pixels or dark spots" },
];

export default function TvScreenRepairPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Services", href: "/services" }, { label: "TV Screen Repair" }]}
        heading="TV Screen Repair in Nairobi, Kenya"
        subheading="Repair my TV in Nairobi — cracked panels, lines on screen, dark patches, no picture. We fix Samsung, LG, Sony, Hisense and TCL televisions with a 90-day warranty."
        ctaLabel="Get TV Repair Quote"
        ctaMessage="Hi BondFix, I need a TV screen repair"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Fix My TV Screen in Nairobi
            </h2>
            <div className="space-y-4 leading-relaxed text-slate-600">
              <p>
                Need to <strong>repair my TV in Kenya</strong> or{" "}
                <strong>fix my TV screen</strong>? BondFix provides professional television screen
                repair and replacement in Nairobi. From cracked panels to mysterious lines and dark
                patches — we diagnose and fix it properly.
              </p>
              <p>
                We are Nairobi&rsquo;s specialists in <strong>television repair</strong> covering all
                the most popular brands sold in Kenya. Whether you have a budget Hisense,
                a mid-range Samsung Smart TV, or a premium LG OLED, we source the correct panel and
                install it professionally.
              </p>
              <p>
                <strong>Smart TV repair in Kenya</strong> is one of our growing specialties. Modern
                smart TVs are expensive — a screen repair at BondFix typically costs a fraction of
                buying a new television, and our 90-day warranty gives you confidence in the repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
            TV Screen Problems We Fix
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TV_DAMAGE_TYPES.map((type) => (
              <div
                key={type.label}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="text-2xl">{type.icon}</span>
                <span className="font-medium text-slate-700">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
            TV Brands We Repair in Nairobi
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TV_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="mb-1 font-semibold text-slate-900">{brand.name}</h3>
                <p className="text-sm text-slate-500">{brand.models}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">TV Repair Pricing in Nairobi</h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-slate-600">
                TV screen repair pricing depends on the screen size, panel type (LED, QLED, OLED), and
                brand. As a general guide:
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-500">&#10003;</span>
                  <span>Budget and mid-range TVs (32&quot;–50&quot;): <strong>from KSh 5,000</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-500">&#10003;</span>
                  <span>Large Smart TVs (55&quot;+): <strong>from KSh 8,000</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-500">&#10003;</span>
                  <span>Premium OLED/QLED panels: quoted individually</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-slate-500">
                We confirm the exact price before starting any repair — no surprises.
              </p>
              <div className="mt-6">
                <a
                  href="https://wa.me/254722631353?text=Hi%20BondFix%2C%20I%20need%20a%20TV%20screen%20repair%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
                >
                  Get Free TV Repair Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCtaStrip message="Hi BondFix, I need a TV screen repair" />
    </>
  );
}
