"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How long does a laptop or TV screen repair take?",
    a: "Most laptop screen repairs are completed the same day — typically 1–3 hours while you wait or leave the device with us. TV screen repairs usually take 1–2 days as we may need to source the correct panel. Large or premium TVs (65\"+) can take 2–3 days.",
  },
  {
    q: "What is OCA bonding and why is it better?",
    a: "OCA (Optically Clear Adhesive) bonding replaces only the outer glass layer rather than the entire LCD assembly. It's cheaper, produces zero air bubbles, and restores the original display quality. We use the Shenzhen ST-B100W machine for professional-grade results.",
  },
  {
    q: "Do you offer a warranty on repairs?",
    a: "Yes — every repair comes with a 90-day warranty. If the screen develops any defects attributable to our repair (bubbles, adhesion failure, backlight issues) we fix it at no charge.",
  },
  {
    q: "Which laptop brands do you repair?",
    a: "We repair all major laptop brands: Dell, HP, Lenovo, Asus, Acer, Apple MacBook, MSI, Toshiba, Samsung, and Huawei. If your brand isn't listed, WhatsApp us — we most likely support it.",
  },
  {
    q: "Which TV brands do you repair?",
    a: "We repair Samsung, LG, Sony, Hisense, TCL, Skyworth, Syinix, Vitron, Panasonic, Sharp, and more. We cover the most popular brands sold in Kenya.",
  },
  {
    q: "What types of TV screen damage can you fix?",
    a: "We fix cracked or shattered panels, vertical and horizontal lines on screen, dark patches or half-black screen, TV turns on but no picture, colour distortion, and dead pixels or dark spots.",
  },
  {
    q: "How do I get a price quote?",
    a: "WhatsApp us a photo of the damaged screen along with your device model (e.g. 'Dell Inspiron 15' or 'Samsung 55\\\" Smart TV'). We'll send you an exact quote within minutes — no obligation to proceed.",
  },
  {
    q: "Do you offer pick-up or delivery?",
    a: "Currently we offer walk-in repair at our Nairobi location. WhatsApp us if you need to discuss courier or home-visit arrangements for large TVs.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept M-Pesa, cash, and bank transfer. Payment is collected after the repair is complete and you're satisfied.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Everything you need to know before bringing in your laptop or TV.
          </p>
        </div>

        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold text-slate-900 sm:text-base">
                  {faq.q}
                </span>
                <span
                  className={`ml-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-slate-500">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
