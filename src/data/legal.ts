import { hospital } from "@/data/hospital-content";

type LegalSection = { heading: string; paragraphs?: string[]; list?: string[] };

type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

const company = hospital.legalName.value;
const phone = hospital.phone.display.value;
const email = hospital.email.display.value;

export const legalDocuments: LegalDocument[] = [
  {
    slug: "privacy",
    title: "Privacy policy",
    description: `How ${company} collects, uses and protects the details you share when you request home care.`,
    updated: "11 November 2026",
    intro: `${company} provides home healthcare in Hyderabad. This page explains what we collect through this website, why, and the choices you have.`,
    sections: [
      {
        heading: "What we collect",
        paragraphs: ["When you fill in the request form we collect only what you type into it:"],
        list: [
          "Your name and mobile number",
          "Who needs care, the service, area, start time and care type you choose",
          "Any note you add about the patient",
        ],
      },
      {
        heading: "Please keep the form brief",
        paragraphs: [
          "Do not enter detailed medical records in the form. A coordinator will ask about the patient's condition when they call you.",
        ],
      },
      {
        heading: "Why we use it",
        list: [
          "To call you back about your request",
          "To understand the patient's needs and suggest suitable care",
          "To improve how we respond to families",
        ],
      },
      {
        heading: "Who sees it",
        paragraphs: [
          "Your request is held in a secure online spreadsheet that only our care coordinators can open. We do not sell your details or share them for advertising. We share them only where the law requires it.",
        ],
      },
      {
        heading: "Cookies and analytics",
        paragraphs: [
          "We may use Google Analytics to count visits and see which pages are useful. It records how the site is used, not your name or phone number. You can block analytics cookies in your browser settings.",
        ],
      },
      {
        heading: "How long we keep it",
        paragraphs: [
          "We keep enquiries only as long as needed to respond and to look after the patient's care. You can ask us to delete your request at any time.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          `To see, correct or delete what we hold about you, or to stop us contacting you, call ${phone} or email ${email}.`,
        ],
      },
      {
        heading: "Changes",
        paragraphs: ["If this policy changes, the new version will be posted on this page with a new date."],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of use",
    description: `The terms for using the ${company} website.`,
    updated: "11 November 2026",
    intro: `By using this website you agree to these terms. They are written to be short and clear.`,
    sections: [
      {
        heading: "What this website is",
        paragraphs: [
          `This website describes the home healthcare services of ${company}. It is not an inpatient hospital, and the information here is general. It is not medical advice.`,
        ],
      },
      {
        heading: "In an emergency",
        paragraphs: [
          "If someone is seriously ill or in danger, call your local emergency number or go to the nearest hospital. Do not wait for a callback from this website.",
        ],
      },
      {
        heading: "Requesting care",
        paragraphs: [
          "Sending the request form does not book or confirm any visit. Care starts only after a coordinator has spoken to you and agreed the details.",
        ],
      },
      {
        heading: "Accuracy",
        paragraphs: [
          "We try to keep the information here correct, but services, areas and availability can change. Please confirm details with a coordinator.",
        ],
      },
      {
        heading: "Using the site",
        paragraphs: [
          "Please do not misuse the site or the request form, or send false details. The text, logo and photos belong to us or are used with permission.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [`Questions about these terms: call ${phone} or email ${email}.`],
      },
    ],
  },
];
