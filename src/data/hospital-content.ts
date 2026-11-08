export type VerificationStatus = "verified" | "provisional" | "sample";

export type Field<T> = {
  value: T;
  status: VerificationStatus;
  source: string;
};

const googleProfile = "Google Business Profile, captured 8 Nov 2026";
const clientLogo = "Client-supplied logo";
const proposedCopy = "Proposed copy, needs client sign-off";

export const hospital = {
  name: { value: "Hemalatha Health Care", status: "verified", source: clientLogo } as Field<string>,
  legalName: { value: "Hemalatha Health Care Pvt. Ltd.", status: "verified", source: clientLogo } as Field<string>,
  category: { value: "Multi-speciality hospital with inpatient care", status: "provisional", source: "Client brief; Google lists the profile as a home health care service" } as Field<string>,
  siteUrl: { value: "https://hemalathahealthcareservices.com", status: "provisional", source: `${googleProfile}; site did not load when checked` } as Field<string>,

  phone: {
    display: { value: "086390 74341", status: "provisional", source: googleProfile } as Field<string>,
    href: { value: "tel:+918639074341", status: "provisional", source: googleProfile } as Field<string>,
  },

  address: {
    locality: { value: "Aditya Nagar, Kukatpally", status: "provisional", source: googleProfile } as Field<string>,
    city: { value: "Hyderabad", status: "provisional", source: googleProfile } as Field<string>,
    region: { value: "Telangana", status: "provisional", source: googleProfile } as Field<string>,
    postalCode: { value: "500085", status: "provisional", source: googleProfile } as Field<string>,
    coordinates: { value: { latitude: 17.5053003, longitude: 78.3954258 }, status: "provisional", source: googleProfile } as Field<{ latitude: number; longitude: number }>,
    directionsUrl: { value: "https://maps.app.goo.gl/wopgBqKkZyh2eRNg6", status: "provisional", source: googleProfile } as Field<string>,
  },

  hours: [
    { label: "Front desk", value: "24 hours", status: "provisional", source: googleProfile },
    { label: "Outpatient", value: "To be confirmed", status: "sample", source: "Awaiting client" },
    { label: "Visiting", value: "To be confirmed", status: "sample", source: "Awaiting client" },
  ] as (Field<string> & { label: string })[],

  googleRating: {
    rating: { value: 4.7, status: "provisional", source: googleProfile } as Field<number>,
    reviewCount: { value: 96, status: "provisional", source: googleProfile } as Field<number>,
  },

  hero: {
    eyebrow: { value: "Now accepting new patients in Kukatpally", status: "sample", source: proposedCopy } as Field<string>,
    headline: { value: "Specialist care in Kukatpally. Clear answers at every step.", status: "sample", source: proposedCopy } as Field<string>,
    lead: { value: "A multi-speciality hospital where every treatment plan is explained before it begins, and the front desk is a phone call away.", status: "sample", source: proposedCopy } as Field<string>,
    primaryCtaLabel: "Book an appointment",
    callLabel: "Call",
    photosLabel: "Hospital photos",
    badges: ["Plans explained first", "Families kept informed"],
  },

  facts: [
    { label: "Multi-speciality", detail: "Departments under one roof", status: "provisional", source: "Client brief" },
    { label: "Kukatpally", detail: "Aditya Nagar, 500085", status: "provisional", source: googleProfile },
    { label: "Open 24 hours", detail: "Front desk", status: "provisional", source: googleProfile },
    { label: "Walk-ins welcome", detail: "To confirm", status: "sample", source: proposedCopy },
  ],

  heroPhotos: [
    { label: "Diagnostics room", icon: "activity", src: null, status: "sample", source: "Awaiting client photography" },
    { label: "Doctor consultation", icon: "stethoscope", src: null, status: "sample", source: "Awaiting client photography" },
    { label: "Inpatient ward", icon: "bed-double", src: null, status: "sample", source: "Awaiting client photography" },
    { label: "Hospital entrance", icon: "building-2", src: null, status: "sample", source: "Awaiting client photography" },
    { label: "Pharmacy", icon: "pill", src: null, status: "sample", source: "Awaiting client photography" },
  ] as { label: string; icon: string; src: string | null; status: VerificationStatus; source: string }[],

  departments: [
    { name: "General Medicine", icon: "stethoscope", summary: "Fevers, infections, diabetes and blood pressure. The first stop when you're not sure where to go.", status: "sample" },
    { name: "Orthopaedics", icon: "bone", summary: "Fractures, joint pain and recovery after surgery.", status: "sample" },
    { name: "Obstetrics & Gynaecology", icon: "baby", summary: "Pregnancy care, delivery and women's health.", status: "sample" },
    { name: "Paediatrics", icon: "heart-pulse", summary: "Care for children from birth through their teens.", status: "sample" },
    { name: "General Surgery", icon: "syringe", summary: "Planned and day-care procedures.", status: "sample" },
    { name: "Diagnostics", icon: "microscope", summary: "Lab tests and imaging on site.", status: "sample" },
  ] as { name: string; icon: string; summary: string; status: VerificationStatus }[],

  valuePoints: [
    { title: "Plans explained before treatment", detail: "You hear the options and costs before anything begins.", icon: "messages-square" },
    { title: "Families kept informed", detail: "One point of contact while someone you love is admitted.", icon: "users" },
    { title: "Close to Kukatpally and KPHB", detail: "Easy to reach from JNTU, Pragathi Nagar and Miyapur.", icon: "map-pin" },
    { title: "A real person answers", detail: "Call the front desk and talk to someone who can help.", icon: "phone-call" },
  ],
  valuePointsStatus: "sample" as VerificationStatus,

  doctors: [
    { name: "Doctor name", department: "Department", qualifications: "As registered", photo: null },
    { name: "Doctor name", department: "Department", qualifications: "As registered", photo: null },
    { name: "Doctor name", department: "Department", qualifications: "As registered", photo: null },
  ] as { name: string; department: string; qualifications: string; photo: string | null }[],
  doctorsStatus: "sample" as VerificationStatus,

  facilities: ["Inpatient wards", "Diagnostic lab", "In-house pharmacy", "Family waiting area"],
  facilitiesStatus: "sample" as VerificationStatus,

  faqs: [
    { topic: "Appointments", question: "Do I need an appointment to see a doctor?", answer: "Proposed: walk-ins are welcome, and calling ahead shortens your wait.", status: "sample" },
    { topic: "Appointments", question: "How do I book an appointment?", answer: "Call the front desk on 086390 74341, or send an enquiry and the front desk will call you back to arrange a time.", status: "provisional" },
    { topic: "Appointments", question: "Can I choose which doctor I see?", answer: "Awaiting confirmation from the hospital.", status: "sample" },
    { topic: "Admission", question: "What should I bring for admission?", answer: "A photo ID, previous prescriptions and reports, and a list of current medicines.", status: "sample" },
    { topic: "Admission", question: "Can a family member stay overnight?", answer: "Awaiting confirmation from the hospital.", status: "sample" },
    { topic: "Visiting", question: "What are the visiting hours?", answer: "Awaiting confirmation from the hospital.", status: "sample" },
    { topic: "Visiting", question: "How do I get there?", answer: "The hospital is in Aditya Nagar, Kukatpally. Use the directions button for live Google Maps routing.", status: "provisional" },
    { topic: "Visiting", question: "Is parking available?", answer: "Awaiting confirmation from the hospital.", status: "sample" },
    { topic: "Billing & insurance", question: "Do you accept health insurance?", answer: "Awaiting confirmation. No insurer is named until the hospital provides its list.", status: "sample" },
    { topic: "Billing & insurance", question: "How can I pay?", answer: "Awaiting confirmation from the hospital.", status: "sample" },
  ] as { topic: string; question: string; answer: string; status: VerificationStatus }[],

  navigation: {
    items: [
      { label: "About", href: "#about" },
      { label: "Departments", href: "#departments" },
      { label: "Doctors", href: "#doctors" },
      { label: "Facilities", href: "#facilities" },
      { label: "Visit", href: "#visit" },
      { label: "FAQ", href: "#faq" },
    ],
    bookLabel: "Book appointment",
    drawerBookLabel: "Book an appointment",
    bookHref: "#enquiry",
    mobileBar: { callLabel: "Call", bookLabel: "Book visit" },
  },

  footer: {
    tagline: "Hospital care in Kukatpally, Hyderabad.",
    explore: [
      { label: "About", href: "#about" },
      { label: "Doctors", href: "#doctors" },
      { label: "Facilities", href: "#facilities" },
      { label: "FAQ", href: "#faq" },
    ],
    patients: [
      { label: "Book an appointment", href: "#enquiry" },
      { label: "Visiting hours", href: "#visit" },
    ],
    departmentLinkCount: 4,
  },

  enquiry: {
    destination: { value: null, status: "sample", source: "Awaiting client: email, WhatsApp Business or CRM" } as Field<string | null>,
  },
};
