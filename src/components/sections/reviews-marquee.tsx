import { ReviewCard } from "@/components/healthcare/review-card";
import { hospital } from "@/data/hospital-content";
import { reviews } from "@/data/reviews";

export function ReviewsMarquee() {
  const { reviewsSection } = hospital;

  const cards = reviews.map((review) => (
    <li key={review.author} className="w-85 flex-none max-sm:w-72.5">
      <ReviewCard
        author={review.author}
        initials={review.author
          .split(" ")
          .map((word) => word[0])
          .slice(0, 2)
          .join("")
          .toUpperCase()}
        text={review.text}
        rating={review.rating}
        sourceLabel={reviewsSection.sourceLabel}
        sampleLabel={review.status === "sample" ? reviewsSection.sampleLabel : undefined}
      />
    </li>
  ));

  return (
    <div
      role="region"
      aria-label={reviewsSection.stripLabel}
      tabIndex={0}
      className="review-marquee min-w-0 max-w-full overflow-x-auto motion-safe:overflow-x-clip"
    >
      <div className="review-marquee-track flex w-max">
        <ul className="flex gap-4 pr-4">{cards}</ul>
        <ul aria-hidden="true" className="flex gap-4 pr-4 max-motion-reduce:hidden">
          {cards}
        </ul>
      </div>
    </div>
  );
}
