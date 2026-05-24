import type { Metadata } from "next";
import { SITE } from "./site";

export function buildPageMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: {
      default: `${SITE.name} — ${SITE.tagline}`,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
    metadataBase: new URL(SITE.url),
    openGraph: {
      siteName: SITE.name,
      type: "website",
      locale: "en_KE",
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    ...overrides,
  };
}
