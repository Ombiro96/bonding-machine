"use client";

import { useRef, useState } from "react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = e.target.files?.[0] ?? null;
    setFileError("");
    if (!picked) { setFile(null); return; }
    if (!ACCEPTED_TYPES.includes(picked.type)) {
      setFileError("Please upload a JPG, PNG, WebP or HEIC image.");
      e.target.value = "";
      return;
    }
    if (picked.size > MAX_FILE_SIZE) {
      setFileError("Image must be under 5 MB.");
      e.target.value = "";
      return;
    }
    setFile(picked);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.currentTarget);
    if (file) data.set("image", file);

    const MARKETING_KEYS = [
      "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
      "gclid", "fbclid", "ttclid",
    ];
    MARKETING_KEYS.forEach((key) => {
      const val = localStorage.getItem(key);
      if (val) data.set(key, val);
    });

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (!res.ok) throw new Error("server error");

      // Fire Lead conversion events (no-op if pixels not loaded)
      if (typeof window !== "undefined") {
        const w = window as unknown as Record<string, unknown>;
        if (typeof w.fbq === "function") (w.fbq as (...a: unknown[]) => void)("track", "Lead");
        if (typeof w.gtag === "function") {
          (w.gtag as (...a: unknown[]) => void)("event", "conversion", {
            send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL}`,
          });
        }
      }

      setStatus("success");
      formRef.current?.reset();
      setFile(null);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 px-8 py-12 text-center">
        <div className="mb-4 text-5xl">✅</div>
        <h2 className="mb-2 text-xl font-bold text-slate-900">Message Received!</h2>
        <p className="text-slate-600">
          We&rsquo;ll review your request and get back to you shortly. For the fastest response,
          you can also reach us via the WhatsApp button on the bottom right.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Kamau"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="07XX XXX XXX"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="device" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Device & Issue <span className="text-red-500">*</span>
        </label>
        <input
          id="device"
          name="device"
          type="text"
          required
          placeholder='e.g. "Dell Inspiron 15 — cracked screen" or "Samsung 55\" TV — lines on display"'
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe the damage or any other details that might help us..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Image upload */}
      <div>
        <label htmlFor="image" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Photo of the Damage{" "}
          <span className="font-normal text-slate-400">(optional, max 5 MB)</span>
        </label>
        <label
          htmlFor="image"
          className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed px-4 py-6 text-center transition ${
            file
              ? "border-blue-400 bg-blue-50"
              : "border-slate-300 bg-slate-50 hover:border-blue-400 hover:bg-blue-50"
          }`}
        >
          {file ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="mx-auto max-h-40 rounded-lg object-contain"
              />
              <span className="text-sm font-medium text-blue-700">{file.name}</span>
              <span className="text-xs text-slate-400">
                {(file.size / 1024 / 1024).toFixed(2)} MB · Click to change
              </span>
            </>
          ) : (
            <>
              <svg className="h-8 w-8 text-slate-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <span className="text-sm text-slate-500">
                <span className="font-semibold text-blue-600">Click to upload</span> or drag & drop
              </span>
              <span className="text-xs text-slate-400">JPG, PNG, WebP or HEIC · Max 5 MB</span>
            </>
          )}
          <input
            id="image"
            name="image"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
            className="sr-only"
            onChange={handleFile}
          />
        </label>
        {fileError && <p className="mt-1.5 text-xs text-red-600">{fileError}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong. Please try again or use the WhatsApp button.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-blue-600 py-3.5 text-sm font-bold text-white shadow transition hover:bg-blue-700 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
