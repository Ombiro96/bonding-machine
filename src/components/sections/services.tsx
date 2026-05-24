import Link from "next/link";

const SERVICES = [
  {
    icon: "💻",
    title: "Laptop Screen Repair",
    description:
      "Cracked display, broken lines, dead pixels, or black screen? We source and bond replacement panels for all major laptop brands — same-day in most cases.",
    brands: ["Dell", "HP", "Lenovo", "Asus", "Acer", "MacBook", "MSI", "Toshiba"],
    href: "/services/laptop-screen-repair",
  },
  {
    icon: "📺",
    title: "TV Screen Repair",
    description:
      "Cracked TV panel, lines on screen, dark patches, or no picture? We repair and replace LED, LCD, and Smart TV screens for all leading brands.",
    brands: ["Samsung", "LG", "Sony", "Hisense", "TCL", "Skyworth", "Syinix", "Vitron"],
    href: "/services/tv-screen-repair",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What We Repair
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Laptop and TV screen specialists — using professional OCA bonding technology.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-5 text-5xl">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mb-5 flex-1 leading-relaxed text-slate-500">{service.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {service.brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {brand}
                  </span>
                ))}
              </div>
              <Link
                href={service.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
