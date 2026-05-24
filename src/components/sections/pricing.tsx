import { whatsappUrl } from "@/lib/site";

const PRICE_TIERS = [
  {
    device: "💻 Laptop — Budget",
    examples: "Acer, older Toshiba, entry-level HP/Lenovo",
    price: "From KSh 1,500",
    turnaround: "Same day",
  },
  {
    device: "💻 Laptop — Mid-Range",
    examples: "Dell, HP, Lenovo, Asus",
    price: "From KSh 6,000",
    turnaround: "Same day",
    highlight: true,
  },
  {
    device: "💻 Laptop — Premium",
    examples: "MacBook, MSI, high-end Dell/HP",
    price: "From KSh 12,000",
    turnaround: "1–2 days",
  },
  {
    device: "📺 TV — Small (32\"–43\")",
    examples: "Hisense, Syinix, Vitron, TCL",
    price: "From KSh 5,000",
    turnaround: "1–2 days",
  },
  {
    device: "📺 TV — Mid-Range (50\"–55\")",
    examples: "Samsung, LG, Sony, Skyworth",
    price: "From KSh 9,000",
    turnaround: "1–2 days",
    highlight: true,
  },
  {
    device: "📺 TV — Large (65\"+)",
    examples: "Samsung QLED, LG OLED, Sony Bravia",
    price: "From KSh 15,000",
    turnaround: "2–3 days",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            No hidden fees. Exact quote confirmed before any work begins.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRICE_TIERS.map((tier) => (
            <div
              key={tier.device}
              className={`rounded-2xl border p-6 ${
                tier.highlight
                  ? "border-blue-400 bg-blue-50 shadow-md"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {tier.highlight && (
                <span className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-0.5 text-xs font-semibold text-white">
                  Most Common
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{tier.device}</h3>
              <p className="mt-1 text-sm text-slate-500">{tier.examples}</p>
              <p className="mt-4 text-2xl font-bold text-blue-600">{tier.price}</p>
              <p className="mt-1 text-xs text-slate-400">Turnaround: {tier.turnaround}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Prices vary by model, panel type, and damage extent.{" "}
          <a
            href={whatsappUrl("Hi Phillips ScreenCare! Can I get a screen repair quote?")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
          >
            WhatsApp us for an exact quote.
          </a>
        </p>
      </div>
    </section>
  );
}
