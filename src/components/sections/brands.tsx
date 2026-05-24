import { whatsappUrl } from "@/lib/site";

const LAPTOP_BRANDS = [
  "Dell", "HP", "Lenovo", "Asus", "Acer", "Apple", "MSI", "Toshiba", "Samsung", "Huawei",
];

const TV_BRANDS = [
  "Samsung", "LG", "Sony", "Hisense", "TCL", "Skyworth", "Syinix", "Vitron", "Panasonic", "Sharp",
];

export function Brands() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Brands We Repair
          </h2>
          <p className="mt-2 text-slate-500">
            All major laptop and TV brands covered in Nairobi.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-400">
              <span>💻</span> Laptops
            </h3>
            <div className="flex flex-wrap gap-2">
              {LAPTOP_BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-400">
              <span>📺</span> Televisions
            </h3>
            <div className="flex flex-wrap gap-2">
              {TV_BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Don&rsquo;t see your brand?{" "}
          <a
            href={whatsappUrl("Hi Phillips ScreenCare, I have a screen repair for a different brand")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
          >
            WhatsApp us — we likely cover it.
          </a>
        </p>
      </div>
    </section>
  );
}
