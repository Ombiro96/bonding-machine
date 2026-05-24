import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCtaStrip } from "@/components/sections/service-cta-strip";
import { whatsappUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Laptop Screen Repair in Kisii, Kenya — Fix My Laptop | BondFix",
  description:
    "Repair your laptop screen in Kisii, Kenya. Cracked display, broken lines, dead pixels, black screen — we fix Dell, HP, Lenovo, Asus, MacBook and more. Same-day. 90-day warranty.",
};

const DAMAGE_TYPES = [
  { icon: "💥", label: "Cracked or shattered display" },
  { icon: "📊", label: "Vertical or horizontal lines" },
  { icon: "⬛", label: "Black screen — backlight failure" },
  { icon: "🔆", label: "Dim or flickering display" },
  { icon: "🟣", label: "Dead pixels or blotches" },
  { icon: "🪞", label: "Display works but glass is broken" },
];

const BRANDS = [
  { name: "Dell", models: "Inspiron, XPS, Latitude, Vostro" },
  { name: "HP", models: "Pavilion, EliteBook, Spectre, Envy" },
  { name: "Lenovo", models: "ThinkPad, IdeaPad, Legion, Yoga" },
  { name: "Asus", models: "VivoBook, ZenBook, ROG, TUF" },
  { name: "Acer", models: "Aspire, Swift, Nitro, Predator" },
  { name: "Apple", models: "MacBook Air, MacBook Pro (all sizes)" },
  { name: "MSI", models: "Gaming and creator series" },
  { name: "Toshiba", models: "Satellite, Portégé, Tecra" },
];

const STEPS = [
  {
    n: "01",
    title: "Send a Photo",
    body: "WhatsApp or call us with a photo of the damaged display and your laptop model. We quote you within minutes.",
  },
  {
    n: "02",
    title: "Drop Off Your Laptop",
    body: "Bring it to our Kisii workshop. No appointment needed. We diagnose and confirm the exact repair cost before starting.",
  },
  {
    n: "03",
    title: "Collect Same Day",
    body: "Most laptop screen repairs are done the same day — 1 to 3 hours. We test fully before you take it home.",
  },
];

const PRICES = [
  { tier: "Budget Laptops", examples: "Acer Aspire, older Toshiba, entry HP/Lenovo", from: "KSh 4,000", days: "Same day", },
  { tier: "Mid-Range Laptops", examples: "Dell Inspiron, HP Pavilion, Lenovo IdeaPad, Asus", from: "KSh 6,000", days: "Same day", popular: true },
  { tier: "Premium Laptops", examples: "MacBook, Dell XPS, HP Spectre, MSI", from: "KSh 12,000", days: "1–2 days" },
];

const TESTIMONIALS = [
  {
    name: "James N.",
    device: "Lenovo ThinkPad",
    quote: "The laptop screen had cracked lines across it. BondFix sourced and bonded a replacement panel same-day. Works perfectly.",
  },
  {
    name: "Sarah M.",
    device: "Dell Inspiron 15",
    quote: "My Dell screen had a massive crack from a fall. Brought it in and they replaced the panel the same day. Looks factory fresh.",
  },
  {
    name: "Grace W.",
    device: "HP EliteBook",
    quote: "The repair was clean, fast, and cheaper than I expected. Very professional team — I've already referred two colleagues.",
  },
];

export default function LaptopRepairPage() {
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
                  Laptop Screen Repair · Kisii, Kenya
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                <span className="text-amber-400">Laptop Screen Repair</span>
                <br />
                <span className="text-white">in Kisii</span>
                <span className="text-slate-300"> — Fast,</span>
                <br />
                <span className="text-slate-300">Reliable &amp; Affordable</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-blue-100 sm:text-lg lg:mx-0 mx-auto">
                Cracked display, broken lines, or black screen? We repair{" "}
                <strong className="font-semibold text-white">laptop screens in Kisii</strong> same-day
                for Dell, HP, Lenovo, Asus, Acer, MacBook and more.
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
                  href={whatsappUrl("Hi BondFix, I need a laptop screen repair quote")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp a Photo
                </a>
              </div>

              <p className="mt-4 text-xs text-blue-300 lg:text-left text-center">
                * Need laptop repair{" "}
                <span className="font-semibold text-white">&ldquo;Near Me&rdquo;</span>?{" "}
                <a
                  href={whatsappUrl("Hi BondFix, I need laptop screen repair near me in Kisii")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Walk in to our Kisii workshop — no appointment needed.
                </a>
              </p>
            </div>

            {/* Right: laptop icon card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm sm:max-w-md">
                {/* Cracked laptop screen illustration */}
                <svg viewBox="0 0 320 215" className="w-full h-auto mb-3" aria-hidden="true">
                  <rect x="25" y="8" width="270" height="168" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2"/>
                  <rect x="38" y="20" width="244" height="144" fill="#020617"/>
                  <circle cx="140" cy="68" r="22" fill="#f59e0b" opacity="0.1"/>
                  {/* Primary cracks */}
                  <line x1="140" y1="68" x2="38" y2="20" stroke="white" strokeWidth="1.5" opacity="0.85"/>
                  <line x1="140" y1="68" x2="200" y2="20" stroke="white" strokeWidth="1.3" opacity="0.8"/>
                  <line x1="140" y1="68" x2="282" y2="40" stroke="white" strokeWidth="1" opacity="0.7"/>
                  <line x1="140" y1="68" x2="282" y2="164" stroke="white" strokeWidth="1.2" opacity="0.78"/>
                  <line x1="140" y1="68" x2="148" y2="164" stroke="white" strokeWidth="1.5" opacity="0.85"/>
                  <line x1="140" y1="68" x2="38" y2="130" stroke="white" strokeWidth="1.2" opacity="0.78"/>
                  <line x1="140" y1="68" x2="62" y2="164" stroke="white" strokeWidth="1" opacity="0.7"/>
                  {/* Secondary cracks */}
                  <line x1="88" y1="43" x2="52" y2="20" stroke="white" strokeWidth="0.8" opacity="0.5"/>
                  <line x1="88" y1="43" x2="42" y2="60" stroke="white" strokeWidth="0.7" opacity="0.45"/>
                  <line x1="170" y1="42" x2="218" y2="26" stroke="white" strokeWidth="0.8" opacity="0.5"/>
                  <line x1="232" y1="88" x2="282" y2="72" stroke="white" strokeWidth="0.7" opacity="0.45"/>
                  <line x1="240" y1="128" x2="266" y2="164" stroke="white" strokeWidth="0.7" opacity="0.4"/>
                  <line x1="144" y1="128" x2="105" y2="164" stroke="white" strokeWidth="0.8" opacity="0.5"/>
                  <line x1="80" y1="100" x2="38" y2="84" stroke="white" strokeWidth="0.7" opacity="0.4"/>
                  {/* Impact point */}
                  <circle cx="140" cy="68" r="3.5" fill="white" opacity="0.95"/>
                  {/* Laptop base */}
                  <rect x="5" y="176" width="310" height="24" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="2"/>
                  <rect x="5" y="174" width="310" height="5" fill="#020617"/>
                  <rect x="25" y="181" width="105" height="5" rx="1.5" fill="#1e293b"/>
                  <rect x="190" y="181" width="105" height="5" rx="1.5" fill="#1e293b"/>
                  <rect x="130" y="181" width="60" height="9" rx="2" fill="#334155"/>
                </svg>
                <div className="space-y-3">
                  {["Cracked screen replacement", "Broken lines & backlight fix", "Dead pixel repair", "All major brands covered", "Same-day in most cases", "90-day warranty included"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-blue-100">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-xs text-green-400">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-white/10 px-4 py-3 text-center">
                  <p className="text-xs text-blue-200">Laptop repairs from</p>
                  <p className="text-2xl font-extrabold text-amber-400">KSh 4,000</p>
                </div>
              </div>
        </div>
          </div>
        </div>
      </section>

      {/* Damage types */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">Laptop Screen Problems We Fix</h2>
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
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900">How Laptop Screen Repair Works</h2>
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
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">Laptop Brands We Repair in Kisii</h2>
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
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-900">Laptop Screen Repair Prices in Kisii</h2>
          <p className="mb-8 text-center text-slate-500">Exact quote confirmed before we start — no surprises.</p>
          <div className="grid gap-5 sm:grid-cols-3">
            {PRICES.map((p) => (
              <div key={p.tier} className={`rounded-2xl border p-6 shadow-sm ${p.popular ? "border-blue-400 bg-blue-50" : "border-slate-200 bg-white"}`}>
                {p.popular && <span className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-0.5 text-xs font-semibold text-white">Most Common</span>}
                <h3 className="font-semibold text-slate-900">💻 {p.tier}</h3>
                <p className="mt-1 text-sm text-slate-500">{p.examples}</p>
                <p className="mt-4 text-2xl font-bold text-blue-600">{p.from}</p>
                <p className="mt-1 text-xs text-slate-400">Turnaround: {p.days}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-400">
            <a href={whatsappUrl("Hi BondFix, I need a laptop screen repair price")} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">
              WhatsApp us your laptop model for an exact quote →
            </a>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">What Laptop Repair Customers Say</h2>
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
            Also need a TV screen fixed?{" "}
            <Link href="/tv-repair" className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2">
              See our TV Screen Repair page →
            </Link>
          </p>
        </div>
      </section>

      <ServiceCtaStrip message="Hi BondFix, I need a laptop screen repair" />
    </>
  );
}
