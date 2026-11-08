export type EnquiryErrors = {
  name?: string;
  phone?: string;
};

export function normaliseIndianMobile(rawPhone: string) {
  const digitsOnly = rawPhone.replace(/[\s-]/g, "");
  return digitsOnly.replace(/^(\+91|0091|91|0)(?=\d{10}$)/, "");
}

export function validateEnquiry({ name, phone }: { name: string; phone: string }) {
  const errors: EnquiryErrors = {};

  if (!name.trim()) {
    errors.name = "Enter the patient's name.";
  }

  if (!/^[6-9]\d{9}$/.test(normaliseIndianMobile(phone))) {
    errors.phone = "Enter a 10-digit mobile number.";
  }

  return errors;
}
