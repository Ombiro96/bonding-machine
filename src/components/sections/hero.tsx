import Image from "next/image";
import Link from "next/link";
import { SITE, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* ── Left: copy + CTAs ── */}
          <div className="text-center lg:text-left">

            {/* Category badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                Screen Repair · Kisii, Kenya
              </span>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-amber-400">Laptop &amp; TV Screen</span>
              <br />
              <span className="text-white">Repair in Kisii</span>
              <span className="text-slate-300"> — Fast,</span>
              <br />
              <span className="text-slate-300">Reliable &amp; Affordable</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-blue-100 sm:text-lg lg:mx-0 mx-auto">
              Cracked laptop display or broken TV panel? Our certified technicians provide
              same-day <strong className="font-semibold text-white">screen repair in Kisii</strong> —
              at our workshop or via courier from anywhere in Western &amp; Nyanza.
            </p>

            {/* CTAs */}
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
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>

            <p className="mt-4 text-xs text-blue-300 lg:text-left text-center">
              * Need screen repair{" "}
              <span className="font-semibold text-white">&ldquo;Near Me&rdquo;</span>
              ?{" "}
              <a
                href={whatsappUrl("Hi BondFix, I need a screen repair near me")}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                We come to you or handle courier.
              </a>
            </p>
          </div>

          {/* ── Right: machine image ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 sm:max-w-md">
              {/* Card header bar */}
              <div className="flex items-center gap-2 bg-blue-700 px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400 opacity-80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400 opacity-80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400 opacity-80" />
                </div>
                <span className="ml-1 text-xs font-semibold tracking-wide text-blue-100">
                  BondFix · ST-B100W OCA Machine
                </span>
              </div>
              <Image
                src="/images/bonding-machine.jpg"
                alt="Shenzhen ST-B100W OCA bonding machine used for professional screen repair in Kisii"
                width={800}
                height={600}
                className="w-full object-cover"
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 480px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
