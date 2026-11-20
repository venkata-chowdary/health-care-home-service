"use server";

import { validateAppointment } from "@/lib/validate-appointment";
import { normaliseIndianMobile } from "@/lib/validate-enquiry";

export async function submitAppointment(formData: FormData) {
  if (String(formData.get("website") ?? "")) {
    return { ok: true, errors: {} };
  }

  const patientName = String(formData.get("patientName") ?? "").trim();
  const contactName = String(formData.get("contactName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "");
  const whatsapp = String(formData.get("whatsapp") ?? "");
  const email = String(formData.get("email") ?? "").trim();
  const area = String(formData.get("area") ?? "").trim();
  const service = String(formData.get("service") ?? "");
  const requirements = String(formData.get("requirements") ?? "").trim();

  const errors = validateAppointment({
    patientName,
    contactName,
    phone,
    whatsapp,
    email,
    area,
    service,
    requirements,
    consent: formData.get("consent") === "on",
  });

  if (Object.keys(errors).length > 0) {
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
        formType: "appointment",
        submittedAt: new Date().toISOString(),
        name: contactName,
        phone: normaliseIndianMobile(phone),
        patientName,
        whatsapp: whatsapp.trim() ? normaliseIndianMobile(whatsapp) : "",
        email,
        area: area.slice(0, 200),
        service,
        preferredDate: String(formData.get("preferredDate") ?? ""),
        preferredTime: String(formData.get("preferredTime") ?? ""),
        requirements: requirements.slice(0, 1000),
        message: String(formData.get("message") ?? "").slice(0, 1000),
      }),
      signal: AbortSignal.timeout(10000),
    });

    return { ok: response.ok, errors: {} };
  } catch {
    return { ok: false, errors: {} };
  }
}
