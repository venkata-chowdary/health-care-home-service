export type EnquiryErrors = {
  name?: string;
  phone?: string;
  consent?: string;
};

export function normaliseIndianMobile(rawPhone: string) {
  const digitsOnly = rawPhone.replace(/[\s-]/g, "");
  return digitsOnly.replace(/^(\+91|0091|91|0)(?=\d{10}$)/, "");
}

export function validateEnquiry({ name, phone, consent }: { name: string; phone: string; consent: boolean }) {
  const errors: EnquiryErrors = {};

  if (!name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!/^[6-9]\d{9}$/.test(normaliseIndianMobile(phone))) {
    errors.phone = "Enter a 10-digit mobile number.";
  }

  if (!consent) {
    errors.consent = "Tick the box so we can call you back.";
  }

  return errors;
}
