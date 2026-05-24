import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laptop Screen Repair Kisii Kenya | Fix My Laptop Screen | Phillips ScreenCare",
  description:
    "Repair my laptop screen in Kisii, Kenya. Same-day laptop display replacement for Dell, HP, Lenovo, Asus, Acer, MacBook. 90-day warranty. WhatsApp for a free quote.",
};

const BRANDS = [
  { name: "Dell", models: "Inspiron, Latitude, XPS, Precision" },
  { name: "HP", models: "Pavilion, Envy, EliteBook, ProBook" },
  { name: "Lenovo", models: "ThinkPad, IdeaPad, Yoga, Legion" },
  { name: "Asus", models: "VivoBook, ZenBook, TUF, ROG" },
  { name: "Acer", models: "Aspire, Nitro, Swift, Predator" },
  { name: "MacBook", models: "MacBook Air, MacBook Pro (Intel & M-series)" },
  { name: "Toshiba", models: "Satellite, Portege, Tecra" },
  { name: "Samsung", models: "Galaxy Book series" },
];

const DAMAGE_TYPES = [
  { icon: "💔", label: "Cracked or shattered display" },
  { icon: "📍", label: "Dead pixels or black spots" },
  { icon: "📊", label: "Vertical or horizontal lines" },
  { icon: "🌑", label: "Half-dark or dim screen" },
  { icon: "🔌", label: "No display / blank screen" },
  { icon: "🌈", label: "Colour distortion or flickering" },
];

export default function LaptopScreenRepairPage() {
  return (
    <>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Repair My Laptop Screen in Kisii
            </h2>
            <div className="space-y-4 leading-relaxed text-slate-600">
              <p>
                Looking to <strong>repair my laptop in Kenya</strong> or{" "}
                <strong>fix my laptop screen</strong>? Phillips ScreenCare provides professional laptop display
                replacement in Kisii. Whether your screen is cracked from a drop, shows vertical lines,
                or has dead pixels, we diagnose and repair it the same day.
              </p>
              <p>
                We perform <strong>laptop display replacement in Kisii</strong> for all major brands
                using OEM-grade or high-quality compatible panels. Our technicians are experienced with
                both standard and high-resolution displays, including Full HD, 4K, OLED and Retina panels.
              </p>
              <p>
                Unlike phone screens where OCA glass bonding applies, laptop screens typically require a
                full panel replacement. We source the correct panel for your exact model, replace it
                professionally, and calibrate display settings for the best result — all covered by our
                90-day warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
            Types of Laptop Screen Damage We Fix
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DAMAGE_TYPES.map((type) => (
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
            Laptop Brands We Repair
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BRANDS.map((brand) => (
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
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Laptop Screen Repair Pricing
            </h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-slate-600">
                Laptop screen replacement in Kisii starts from{" "}
                <strong className="text-blue-600">KSh 1,500</strong> depending on your laptop model and
                the display panel required. High-resolution and OLED panels may cost more. We confirm
                the exact price before any work begins.
              </p>
              <p className="mt-4 text-slate-600">
                Turnaround time is typically same-day for most common models, subject to parts
                availability. We maintain stock of the most common panels for Dell, HP and Lenovo.
              </p>
              <div className="mt-6">
                <a
                  href="https://wa.me/254722631353?text=Hi%20Phillips ScreenCare%2C%20I%20need%20a%20laptop%20screen%20repair%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
                >
                  Get Free Quote on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
