import { ReviewCard } from "@/components/healthcare/review-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { StarRating } from "@/components/ui/star-rating";
import { hospital } from "@/data/hospital-content";
import { reviews, reviewsSource } from "@/data/reviews";

export function Reviews() {
  const { reviewsSection, googleRating } = hospital;
  const reviewSlots = Array.from({ length: reviewsSection.slotCount }, (_, index) => reviews[index]);

  return (
    <Section id="reviews" aria-labelledby="reviews-heading" flushTop containerClassName="grid gap-12 max-md:gap-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading headingId="reviews-heading" eyebrow={reviewsSection.eyebrow} title={reviewsSection.title} />
        <a
          href={reviewsSource}
          target="_blank"
          rel="noopener"
          className="inline-flex h-[46px] items-center gap-2.5 rounded-button border border-border bg-background pr-[18px] pl-2 text-body-sm text-muted-foreground no-underline transition-[border-color] duration-180 ease-standard hover:border-blue-200"
        >
          <span aria-hidden="true" className="grid size-[30px] place-items-center rounded-full bg-surface text-body-sm font-semibold text-foreground">
            G
          </span>
          <span className="sr-only">{reviewsSection.ratingLinkLabel}:</span>
          <b className="text-base font-semibold text-foreground">{googleRating.rating.value}</b>
          <StarRating value={googleRating.rating.value} decorative />
          {googleRating.reviewCount.value} {reviewsSection.reviewCountSuffix}
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
        {reviewSlots.map((review, index) =>
          review ? (
            <ReviewCard
              key={review.author}
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
            />
          ) : (
            <ReviewCard key={`empty-${index}`} empty author={reviewsSection.emptyAuthor} initials={reviewsSection.emptyAuthorInitials} text={reviewsSection.emptySlotTexts[index]} rating={0} sourceLabel={reviewsSection.sourceLabel} />
          ),
        )}
      </div>
    </Section>
  );
}
