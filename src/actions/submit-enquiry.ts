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

  // TODO: send the enquiry to hospital.enquiry.destination (email, WhatsApp Business or CRM) once the client supplies one.
  return { ok: true, errors: {} };
}
