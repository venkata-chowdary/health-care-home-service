"use server";

import { normaliseIndianMobile, validateEnquiry } from "@/lib/validate-enquiry";

export async function submitEnquiry(formData: FormData) {
  if (String(formData.get("website") ?? "")) {
    return { ok: true, errors: {} };
  }

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "");

  const errors = validateEnquiry({ name, phone, consent: formData.get("consent") === "on" });

  if (errors.name || errors.phone || errors.consent) {
    return { ok: false, errors };
  }

  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return { ok: false, errors: {} };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: new Date().toISOString(),
        name,
        phone: normaliseIndianMobile(phone),
        whoNeedsCare: String(formData.get("whoNeedsCare") ?? ""),
        service: String(formData.get("service") ?? ""),
        area: String(formData.get("area") ?? ""),
        startTime: String(formData.get("startTime") ?? ""),
        careType: String(formData.get("careType") ?? ""),
        message: String(formData.get("message") ?? "").slice(0, 1000),
      }),
      signal: AbortSignal.timeout(10000),
    });

    return { ok: response.ok, errors: {} };
  } catch {
    return { ok: false, errors: {} };
  }
}
