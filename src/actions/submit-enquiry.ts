"use server";

import { validateEnquiry } from "@/lib/validate-enquiry";

export async function submitEnquiry(formData: FormData) {
  const errors = validateEnquiry({
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
  });

  if (errors.name || errors.phone) {
    return { ok: false, errors };
  }

  // No delivery channel exists yet (hospital.enquiry.destination is awaiting the client), so nothing is sent.
  // Return ok: true only after the enquiry has actually reached email, WhatsApp Business or the CRM.
  return { ok: false, errors: {} };
}
