import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Phillips ScreenCare | OCA Screen Repair Experts in Kisii",
  description:
    "Learn about Phillips ScreenCare — Kisii's professional LCD screen bonding and repair specialists. We use the Shenzhen ST-B100W OCA bonding machine for factory-quality results.",
};

const WHY_OCA = [
  {
    heading: "Lower cost",
    body: "OCA bonding replaces only the broken glass, not the entire LCD assembly — saving you up to 60% compared to a full screen replacement.",
  },
  {
    heading: "Better result",
    body: "Professional lamination eliminates air gaps and produces zero bubbles, restoring the original display brightness and colour accuracy.",
  },
  {
    heading: "Faster repair",
    body: "Glass bonding is faster than a full assembly swap. Most laptop repairs are done the same day, while you wait or leave the device with us.",
  },
  {
    heading: "Less waste",
    body: "Replacing only the glass is more environmentally responsible than discarding a functioning LCD assembly.",
  },
];

const VALUES = [
  { icon: "🔬", title: "Precision", body: "We use professional equipment — not improvised tools." },
  { icon: "💬", title: "Honesty", body: "We confirm the price before we start. No surprises." },
  { icon: "🛡️", title: "Accountability", body: "Every repair is backed by our 90-day warranty." },
  { icon: "⚡", title: "Speed", body: "We respect your time. Same-day repairs, no waiting days." },
];

export default function AboutPage() {
  return (
    <>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">Our Story</h2>
              <div className="space-y-4 leading-relaxed text-slate-600">
                <p>
                  Phillips ScreenCare was founded by repair technicians frustrated by one reality in Kisii&rsquo;s
                  screen repair market: most shops replace the entire LCD assembly when only the outer
                  glass is broken. Customers pay two or three times more than they need to — and often
                  get lower quality results.
                </p>
                <p>
                  We invested in the <strong>Shenzhen ST-B100W OCA bonding machine</strong> — the
                  industry standard for professional glass-to-LCD lamination. This machine uses vacuum
                  technology and optical adhesive to bond replacement glass to the existing LCD with
                  zero air bubbles, matching or exceeding the original display quality.
                </p>
                <p>
                  Today Phillips ScreenCare repairs hundreds of devices a month across Kisii — laptop displays
                  and TV panels — all using the same professional approach and the same commitment to
                  honest pricing and lasting results.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
              <Image
                src="/images/bonding-machine.jpg"
                alt="Shenzhen ST-B100W OCA bonding machine at Phillips ScreenCare Kisii"
                width={800}
                height={600}
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-slate-900">
            Why OCA Bonding is Better Than Full Replacement
          </h2>
          <p className="mb-8 text-center text-slate-500">
            Understanding what actually happens inside your device helps you make a better decision.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {WHY_OCA.map((item) => (
              <div
                key={item.heading}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 font-semibold text-blue-700">{item.heading}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">Our Values</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mb-3 text-4xl">{value.icon}</div>
                <h3 className="mb-2 font-semibold text-slate-900">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
