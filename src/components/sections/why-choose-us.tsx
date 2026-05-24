const REASONS = [
  {
    icon: "🔬",
    title: "ST-B100W Bonding Technology",
    description:
      "We use the Shenzhen ST-B100W OCA bonding machine — the same equipment used by professional repair shops worldwide. Zero-bubble lamination, factory-level results.",
  },
  {
    icon: "⚡",
    title: "Same-Day Turnaround",
    description:
      "Most repairs are completed within 30–60 minutes while you wait. No shipping, no waiting days for your device.",
  },
  {
    icon: "🛡️",
    title: "90-Day Warranty",
    description:
      "Every repair is backed by our 90-day warranty. If the screen develops any defects from our repair, we fix it free of charge.",
  },
  {
    icon: "👨‍🔧",
    title: "Certified Technicians",
    description:
      "Our technicians are trained and experienced with bonding machines. We've repaired thousands of devices — your repair is in good hands.",
  },
  {
    icon: "💰",
    title: "Price-Match Guarantee",
    description:
      "Found a cheaper legitimate repair quote? Share it and we'll match it. Quality doesn't have to cost more.",
  },
  {
    icon: "♻️",
    title: "OCA Bonding vs Full Replacement",
    description:
      "OCA bonding saves you money by replacing only the glass — not the whole LCD. You get the same result for a fraction of the cost.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Choose Phillips ScreenCare?
          </h2>
          <p className="mt-3 text-lg text-slate-400">
            Professional-grade repair, not a backroom gamble.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-6"
            >
              <div className="mb-3 text-3xl">{reason.icon}</div>
              <h3 className="mb-2 text-base font-semibold text-white">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
