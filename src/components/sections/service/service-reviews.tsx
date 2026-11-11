import { ReviewCard } from "@/components/healthcare/review-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";
import type { GoogleReview } from "@/data/reviews";

type ServiceReviewsProps = {
  name: string;
  matchingReviews: GoogleReview[];
  surface: boolean;
};

export function ServiceReviews({ name, matchingReviews, surface }: ServiceReviewsProps) {
  const { reviewsSection, serviceBlocks } = hospital;

  return (
    <Section id="service-reviews" aria-labelledby="service-reviews-heading" surface={surface} containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
      <SectionHeading headingId="service-reviews-heading" align="center" eyebrow={reviewsSection.eyebrow} eyebrowVariant={surface ? "white" : "default"} title={`${serviceBlocks.reviewsTitlePrefix} ${name.toLowerCase()}`} />
      <RevealGroup className="mx-auto grid w-full max-w-[880px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {matchingReviews.map((review, index) => (
          <RevealItem key={review.author} index={index}>
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
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
