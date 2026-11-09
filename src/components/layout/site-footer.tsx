import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { hospital } from "@/data/hospital-content";

const columnHeading = "mb-3 text-body-sm font-semibold text-white";
const columnList = "grid gap-[9px] text-body-sm";
const columnLink = "text-slate-on-dark transition-colors duration-200 hover:text-white";
const contactItem = "flex items-center gap-3 rounded-lg bg-navy-900 px-[18px] py-4 text-body-sm";

export function SiteFooter({ homePath = "" }) {
  const { phone, email, availability, footer, services, branches, name, legalName } = hospital;

  return (
    <footer className="pb-24 md:pb-8">
      <Container>
        <div className="grid gap-10 rounded-xl bg-navy-950 p-12 text-slate-on-dark max-[860px]:rounded-lg max-[860px]:px-5 max-[860px]:py-7">
          <div className="grid grid-cols-3 gap-3 max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1">
            <a href={phone.href.value} className={`${contactItem} transition-colors duration-200 hover:bg-navy-800`}>
              <Icon name="phone" className="flex-none text-blue-300" />
              <span>
                <b className="block font-medium text-white">{phone.display.value}</b>
                {footer.firstPhoneDetail}
              </span>
            </a>
            <a href={email.href.value} className={`${contactItem} transition-colors duration-200 hover:bg-navy-800`}>
              <Icon name="messages-square" className="flex-none text-blue-300" />
              <span className="min-w-0">
                <b className="block font-medium text-white">
                  {email.display.value.split("@")[0]}@<wbr />
                  {email.display.value.split("@")[1]}
                </b>
                {footer.emailDetail}
              </span>
            </a>
            <div className={contactItem}>
              <Icon name="clock" className="flex-none text-blue-300" />
              <span>
                <b className="block font-medium text-white">{availability.value}</b>
                {footer.availabilityDetail}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-9 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1 max-[480px]:gap-7">
            <div className="grid content-start gap-3">
              <a href="#top">
                <Image src="/images/brand/logo-white.png" alt={name.value} width={1080} height={238} className="h-9 w-auto" />
              </a>
              <p className="max-w-[32ch] text-body-sm">{footer.tagline}</p>
            </div>

            <nav aria-label={footer.servicesHeading}>
              <h2 className={columnHeading}>{footer.servicesHeading}</h2>
              <ul className={columnList}>
                {services.map((service) => (
                  <li key={service.name}>
                    {service.externalLink ? (
                      <a href={service.externalLink.href} target="_blank" rel="noopener" className={columnLink}>
                        {service.name}
                      </a>
                    ) : (
                      <a href={`/services/${service.slug}`} className={columnLink}>
                        {service.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={footer.branchesHeading}>
              <h2 className={columnHeading}>{footer.branchesHeading}</h2>
              <ul className={columnList}>
                {branches.map((branch) => (
                  <li key={branch.name}>
                    <a href={`${homePath}${footer.branchesHref}`} className={columnLink}>
                      {branch.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={footer.companyHeading}>
              <h2 className={columnHeading}>{footer.companyHeading}</h2>
              <ul className={columnList}>
                {footer.company.map((link) => (
                  <li key={link.label}>
                    <a href={`${homePath}${link.href}`} className={columnLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-navy-line pt-5 text-caption">
            <span>
              © {new Date().getFullYear()} {legalName.value}
            </span>
            <span className="text-slate-on-dark/80">Photos are illustrative.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
