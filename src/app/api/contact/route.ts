import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const name = data.get("name")?.toString() ?? "";
    const phone = data.get("phone")?.toString() ?? "";
    const device = data.get("device")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";
    const image = data.get("image");

    if (!name || !device) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Wire up an email service here (e.g. Resend).
    // Example with Resend:
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({ from: "...", to: "repairs@bondfix.co.ke", subject: `New repair request from ${name}`, ... });
    //
    // The `image` variable is a File object if provided — upload to Cloudinary or attach directly.

    console.log("Contact form submission:", { name, phone, device, message, hasImage: !!image });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
