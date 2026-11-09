export type VerificationStatus = "verified" | "provisional" | "sample";

export type Field<T> = {
  value: T;
  status: VerificationStatus;
  source: string;
};

const clientFlyers = "Client flyers";
const clientContact = "Client contact, confirmed 8 Nov 2026";
const googleProfile = "Google Business Profile, captured 8 Nov 2026";
const clientLogo = "Client-supplied logo";
const proposedCopy = "Proposed copy";

export type PhotoSlot = {
  src?: string;
  alt: string;
  label?: string;
  icon?: string;
  focus?: string;
  status: VerificationStatus;
  source: string;
};

const aiGen = "AI-generated illustrative image";

const homePhotos = {
  nursingBp: {
    src: "/images/generated/home-nursing.webp",
    alt: "A nurse in navy scrubs checking blood pressure of an elderly Telugu man on a wooden sofa at home with his daughter nearby",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  physio: {
    src: "/images/generated/home-physio.webp",
    alt: "A physiotherapist in a navy polo guiding an elderly man through a seated knee-extension exercise at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  criticalCare: {
    src: "/images/generated/home-critical-care.webp",
    alt: "A nurse adjusting the nasal cannula of an elderly woman resting on an adjustable bed set up in a home bedroom",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  elderCare: {
    src: "/images/generated/home-elder-care.webp",
    alt: "A caregiver walking attentively beside an elderly woman in a cotton saree using a walker at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  motherBaby: {
    src: "/images/generated/home-mother-baby.webp",
    alt: "A mother holding and caring for her newborn baby at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  caregiverBedside: {
    src: "/images/generated/about-caregiver-bedside.webp",
    alt: "A nurse in navy scrubs sitting on a chair beside an elderly man resting in bed talking with him in morning light",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  holdingHands: {
    src: "/images/generated/about-holding-hands.webp",
    alt: "Close-up of a nurse holding an elderly patient's hand resting on a cotton bedsheet",
    status: "sample",
    source: aiGen,
  },
  serviceNursing: {
    src: "/images/generated/service-home-nursing.webp",
    alt: "A nurse preparing equipment and caring for an elderly patient at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  whyHomeCare: {
    src: "/images/generated/why-home-care.webp",
    alt: "A caregiver and an elderly woman sharing a warm reassuring moment at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  criticalBedside: {
    src: "/images/generated/critical-care-bedside.webp",
    alt: "An ICU nurse checking medical monitors beside an elderly patient on an adjustable home bed",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  criticalBed: {
    src: "/images/generated/critical-care-bed.webp",
    alt: "A patient resting on an adjustable profile bed equipped for home critical care",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  ctaVisit: {
    src: "/images/generated/cta-care-coordinator.webp",
    alt: "A care coordinator discussing home care options on a call at an office desk",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  branchExterior: {
    src: "/images/generated/branch-office.webp",
    alt: "A clean, welcoming healthcare coordination office reception for visiting families",
    status: "sample",
    source: aiGen,
  },
  servicePostOpHero: {
    src: "/images/generated/service-post-op.webp",
    alt: "A nurse carefully changing a clean knee bandage for a recovering elderly man at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  servicePostOpWho: {
    src: "/images/generated/service-post-op-who.webp",
    alt: "A dedicated nurse in navy scrubs sitting beside an elderly patient recovering in bed at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  serviceCriticalWho: {
    src: "/images/generated/service-critical-who.webp",
    alt: "A nurse explaining home ICU monitor readings and care procedures beside the patient bed",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  serviceElderWho: {
    src: "/images/generated/service-elder-who.webp",
    alt: "A caregiver providing dedicated daily mobility and living support to an older family member at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  servicePhysioWho: {
    src: "/images/generated/service-physio-who.webp",
    alt: "A physiotherapist guiding an elderly patient through guided mobility exercises at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  serviceNursingWho: {
    src: "/images/generated/service-nursing-who.webp",
    alt: "A nurse performing regular vital checks and clinical care for an elderly patient at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
} satisfies Record<string, PhotoSlot>;

export type CareOptionKey = "single" | "twelveHour" | "liveIn";

export type ServicePage = {
  eyebrow: string;
  title: string;
  lead: string;
  facts: { label: string; detail: string }[];
  included: { icon: string; name: string; detail: string }[];
  whoFor: string[];
  whoForPhoto: PhotoSlot;
  careOptions: Record<CareOptionKey, { applies: "yes" | "no" | "confirm"; note: string }>;
  role: { title: string; detail: string; teamRoles: string[] };
  extra?: { eyebrow: string; title: string; lead: string; items: { icon?: string; label: string }[]; note: string; tag: string };
  faqs: { question: string; answer: string; status: VerificationStatus }[];
  related: string[];
  reviewKeywords: string[];
  status: VerificationStatus;
  source: string;
};

const awaiting = "Awaiting confirmation from Hemalatha Health Care.";
const pageSource = "Proposed copy. Sub-service names come from the client flyers";

const servicePages: Record<string, ServicePage> = {
  "home-nursing": {
    eyebrow: "Home nursing",
    title: "Nursing care at home.",
    lead: "Nurses for injections, dressings, IVs and routine checks, at home.",
    facts: [
      { label: "Available 24/7", detail: "Call or message any time" },
      { label: "A nurse visits", detail: "To your home in Hyderabad" },
      { label: "Care options", detail: "Single visits, 12-hour and 24-hour" },
    ],
    included: [
      { icon: "syringe", name: "Injections", detail: "Given at home at the times prescribed." },
      { icon: "bandage", name: "Wound dressing", detail: "Clean, regular dressing changes." },
      { icon: "droplets", name: "IV infusion and cannula", detail: "IV fluids and cannula care at the bedside." },
      { icon: "clipboard-list", name: "Catheterisation", detail: "Catheter insertion and care." },
      { icon: "activity", name: "Ryles tube insertion and care", detail: "Tube placement and feeding-tube care." },
      { icon: "wind", name: "Nebulisation", detail: "Breathing treatments at home." },
      { icon: "thermometer", name: "BP and sugar checks", detail: "Regular readings, noted for the family." },
      { icon: "pill", name: "Medication administration", detail: "Medicines given on schedule." },
    ],
    whoFor: ["Patients back home after a hospital discharge", "People with long-term conditions who need regular procedures", "Patients who can't travel to a clinic", "People with diabetes who need regular monitoring"],
    whoForPhoto: homePhotos.serviceNursingWho,
    careOptions: {
      single: { applies: "yes", note: "A nurse visits for one procedure or check." },
      twelveHour: { applies: "yes", note: "A nurse stays for a 12-hour shift." },
      liveIn: { applies: "yes", note: "24-hour nursing, in shifts or live-in." },
    },
    role: { title: "Registered nurse", detail: "A nurse carries out the procedures, records readings and keeps the family informed. Qualifications to be confirmed.", teamRoles: ["Nurse"] },
    faqs: [
      { question: "Do you bring the supplies?", answer: awaiting, status: "sample" },
      { question: "Can a nurse visit daily at a fixed time?", answer: awaiting, status: "sample" },
      { question: "Do I need a doctor's prescription?", answer: awaiting, status: "sample" },
      { question: "How quickly can a nurse come?", answer: `${awaiting} Call 86390 74341 and a coordinator will tell you what is possible.`, status: "sample" },
      { question: "Can you change a catheter or Ryles tube?", answer: "Catheterisation and Ryles tube insertion and care are part of our home nursing.", status: "verified" },
    ],
    related: ["post-operative-care", "elder-care", "critical-care-at-home"],
    reviewKeywords: ["nurse", "nursing"],
    status: "sample",
    source: pageSource,
  },
  "critical-care-at-home": {
    eyebrow: "Critical care at home",
    title: "Critical care at home.",
    lead: "ICU-trained nurses and equipment setup so a critically ill patient can be cared for at home.",
    facts: [
      { label: "Available 24/7", detail: "Monitoring around the clock" },
      { label: "ICU-trained nurses", detail: "At the bedside" },
      { label: "Care options", detail: "12-hour and 24-hour" },
    ],
    included: [
      { icon: "wind", name: "Ventilator care", detail: "Nurses trained to care for patients on a ventilator." },
      { icon: "activity", name: "Tracheostomy care", detail: "Cleaning and care of the tracheostomy." },
      { icon: "wind", name: "Oxygen therapy support", detail: "Help setting up and managing oxygen." },
      { icon: "heart-pulse", name: "Cardiac and stroke patient care", detail: "Care for patients recovering from a heart event or stroke." },
      { icon: "gauge", name: "Continuous monitoring", detail: "Regular checks of vital signs, day and night." },
      { icon: "bed-double", name: "Home ICU setup assistance", detail: "Help arranging the bed and equipment at home." },
      { icon: "siren", name: "Emergency coordination", detail: "A plan for who to call if the patient's condition changes." },
    ],
    whoFor: ["Patients discharged from the ICU", "Long-term ventilator or tracheostomy patients", "Post-stroke and cardiac patients", "Palliative care at home"],
    whoForPhoto: homePhotos.serviceCriticalWho,
    careOptions: {
      single: { applies: "no", note: "Single visits are not offered for critical care." },
      twelveHour: { applies: "yes", note: "An ICU-trained nurse for a 12-hour shift." },
      liveIn: { applies: "yes", note: "24-hour cover in shifts." },
    },
    role: { title: "ICU-trained nurse", detail: "An ICU-trained nurse monitors the patient, manages equipment such as oxygen and ventilators, and keeps the family and doctor informed.", teamRoles: ["Nurse"] },
    extra: {
      eyebrow: "Setting up care at home",
      title: "What a home ICU setup may need.",
      lead: "We help arrange the room and equipment. Which items we supply and which the family arranges is to be confirmed.",
      items: [{ icon: "bed-double", label: "Bed" }, { icon: "wind", label: "Oxygen" }, { icon: "activity", label: "Monitor" }, { icon: "droplets", label: "Suction" }, { icon: "heart-pulse", label: "Ventilator" }],
      note: "This service does not replace emergency services. In an emergency, call your local emergency number.",
      tag: "To confirm with the client",
    },
    faqs: [
      { question: "What equipment do you arrange?", answer: "Home ICU setup assistance is part of this service. Which equipment we supply is awaiting confirmation.", status: "provisional" },
      { question: "Can you continue ICU care after a patient leaves the ICU?", answer: awaiting, status: "sample" },
      { question: "What happens in an emergency?", answer: "Call your local emergency number first. This service does not replace emergency services. Your coordinator can explain the plan for your patient.", status: "sample" },
      { question: "Do nurses work in shifts?", answer: "12-hour and 24-hour care are options. Shift details are awaiting confirmation.", status: "sample" },
      { question: "Do you coordinate with the patient's doctor?", answer: awaiting, status: "sample" },
    ],
    related: ["home-nursing", "post-operative-care", "physiotherapy-at-home"],
    reviewKeywords: ["icu", "ventilator", "critical"],
    status: "sample",
    source: pageSource,
  },
  "elder-care": {
    eyebrow: "Elder care and attendants",
    title: "Elder care at home.",
    lead: "Caregivers and attendants who help older parents live safely and comfortably at home.",
    facts: [
      { label: "Available 24/7", detail: "Day and night cover" },
      { label: "A caregiver visits", detail: "Nurse visits added if needed" },
      { label: "Care options", detail: "12-hour day care and 24-hour live-in" },
    ],
    included: [
      { icon: "hand-heart", name: "Daily assistance and personal hygiene", detail: "Help with washing, dressing and the daily routine." },
      { icon: "users", name: "Companionship", detail: "Someone to talk with and keep company." },
      { icon: "pill", name: "Medication reminders", detail: "Medicines taken on time, as prescribed." },
      { icon: "thermometer", name: "Vital checks", detail: "Regular BP and sugar readings." },
      { icon: "accessibility", name: "Mobility help", detail: "Support moving around the home safely." },
      { icon: "bed-double", name: "Bedridden care", detail: "Turning, hygiene and comfort for bedridden patients." },
      { icon: "brain", name: "Dementia and Alzheimer's support", detail: "Patient, familiar routines for memory loss." },
      { icon: "utensils", name: "Nutrition and meals", detail: "Help with eating and mealtimes." },
    ],
    whoFor: ["Parents living alone", "Families working long hours", "Seniors recovering from illness", "People living with dementia or Alzheimer's"],
    whoForPhoto: homePhotos.serviceElderWho,
    careOptions: {
      single: { applies: "confirm", note: "Single visits are to be confirmed." },
      twelveHour: { applies: "yes", note: "12-hour day care." },
      liveIn: { applies: "yes", note: "A caregiver who stays 24 hours." },
    },
    role: { title: "Caregiver or attendant", detail: "A caregiver or attendant helps with daily life. A nurse can visit as well if medical care is needed.", teamRoles: ["Caregiver", "Nurse"] },
    faqs: [
      { question: "Can the same caregiver come every day?", answer: awaiting, status: "sample" },
      { question: "What if my parent doesn't get along with the caregiver?", answer: awaiting, status: "sample" },
      { question: "Do caregivers cook?", answer: awaiting, status: "sample" },
      { question: "Do you handle dementia care?", answer: "Yes. Dementia and Alzheimer's support is part of our elder care.", status: "verified" },
      { question: "Can I check in while I'm away?", answer: `${awaiting} Your coordinator is your point of contact.`, status: "sample" },
    ],
    related: ["home-nursing", "physiotherapy-at-home", "post-operative-care"],
    reviewKeywords: ["mother", "father", "parent", "caregiver", "elder"],
    status: "sample",
    source: pageSource,
  },
  "post-operative-care": {
    eyebrow: "Post-operative and patient care",
    title: "Post-operative care at home.",
    lead: "Help with recovery after surgery or a hospital stay, at home.",
    facts: [
      { label: "Available 24/7", detail: "Call or message any time" },
      { label: "Nurses and attendants", detail: "Visit your home" },
      { label: "Care options", detail: "Single visits, 12-hour and 24-hour" },
    ],
    included: [
      { icon: "bed-double", name: "Post-surgery recovery support", detail: "Help through the first weeks at home." },
      { icon: "bandage", name: "Wound care", detail: "Dressing changes and watching for problems." },
      { icon: "pill", name: "Medication schedules", detail: "Medicines given at the right times." },
      { icon: "accessibility", name: "Mobility and toilet help", detail: "Safe support getting up and moving." },
      { icon: "users", name: "Bedridden patient care", detail: "Comfort, hygiene and repositioning." },
      { icon: "heart-pulse", name: "Chronic illness care", detail: "Ongoing care for long-term conditions." },
      { icon: "hand-heart", name: "Patient attendants", detail: "An attendant for day-to-day help." },
      { icon: "activity", name: "Coordination with physiotherapy", detail: "Care that fits with recovery exercises." },
    ],
    whoFor: ["After orthopaedic, cardiac or abdominal surgery", "After a long hospital stay", "Patients with chronic illness", "Bedridden patients"],
    whoForPhoto: homePhotos.servicePostOpWho,
    careOptions: {
      single: { applies: "yes", note: "Single visits for dressings or checks." },
      twelveHour: { applies: "yes", note: "12-hour shifts." },
      liveIn: { applies: "yes", note: "24-hour care." },
    },
    role: { title: "Nurse and patient attendant", detail: "A nurse handles wound care and medicines. A patient attendant helps with moving, hygiene and daily needs.", teamRoles: ["Nurse", "Caregiver"] },
    faqs: [
      { question: "How soon after discharge can you start?", answer: `${awaiting} Call 86390 74341 to ask about your situation.`, status: "sample" },
      { question: "Can you manage drains and stitches?", answer: awaiting, status: "sample" },
      { question: "How long does post-operative care usually last?", answer: "It depends on the surgery and the patient. Your coordinator can discuss this with you.", status: "sample" },
      { question: "Can physiotherapy be added?", answer: "Physiotherapy at home is one of our services, and post-operative care can be coordinated with it.", status: "provisional" },
    ],
    related: ["physiotherapy-at-home", "home-nursing", "elder-care"],
    reviewKeywords: ["surgery", "operation", "recovery"],
    status: "sample",
    source: pageSource,
  },
  "physiotherapy-at-home": {
    eyebrow: "Physiotherapy at home",
    title: "Physiotherapy at home.",
    lead: "A physiotherapist visits your home for pain relief, recovery and better mobility.",
    facts: [
      { label: "Available 24/7", detail: "Call or message to book" },
      { label: "A physiotherapist visits", detail: "To your home" },
      { label: "Care options", detail: "Single sessions and session packages" },
    ],
    included: [
      { icon: "bone", name: "Back and neck pain", detail: "Treatment and exercises for spine and neck pain." },
      { icon: "bone", name: "Knee, joint and shoulder pain", detail: "Relief and movement for painful joints." },
      { icon: "activity", name: "Post-fracture rehabilitation", detail: "Rebuilding strength after a fracture." },
      { icon: "brain", name: "Stroke and neurological rehabilitation", detail: "Exercises to regain movement and balance." },
      { icon: "accessibility", name: "Elderly mobility", detail: "Safer walking and moving for older adults." },
      { icon: "dumbbell", name: "Exercise therapy", detail: "A personal exercise plan you can follow." },
      { icon: "hand-heart", name: "Manual therapy", detail: "Hands-on treatment by the physiotherapist." },
      { icon: "zap", name: "Laser therapy", detail: "Used for pain relief where suitable." },
    ],
    whoFor: ["Elderly patients", "People after surgery or a fracture", "Stroke recovery", "People with chronic pain, or who can't travel"],
    whoForPhoto: homePhotos.servicePhysioWho,
    careOptions: {
      single: { applies: "yes", note: "Single sessions and session packages. Wording to be confirmed." },
      twelveHour: { applies: "no", note: "Physiotherapy is visit-based, not shift-based." },
      liveIn: { applies: "no", note: "Not offered for physiotherapy." },
    },
    role: { title: "Physiotherapist", detail: "A physiotherapist assesses the problem, plans the exercises and treatment, and tracks progress. Qualifications to be confirmed.", teamRoles: ["Physiotherapist"] },
    extra: {
      eyebrow: "Conditions we help with",
      title: "Treatment areas.",
      lead: "Treatment areas listed on the client's flyers.",
      items: [
        { icon: "bone", label: "Back pain" },
        { icon: "bone", label: "Neck pain" },
        { icon: "bone", label: "Knee pain" },
        { icon: "bone", label: "Joint pain" },
        { icon: "bone", label: "Shoulder pain" },
        { icon: "activity", label: "Post-fracture recovery" },
        { icon: "brain", label: "Stroke and neurological recovery" },
        { icon: "accessibility", label: "Elderly mobility" },
      ],
      note: "Client to confirm the full list of treatment areas.",
      tag: "List to confirm",
    },
    faqs: [
      { question: "How long is a session?", answer: awaiting, status: "sample" },
      { question: "Do you bring equipment?", answer: awaiting, status: "sample" },
      { question: "How many sessions will I need?", answer: "It depends on the condition. The physiotherapist will advise after the first assessment.", status: "sample" },
      { question: "Can sessions be at a fixed time?", answer: awaiting, status: "sample" },
      { question: "Do you treat stroke patients?", answer: "Yes. Stroke and neurological rehabilitation is part of physiotherapy at home.", status: "verified" },
    ],
    related: ["post-operative-care", "elder-care", "home-nursing"],
    reviewKeywords: ["physio", "exercise"],
    status: "sample",
    source: pageSource,
  },
};

export const hospital = {
  name: { value: "Hemalatha Health Care", status: "verified", source: clientLogo } as Field<string>,
  legalName: { value: "Hemalatha Health Care Pvt. Ltd.", status: "verified", source: clientLogo } as Field<string>,
  category: { value: "Home healthcare services", status: "verified", source: clientFlyers } as Field<string>,
  siteUrl: { value: "https://hemalathahealthcare.com", status: "sample", source: "Flyer says hemalathahealthcare.com, Google lists hemalathahealthcareservices.com; client to confirm" } as Field<string>,

  phone: {
    display: { value: "86390 74341", status: "verified", source: clientFlyers } as Field<string>,
    href: { value: "tel:+918639074341", status: "verified", source: clientFlyers } as Field<string>,
  },

  email: {
    display: { value: "hemalathahealthcare@gmail.com", status: "verified", source: clientFlyers } as Field<string>,
    href: { value: "mailto:hemalathahealthcare@gmail.com", status: "verified", source: clientFlyers } as Field<string>,
  },

  whatsapp: {
    display: { value: "86390 74341", status: "verified", source: clientContact } as Field<string>,
    href: { value: "https://wa.me/918639074341", status: "verified", source: clientContact } as Field<string>,
    label: "WhatsApp",
  },

  availability: { value: "24/7", status: "verified", source: clientFlyers } as Field<string>,

  branches: [
    {
      label: "Branch 1",
      name: "Kukatpally",
      role: "Main office",
      address: "Plot No. 22, KPHB Colony, Kukatpally, Hyderabad 500072",
      locality: "KPHB Colony, Kukatpally",
      city: "Hyderabad",
      postalCode: "500072",
      landmark: "",
      coordinates: { latitude: 17.5053003, longitude: 78.3954258 },
      directionsUrl: "https://maps.app.goo.gl/wopgBqKkZyh2eRNg6",
      status: "provisional",
      source: `${clientFlyers}; Google lists this branch in Aditya Nagar 500085, and the map pin and directions link come from that listing. Client to confirm`,
    },
    { label: "Branch 2", name: "Pragathi Nagar", role: "", address: "Pragathi Nagar, Hyderabad", locality: "Pragathi Nagar", city: "Hyderabad", postalCode: "", landmark: "", coordinates: null, directionsUrl: "", status: "provisional", source: `${clientFlyers}; full address to confirm` },
    { label: "Branch 3", name: "Madhapur", role: "", address: "Madhapur, Hitech City, Hyderabad", locality: "Madhapur, Hitech City", city: "Hyderabad", postalCode: "", landmark: "Near Medicover Hospital", coordinates: null, directionsUrl: "", status: "provisional", source: `${clientFlyers}; full address to confirm` },
    { label: "Branch 4", name: "Manikonda", role: "", address: "Manikonda, Hyderabad", locality: "Manikonda", city: "Hyderabad", postalCode: "", landmark: "Near Lanco Hills", coordinates: null, directionsUrl: "", status: "provisional", source: `${clientFlyers}, on 2 of 12 flyers; full address to confirm` },
  ] as {
    label: string;
    name: string;
    role: string;
    address: string;
    locality: string;
    city: string;
    postalCode: string;
    landmark: string;
    coordinates: { latitude: number; longitude: number } | null;
    directionsUrl: string;
    status: VerificationStatus;
    source: string;
  }[],

  googleRating: {
    rating: { value: 4.7, status: "provisional", source: googleProfile } as Field<number>,
    reviewCount: { value: 96, status: "provisional", source: googleProfile } as Field<number>,
  },

  hero: {
    eyebrow: { value: "Home healthcare across Hyderabad · 24/7", status: "sample", source: proposedCopy } as Field<string>,
    headline: { value: "Nursing, elder care and physiotherapy at your home.", status: "sample", source: proposedCopy } as Field<string>,
    lead: { value: "Nurses, caregivers and physiotherapists who come to you, day or night, and a coordinator you can call.", status: "sample", source: proposedCopy } as Field<string>,
    primaryCtaLabel: "Request care",
    callLabel: "Call",
    photosLabel: "Home care photos",
    badges: ["Available 24/7", "Care at your home"],
  },

  facts: [
    { label: "Available 24/7", detail: "Day and night", status: "verified", source: clientFlyers },
    { label: "Nurses and caregivers", detail: "Plus physiotherapists", status: "verified", source: clientFlyers },
    { label: "4 branches", detail: "Across Hyderabad", status: "provisional", source: `${clientFlyers}; branches to confirm` },
    { label: "We come to you", detail: "Care at your home", status: "verified", source: clientFlyers },
  ],

  heroPhotos: [
    { label: "Home nursing", icon: "stethoscope", photo: homePhotos.nursingBp },
    { label: "Physiotherapy at home", icon: "activity", photo: homePhotos.physio },
    { label: "Critical care", icon: "heart-pulse", photo: homePhotos.criticalCare },
    { label: "Elder care", icon: "users", photo: homePhotos.elderCare },
    { label: "Mother and baby", icon: "baby", photo: homePhotos.motherBaby },
  ] as { label: string; icon: string; photo: PhotoSlot }[],

  services: [
    {
      name: "Home nursing",
      slug: "home-nursing",
      page: servicePages["home-nursing"],
      heroPhoto: homePhotos.nursingBp,
      icon: "syringe",
      summary: "Nurses for injections, dressings, IV care and routine checks, at home.",
      subServices: ["Injections", "Wound dressing", "IV infusion and cannula", "Catheterisation", "Ryles tube insertion and care", "Nebulisation", "BP and sugar checks"],
      status: "verified",
      source: clientFlyers,
    },
    {
      name: "Critical care at home",
      slug: "critical-care-at-home",
      page: servicePages["critical-care-at-home"],
      heroPhoto: homePhotos.criticalCare,
      icon: "heart-pulse",
      summary: "ICU-trained nurses and equipment help for seriously ill patients at home.",
      subServices: ["ICU-trained nurses", "Ventilator care", "Tracheostomy care", "Oxygen therapy support", "Cardiac and stroke patient care", "24×7 monitoring", "Home ICU setup assistance"],
      status: "verified",
      source: clientFlyers,
    },
    {
      name: "Elder care and attendants",
      slug: "elder-care",
      page: servicePages["elder-care"],
      heroPhoto: homePhotos.elderCare,
      icon: "users",
      summary: "Caregivers and attendants who help older family members live comfortably at home.",
      subServices: ["Caregivers and attendants", "Personal hygiene and daily assistance", "Medication management", "Dementia and Alzheimer's support", "Vital checks", "Companionship", "Nutrition"],
      status: "verified",
      source: clientFlyers,
    },
    {
      name: "Post-operative and patient care",
      slug: "post-operative-care",
      page: servicePages["post-operative-care"],
      heroPhoto: homePhotos.servicePostOpHero,
      icon: "bed-double",
      summary: "Help with recovery after surgery or a hospital stay, at home.",
      subServices: ["Post-surgery recovery", "Chronic illness care", "Bedridden patients", "Patient attendants"],
      status: "verified",
      source: clientFlyers,
    },
    {
      name: "Physiotherapy at home",
      slug: "physiotherapy-at-home",
      page: servicePages["physiotherapy-at-home"],
      heroPhoto: homePhotos.physio,
      icon: "activity",
      summary: "A physiotherapist visits for pain relief, recovery and better mobility.",
      subServices: ["Back, neck and knee pain", "Post-fracture rehabilitation", "Stroke and neurological rehabilitation", "Elderly mobility", "Joint and shoulder pain", "Exercise therapy", "Manual therapy", "Laser therapy"],
      status: "verified",
      source: clientFlyers,
    },
    {
      name: "Baby and mother care",
      icon: "baby",
      summary: "Newborn and mother care at home, through Hemalatha Baby Care.",
      subServices: ["Newborn care (0–6 months)", "Feeding support", "Post-delivery mother support", "Day and night caretakers", "Bathing and hygiene", "Nanny services"],
      externalLink: { href: "https://www.hemalathababycare.com", label: "Learn more" },
      status: "verified",
      source: clientFlyers,
    },
  ] as {
    name: string;
    icon: string;
    summary: string;
    slug?: string;
    page?: ServicePage;
    heroPhoto?: PhotoSlot;
    subServices: string[];
    externalLink?: { href: string; label: string };
    note?: string;
    status: VerificationStatus;
    source: string;
  }[],

  howItWorks: [
    { title: "Call or request care", detail: "Phone, WhatsApp or the form below. Tell us who needs care and why." },
    { title: "We understand the patient's needs", detail: "A coordinator asks about the patient's condition and the help needed." },
    { title: "We arrange the right person", detail: "A suitable nurse, caregiver or physiotherapist is arranged." },
    { title: "Care starts at home", detail: "Care begins at home, with a coordinator you can call." },
  ],
  howItWorksStatus: "sample" as VerificationStatus,

  valuePoints: [
    { title: "Available 24/7", detail: "Call or message any time, day or night.", icon: "clock" },
    { title: "Trained nurses and caregivers", detail: "Care from people trained for the work.", icon: "user-round" },
    { title: "One point of contact", detail: "A coordinator you can call about your family member's care.", icon: "phone-call" },
    { title: "Four branches across Hyderabad", detail: "Kukatpally, Pragathi Nagar, Madhapur and Manikonda.", icon: "map-pin" },
  ],
  valuePointsStatus: "sample" as VerificationStatus,

  careTeam: [
    { name: "Lakshmi Devi", role: "Nurse", photo: { src: "/images/generated/team-nurse.webp", alt: "Demo portrait of a registered nurse in navy scrubs", status: "sample", source: aiGen } },
    { name: "Ravi Kumar", role: "Physiotherapist", photo: { src: "/images/generated/team-physiotherapist.webp", alt: "Demo portrait of a physiotherapist in a navy polo", status: "sample", source: aiGen } },
    { name: "Sunitha Rao", role: "Caregiver", photo: { src: "/images/generated/team-caregiver.webp", alt: "Demo portrait of a caregiver in navy scrubs", status: "sample", source: aiGen } },
  ] as { name: string; role: string; photo: PhotoSlot }[],
  careTeamStatus: "sample" as VerificationStatus,

  careRoles: [
    { title: "Nurses", detail: "Including ICU-trained nurses", icon: "syringe" },
    { title: "Caregivers and attendants", detail: "For daily care at home", icon: "users" },
    { title: "Physiotherapists", detail: "Visits for recovery and mobility", icon: "activity" },
    { title: "Baby care staff", detail: "Through Hemalatha Baby Care", icon: "baby" },
  ],
  careRolesStatus: "verified" as VerificationStatus,

  criticalCare: {
    items: ["ICU-trained nurses", "Ventilator care", "Tracheostomy care", "Oxygen therapy support", "Home ICU setup assistance", "Cardiac and stroke patient care"],
    status: "verified" as VerificationStatus,
    source: clientFlyers,
  },

  faqs: [
    { question: "How quickly can a nurse or caregiver start?", answer: "Awaiting confirmation from Hemalatha Health Care. Call 86390 74341 and a coordinator will tell you what is possible for your situation.", status: "sample" },
    { question: "Are your nurses and caregivers trained? What checks do you do?", answer: "Awaiting confirmation from Hemalatha Health Care. No checks are described until the team supplies them.", status: "sample" },
    { question: "Can I ask for a different caregiver?", answer: "Awaiting confirmation from Hemalatha Health Care.", status: "sample" },
    { question: "Do you offer 12-hour and 24-hour live-in care?", answer: "Awaiting confirmation from Hemalatha Health Care. You can choose a care type when you request care.", status: "sample" },
    { question: "Is there a minimum booking period?", answer: "Awaiting confirmation from Hemalatha Health Care.", status: "sample" },
    { question: "How much does home nursing cost?", answer: "Awaiting confirmation from Hemalatha Health Care. Prices are not listed until the team supplies them. Call for a quote.", status: "sample" },
    { question: "Can you set up ICU equipment at home?", answer: "Home ICU setup assistance is part of our critical care at home. A coordinator will explain what your patient needs.", status: "provisional" },
    { question: "Which areas of Hyderabad do you cover?", answer: "We come to your home. Our four branches are in Kukatpally, Pragathi Nagar, Madhapur and Manikonda. Call to check that we cover your area.", status: "provisional" },
    { question: "Do you provide physiotherapy for stroke and post-fracture recovery?", answer: "Yes. Physiotherapy at home includes stroke and neurological rehabilitation and post-fracture rehabilitation.", status: "verified" },
    { question: "How do I pay?", answer: "Awaiting confirmation from Hemalatha Health Care.", status: "sample" },
  ] as { question: string; answer: string; status: VerificationStatus }[],

  about: {
    eyebrow: "About Hemalatha",
    title: "Care that feels like family.",
    lead: "Hemalatha Health Care brings nursing, caregiving and physiotherapy to your home in Hyderabad. Description to be supplied by the client.",
    mainPhoto: homePhotos.caregiverBedside as PhotoSlot,
    insetPhoto: homePhotos.holdingHands as PhotoSlot,
    badge: "We Care Like Family",
    checks: [
      { icon: "house", title: "Care at home", detail: "We come to you" },
      { icon: "clock", title: "Available 24/7", detail: "Day and night" },
      { icon: "phone-call", title: "One coordinator per family", detail: "One person to call" },
      { icon: "stethoscope", title: "Nurses and physiotherapists", detail: "Who visit your home" },
    ],
    ctaLabel: "See our services",
    ctaHref: "#services",
    status: "sample" as VerificationStatus,
  },

  servicesSection: {
    featuredPhoto: homePhotos.serviceNursing as PhotoSlot,
    eyebrow: "Services",
    title: "Care for every stage, at home.",
    lead: "Six kinds of care, delivered where your family is most comfortable.",
    linkLabel: "Learn more",
    linkHref: "#enquiry",
  },

  serviceHero: {
    breadcrumbLabel: "Breadcrumb",
    homeLabel: "Home",
    servicesLabel: "Services",
    requestLabel: "Request this service",
    callLabel: "Call",
  },

  serviceBlocks: {
    includedEyebrow: "What's included",
    includedTitle: "What this service covers.",
    whoForEyebrow: "Who it's for",
    whoForTitle: "Who this service helps.",
    careOptionsEyebrow: "Care options",
    careOptionsTitle: "Choose how long we stay.",
    careOptionsLead: "Whether each option applies to this service.",
    careOptionNames: { single: "Single visit", twelveHour: "12-hour shift", liveIn: "24-hour live-in" },
    availableLabel: "Available",
    notOfferedLabel: "Not offered",
    toConfirmLabel: "To confirm",
    pricesNote: "Prices are not listed yet. Call or request care and a coordinator will explain the cost.",
    roleEyebrow: "Who will care for you",
    reviewsTitlePrefix: "What families say about",
    relatedEyebrow: "Related services",
    relatedTitle: "Other care at home.",
    requestTitlePrefix: "Request",
    faqEyebrow: "FAQ",
    faqTitlePrefix: "Questions about",
  },

  howItWorksSection: {
    eyebrow: "How it works",
    title: "Four steps to care at home.",
    lead: "From the first call to the first visit.",
    stepLabel: "Step",
    ctaLabel: "Request care",
    ctaHref: "#enquiry",
  },

  whyUs: {
    eyebrow: "Why families choose us",
    title: "Care that feels like family.",
    photo: homePhotos.whyHomeCare as PhotoSlot,
  },

  careTeamSection: {
    eyebrow: "Care team",
    title: "Meet the people who visit.",
    lead: "Demo profiles for now. Real profiles will show each person's role and qualifications.",
    linkLabel: "Request a nurse or caregiver",
    linkHref: "#enquiry",
    photoLabel: "Demo profile",
    requestLabel: "Request care",
    rolesLabel: "Who visits",
  },

  criticalCareSection: {
    eyebrow: "Critical care at home",
    title: "ICU-trained nurses and setup help, at home.",
    figure: { value: "24", unit: "/7", label: "Monitoring" },
    ctaLabel: "Request critical care",
    ctaHref: "#enquiry",
    photos: [homePhotos.criticalBedside, homePhotos.criticalBed] as PhotoSlot[],
    seal: "Care at home",
  },

  navigation: {
    items: [
      { label: "Services", href: "#services" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Care team", href: "#care-team" },
      { label: "Branches", href: "#branches" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
    ],
    bookLabel: "Request care",
    drawerBookLabel: "Request care",
    bookHref: "#enquiry",
    whatsappAriaLabel: "Message us on WhatsApp",
    mobileBar: { callLabel: "Call", bookLabel: "Request care" },
  },

  footer: {
    tagline: "Home healthcare across Hyderabad. We care like family.",
    servicesHeading: "Services",
    servicesHref: "#services",
    branchesHeading: "Branches",
    branchesHref: "#branches",
    companyHeading: "Company",
    company: [
      { label: "About", href: "#about" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Care team", href: "#care-team" },
      { label: "FAQ", href: "#faq" },
      { label: "Request care", href: "#enquiry" },
    ],
    availabilityDetail: "Care available any time",
    emailDetail: "Email us",
    firstPhoneDetail: "Call us",
  },

  reviewsSection: {
    eyebrow: "Family reviews",
    title: "What families say.",
    ratingLinkLabel: "Google rating",
    reviewCountSuffix: "reviews",
    sourceLabel: "Google review",
    sampleLabel: "Sample review",
    stripLabel: "Family reviews, scrolling automatically. Hover or focus to pause.",
  },

  enquiry: {
    destination: { value: null, status: "sample", source: "Awaiting client: email, WhatsApp Business or CRM" } as Field<string | null>,
    eyebrow: "Request care",
    title: "Tell us who needs care. We'll call you.",
    lead: "A coordinator calls to understand the patient's needs. Nothing is arranged or confirmed until you've spoken to them.",
    callPrompt: "Prefer to talk now?",
    callLabel: "Call now",
    formLabel: "Request care form",
    nameLabel: "Your name",
    namePlaceholder: "Full name",
    phoneLabel: "Mobile number",
    phonePlaceholder: "98765 43210",
    whoLabel: "Who needs care",
    whoDefault: "Select",
    whoOptions: ["Parent", "Spouse", "Child", "Myself", "Someone else"],
    serviceLabel: "Service",
    serviceDefault: "Not sure, help me choose",
    areaLabel: "Area or branch",
    areaDefault: "Not sure",
    areaOther: "Another area",
    startLabel: "When to start",
    startDefault: "Select",
    startOptions: ["As soon as possible", "Within a few days", "Next week", "Not decided yet"],
    careTypeLabel: "Care type",
    careTypeDefault: "Select",
    careTypeOptions: ["Single visit", "12-hour", "24-hour live-in", "Not sure"],
    messageLabel: "Message",
    messagePlaceholder: "A short note about the patient helps us prepare",
    optionalLabel: "(optional)",
    consentLabel: "I agree to be contacted by Hemalatha Health Care about this request.",
    submitLabel: "Request care",
    sendingLabel: "Sending…",
    hint: "A coordinator will call you.",
    successTitle: "Request received.",
    successBody: "A coordinator will call you to understand the patient's needs. Nothing is arranged until then.",
    failureMessage: "We couldn't send your request. Please call 86390 74341 or message us on WhatsApp.",
  },

  branchesSection: {
    eyebrow: "Branches and areas",
    title: "Four branches, care at your door.",
    aside: "Care is delivered at home, anywhere our branches serve.",
    officePhoto: homePhotos.branchExterior as PhotoSlot,
    mapTitle: "Map showing Branch 1 in Kukatpally, Hyderabad",
    directionsLabel: "Get directions",
    availablePrefix: "Care available",
    phoneLabel: "Phone",
    emailLabel: "Email",
    mainOfficeTag: "Main office",
  },

  faqSection: {
    eyebrow: "FAQ",
    title: "Questions families ask us.",
    lead: "Answers to what families ask before arranging care at home.",
    footPrompt: "Still have a question?",
    footCallPrefix: "Call",
  },

  ctaSection: {
    title: "Need care at home? Talk to us today.",
    lead: "Call or message us any time. A coordinator will help you take the next step.",
    bookLabel: "Request care",
    bookHref: "#enquiry",
    callPrefix: "Call",
    whatsappLabel: "WhatsApp",
    photo: homePhotos.ctaVisit as PhotoSlot,
  },
};
