import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { hospital } from "@/data/hospital-content";

const columnHeading = "mb-3 text-body-sm font-semibold text-white";
const columnList = "grid gap-[9px] text-body-sm";
const columnLink = "text-slate-on-dark transition-colors duration-200 hover:text-white";
const contactItem = "flex items-center gap-3 rounded-lg bg-navy-900 px-[18px] py-4 text-body-sm";

export function SiteFooter() {
  const frontDesk = hospital.hours[0];

  return (
    <footer className="pb-24 md:pb-8">
      <Container>
        <div className="grid gap-10 rounded-xl bg-navy-950 p-12 text-slate-on-dark max-[860px]:rounded-lg max-[860px]:px-5 max-[860px]:py-7">
          <div className="grid grid-cols-3 gap-3 max-[860px]:grid-cols-1">
            <a href={hospital.phone.href.value} className={`${contactItem} transition-colors duration-200 hover:bg-navy-800`}>
              <Icon name="phone" className="flex-none text-blue-300" />
              <span>
                <b className="block font-medium text-white">{hospital.phone.display.value}</b>
                {frontDesk.label}
              </span>
            </a>
            <a href={hospital.address.directionsUrl.value} target="_blank" rel="noopener" className={`${contactItem} transition-colors duration-200 hover:bg-navy-800`}>
              <Icon name="map-pin" className="flex-none text-blue-300" />
              <span>
                <b className="block font-medium text-white">{hospital.address.locality.value}</b>
                {hospital.address.city.value} {hospital.address.postalCode.value}
              </span>
            </a>
            <div className={contactItem}>
              <Icon name="clock" className="flex-none text-blue-300" />
              <span>
                <b className="block font-medium text-white">Open {frontDesk.value}</b>
                {frontDesk.label}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-9 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1 max-[480px]:gap-7">
            <div className="grid content-start gap-3">
              <a href="#top">
                <Image src="/images/brand/logo-white.png" alt={hospital.name.value} width={1080} height={238} className="h-9 w-auto" />
              </a>
              <p className="max-w-[32ch] text-body-sm">{hospital.footer.tagline}</p>
            </div>

            <nav aria-label="Explore">
              <h2 className={columnHeading}>Explore</h2>
              <ul className={columnList}>
                {hospital.footer.explore.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={columnLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Departments">
              <h2 className={columnHeading}>Departments</h2>
              <ul className={columnList}>
                {hospital.departments.slice(0, hospital.footer.departmentLinkCount).map((department) => (
                  <li key={department.name}>
                    <a href="#departments" className={columnLink}>
                      {department.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Patients">
              <h2 className={columnHeading}>Patients</h2>
              <ul className={columnList}>
                {hospital.footer.patients.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={columnLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-wrap justify-between gap-4 border-t border-navy-line pt-5 text-caption">
            <span>
              © {new Date().getFullYear()} {hospital.legalName.value}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
