export const SITE = {
  name: "Phillips ScreenCare",
  tagline: "Laptop & TV Screen Repair Experts.",
  description:
    "Professional laptop and TV screen repair in Kisii, Kenya using Shenzhen ST-B100W OCA bonding technology. Same-day service with a 90-day warranty.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bondfix.co.ke",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254722631353",
  phone: "0722631353",
  email: "repairs@bondfix.co.ke",
  address: "Kisii Town, Kisii County, Kenya",
  turnaround: "same day",
  warranty: "90-day warranty on all repairs",
  hours: "Mon–Sat, 8am–6pm",
};

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
