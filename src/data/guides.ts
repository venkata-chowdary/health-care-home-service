export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  minutes: number;
  intro: string;
  sections: GuideSection[];
  serviceSlug: string;
  serviceName: string;
};

export const guides: Guide[] = [
  {
    slug: "preparing-home-for-patient-after-hospital",
    title: "Preparing your home for a patient coming back from hospital",
    description: "A practical checklist for Hyderabad families: the room, the bed, the medicines, the paperwork and the people to call before a patient is discharged home.",
    minutes: 5,
    intro: "Most of the stress of a hospital discharge comes from what was not ready at home. A few hours of preparation before the patient arrives makes the first week much calmer. Use this checklist, and ask the hospital team about anything specific to your patient.",
    sections: [
      {
        heading: "Ask the hospital before you leave",
        paragraphs: ["The discharge conversation is the best moment to ask questions. Do not leave without clear answers, written down."],
        list: [
          "Which medicines to give, in what dose, at what time, and for how long",
          "How to care for any wound, drain, catheter or tube",
          "What the patient may and may not do: walking, stairs, bathing, lifting, diet",
          "Which warning signs mean calling the doctor, and which mean going straight back to hospital",
          "When the review appointment is, and who to phone before then",
        ],
      },
      {
        heading: "Choose and set up the room",
        paragraphs: ["Pick the room that is easiest to reach, closest to a bathroom and has good light and ventilation. A ground-floor room is safest for someone who cannot manage stairs."],
        list: [
          "A bed of the right height, so the patient can sit on the edge and stand without a struggle. A hospital-type adjustable bed can be hired if needed",
          "Space on both sides of the bed so a nurse or attendant can work",
          "A firm chair, a bedside table within reach, and a bell or phone to call for help",
          "A night light and a clear, dry path to the toilet. Remove loose rugs and cables",
          "A bedside commode or urinal if walking to the toilet is difficult",
        ],
      },
      {
        heading: "Organise medicines and supplies",
        paragraphs: ["Keep medicines together, in the original packs, with a written chart of what is given when. Check dates, and keep anything that needs a cool place in the fridge."],
        list: [
          "Dressings, gloves, sanitiser and a thermometer",
          "A BP monitor and glucometer if the patient needs regular readings",
          "Adult diapers, bed protectors and wipes if the patient is bedridden",
          "A pill organiser, so doses are not missed or repeated",
        ],
      },
      {
        heading: "Decide who does what",
        paragraphs: ["Caring for a sick person at home is a shared job. Agree who gives medicines, who talks to the doctor, who stays through the night and who rests. Families that decide this early argue less and burn out later."],
        list: [
          "Pick one family member as the main contact for the doctor and the care team",
          "Plan for the night, which is the hardest time to be without help",
          "Think about whether a nurse, an attendant or both would help, and for how long",
        ],
      },
      {
        heading: "Keep the important numbers in one place",
        paragraphs: ["Stick one sheet near the bed: the treating doctor, the hospital, the pharmacy, a family member, your local emergency number and the home care coordinator. In a stressful moment nobody wants to search a phone."],
      },
    ],
    serviceSlug: "post-operative-care",
    serviceName: "Post-operative care at home",
  },
  {
    slug: "12-hour-vs-24-hour-home-nursing",
    title: "12-hour vs 24-hour home nursing: how to choose",
    description: "How to decide between a 12-hour shift and round-the-clock home nursing, based on the patient's needs at night, their condition and the family's own capacity.",
    minutes: 4,
    intro: "Shift length is one of the biggest choices when arranging a nurse or caregiver at home, and one of the most common questions families ask. The right answer depends less on the diagnosis and more on what the patient needs during the night.",
    sections: [
      {
        heading: "Start with the night",
        paragraphs: ["Ask one question first: does the patient need help or watching between roughly 9 pm and 6 am? If they sleep through the night and a family member is present, a daytime shift may be enough. If they wake often, need turning, suction, oxygen or toilet help, or may wander or fall, round-the-clock cover is usually the safer choice."],
      },
      {
        heading: "When a 12-hour shift often fits",
        list: [
          "The patient is recovering well and needs help with medicines, dressings and meals during the day",
          "A family member is at home at night and can be called if needed",
          "The patient is mostly independent but needs company and supervision",
          "The aim is to cover the family's working hours",
        ],
      },
      {
        heading: "When 24-hour cover is usually considered",
        list: [
          "The patient is bedridden and needs regular turning to prevent pressure sores",
          "They depend on oxygen, suction, a ventilator or a tracheostomy",
          "They have advanced dementia, may wander, or are at risk of falls at night",
          "They have just left hospital after major surgery or a stroke and are unsteady",
          "The family cannot safely be present at night",
        ],
      },
      {
        heading: "Single visits are a different thing",
        paragraphs: ["A single visit is built around a task: an injection, a dressing, an IV, a physiotherapy session. If the need is one procedure at a set time, a visit is usually simpler and cheaper than a shift. If the patient needs watching rather than a procedure, think in shifts."],
      },
      {
        heading: "Review as the patient changes",
        paragraphs: ["Needs change. Many families start with 24-hour cover in the first weeks after discharge and move to a day shift as the patient recovers, or the other way round if their health declines. Ask the doctor and the coordinator to review the arrangement every couple of weeks rather than treating the first choice as fixed."],
      },
      {
        heading: "Questions to ask a coordinator",
        list: [
          "Which shift patterns are available for this patient's service?",
          "What happens if the nurse or caregiver cannot come?",
          "Who is the contact person if the shift needs to change?",
          "How are costs worked out, and are there minimum booking periods?",
        ],
      },
    ],
    serviceSlug: "home-nursing",
    serviceName: "Home nursing",
  },
  {
    slug: "how-to-choose-a-home-care-agency",
    title: "How to choose a home care agency: 10 questions to ask",
    description: "India has no single licensing body for home care agencies. These ten questions help Hyderabad families compare agencies fairly before trusting one with a loved one.",
    minutes: 5,
    intro: "You are about to let a stranger into your home to care for someone you love. In India, home care is not covered by one licensing body or one national standard, so families need to ask questions themselves. Put the same ten questions to every agency you consider and compare the answers in writing.",
    sections: [
      {
        heading: "About the agency",
        list: [
          "Is the company registered, and can it show registration details? Ask for the legal name and check it.",
          "Is there a physical office you can visit, and who answers the phone at night?",
          "Can you speak to families who have used the service, or read genuine independent reviews?",
        ],
      },
      {
        heading: "About the people who will visit",
        list: [
          "How are nurses, caregivers and physiotherapists checked: identity, qualifications, past employment and references?",
          "What training do they have for this condition, such as dementia, ventilator care or stroke rehabilitation?",
          "Will the same person come each day, and what happens if they are ill or leave?",
          "Can you meet or speak to the person before they start, and ask for a change if it is not working?",
        ],
      },
      {
        heading: "About safety and cost",
        list: [
          "What is the plan if the patient's condition changes suddenly, and who will be called?",
          "What are all the costs: visit or shift charges, registration fees, supplies, travel, and charges for a replacement?",
        ],
      },
      {
        heading: "Read the answers, not the brochure",
        paragraphs: [
          "A good answer is specific. 'We verify everyone' is a slogan. 'We check identity documents and certificates, take references and re-check on a regular basis' is an answer you can test. If an agency avoids a question, treat that as information.",
          "Ask for the answers in writing, such as a message or an email, and keep them. If you later disagree about what was promised, you will have a record.",
        ],
      },
      {
        heading: "Check as you go",
        paragraphs: ["Choosing an agency is the start, not the end. In the first week, visit or call at different times of day, ask the patient how they feel about the person, and look at the records the nurse keeps. A trustworthy team welcomes this."],
      },
    ],
    serviceSlug: "elder-care",
    serviceName: "Elder care at home",
  },
  {
    slug: "nurse-vs-attendant-vs-caregiver",
    title: "Home nurse, patient attendant or caregiver: who does what?",
    description: "A plain-language guide to the three roles in home care, so Hyderabad families can tell what a nurse, an attendant and a caregiver do, and which one their patient needs.",
    minutes: 4,
    intro: "Families often ask for a 'nurse' when what they need is an attendant, or the other way round. The titles are used loosely, so it helps to think in terms of tasks. This guide describes the usual split.",
    sections: [
      {
        heading: "Nurse: clinical tasks",
        paragraphs: ["A nurse is trained to carry out medical procedures and to notice when a patient's condition is changing."],
        list: [
          "Injections, IV fluids and cannula care",
          "Wound dressing, catheter and feeding tube care",
          "Giving medicines on schedule and recording BP, pulse, temperature and sugar",
          "Nebulisation, oxygen and, with ICU training, ventilator and tracheostomy care",
        ],
      },
      {
        heading: "Patient attendant: hands-on daily help",
        paragraphs: ["An attendant helps the patient with the physical side of daily life, especially when they are weak or bedridden."],
        list: [
          "Washing, dressing, toileting and changing bedding",
          "Turning and repositioning, and helping the patient sit, stand and walk",
          "Feeding and giving drinks",
          "Reminding the patient about medicines the family has set out",
        ],
      },
      {
        heading: "Caregiver: company and routine",
        paragraphs: ["The word caregiver is used for both of the above. In elder care it usually means someone who keeps a person company and helps with a daily routine: meals, walks, hobbies and gentle supervision. For dementia, the calm presence of a familiar person is often the most useful thing."],
      },
      {
        heading: "Which does your patient need?",
        list: [
          "Needs injections, IV, dressings, tubes or oxygen: a nurse",
          "Needs help to wash, move and eat but has no medical procedures: an attendant or caregiver",
          "Is bedridden after surgery or a stroke: usually both, with a nurse visiting and an attendant for the day-to-day",
          "Is an active older person who is lonely or forgetful: a caregiver, and a nurse only if medical needs appear",
        ],
      },
      {
        heading: "Do not forget the physiotherapist",
        paragraphs: ["After a fracture, surgery or stroke, regular physiotherapy often decides how much independence the patient regains. It is a separate role, visits in sessions rather than shifts, and works best when the nurse and attendant know the exercise plan."],
      },
    ],
    serviceSlug: "home-nursing",
    serviceName: "Home nursing",
  },
  {
    slug: "physiotherapy-after-fracture-or-stroke-at-home",
    title: "Physiotherapy at home after a fracture or stroke: what to expect",
    description: "What a home physiotherapist does after a fracture or stroke, how an assessment works, what the family can do between sessions and which warning signs mean calling a doctor.",
    minutes: 5,
    intro: "Recovery from a fracture or stroke depends heavily on what happens after the hospital stay. Physiotherapy at home brings the treatment to the place where the patient has to relearn to move: the bedroom, the bathroom, the stairs. This guide explains what to expect.",
    sections: [
      {
        heading: "The first session is an assessment",
        paragraphs: ["The physiotherapist will ask about the injury or stroke, the surgeon's or doctor's instructions, pain, medicines and what the patient wants to get back to. They then check strength, movement, balance and walking, and explain a plan."],
      },
      {
        heading: "After a fracture",
        paragraphs: ["The surgeon sets the limits, such as how much weight the patient may put on the leg. The physiotherapist works inside those limits."],
        list: [
          "Reducing stiffness and swelling, and keeping nearby joints moving",
          "Rebuilding muscle strength that has been lost during rest",
          "Practising safe transfers: bed to chair, sitting to standing",
          "Walking with a frame or sticks, then on stairs when the surgeon allows",
        ],
      },
      {
        heading: "After a stroke",
        paragraphs: ["Stroke rehabilitation aims to regain as much movement, balance and independence as possible. Progress is usually gradual and depends on the person."],
        list: [
          "Repetitive, task-based exercises for the weaker arm and leg",
          "Balance and walking practice, with safety support",
          "Positioning and handling advice for the family to prevent stiffness and shoulder pain",
          "Strategies for daily tasks: dressing, washing, moving around the house",
        ],
      },
      {
        heading: "What the family can do between sessions",
        list: [
          "Learn the exercises in the first session and help the patient do them as shown",
          "Keep the floor clear and well lit, and use rails or a stable chair near the bed",
          "Keep a simple diary of pain, tiredness and what the patient managed each day",
          "Tell the physiotherapist about falls, new pain and changes in medicines",
        ],
      },
      {
        heading: "Warning signs",
        paragraphs: ["Call the doctor, or your local emergency number if it is severe, for sudden severe pain, a swollen, hot or tender calf, breathlessness or chest pain, new numbness or weakness, or loss of bladder or bowel control."],
      },
    ],
    serviceSlug: "physiotherapy-at-home",
    serviceName: "Physiotherapy at home",
  },
];
