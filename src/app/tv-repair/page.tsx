import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCtaStrip } from "@/components/sections/service-cta-strip";
import { whatsappUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "TV Screen Repair in Kisii, Kenya — Fix My TV | Phillips ScreenCare",
  description:
    "Repair your TV screen in Kisii, Kenya. Cracked panel, lines on screen, dark patches, no picture — we fix Samsung, LG, Sony, Hisense and more. 90-day warranty. Call or WhatsApp.",
};

const DAMAGE_TYPES = [
  { icon: "💔", label: "Cracked or shattered panel" },
  { icon: "📊", label: "Vertical or horizontal lines" },
  { icon: "🌑", label: "Dark patches or half-black screen" },
  { icon: "🔌", label: "TV turns on but no picture" },
  { icon: "🌈", label: "Colour distortion or white screen" },
  { icon: "📍", label: "Dead pixels or dark spots" },
];

const BRANDS = [
  { name: "Samsung", models: "QLED, Crystal UHD, Smart TV, Frame TV" },
  { name: "LG", models: "OLED, NanoCell, 4K, Smart TV" },
  { name: "Sony", models: "Bravia 4K, OLED, Android TV" },
  { name: "Hisense", models: "ULED, 4K, Smart TV" },
  { name: "TCL", models: "4K, Roku TV, QLED" },
  { name: "Skyworth", models: "Android TV, 4K Smart TV" },
  { name: "Syinix", models: "LED, Smart TV series" },
  { name: "Vitron", models: "LED, Smart TV series" },
];

const STEPS = [
  {
    n: "01",
    title: "Send a Photo",
    body: "WhatsApp or call us with a photo of your TV screen damage. We'll give you a quote within minutes.",
  },
  {
    n: "02",
    title: "We Source the Panel",
    body: "We order the correct replacement panel for your exact TV model — no guesswork, no wrong parts.",
  },
  {
    n: "03",
    title: "Repair & Collect",
    body: "Drop off your TV or arrange courier. Most repairs done in 1–2 days. We test before you collect.",
  },
];

const PRICES = [
  { size: "Small (32\"–43\")", examples: "Hisense, Syinix, Vitron, TCL", from: "KSh 5,000", days: "1–2 days" },
  { size: "Mid-Range (50\"–55\")", examples: "Samsung, LG, Sony, Skyworth", from: "KSh 9,000", days: "1–2 days", popular: true },
  { size: "Large (65\"+)", examples: "Samsung QLED, LG OLED, Sony Bravia", from: "KSh 15,000", days: "2–3 days" },
];

const TESTIMONIALS = [
  {
    name: "Peter K.",
    device: "LG 55\" Smart TV",
    quote: "Thought my LG was done for after the screen cracked. Phillips ScreenCare sourced the right panel and it looks brand new. Saved me buying a whole new TV.",
  },
  {
    name: "Michael O.",
    device: "Hisense 43\" TV",
    quote: "My Hisense had vertical lines across the whole screen. Fixed in two days with a warranty. Professional from start to finish.",
  },
  {
    name: "Joyce A.",
    device: "Samsung 50\" Smart TV",
    quote: "I was quoted double elsewhere. Phillips ScreenCare was honest about the price upfront and did a perfect job. Highly recommend.",
  },
];

export default function TvRepairPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                  TV Screen Repair · Kisii, Kenya
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                <span className="text-amber-400">TV Screen Repair</span>
                <br />
                <span className="text-white">in Kisii</span>
                <span className="text-slate-300"> — Fast,</span>
                <br />
                <span className="text-slate-300">Reliable &amp; Affordable</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-blue-100 sm:text-lg lg:mx-0 mx-auto">
                Cracked panel, lines on screen, or no picture? We repair{" "}
                <strong className="font-semibold text-white">TV screens in Kisii</strong> for all
                major brands — Samsung, LG, Sony, Hisense and more. 90-day warranty on every repair.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-blue-400"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
                  </svg>
                  Call {SITE.phone}
                </a>
                <a
                  href={whatsappUrl("Hi Phillips ScreenCare, I need a TV screen repair quote")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp a Photo
                </a>
              </div>

              <p className="mt-4 text-xs text-blue-300 lg:text-left text-center">
                * Looking for TV Repair{" "}
                <span className="font-semibold text-white">&ldquo;Near Me&rdquo;</span>?{" "}
                <a
                  href={whatsappUrl("Hi Phillips ScreenCare, I need TV screen repair near me in Kisii")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  We cover Western &amp; Nyanza via courier.
                </a>
              </p>
            </div>

            {/* Right: video */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 sm:max-w-md">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/shQPvVF-ME8?rel=0&modestbranding=1"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Phillips ScreenCare — Screen Repair"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Damage types */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">TV Problems We Fix</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DAMAGE_TYPES.map((d) => (
              <div key={d.label} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <span className="text-2xl">{d.icon}</span>
                <span className="font-medium text-slate-700">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900">How TV Screen Repair Works</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 text-3xl font-extrabold text-blue-100">{s.n}</div>
                <h3 className="mb-2 font-semibold text-slate-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">TV Brands We Repair in Kisii</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BRANDS.map((b) => (
              <div key={b.name} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="mb-1 font-semibold text-slate-900">{b.name}</h3>
                <p className="text-xs text-slate-500">{b.models}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-900">TV Screen Repair Prices in Kisii</h2>
          <p className="mb-8 text-center text-slate-500">Exact quote confirmed before we start — no surprises.</p>
          <div className="grid gap-5 sm:grid-cols-3">
            {PRICES.map((p) => (
              <div key={p.size} className={`rounded-2xl border p-6 shadow-sm ${p.popular ? "border-blue-400 bg-blue-50" : "border-slate-200 bg-white"}`}>
                {p.popular && <span className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-0.5 text-xs font-semibold text-white">Most Common</span>}
                <h3 className="font-semibold text-slate-900">📺 {p.size}</h3>
                <p className="mt-1 text-sm text-slate-500">{p.examples}</p>
                <p className="mt-4 text-2xl font-bold text-blue-600">{p.from}</p>
                <p className="mt-1 text-xs text-slate-400">Turnaround: {p.days}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-400">
            <a href={whatsappUrl("Hi Phillips ScreenCare, I need a TV screen repair price")} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">
              WhatsApp us your TV model for an exact quote →
            </a>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">What TV Repair Customers Say</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex gap-0.5 text-amber-400">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.device}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also offer */}
      <section className="bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <p className="text-slate-500 text-sm">
            Also need a laptop screen fixed?{" "}
            <Link href="/laptop-repair" className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2">
              See our Laptop Screen Repair page →
            </Link>
          </p>
        </div>
      </section>

      <ServiceCtaStrip message="Hi Phillips ScreenCare, I need a TV screen repair" />
    </>
  );
}
