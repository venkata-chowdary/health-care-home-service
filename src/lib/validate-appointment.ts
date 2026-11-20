import { normaliseIndianMobile } from "@/lib/validate-enquiry";

export type AppointmentErrors = {
  patientName?: string;
  contactName?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  area?: string;
  service?: string;
  requirements?: string;
  consent?: string;
};

export const appointmentFieldOrder = ["patientName", "contactName", "phone", "whatsapp", "email", "area", "service", "requirements", "consent"];

export function validateAppointment({
  patientName,
  contactName,
  phone,
  whatsapp,
  email,
  area,
  service,
  requirements,
  consent,
}: {
  patientName: string;
  contactName: string;
  phone: string;
  whatsapp: string;
  email: string;
  area: string;
  service: string;
  requirements: string;
  consent: boolean;
}) {
  const errors: AppointmentErrors = {};

  if (!patientName.trim()) {
    errors.patientName = "Enter the patient's name.";
  }

  if (!contactName.trim()) {
    errors.contactName = "Enter the name of the person we should call.";
  }

  if (!/^[6-9]\d{9}$/.test(normaliseIndianMobile(phone))) {
    errors.phone = "Enter a 10-digit mobile number.";
  }

  if (whatsapp.trim() && !/^[6-9]\d{9}$/.test(normaliseIndianMobile(whatsapp))) {
    errors.whatsapp = "Enter a 10-digit mobile number, or leave this empty.";
  }

  if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "Enter a valid email address, or leave this empty.";
  }

  if (!area.trim()) {
    errors.area = "Enter the area where care is needed.";
  }

  if (!service) {
    errors.service = "Choose a service.";
  }

  if (!requirements.trim()) {
    errors.requirements = "Tell us briefly about the patient's condition.";
  }

  if (!consent) {
    errors.consent = "Tick the box so we can call you back.";
  }

  return errors;
}
