"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE, whatsappUrl } from "@/lib/site";

const SERVICE_LINKS = [
  { label: "Laptop Screen Repair", href: "/services/laptop-screen-repair" },
  { label: "TV Screen Repair", href: "/services/tv-screen-repair" },
];

const NAV_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-blue-600">
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              Services
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 w-56 rounded-xl border border-slate-100 bg-white py-2 shadow-lg">
                {SERVICE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappUrl("Hi BondFix, I need a screen repair")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 md:inline-flex"
        >
          Book Repair
        </a>

        <button
          type="button"
          className="rounded-md p-2 text-slate-600 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-md px-2 py-2.5 text-base font-medium text-slate-700"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <svg
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="ml-4 flex flex-col gap-1">
                  {SERVICE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => { setOpen(false); setServicesOpen(false); }}
                      className="rounded-md px-2 py-2 text-sm text-slate-600 hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-base font-medium text-slate-700 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={whatsappUrl("Hi BondFix, I need a screen repair")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Book Repair on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
