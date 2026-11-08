export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  capturedOn: string;
};

export const reviewsSource = "https://maps.app.goo.gl/wopgBqKkZyh2eRNg6";

export const reviews: GoogleReview[] = [
  {
    author: "vijaybhaskar dabeta",
    rating: 5,
    text: "Nurse Deepika did a good job, taking care of my mother. I would recommend Hemalatha health care services.",
    capturedOn: "2026-11-08",
  },
];
