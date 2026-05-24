const TESTIMONIALS = [
  {
    name: "James N.",
    device: "Lenovo ThinkPad",
    quote:
      "The laptop screen had cracked lines across it. Phillips ScreenCare sourced and bonded a replacement panel same-day. Works perfectly.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    device: "Dell Inspiron 15",
    quote:
      "My Dell screen had a massive crack from a fall. Brought it in and they replaced the panel the same day. Looks factory fresh — couldn't be happier.",
    rating: 5,
  },
  {
    name: "Peter K.",
    device: "LG 55\" Smart TV",
    quote:
      "Thought my LG TV was done for after the screen cracked. Phillips ScreenCare sourced the right panel and it looks brand new. Saved me buying a new TV entirely.",
    rating: 5,
  },
  {
    name: "Grace W.",
    device: "HP EliteBook",
    quote:
      "The repair was clean, fast, and cheaper than I expected. Screen looks great. Very professional team — I've already referred two colleagues.",
    rating: 5,
  },
  {
    name: "Michael O.",
    device: "Hisense 43\" TV",
    quote:
      "My Hisense had vertical lines across the whole screen. Phillips ScreenCare fixed it in two days with a warranty. Professional from start to finish.",
    rating: 5,
  },
  {
    name: "Fatuma A.",
    device: "MacBook Pro 14\"",
    quote:
      "Excellent service. They confirmed the price upfront, kept me updated, and the screen is perfect. The 90-day warranty gave me real confidence.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400">★</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Hundreds of repaired laptops and TVs — done right, the first time.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-400">{t.device}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
