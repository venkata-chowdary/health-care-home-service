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
    alt: "A male nurse in uniform checking the blood pressure of an elderly man on a sofa in a bright living room with his son nearby",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  physio: {
    src: "/images/generated/home-physio.webp",
    alt: "A female physiotherapist in uniform guiding an elderly woman in a cotton saree through a seated knee-extension exercise at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  criticalCare: {
    src: "/images/generated/home-critical-care.webp",
    alt: "An ICU nurse in uniform adjusting the nasal cannula of a woman resting on a care bed in an upscale home bedroom",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  elderCare: {
    src: "/images/generated/home-elder-care.webp",
    alt: "A young male caregiver in uniform walking attentively beside an elderly man using a walker in a spacious, upscale home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  motherBaby: {
    src: "/images/generated/home-mother-baby.webp",
    alt: "A baby-care nurse in uniform supporting a mother holding her newborn baby at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  caregiverBedside: {
    src: "/images/generated/about-caregiver-bedside.webp",
    alt: "A young male caregiver in uniform sitting on the edge of the bed, gently holding the hand of an elderly man resting against pillows in a bright bedroom",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  holdingHands: {
    src: "/images/generated/about-holding-hands.webp",
    alt: "Close-up of a female nurse holding an elderly patient's hand resting on cotton bedding",
    status: "sample",
    source: aiGen,
  },
  serviceNursing: {
    src: "/images/generated/service-home-nursing.webp",
    alt: "A young female nurse in uniform and gloves checking the drip chamber of a saline IV bag beside an elderly woman resting in bed at home",
    focus: "50% 32%",
    status: "sample",
    source: aiGen,
  },
  whyHomeCare: {
    src: "/images/generated/why-home-care.webp",
    alt: "A young female caregiver in uniform sharing tea and laughing with an elderly woman at a dining table in a bright, upscale home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  criticalBedside: {
    src: "/images/generated/critical-care-bedside.webp",
    alt: "An ICU nurse in uniform checking patient monitors beside an elderly man on an adjustable home care bed",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  criticalBed: {
    src: "/images/generated/critical-care-bed.webp",
    alt: "Two male caregivers in uniform repositioning an elderly patient on an adjustable care bed at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  ctaVisit: {
    src: "/images/generated/cta-care-coordinator.webp",
    alt: "A female care coordinator in uniform on a phone call at a tidy modern office desk",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  branchExterior: {
    src: "/images/generated/branch-office.webp",
    alt: "Modern care coordination office reception with a consultation desk, comfortable armchairs and water dispenser",
    status: "sample",
    source: aiGen,
  },
  serviceCriticalWho: {
    src: "/images/generated/service-critical-who.webp",
    alt: "A male nurse in uniform explaining the bedside vital signs monitor to a family member beside a home ICU bed",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  serviceElderWho: {
    src: "/images/generated/service-elder-who.webp",
    alt: "A young female caregiver in uniform arranging daily medicines in a pill organizer beside an elderly woman at a dining table in an upscale home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  servicePhysioWho: {
    src: "/images/generated/service-physio-who.webp",
    alt: "A young female physiotherapist in uniform guiding an elderly woman through a seated resistance-band exercise in an upscale living room",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  serviceNursingWho: {
    src: "/images/generated/service-nursing-who.webp",
    alt: "A young female nurse in uniform checking the blood sugar of an elderly woman with a glucometer at a dining table in an upscale home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  servicePostOp: {
    src: "/images/generated/service-post-op.webp",
    alt: "A young male nurse in uniform wrapping a bandage around the knee of a smiling elderly man recovering on a sofa at home",
    focus: "50% 50%",
    status: "sample",
    source: aiGen,
  },
  servicePostOpWho: {
    src: "/images/generated/service-post-op-who.webp",
    alt: "A young female caregiver in uniform tucking a blanket around a woman resting on a sofa at home after treatment",
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
  seo: { title: string; description: string };
  facts: { label: string; detail: string }[];
  visit: string[];
  prepare?: string[];
  callDoctor?: string[];
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

const pageSource = "Proposed copy. Sub-service names come from the client flyers";

const servicePages: Record<string, ServicePage> = {
  "nursing-care-at-home": {
    eyebrow: "Nursing Care",
    title: "Nursing care at home.",
    lead: "Nurses visit your home for IV fluids, injections, wound dressing and routine health checks.",
    seo: {
      title: "Nursing Care at Home in Hyderabad",
      description: "Nurses at home in Hyderabad for IV fluids, injections, wound dressing, catheter and Ryles tube care, nebulisation and BP and sugar checks. Call 86390 74341.",
    },
    facts: [
      { label: "Clinical procedures", detail: "IV fluids, injections, dressings and tubes" },
      { label: "Visits or shifts", detail: "Single visits, 12-hour and 24-hour" },
      { label: "Regular monitoring", detail: "BP, sugar and medicines on schedule" },
    ],
    visit: [
      "The nurse reviews the doctor's prescription and the patient's recent notes.",
      "Blood pressure, pulse, temperature or sugar are checked and written down.",
      "The procedure is done: injection, dressing, IV, catheter or tube care, nebulisation.",
      "Medicines are given as prescribed and the family is shown what to watch for.",
      "Readings and anything unusual are recorded for the family and the doctor.",
    ],
    prepare: [
      "The doctor's prescription and the latest discharge summary",
      "A list of current medicines, with doses and times",
      "Any dressing, injection or IV supplies already bought, or ask the coordinator what is needed",
      "A clean, well-lit space and somewhere to wash hands",
      "The doctor's phone number, and the nearest hospital the family would use",
    ],
    callDoctor: [
      "Fever, chills or a wound that becomes red, swollen, hot or starts to smell",
      "A catheter or feeding tube that blocks, falls out or causes pain",
      "Breathing that becomes fast or laboured, or lips turning blue",
      "A sudden, very high or very low blood sugar reading",
    ],
    included: [
      { icon: "droplets", name: "IV fluids and cannula", detail: "IV fluids and cannula care at the bedside." },
      { icon: "syringe", name: "Injections", detail: "Given at home at the times prescribed." },
      { icon: "bandage", name: "Wound dressing", detail: "Clean, regular dressing changes." },
      { icon: "bed-double", name: "Post-surgery wound care", detail: "Dressings and checks while a surgical wound heals." },
      { icon: "clipboard-list", name: "Catheterisation", detail: "Catheter insertion and care." },
      { icon: "activity", name: "Ryles tube insertion and care", detail: "Tube placement and feeding-tube care." },
      { icon: "wind", name: "Nebulisation", detail: "Breathing treatments at home." },
      { icon: "thermometer", name: "BP and sugar checks", detail: "Regular readings, noted for the family." },
      { icon: "pill", name: "Medication administration", detail: "Medicines given on schedule." },
    ],
    whoFor: ["Patients back home after surgery or a hospital discharge", "People with long-term conditions who need regular procedures", "Patients who can't travel to a clinic", "People with diabetes who need regular monitoring"],
    whoForPhoto: homePhotos.serviceNursingWho,
    careOptions: {
      single: { applies: "yes", note: "A nurse visits for one procedure or check." },
      twelveHour: { applies: "yes", note: "A nurse stays for a 12-hour shift." },
      liveIn: { applies: "yes", note: "24-hour nursing, in shifts or live-in." },
    },
    role: { title: "Registered nurse", detail: "A nurse carries out the procedures, records readings and keeps the family informed. Qualifications to be confirmed.", teamRoles: ["Nurse"] },
    faqs: [
      { question: "Can you change a catheter or Ryles tube?", answer: "Catheterisation and Ryles tube insertion and care are part of our home nursing.", status: "verified" },
      { question: "Which procedures can a nurse do at home?", answer: "Injections, wound dressing, IV infusion and cannula care, catheterisation, Ryles tube care, nebulisation, BP and sugar checks and giving medicines on schedule.", status: "verified" },
      { question: "Why might a prescription be needed?", answer: "Injections, IV fluids and many other procedures are ordered by a doctor. Keep the prescription or discharge summary ready so the nurse can follow it exactly.", status: "provisional" },
      { question: "Who should I call if the patient gets worse between visits?", answer: "Call the patient's doctor, or your local emergency number if the situation is serious. Home nursing does not replace emergency services.", status: "provisional" },
      { question: "Is a single visit enough, or do we need a shift?", answer: "A single visit suits one procedure such as a dressing or injection. If the patient needs watching through the day or night, a longer shift is usually the better fit. Describe the situation to a coordinator and they will suggest one.", status: "provisional" },
    ],
    related: ["post-operative-care-at-home", "patient-care-attendants-at-home", "physiotherapy-at-home"],
    reviewKeywords: ["nurse", "nursing", "surgery", "operation"],
    status: "sample",
    source: pageSource,
  },
  "critical-care-icu-at-home": {
    eyebrow: "Critical Care & ICU",
    title: "Critical care and ICU nursing at home.",
    lead: "ICU-trained nurses and equipment setup so a critically ill patient can be cared for at home.",
    seo: {
      title: "Critical Care & ICU at Home in Hyderabad",
      description: "ICU-trained nurses for ventilator, tracheostomy and oxygen therapy care, stroke and cardiac patients, and home ICU setup help in Hyderabad. Call 86390 74341.",
    },
    facts: [
      { label: "ICU-trained nurses", detail: "At the bedside, not only on call" },
      { label: "Equipment care", detail: "Ventilator, tracheostomy and oxygen" },
      { label: "Round-the-clock cover", detail: "12-hour and 24-hour shifts" },
    ],
    visit: [
      "The nurse takes handover: diagnosis, medicines, equipment settings and the doctor's instructions.",
      "Vital signs, oxygen saturation and equipment are checked and recorded.",
      "Tracheostomy, suction, feeding tube and skin care are done at the set times.",
      "Position changes and mouth care are carried out to prevent pressure sores and infections.",
      "At shift change the next nurse is told what happened, and the family gets a summary.",
    ],
    prepare: [
      "The ICU discharge summary and the treating doctor's written instructions",
      "A room that can hold an adjustable bed, equipment and a person on each side of the bed",
      "A reliable power supply, and a backup for oxygen and suction equipment",
      "The numbers of the treating doctor, the equipment supplier and the nearest hospital",
      "A plan for who in the family decides when to shift the patient back to hospital",
    ],
    callDoctor: [
      "Oxygen saturation falling below the level the doctor has set",
      "A blocked or dislodged tracheostomy tube, or thick secretions that suction cannot clear",
      "Chest pain, new weakness on one side, slurred speech or drooping of the face",
      "Any equipment alarm that cannot be resolved straight away. Call your local emergency number first in a crisis",
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
      { question: "Can critical care really be done at home?", answer: "For many patients discharged from an ICU, yes, if the doctor agrees, the room is prepared and ICU-trained nurses are present. Ask the treating doctor whether home care is safe for your patient.", status: "provisional" },
      { question: "Which conditions do you support?", answer: "Ventilator and tracheostomy care, oxygen therapy support, and care for cardiac and stroke patients, with continuous monitoring.", status: "verified" },
      { question: "Do you help set up the room?", answer: "Home ICU setup assistance is part of this service. A coordinator can explain what your patient is likely to need.", status: "verified" },
      { question: "What happens in an emergency?", answer: "Call your local emergency number first. This service does not replace emergency services. Agree a plan with the treating doctor in advance for who to call and which hospital to go to.", status: "provisional" },
      { question: "Why is a single visit not offered?", answer: "Critically ill patients need someone who can watch them continuously, so this service is organised around 12-hour and 24-hour cover rather than one-off visits.", status: "sample" },
    ],
    related: ["nursing-care-at-home", "elder-care-at-home", "physiotherapy-at-home"],
    reviewKeywords: ["icu", "ventilator", "critical"],
    status: "sample",
    source: pageSource,
  },
  "elder-care-at-home": {
    eyebrow: "Elder Care",
    title: "Elder care at home.",
    lead: "Caretakers and attendants who help older parents live safely and comfortably at home.",
    seo: {
      title: "Elder Care at Home in Hyderabad",
      description: "Caretakers for senior citizens at home in Hyderabad: daily help, medication reminders, mobility, bedridden care and dementia support. Call 86390 74341.",
    },
    facts: [
      { label: "Daily living help", detail: "Hygiene, meals, mobility and company" },
      { label: "Memory care", detail: "Dementia and Alzheimer's support" },
      { label: "Day or live-in", detail: "12-hour day care and 24-hour live-in" },
    ],
    visit: [
      "The caregiver greets the patient and checks how they slept, ate and felt.",
      "Washing, dressing, toileting and grooming are done at the patient's own pace.",
      "Medicines are reminded or given as the family has instructed, and BP or sugar is noted.",
      "Meals, drinks, walking and gentle activity are fitted around the patient's routine.",
      "The caregiver keeps company, notes any change in mood or health, and tells the family.",
    ],
    // prepare: [
    //   "A short written routine: wake time, meals, medicines, naps, favourite activities",
    //   "The medicines list, the doctor's number and any allergies or dietary limits",
    //   "Who the caregiver should call, and in what order, if something goes wrong",
    //   "A safe path to the bathroom: clear floor, a light at night, grab rails if possible",
    //   "A conversation with your parent beforehand so the caregiver is not a surprise",
    // ],
    // callDoctor: [
    //   "Sudden confusion, drowsiness or a change in behaviour that is not usual for them",
    //   "A fall, especially with a blow to the head, or new pain when moving",
    //   "Refusing food or water for a day, or signs of dehydration",
    //   "Chest pain, sudden weakness or trouble speaking. Call your local emergency number",
    // ],
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
      { question: "Do you handle dementia care?", answer: "Yes. Dementia and Alzheimer's support is part of our elder care.", status: "verified" },
      { question: "What is the difference between a caregiver and a nurse?", answer: "A caregiver or attendant helps with daily life: washing, dressing, meals, moving about and company. A nurse does clinical tasks such as injections, dressings and tube care. A nurse can visit as well when medical care is needed.", status: "provisional" },
      { question: "How do I help my parent accept a caregiver?", answer: "Introduce the idea early, explain the help as support rather than supervision, and let your parent keep their own routine. Starting with a few hours a day often feels easier than a full shift.", status: "provisional" },
      { question: "Is a day shift or live-in care better for a parent who lives alone?", answer: "A day shift suits someone who is mostly independent but needs help with meals, medicines and mobility. Live-in cover is usually considered when a parent needs help at night, is bedridden, or may wander because of dementia.", status: "provisional" },
      { question: "Can a nurse and physiotherapist visit alongside the caregiver?", answer: "Yes. Nursing and physiotherapy at home are separate services that can be arranged together with elder care.", status: "provisional" },
    ],
    related: ["nursing-care-at-home", "physiotherapy-at-home", "critical-care-icu-at-home"],
    reviewKeywords: ["mother", "father", "parent", "caregiver", "elder"],
    status: "sample",
    source: pageSource,
  },
  "mother-baby-care-at-home": {
    eyebrow: "Mother & Baby Care",
    title: "Mother and baby care at home.",
    lead: "Newborn care and support for the new mother, at home, through Hemalatha Baby Care.",
    seo: {
      title: "Mother & Baby Care at Home in Hyderabad",
      description: "Newborn care, feeding support, post-delivery mother support and day and night baby caretakers at home in Hyderabad. Call 86390 74341.",
    },
    facts: [
      { label: "Newborn care", detail: "Babies from birth to 6 months" },
      { label: "Mother support", detail: "Help for the mother after delivery" },
      { label: "Day or night", detail: "Day and night caretakers" },
    ],
    visit: [
      "The caretaker asks about the baby's feeding, sleep and any advice from the paediatrician.",
      "Bathing, nappy changes and hygiene are done gently and at the baby's usual times.",
      "Feeding is supported, whether breastfeeding, expressed milk or formula.",
      "The mother is helped to rest, and her own needs after delivery are looked after.",
      "Feeds, sleep and anything unusual are noted for the family and the doctor.",
    ],
    // prepare: [
    //   "The discharge summary for the mother and baby, and the paediatrician's number",
    //   "The baby's feeding routine and any advice on feeding or vaccinations",
    //   "A clean, warm space for bathing and changing, and somewhere to wash hands",
    //   "A short note of what the family wants the caretaker to do, and what not to do",
    //   "Who the caretaker should call first if the baby seems unwell",
    // ],
    // callDoctor: [
    //   "Fever, or a baby who is unusually sleepy, floppy or hard to wake",
    //   "Fast or difficult breathing, or a blue colour around the lips",
    //   "Refusing feeds, repeated vomiting, or very few wet nappies",
    //   "Yellow skin or eyes that is getting worse. Call your local emergency number in an emergency",
    // ],
    included: [
      { icon: "baby", name: "Newborn care (0–6 months)", detail: "Daily care for babies from birth to six months." },
      { icon: "utensils", name: "Feeding support", detail: "Help with feeding the baby." },
      { icon: "hand-heart", name: "Post-delivery mother support", detail: "Help for the mother while she recovers." },
      { icon: "clock", name: "Day and night caretakers", detail: "Caretakers for daytime or overnight." },
      { icon: "droplets", name: "Bathing and hygiene", detail: "Gentle bathing and everyday hygiene." },
      { icon: "users", name: "Nanny services", detail: "A nanny for the baby's day-to-day care." },
    ],
    whoFor: ["New parents bringing a baby home", "Mothers recovering after delivery", "Families who need a night caretaker", "Parents returning to work who need a nanny"],
    whoForPhoto: homePhotos.motherBaby,
    careOptions: {
      single: { applies: "confirm", note: "Single visits are to be confirmed." },
      twelveHour: { applies: "yes", note: "A day or night caretaker for a 12-hour shift." },
      liveIn: { applies: "confirm", note: "24-hour cover is to be confirmed." },
    },
    role: { title: "Baby care caretaker", detail: "A baby care caretaker looks after the baby's daily needs and supports the mother. Training and qualifications to be confirmed.", teamRoles: ["Baby care staff"] },
    faqs: [
      { question: "What does mother and baby care include?", answer: "Newborn care for babies up to 6 months, feeding support, post-delivery mother support, day and night caretakers, bathing and hygiene, and nanny services.", status: "verified" },
      { question: "How is this connected to Hemalatha Baby Care?", answer: "Baby and mother care is offered through our sister service, Hemalatha Baby Care. Call 86390 74341 and a coordinator will arrange it.", status: "verified" },
      { question: "Can a caretaker stay at night?", answer: "Day and night caretakers are part of this service. A coordinator can explain the options for your family.", status: "verified" },
      { question: "Does the caretaker replace the paediatrician?", answer: "No. A caretaker looks after daily care and feeding. Questions about the baby's health, vaccinations or medicines go to the paediatrician.", status: "provisional" },
      { question: "Can a nurse visit the mother as well?", answer: "Nursing at home is a separate service and can be arranged alongside baby care. Ask the coordinator.", status: "provisional" },
    ],
    related: ["nursing-care-at-home", "physiotherapy-at-home", "elder-care-at-home"],
    reviewKeywords: ["baby", "newborn"],
    status: "sample",
    source: pageSource,
  },
  "physiotherapy-at-home": {
    eyebrow: "Physiotherapy",
    title: "Physiotherapy at home.",
    lead: "A physiotherapist visits your home for pain relief, recovery and better mobility.",
    seo: {
      title: "Physiotherapy at Home in Hyderabad",
      description: "Home physiotherapy in Hyderabad for back, neck, knee and shoulder pain, post-fracture and stroke rehabilitation and elderly mobility. Call 86390 74341.",
    },
    facts: [
      { label: "Assessment first", detail: "A plan built around the patient" },
      { label: "Treatment methods", detail: "Exercise, manual and laser therapy" },
      { label: "No travel", detail: "Useful after surgery, stroke or a fall" },
    ],
    visit: [
      "The physiotherapist asks about pain, history, daily activities and goals.",
      "Movement, strength, balance and walking are assessed.",
      "A treatment plan is explained: exercises, hands-on treatment and, where suitable, laser therapy.",
      "The patient practises the exercises with guidance, and the family learns how to help.",
      "Progress is reviewed at later sessions and the plan is adjusted.",
    ],
    prepare: [
      "Scans, X-rays and the surgeon's or doctor's notes, if any",
      "A list of medicines and any precautions the surgeon has given, such as weight-bearing limits",
      "Comfortable clothing, and a firm chair or bed to work on",
      "Clear floor space for walking practice, and a walking aid if one is used",
      "A family member present for the first session, to learn the home exercises",
    ],
    callDoctor: [
      "Sudden severe pain, or pain after a fall that does not ease with rest",
      "New numbness, weakness or loss of bladder or bowel control",
      "A swollen, hot or tender calf, or sudden breathlessness",
      "Chest pain or dizziness during exercise. Stop and call your local emergency number if it is severe",
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
      { question: "Do you treat stroke patients?", answer: "Yes. Stroke and neurological rehabilitation is part of physiotherapy at home.", status: "verified" },
      { question: "Which problems can home physiotherapy help with?", answer: "Back, neck, knee, joint and shoulder pain, post-fracture rehabilitation, stroke and neurological recovery and elderly mobility.", status: "verified" },
      { question: "How many sessions will I need?", answer: "It depends on the condition. The physiotherapist will advise after the first assessment.", status: "provisional" },
      { question: "When is home physiotherapy better than a clinic?", answer: "When travelling is painful or risky, such as soon after surgery, a fracture or stroke, or for frail older people. Exercises are also practised in the place where the patient actually has to move: their own bedroom, bathroom and stairs.", status: "provisional" },
      { question: "Should I tell the doctor before starting?", answer: "Yes. Share the surgeon's or doctor's advice, especially about movement limits after an operation or fracture, so the physiotherapist can plan around it.", status: "provisional" },
    ],
    related: ["nursing-care-at-home", "elder-care-at-home", "critical-care-icu-at-home"],
    reviewKeywords: ["physio", "exercise"],
    status: "sample",
    source: pageSource,
  },
  "patient-care-attendants-at-home": {
    eyebrow: "Patient Care & Attendants",
    title: "Patient care and attendants at home.",
    lead: "Trained attendants who look after bedridden and recovering patients day and night, at home.",
    seo: {
      title: "Patient Care & Attendants at Home in Hyderabad",
      description: "Patient attendants at home in Hyderabad for bedridden and recovering patients: hygiene, feeding, turning, medicine reminders and day or night shifts. Call 86390 74341.",
    },
    facts: [
      { label: "Bedside help", detail: "Washing, feeding, turning and toileting" },
      { label: "Day or night", detail: "12-hour and 24-hour attendants" },
      { label: "Nurse on request", detail: "Clinical care added when needed" },
    ],
    visit: [
      "The attendant takes handover from the family: routine, medicines and the doctor's advice.",
      "Washing, dressing, toileting and bed care are done gently and at the patient's pace.",
      "Meals and drinks are given, and the patient is turned and repositioned on schedule.",
      "Medicines are reminded or given as the family has instructed, and any change is noted.",
      "The attendant tells the family about the day and anything unusual.",
    ],
    included: [
      { icon: "hand-heart", name: "Personal hygiene", detail: "Bathing, grooming, dressing and toileting help." },
      { icon: "bed-double", name: "Bedridden patient care", detail: "Turning and positioning for comfort." },
      { icon: "utensils", name: "Feeding and meals", detail: "Help with eating and drinking." },
      { icon: "pill", name: "Medication reminders", detail: "Medicines taken on time, as prescribed." },
      { icon: "accessibility", name: "Moving and walking", detail: "Support to sit up, stand and walk safely." },
      { icon: "thermometer", name: "Basic health checks", detail: "Regular BP and sugar readings, noted for the family." },
      { icon: "users", name: "Companionship", detail: "Someone to talk with and keep company." },
    ],
    whoFor: ["Bedridden or chronically ill patients", "Patients recovering after a hospital stay", "Families who cannot be at the bedside all day", "People who need an attendant at night"],
    whoForPhoto: homePhotos.serviceElderWho,
    careOptions: {
      single: { applies: "confirm", note: "Single visits are to be confirmed." },
      twelveHour: { applies: "yes", note: "An attendant for a 12-hour day or night shift." },
      liveIn: { applies: "yes", note: "A patient attendant for 24-hour cover." },
    },
    role: { title: "Patient attendant", detail: "An attendant helps with daily needs at the bedside. A nurse can visit as well if medical care is needed.", teamRoles: ["Caregiver", "Nurse"] },
    faqs: [
      { question: "What does a patient attendant do?", answer: "An attendant helps with washing, dressing, toileting, meals, turning in bed, moving about and company, and reminds the patient about medicines.", status: "provisional" },
      { question: "Is an attendant the same as a nurse?", answer: "No. An attendant helps with daily care. A nurse does clinical tasks such as injections, dressings and tube care. Both can be arranged together.", status: "provisional" },
      { question: "Can an attendant stay at night?", answer: "Day and night attendants for 12-hour and 24-hour cover are offered. A coordinator can explain the options.", status: "provisional" },
      { question: "Is this different from elder care?", answer: "Elder care is for older family members. Patient care and attendants is for any age, such as a bedridden or recovering patient.", status: "provisional" },
      { question: "How do I choose between a day and a night attendant?", answer: "Choose the time when the patient needs the most help. Describe the situation to a coordinator and they will suggest a shift.", status: "provisional" },
    ],
    related: ["nursing-care-at-home", "elder-care-at-home", "post-operative-care-at-home"],
    reviewKeywords: ["attendant", "caregiver", "bedridden"],
    status: "sample",
    source: pageSource,
  },
  "post-operative-care-at-home": {
    eyebrow: "Post-Operative Care",
    title: "Post-operative care at home.",
    lead: "Nurses and physiotherapists help you recover at home after surgery, with wound care and gentle rehabilitation.",
    seo: {
      title: "Post-Operative Care at Home in Hyderabad",
      description: "Post-surgery care at home in Hyderabad: wound dressing, medicines, catheter and tube care, and physiotherapy after an operation or fracture. Call 86390 74341.",
    },
    facts: [
      { label: "Wound care", detail: "Dressings and checks while the wound heals" },
      { label: "Recovery support", detail: "Medicines, mobility and daily help" },
      { label: "Nurse and physio", detail: "Nursing and physiotherapy together" },
    ],
    visit: [
      "The nurse reviews the discharge summary and the surgeon's instructions.",
      "The wound is checked and dressed, and temperature, BP and pulse are recorded.",
      "Medicines and injections are given as prescribed.",
      "The patient is helped to sit up, stand and walk as the surgeon has allowed.",
      "The family is shown what to watch for and who to call if something changes.",
    ],
    prepare: [
      "The discharge summary and the surgeon's written instructions",
      "A list of current medicines, with doses and times",
      "Dressing supplies already bought, or ask the coordinator what is needed",
      "A clean, well-lit space and somewhere to wash hands",
      "The surgeon's phone number and the nearest hospital the family would use",
    ],
    callDoctor: [
      "Fever, or a wound that becomes red, swollen, hot or starts to smell",
      "Bleeding or fluid that soaks through the dressing",
      "A swollen, hot or tender calf, or sudden breathlessness",
      "Severe pain that does not ease with the prescribed medicine",
    ],
    included: [
      { icon: "bandage", name: "Wound dressing", detail: "Clean, regular dressing changes." },
      { icon: "bed-double", name: "Post-surgery wound care", detail: "Checks while a surgical wound heals." },
      { icon: "syringe", name: "Injections and medicines", detail: "Given at home at the times prescribed." },
      { icon: "clipboard-list", name: "Catheter and tube care", detail: "Catheter and Ryles tube care." },
      { icon: "activity", name: "Post-fracture rehabilitation", detail: "Rebuilding strength and movement after a fracture." },
      { icon: "accessibility", name: "Mobility help", detail: "Support moving around the home safely." },
      { icon: "hand-heart", name: "Daily assistance", detail: "Help with washing, dressing and meals during recovery." },
    ],
    whoFor: ["Patients back home after surgery", "People recovering from a fracture", "Families who want help with dressings and medicines", "Patients who cannot travel for follow-up care"],
    whoForPhoto: homePhotos.servicePostOpWho,
    careOptions: {
      single: { applies: "yes", note: "A nurse visits for a dressing or check." },
      twelveHour: { applies: "yes", note: "A nurse or attendant for a 12-hour shift." },
      liveIn: { applies: "yes", note: "24-hour cover in shifts." },
    },
    role: { title: "Nurse and physiotherapist", detail: "A nurse looks after wounds and medicines, and a physiotherapist guides recovery of movement. Qualifications to be confirmed.", teamRoles: ["Nurse", "Physiotherapist"] },
    faqs: [
      { question: "What is included in post-operative care at home?", answer: "Wound dressing, post-surgery wound care, injections, catheter and tube care, and physiotherapy after a fracture or operation.", status: "provisional" },
      { question: "How soon after discharge can care start?", answer: "Call us with the discharge date and a coordinator will tell you how soon someone can start.", status: "provisional" },
      { question: "Do I need the surgeon's instructions?", answer: "Yes. Keep the discharge summary and the surgeon's advice ready so the nurse can follow it exactly.", status: "provisional" },
      { question: "Can physiotherapy be added?", answer: "Yes. Physiotherapy at home is a separate service that can be arranged alongside post-operative nursing.", status: "provisional" },
      { question: "What if the wound looks infected?", answer: "Call the surgeon or doctor straight away, or your local emergency number if it is serious.", status: "provisional" },
    ],
    related: ["nursing-care-at-home", "physiotherapy-at-home", "patient-care-attendants-at-home"],
    reviewKeywords: ["surgery", "operation", "post"],
    status: "sample",
    source: pageSource,
  },
};

export const hospital = {
  name: { value: "Hemalatha Health Care", status: "verified", source: clientLogo } as Field<string>,
  legalName: { value: "Hemalatha Health Care Pvt. Ltd.", status: "verified", source: clientLogo } as Field<string>,
  category: { value: "Home healthcare services", status: "verified", source: clientFlyers } as Field<string>,
  homeSeo: {
    title: "Home Nursing, Elder Care & Physiotherapy in Hyderabad",
    description: "Nursing care, patient attendants, elder care, physiotherapy, post-operative care, critical care and mother and baby care at home across Hyderabad. Call or WhatsApp 86390 74341, available 24/7.",
  },

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
    brandName: { value: "Hemalatha", status: "verified", source: clientLogo } as Field<string>,
    brandSuffix: { value: "Health Care Pvt. Ltd.", status: "verified", source: clientLogo } as Field<string>,
    tagline: { value: "Complete healthcare at your doorstep.", status: "verified", source: `${clientLogo}; set in sentence case` } as Field<string>,
    taglineHighlight: "at your doorstep.",
    primaryCtaLabel: "Request care",
    callLabel: "Call",
    photosLabel: "Home care photos",
    badges: ["Call or WhatsApp", "Home visits"],
  },

  facts: [
    { label: "Available 24/7", detail: "Day and night", status: "verified", source: clientFlyers },
    { label: "Seven services", detail: "Nursing to baby care", status: "verified", source: clientFlyers },
    { label: "Nurses and caregivers", detail: "Plus physiotherapists", status: "verified", source: clientFlyers },
    { label: "4 branches", detail: "Across Hyderabad", status: "provisional", source: `${clientFlyers}; branches to confirm` },
  ],

  stats: [
    { value: 412, suffix: "+", label: "Families cared for at home", status: "sample", source: "Placeholder, replace with client figures before launch" },
    { value: 138, suffix: "+", label: "Nurses and caregivers", status: "sample", source: "Placeholder, replace with client figures before launch" },
    { value: 7, suffix: "+", label: "Years of home care", status: "sample", source: "Placeholder, replace with client figures before launch" },
    { value: 24, suffix: "/7", label: "Care and support line", status: "verified", source: clientFlyers },
  ] as { value: number; suffix: string; label: string; status: VerificationStatus; source: string }[],

  heroPhotos: [
    { label: "Nursing Care", icon: "stethoscope", photo: homePhotos.nursingBp },
    { label: "Physiotherapy", icon: "activity", photo: homePhotos.physio },
    { label: "Critical Care & ICU", icon: "heart-pulse", photo: homePhotos.criticalCare },
    { label: "Elder Care", icon: "users", photo: homePhotos.elderCare },
    { label: "Mother & Baby Care", icon: "baby", photo: homePhotos.motherBaby },
  ] as { label: string; icon: string; photo: PhotoSlot }[],

  services: [
    {
      name: "Nursing Care",
      footerLabel: "Nursing Care",
      slug: "nursing-care-at-home",
      page: servicePages["nursing-care-at-home"],
      heroPhoto: homePhotos.nursingBp,
      icon: "syringe",
      summary: "Nurses visit your home for IV fluids, injections, wound dressing and routine health checks.",
      subServices: ["IV fluids and cannula", "Injections", "Wound dressing", "Post-surgery wound care", "Catheterisation", "Ryles tube insertion and care", "Nebulisation", "BP and sugar checks"],
      status: "verified",
      source: clientFlyers,
    },
    {
      name: "Patient Care & Attendants",
      footerLabel: "Patient Care & Attendants",
      slug: "patient-care-attendants-at-home",
      page: servicePages["patient-care-attendants-at-home"],
      heroPhoto: homePhotos.caregiverBedside,
      icon: "bed-double",
      summary: "Trained attendants look after bedridden and recovering patients, day and night.",
      subServices: ["Personal hygiene", "Bedridden patient care", "Feeding and meals", "Medication reminders", "Moving and walking", "Basic health checks"],
      status: "provisional",
      source: `${clientFlyers}; attendant services are listed on the flyers, page scope to confirm`,
    },
    {
      name: "Elder Care",
      footerLabel: "Elder Care",
      slug: "elder-care-at-home",
      page: servicePages["elder-care-at-home"],
      heroPhoto: homePhotos.elderCare,
      icon: "users",
      summary: "Caretakers help older family members live safely and comfortably at home.",
      subServices: ["Caregivers and attendants", "Personal hygiene and daily assistance", "Medication management", "Dementia and Alzheimer's support", "Bedridden and chronic illness care", "Vital checks", "Companionship", "Nutrition"],
      status: "verified",
      source: clientFlyers,
    },
    {
      name: "Physiotherapy",
      footerLabel: "Physiotherapy",
      slug: "physiotherapy-at-home",
      page: servicePages["physiotherapy-at-home"],
      heroPhoto: homePhotos.physio,
      icon: "activity",
      summary: "A physiotherapist visits your home for pain relief, recovery and better movement.",
      subServices: ["Back, neck and knee pain", "Post-fracture rehabilitation", "Stroke and neurological rehabilitation", "Elderly mobility", "Joint and shoulder pain", "Exercise therapy", "Manual therapy", "Laser therapy"],
      status: "verified",
      source: clientFlyers,
    },
    {
      name: "Post-Operative Care",
      footerLabel: "Post-Operative Care",
      slug: "post-operative-care-at-home",
      page: servicePages["post-operative-care-at-home"],
      heroPhoto: homePhotos.servicePostOp,
      icon: "bandage",
      summary: "Wound care, medicines and gentle rehabilitation at home after surgery.",
      subServices: ["Wound dressing", "Post-surgery wound care", "Injections and medicines", "Catheter and tube care", "Post-fracture rehabilitation", "Mobility help"],
      status: "verified",
      source: `${clientFlyers}; listed as post-operative and patient care`,
    },
    {
      name: "Critical Care & ICU",
      footerLabel: "Critical Care & ICU",
      slug: "critical-care-icu-at-home",
      page: servicePages["critical-care-icu-at-home"],
      heroPhoto: homePhotos.criticalCare,
      icon: "heart-pulse",
      summary: "ICU-trained nurses and equipment help for seriously ill patients at home.",
      subServices: ["ICU-trained nurses", "Ventilator care", "Tracheostomy care", "Oxygen therapy support", "Cardiac and stroke patient care", "24×7 monitoring", "Home ICU setup assistance"],
      status: "verified",
      source: clientFlyers,
    },
    {
      name: "Mother & Baby Care",
      footerLabel: "Mother & Baby Care",
      slug: "mother-baby-care-at-home",
      page: servicePages["mother-baby-care-at-home"],
      heroPhoto: homePhotos.motherBaby,
      icon: "baby",
      summary: "Newborn and mother care at home, through Hemalatha Baby Care.",
      subServices: ["Newborn care (0–6 months)", "Feeding support", "Post-delivery mother support", "Day and night caretakers", "Bathing and hygiene", "Nanny services"],
      status: "verified",
      source: clientFlyers,
    },
  ] as {
    name: string;
    footerLabel: string;
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
    { title: "Call or request care", detail: "Phone, WhatsApp or the form below. Say who needs care, what happened and where they are." },
    { title: "We ask about the patient", detail: "A coordinator asks about the condition, the doctor's advice and what help is needed day to day." },
    { title: "We arrange the right person", detail: "A nurse, caregiver or physiotherapist suited to the patient is arranged." },
    { title: "Care starts at home", detail: "The visit begins, and the coordinator remains your contact if anything needs changing." },
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
    { name: "Lakshmi Devi", role: "Nurse", photo: { src: "/images/generated/team-nurse.webp", alt: "Demo portrait of Lakshmi Devi, registered nurse", status: "sample", source: aiGen } },
    { name: "Ravi Kumar", role: "Physiotherapist", photo: { src: "/images/generated/team-physiotherapist.webp", alt: "Demo portrait of Ravi Kumar, physiotherapist", status: "sample", source: aiGen } },
    { name: "Sunitha Rao", role: "Caregiver", photo: { src: "/images/generated/team-caregiver.webp", alt: "Demo portrait of Sunitha Rao, caregiver", status: "sample", source: aiGen } },
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
    { question: "Which services do you offer at home?", answer: "Nursing care, patient care and attendants, elder care, physiotherapy, post-operative care, critical care and ICU, and mother and baby care, all at home. Baby care is offered through our sister service, Hemalatha Baby Care.", status: "verified" },
    // { question: "What is the difference between a nurse, a caregiver and a physiotherapist?", answer: "A nurse does clinical tasks such as injections, dressings and tube care. A caregiver or attendant helps with washing, meals, moving about and company. A physiotherapist treats pain and rebuilds movement with exercises. Many patients need more than one.", status: "provisional" },
    // { question: "Should I choose a 12-hour or a 24-hour shift?", answer: "A 12-hour shift suits a patient who needs help through the day while family is around at night. Round-the-clock cover is usually chosen when the patient needs someone at night too, for example if they are bedridden, on oxygen or a ventilator, or may wander because of dementia. A coordinator can help you decide.", status: "provisional" },
    // { question: "Can critical care be set up at home?", answer: "Home ICU setup assistance is part of our critical care at home, with ICU-trained nurses. Whether it suits your patient depends on their condition, so ask the treating doctor as well as a coordinator.", status: "provisional" },
    { question: "Which areas of Hyderabad do you cover?", answer: "We come to your home. Our branches are in Kukatpally, Pragathi Nagar, Madhapur and Manikonda. Call us to check your area.", status: "provisional" },
    { question: "What does home care cost?", answer: "It depends on the service and how long we stay. See our packages page for indicative prices, then call 86390 74341 or send a request to confirm the cost.", status: "provisional" },
    { question: "Can home care replace a hospital in an emergency?", answer: "No. In an emergency, call your local emergency number or go to the nearest hospital.", status: "provisional" },
  ] as { question: string; answer: string; status: VerificationStatus }[],

  clientQuestions: [
    "How quickly can a nurse or caregiver start after a call?",
    "How are nurses and caregivers verified and trained?",
    "Can a family ask for a different caregiver, and what happens if the regular caregiver is absent?",
    "Are 12-hour and 24-hour live-in shifts available for each service?",
    "Is there a minimum booking period?",
    "What are the prices, and how do customers pay?",
    "Which equipment does Hemalatha supply for a home ICU, and what does the family arrange?",
    "Is the company registered, and under what details?",
  ],

  about: {
    eyebrow: "About Hemalatha",
    title: "A home healthcare team based in Kukatpally.",
    lead: "Hemalatha Health Care Pvt. Ltd. sends nurses, caregivers and physiotherapists to patients' homes across Hyderabad, from branches in Kukatpally, Pragathi Nagar, Madhapur and Manikonda.",
    mainPhoto: homePhotos.caregiverBedside as PhotoSlot,
    insetPhoto: homePhotos.holdingHands as PhotoSlot,
    badge: "We Care Like Family",
    checks: [
      { icon: "building-2", title: "Hemalatha Health Care Pvt. Ltd.", detail: "Home healthcare provider" },
      { icon: "map-pin", title: "Main office in KPHB Colony", detail: "Kukatpally, Hyderabad" },
      { icon: "baby", title: "Hemalatha Baby Care", detail: "Our sister service for newborns" },
      { icon: "messages-square", title: "Call, WhatsApp or email", detail: "Choose how to reach us" },
    ],
    ctaLabel: "See our services",
    ctaHref: "#services",
    status: "sample" as VerificationStatus,
  },

  servicesSection: {
    featuredPhoto: homePhotos.serviceNursing as PhotoSlot,
    eyebrow: "Services",
    title: "Care for every stage, at home.",
    lead: "Seven kinds of care, delivered where your family is most comfortable.",
    linkLabel: "Learn more",
    linkHref: "#enquiry",
    allLabel: "View all services",
    allHref: "/services",
    indexTitle: "Our home care services",
    indexLead: "Nursing, critical care, elder care, post-operative care, physiotherapy and more, delivered at home across Hyderabad.",
    ctaTitle: "Not sure which service you need? Talk to a coordinator.",
    packagesLabel: "View packages and prices",
    packagesHref: "/packages",
  },

  packages: {
    breadcrumbLabel: "Packages",
    path: "/packages",
    title: "Home care packages and prices",
    lead: "Choose care by the day, by a 12-hour shift or round the clock, or book a single visit. Every price below is a guide, and a coordinator confirms the final amount after talking to you.",
    seo: {
      title: "Home care packages and prices in Hyderabad",
      description: "Indicative day care, 12-hour and 24-hour home care packages, plus per-session physiotherapy, from Hemalatha Health Care in Hyderabad.",
    },
    sampleLabel: "Sample price",
    legendTitle: "How packages work",
    legend: [
      { label: "Day care", detail: "A caregiver or nurse for a day visit, billed per day." },
      { label: "12 hours", detail: "One person on a 12-hour shift, billed per month." },
      { label: "24 hours", detail: "Round-the-clock live-in care, billed per month." },
      { label: "Individual", detail: "Single visits and sessions, billed per visit." },
    ],
    gridTitle: "Indicative prices by service",
    gridLead: "Open a service to see what it includes.",
    contactLabel: "Contact us",
    assessmentLabel: "Subject to assessment",
    viewServiceLabel: "View service",
    serviceTitle: "Packages and prices",
    serviceLead: "Indicative prices for this service. A coordinator confirms the final amount.",
    allPackagesLabel: "See all packages",
    disclaimer: "Prices are indicative. They change with the patient's condition, the caregiver's or nurse's qualification, hours, location and care needs. The final price is agreed after a needs assessment.",
    registrationTitle: "Registration fee",
    registrationAmount: "₹1,000",
    registrationUnit: "one time, for new patients",
    registrationDetail: "Covers the first assessment, a care discussion, matching a nurse or caregiver, and getting started. It is separate from caregiver, nursing and monthly charges.",
    proceduresTitle: "Individual nursing procedures",
    proceduresLead: "Done by qualified nurses when needed. Where a procedure is medically required, a doctor's prescription is needed, and some need an assessment before the first visit.",
    procedures: ["Injections", "Wound dressing", "Catheter care", "Feeding tube care", "BP and blood sugar checks", "Nebulization", "IV medication and fluids", "Oxygen monitoring"],
    stepsTitle: "How to get started",
    steps: [
      { title: "Call or send a request", detail: "Tell us who needs care and where." },
      { title: "We understand the need", detail: "A coordinator asks about the patient's condition and routine." },
      { title: "Agree the package", detail: "We suggest a package and confirm the price with you." },
      { title: "Care begins", detail: "A matched nurse or caregiver starts at your home." },
    ],
    helpTitle: "Need help choosing a package?",
    helpLead: "Talk to a coordinator. They will suggest what fits the patient and your budget.",
    ctaTitle: "Not sure which package fits? Talk to a coordinator.",
    categories: [
      {
        serviceSlug: "nursing-care-at-home",
        rows: [
          { label: "Day care", price: "₹3,000 to ₹5,000", unit: "/day" },
          { label: "12 hours", price: "₹35,000 to ₹50,000", unit: "/month" },
          { label: "24 hours", price: "₹40,000 to ₹70,000", unit: "/month" },
        ],
      },
      {
        serviceSlug: "patient-care-attendants-at-home",
        rows: [
          { label: "Day care", price: "₹1,300 to ₹1,500", unit: "/day" },
          { label: "12 hours", price: "₹20,000 to ₹27,000", unit: "/month" },
          { label: "24 hours", price: "₹25,000 to ₹30,000", unit: "/month" },
        ],
      },
      {
        serviceSlug: "elder-care-at-home",
        rows: [
          { label: "Day care", price: "₹1,000 to ₹1,500", unit: "/day" },
          { label: "12 hours", price: "₹20,000 to ₹25,000", unit: "/month" },
          { label: "24 hours", price: "₹25,000 to ₹27,000", unit: "/month" },
        ],
      },
      {
        serviceSlug: "physiotherapy-at-home",
        rows: [{ label: "Individual", price: "₹700 to ₹1,200", unit: "/session" }],
      },
      {
        serviceSlug: "post-operative-care-at-home",
        rows: [
          { label: "Day care", price: null, unit: "" },
          { label: "12 hours", price: "₹20,000 to ₹25,000", unit: "/month" },
          { label: "24 hours", price: "₹25,000 to ₹30,000", unit: "/month" },
        ],
      },
      {
        serviceSlug: "critical-care-icu-at-home",
        rows: [
          { label: "12 hours", price: "assessment", unit: "" },
          { label: "24 hours", price: "assessment", unit: "" },
        ],
      },
      {
        serviceSlug: "mother-baby-care-at-home",
        rows: [
          { label: "Day care", price: "₹1,300 to ₹1,500", unit: "/day" },
          { label: "12 hours", price: "₹20,000 to ₹25,000", unit: "/month" },
          { label: "24 hours", price: "₹25,000 to ₹30,000", unit: "/month" },
        ],
      },
    ],
    status: "sample" as VerificationStatus,
    source: "Placeholder prices to show the layout. Replace every figure with the client's real rates before launch.",
  },

  serviceHero: {
    breadcrumbLabel: "Breadcrumb",
    homeLabel: "Home",
    servicesLabel: "Services",
    requestLabel: "Request this service",
    callLabel: "Call",
  },

  serviceBlocks: {
    visitEyebrow: "What to expect",
    visitTitle: "What a visit usually looks like.",
    visitLead: "A general picture, so you know what to expect. The exact routine follows the patient's doctor and needs.",
    prepareTitle: "Before we start",
    prepareLead: "Having these ready makes the first visit smoother.",
    callDoctorTitle: "When to call the doctor",
    callDoctorLead: "General guidance only, not medical advice. If you are worried, call the doctor or your local emergency number.",
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
    pricesNote: "Prices are indicative. Call or request care and a coordinator will confirm the cost.",
    roleEyebrow: "Who will care for you",
    reviewsTitlePrefix: "What families say about",
    relatedEyebrow: "Related services",
    relatedTitle: "Other care at home.",
    relatedLinkLabel: "View more",
    requestTitlePrefix: "Request",
    ctaTitle: "Ready to arrange this care at home?",
    ctaLead: "Send a care request on our contact page, or call us. A coordinator will help you take the next step.",
    ctaButtonLabel: "Contact us",
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

  homeCareFit: {
    eyebrow: "Is home care right for us?",
    title: "When care at home works, and when it does not.",
    lead: "Home care suits many families, but not every situation. This is general guidance. The treating doctor has the final say.",
    photo: homePhotos.serviceElderWho as PhotoSlot,
    fitsTitle: "Home care usually fits when",
    fits: [
      "The patient is medically stable and the doctor agrees they can be cared for at home",
      "They need regular nursing, help with daily tasks or exercises rather than constant hospital tests",
      "Travelling to a clinic is painful, tiring or risky",
      "Family members can set up a safe room and be reachable by phone",
    ],
    hospitalTitle: "Go to hospital or call emergency services when",
    hospital: [
      "Chest pain, trouble breathing, sudden weakness, slurred speech or a seizure",
      "The patient becomes hard to wake, or is suddenly very confused",
      "Heavy bleeding, or a wound that is opening, swollen and hot",
      "The doctor asks for tests, procedures or monitoring that cannot be done at home",
    ],
    note: "Home care does not replace emergency services. Call your local emergency number in an emergency.",
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
      { label: "Reviews", href: "#reviews" },
      // { label: "Care team", href: "#care-team" },
      { label: "Branches", href: "#branches" },
      { label: "FAQ", href: "#faq" },
    ],
    bookLabel: "Request a service",
    drawerBookLabel: "Request a service",
    bookHref: "/appointment",
    infoStrip: { availabilityShort: "24/7", availabilityLabel: "24/7 support", locationShort: "Hyderabad", locationLabel: "Hyderabad, Telangana" },
    whatsappAriaLabel: "Message us on WhatsApp",
    mobileBar: { bookLabel: "Book", chatLabel: "Chat", callLabel: "Call" },
  },

  footer: {
    branchesHeading: "Branches",
    branchesHref: "#branches",
    quickLinksHeading: "Quick links",
    quickLinks: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms and conditions", href: "/terms" },
      { label: "Packages", href: "/packages" },
      { label: "Book a service", href: "/appointment" },
      { label: "Contact us", href: "/contact" },
      { label: "FAQ", href: "#faq" },
    ],
    socialsHeading: "Follow us",
    socialStatus: { value: "sample", status: "sample", source: "No client social profile URLs supplied yet; every link is a placeholder until the client sends them" } as Field<string>,
    socials: [
      { label: "Facebook", icon: "facebook", href: "#" },
      { label: "Instagram", icon: "instagram", href: "#" },
      { label: "YouTube", icon: "youtube", href: "#" },
    ],
    availabilityLine: "Open 24 hours, 7 days",
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
    destination: { value: "Google Sheet via ENQUIRY_WEBHOOK_URL", status: "verified", source: "Tested end to end on 11 Nov 2026; production needs ENQUIRY_WEBHOOK_URL set in the host's environment" } as Field<string | null>,
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
    privacyLinkLabel: "Privacy policy",
    submitLabel: "Request care",
    sendingLabel: "Sending…",
    hint: "A coordinator will call you.",
    successTitle: "Request received.",
    successBody: "A coordinator will call you to understand the patient's needs. Nothing is arranged until then.",
    failureMessage: "We couldn't send your request. Please call 86390 74341 or message us on WhatsApp.",
  },

  errorPages: {
    notFoundTitle: "We can't find that page",
    notFoundLead: "The link may be old or mistyped. You can go back to the home page, or call or message us and we'll help directly.",
    errorTitle: "Something went wrong",
    errorLead: "Please try again. If it keeps happening, call or message us and we'll help directly.",
    homeLabel: "Back to home",
    retryLabel: "Try again",
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

  guidesSection: {
    eyebrow: "Guides for families",
    title: "Plain answers before you arrange care.",
    lead: "Checklists and comparisons written for families in Hyderabad.",
    readLabel: "Read the guide",
    allLabel: "All guides",
    allHref: "/guides",
    indexTitle: "Home care guides for families in Hyderabad",
    indexLead: "Practical checklists and comparisons for families arranging nursing, elder care or physiotherapy at home.",
    byline: "Written by the Hemalatha Health Care team. General information, not medical advice.",
    relatedLabel: "Related service",
    ctaTitle: "Talk to a coordinator about your situation.",
  },

  faqSection: {
    eyebrow: "FAQ",
    title: "Questions families ask us.",
    lead: "Answers to what families ask before arranging care at home.",
  },

  contactPage: {
    seoTitle: "Contact us",
    seoDescription: "Request home care in Hyderabad, or call us. A coordinator will get back to you.",
    title: "Tell us what care you need.",
  },

  appointmentPage: {
    seoTitle: "Book home healthcare in Hyderabad",
    seoDescription: "Request a home nursing, elder care, critical care or physiotherapy appointment in Hyderabad. A coordinator will call you to plan the right support.",
    path: "/appointment",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Book a service",
    title: "Book home healthcare.",
    lead: "Tell us what care you need. A care coordinator will call you back to plan the right support.",
    formHeading: "Request an appointment.",
    formNote: "Fields marked * are required. Takes about a minute.",
    formLabel: "Appointment request form",
    patientNameLabel: "Patient name *",
    contactNameLabel: "Contact person name *",
    phoneLabel: "Phone number *",
    whatsappLabel: "WhatsApp number",
    emailLabel: "Email",
    areaLabel: "Location or area *",
    areaPlaceholder: "Area in Hyderabad",
    serviceLabel: "Required service *",
    serviceDefault: "Select a service",
    serviceOther: "Other",
    dateLabel: "Preferred date",
    timeLabel: "Preferred time",
    timeDefault: "Select a time",
    timeOptions: ["Morning", "Afternoon", "Evening", "Any time"],
    requirementsLabel: "Patient condition and requirements *",
    requirementsPlaceholder: "Condition, age, any equipment or nursing needs",
    messageLabel: "Additional message",
    optionalLabel: "(optional)",
    consentLabel: "I agree to be contacted by Hemalatha Health Care about this request.",
    privacyLinkLabel: "Privacy policy",
    submitLabel: "Request appointment",
    sendingLabel: "Sending…",
    privacyNote: "Your details are only used to respond to your request.",
    successTitle: "Request received.",
    successBody: "A coordinator will call you to understand the patient's needs. Nothing is arranged or confirmed until you've spoken to them.",
    failureMessage: "We couldn't send your request. Please call 86390 74341 or message us on WhatsApp.",
    talkHeading: "Prefer to talk to us?",
    talkNote: "Open 24 hours, 7 days.",
    talkCallLabel: "Call us",
    talkWhatsappLabel: "WhatsApp us",
    talkWhatsappDetail: "Message our care team",
    talkEmailLabel: "Email us",
    emergencyNote: "In a medical emergency, call 108 or go to the nearest hospital.",
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
