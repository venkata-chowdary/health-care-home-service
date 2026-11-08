import { BranchCard } from "@/components/healthcare/branch-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { isIconName } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

export function Branches() {
  const { branchesSection, branches, availability } = hospital;
  const [mainBranch, ...otherBranches] = branches;
  const coordinates = mainBranch.coordinates;
  const officeIcon = branchesSection.officePhoto.icon;

  return (
    <Section id="branches" aria-labelledby="branches-heading" containerClassName="grid gap-12 max-md:gap-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading headingId="branches-heading" eyebrow={branchesSection.eyebrow} title={branchesSection.title} />
        <p className="text-body-sm text-muted-foreground">{branchesSection.aside}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)]">
        <PhotoFrame
          alt={branchesSection.officePhoto.alt}
          src={branchesSection.officePhoto.src}
          focus={branchesSection.officePhoto.focus}
          icon={officeIcon && isIconName(officeIcon) ? officeIcon : undefined}
          label={branchesSection.officePhoto.label}
          radius="xl"
          sizes="(min-width: 1280px) 340px, (min-width: 768px) 28vw, 100vw"
          className="aspect-[4/3] md:aspect-auto md:h-[400px] xl:h-[490px]"
        />
        <div className="relative">
          {coordinates && (
            <iframe
              title={branchesSection.mapTitle}
              src={`https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/3] w-full rounded-xl border-0 md:aspect-auto md:h-[400px] xl:h-[490px]"
            />
          )}
          <div className="absolute top-6 left-6 grid w-[min(340px,calc(100%-48px))] gap-3.5 rounded-card bg-background p-6 shadow-float max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:mx-3 max-lg:-mt-16 max-lg:w-auto">
            <span className="flex flex-wrap items-center gap-2 text-caption text-muted-foreground">
              {mainBranch.label} · {branchesSection.mainOfficeTag}
            </span>
            <h3 className="text-[20px] leading-[1.3] font-medium tracking-[-0.02em]">{mainBranch.address}</h3>
            <span className="inline-flex items-center gap-2 text-caption font-medium text-success before:size-[7px] before:rounded-full before:bg-current before:shadow-[0_0_0_4px_var(--color-success-surface)] before:content-['']">
              {branchesSection.availablePrefix} {availability.value}
            </span>
            <div className="border-t border-border pt-3.5">
              <CallButton size="sm" />
            </div>
            <Button href={mainBranch.directionsUrl} target="_blank" rel="noopener" iconBefore="navigation" className="w-full">
              {branchesSection.directionsLabel}
            </Button>
          </div>
        </div>
      </div>

      <RevealGroup className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
        {otherBranches.map((branch, index) => (
          <RevealItem key={branch.name} index={index}>
            <BranchCard
              label={branch.label}
              name={branch.name}
              address={branch.address}
              landmark={branch.landmark}
              directionsUrl={branch.directionsUrl}
              directionsLabel={branchesSection.directionsLabel}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
