const COVERAGE_TILES = [
  {
    area: "Kisii Town",
    detail: "Our home base. Walk in for same-day laptop and TV screen repair.",
    icon: "📍",
    highlight: true,
  },
  {
    area: "Nyanza Region",
    detail: "Serving Kisumu, Homa Bay, Migori, Siaya, Kisii and Nyamira counties.",
    icon: "🌊",
  },
  {
    area: "Western Region",
    detail: "Covering Kakamega, Bungoma, Busia, Vihiga and Trans Nzoia counties.",
    icon: "🌄",
  },
  {
    area: "Nationwide Courier",
    detail: "Not nearby? Ship your device to us — we repair and return via courier.",
    icon: "📦",
  },
];

export function Coverage() {
  return (
    <section className="bg-slate-900 py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Based in Kisii, Serving Western & Nyanza
          </h2>
          <p className="mt-2 text-slate-400">
            Walk in at our Kisii location or arrange courier repair from anywhere in Kenya.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COVERAGE_TILES.map((tile) => (
            <div
              key={tile.area}
              className={`rounded-2xl border p-6 shadow-sm ${
                tile.highlight
                  ? "border-blue-500/40 bg-blue-900/30"
                  : "border-slate-700 bg-slate-800"
              }`}
            >
              <div className="mb-3 text-3xl">{tile.icon}</div>
              <h3 className={`mb-1 text-base font-semibold ${tile.highlight ? "text-blue-400" : "text-white"}`}>
                {tile.area}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">{tile.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
