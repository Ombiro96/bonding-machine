import Image from "next/image";
import { SITE, whatsappUrl } from "@/lib/site";

const TRUST_BADGES = [
  { icon: "⚡", text: "Same-day repair" },
  { icon: "🛡️", text: "90-day warranty" },
  { icon: "✅", text: "Certified technicians" },
  { icon: "💰", text: "Price-match guarantee" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: copy + CTAs ── */}
          <div className="text-center lg:text-left">
            {/* Live badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Open Now · Laptop repairs from KSh 4,000
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Laptop & TV Screen
              <br />
              <span className="text-blue-200">Repair in Nairobi.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-blue-100 sm:text-xl lg:max-w-lg">
              Professional screen repair using Shenzhen ST&#8209;B100W OCA bonding technology.
              Laptops and TVs — fixed {SITE.turnaround}, backed by a {SITE.warranty}.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={whatsappUrl("Hi BondFix! I have a cracked screen I need repaired.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 hover:shadow-xl"
              >
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.504 5.847L.057 23.882a.5.5 0 0 0 .614.614l6.035-1.447A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm0 21.818a9.836 9.836 0 0 1-5.022-1.376l-.36-.214-3.724.893.911-3.625-.234-.373A9.821 9.821 0 0 1 2.182 12c0-5.415 4.403-9.818 9.818-9.818 5.414 0 9.818 4.403 9.818 9.818 0 5.414-4.404 9.818-9.819 9.818z" />
                </svg>
                Book Repair on WhatsApp
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                See Pricing
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-sm font-medium text-white backdrop-blur-sm"
                >
                  <span aria-hidden>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: machine image ── */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glow ring */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-blue-400/20 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-3xl bg-white/10 p-3 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm">
                <Image
                  src="/images/bonding-machine.jpg"
                  alt="Shenzhen ST-B100W OCA bonding machine used for professional LCD screen repair"
                  width={800}
                  height={800}
                  className="w-full rounded-2xl object-cover"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 500px"
                />
                {/* Caption badge */}
                <div className="mt-2 rounded-xl bg-white/10 px-4 py-2.5 text-center text-sm font-medium text-white">
                  Shenzhen ST&#8209;B100W · OCA Bonding Machine
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
