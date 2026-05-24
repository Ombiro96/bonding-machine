import { whatsappUrl } from "@/lib/site";

const STEPS = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "WhatsApp us a photo of your damaged screen. We'll give you a quote within minutes and confirm availability.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Drop It Off",
    description:
      "Bring your device to us. No appointment needed — just walk in. We accept drop-offs daily.",
    icon: "🚗",
  },
  {
    number: "03",
    title: "We Bond & Repair",
    description:
      "Our technicians use the ST-B100W bonding machine to replace and laminate your screen with zero bubbles.",
    icon: "🔧",
  },
  {
    number: "04",
    title: "Pick Up, Good as New",
    description:
      "Collect your device same-day. Every repair comes with our 90-day warranty — if anything goes wrong, we fix it free.",
    icon: "✅",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            From cracked to fixed in four simple steps.
          </p>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line (desktop) */}
          <div className="absolute top-10 left-1/4 right-1/4 hidden h-px bg-blue-200 lg:block" />

          {STEPS.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 shadow-md">
                <span className="text-3xl">{step.icon}</span>
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-600 shadow">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappUrl("Hi BondFix! I have a cracked screen — can I get a quote?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Get a Free Quote Now
          </a>
        </div>
      </div>
    </section>
  );
}
