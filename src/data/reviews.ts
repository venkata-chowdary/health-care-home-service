export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  capturedOn: string;
  status: "verified" | "sample";
};

export const reviewsSource = "https://maps.app.goo.gl/wopgBqKkZyh2eRNg6";

export const reviews: GoogleReview[] = [
  {
    author: "Vijaybhaskar Dabeta",
    rating: 5,
    text: "Nurse Deepika did a good job, taking care of my mother. I would recommend Hemalatha health care services.",
    capturedOn: "2026-11-08",
    status: "verified",
  },
  {
    author: "Sravani Reddy",
    rating: 5,
    text: "My father needed dressing changes and injections after his surgery. The nurse arrived on time every morning and explained everything to us patiently.",
    capturedOn: "2026-11-08",
    status: "sample",
  },
  {
    author: "Karthik Rao",
    rating: 5,
    text: "We arranged a night attendant for my grandmother in KPHB. She was gentle, attentive and kept us updated. It gave the whole family some rest.",
    capturedOn: "2026-11-08",
    status: "sample",
  },
  {
    author: "Lakshmi Prasanna",
    rating: 4,
    text: "The physiotherapist came home three times a week after my mother's knee replacement. Her walking has improved a lot. Scheduling was flexible.",
    capturedOn: "2026-11-08",
    status: "sample",
  },
  {
    author: "Mohammed Irfan",
    rating: 5,
    text: "Called in the evening and the team had a nurse at our door the next morning. Easy to reach on phone and WhatsApp throughout.",
    capturedOn: "2026-11-08",
    status: "sample",
  },
  {
    author: "Anitha Kumari",
    rating: 5,
    text: "They set up oxygen and monitoring at home for my husband and trained us on what to watch for. We felt supported, not left alone.",
    capturedOn: "2026-11-08",
    status: "sample",
  },
  {
    author: "Suresh Babu",
    rating: 5,
    text: "Caring and respectful staff. They looked after my elderly mother like family, and the daily updates were very reassuring.",
    capturedOn: "2026-11-08",
    status: "sample",
  },
];
