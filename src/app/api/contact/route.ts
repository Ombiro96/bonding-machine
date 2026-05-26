import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const name = data.get("name")?.toString() ?? "";
    const phone = data.get("phone")?.toString() ?? "";
    const device = data.get("device")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";

    const utm_source   = data.get("utm_source")?.toString() ?? "";
    const utm_medium   = data.get("utm_medium")?.toString() ?? "";
    const utm_campaign = data.get("utm_campaign")?.toString() ?? "";
    const utm_term     = data.get("utm_term")?.toString() ?? "";
    const utm_content  = data.get("utm_content")?.toString() ?? "";
    const gclid        = data.get("gclid")?.toString() ?? "";
    const fbclid       = data.get("fbclid")?.toString() ?? "";
    const ttclid       = data.get("ttclid")?.toString() ?? "";

    if (!name || !device) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const webhookUrl = process.env.MAKE_CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("MAKE_CONTACT_WEBHOOK_URL is not set");
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name, phone, device, message,
        utm_source, utm_medium, utm_campaign, utm_term, utm_content,
        gclid, fbclid, ttclid,
      }),
    });

    if (!res.ok) {
      console.error("Make.com webhook failed:", res.status, await res.text());
      return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
