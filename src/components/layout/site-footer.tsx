import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Icon, isIconName } from "@/components/ui/icon";
import { hospital } from "@/data/hospital-content";

const columnHeading = "mb-5 text-body-sm font-semibold text-white";
const columnList = "grid text-body-sm";
const columnLink = "flex items-center py-0.5 text-slate-on-dark transition-colors duration-200 hover:text-white";
const contactItem = "flex items-center gap-3 rounded-lg bg-navy-900 px-[18px] py-4 text-body-sm";

export function SiteFooter({ homePath = "" }) {
  const { phone, email, availability, footer, branches, name, legalName } = hospital;

  return (
    <footer className="pb-[calc(var(--spacing-call-bar)+env(safe-area-inset-bottom,0px)+1rem)] md:pb-8">
      <Container>
        <div className="grid gap-10 rounded-xl bg-navy-950 p-12 text-slate-on-dark max-[860px]:rounded-lg max-[860px]:px-5 max-[860px]:py-7">
          {/* <div className="grid grid-cols-3 gap-3 max-[1100px]:grid-cols-2 max-[1100px]:[&>*:last-child]:col-span-full max-[560px]:grid-cols-1">
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
          </div> */}

          <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-9 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1 max-[480px]:gap-7">
            <div className="grid content-start gap-4">
              <a href="#top" className="touch-target w-fit">
                <Image src="/images/brand/logo-white.png" alt={name.value} width={1080} height={238} sizes="164px" className="h-9 w-auto" />
              </a>
              <ul className="grid text-body-sm">
                <li>
                  <a href={phone.href.value} className={`${columnLink} gap-3`}>
                    <Icon name="phone" size={16} className="flex-none text-blue-300" />
                    {phone.display.value}
                  </a>
                </li>
                <li>
                  <a href={email.href.value} className={`${columnLink} gap-3 break-all`}>
                    <Icon name="mail" size={16} className="flex-none text-blue-300" />
                    {email.display.value}
                  </a>
                </li>
                <li className="flex items-start gap-3 py-0.5">
                  <Icon name="map-pin" size={16} className="mt-0.5 flex-none text-blue-300" />
                  <span>
                    {branches[0].address.split(", ").slice(0, 2).join(", ")},
                    <br />
                    {branches[0].address.split(", ").slice(2).join(", ")}
                  </span>
                </li>
                <li className="flex items-center gap-3 py-0.5">
                  <Icon name="clock" size={16} className="flex-none text-blue-300" />
                  {footer.availabilityLine}
                </li>
              </ul>
            </div>

            <nav aria-label={footer.quickLinksHeading}>
              <h2 className={columnHeading}>{footer.quickLinksHeading}</h2>
              <ul className={columnList}>
                {footer.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href.startsWith("#") ? `${homePath}${link.href}` : link.href} className={columnLink}>
                      {link.label}
                    </Link>
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

            <div>
              <h2 className={columnHeading}>{footer.socialsHeading}</h2>
              <ul className="flex flex-wrap items-center gap-3">
                {footer.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={social.label}
                      className="flex size-11 items-center justify-center rounded-full bg-navy-900 text-slate-on-dark transition-colors duration-200 hover:bg-navy-800 hover:text-white"
                    >
                      <Icon name={isIconName(social.icon) ? social.icon : "users"} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-navy-line pt-5 text-center text-caption">
            © {new Date().getFullYear()} {legalName.value}
          </div>
        </div>
      </Container>
    </footer>
  );
}
