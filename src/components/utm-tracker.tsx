"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const GCLID_KEY = "gclid";
const FBCLID_KEY = "fbclid";
const TTCLID_KEY = "ttclid";
const ALL_MARKETING_KEYS = [...UTM_KEYS, GCLID_KEY, FBCLID_KEY, TTCLID_KEY] as const;

type MarketingValues = Record<string, string>;

function detectTrafficSource(): { source: string; medium: string } {
  const ref = document.referrer;
  if (!ref) return { source: "direct", medium: "none" };
  try {
    const refHost = new URL(ref).hostname;
    const currentHost = window.location.hostname;
    if (refHost === currentHost || refHost.includes("localhost")) {
      return { source: "direct", medium: "none" };
    }
    if (refHost.includes("google")) return { source: "google", medium: "organic" };
    if (refHost.includes("bing")) return { source: "bing", medium: "organic" };
    if (refHost.includes("facebook") || refHost.includes("fb.com"))
      return { source: "facebook", medium: "social" };
    if (refHost.includes("tiktok")) return { source: "tiktok", medium: "social" };
    if (refHost.includes("instagram")) return { source: "instagram", medium: "social" };
    if (refHost.includes("twitter") || refHost.includes("t.co"))
      return { source: "twitter", medium: "social" };
    return { source: refHost, medium: "referral" };
  } catch {
    return { source: "direct", medium: "none" };
  }
}

function persistUtms(params: MarketingValues) {
  Object.entries(params).forEach(([key, value]) => {
    if (value) localStorage.setItem(key, value);
  });
}

function getStoredUtms(): MarketingValues {
  const values: MarketingValues = {};
  ALL_MARKETING_KEYS.forEach((key) => {
    values[key] = localStorage.getItem(key) ?? "";
  });
  return values;
}

export function fillUtmFormFields(params: MarketingValues) {
  ALL_MARKETING_KEYS.forEach((key) => {
    document.querySelectorAll<HTMLInputElement>(`input[name="${key}"], input#${key}`).forEach(
      (el) => {
        el.value = params[key] ?? "";
      },
    );
  });
}

function UTMTrackerInner() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlUtms: MarketingValues = {};
    let hasUtmFromUrl = false;

    ALL_MARKETING_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) {
        hasUtmFromUrl = true;
        urlUtms[key] = value;
      }
    });

    if (hasUtmFromUrl) {
      persistUtms(urlUtms);
      fillUtmFormFields({ ...getStoredUtms(), ...urlUtms });
    } else if (!localStorage.getItem("utm_source")) {
      const source = detectTrafficSource();
      const inferred: MarketingValues = {
        utm_source: source.source,
        utm_medium: source.medium,
        utm_campaign: "(not set)",
        utm_term: "(not set)",
        utm_content: "(not set)",
      };
      persistUtms(inferred);
      fillUtmFormFields(inferred);
    } else {
      fillUtmFormFields(getStoredUtms());
    }
  }, [searchParams]);

  return null;
}

export function UTMTracker() {
  return (
    <Suspense fallback={null}>
      <UTMTrackerInner />
    </Suspense>
  );
}
