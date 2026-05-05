import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import type { ContactDetails, OpeningHours } from "@/domain/content/types";

type HomeContactSectionProps = {
  contact: ContactDetails;
  hours: OpeningHours;
};

export function HomeContactSection({
  contact,
  hours,
}: HomeContactSectionProps) {
  const primaryPhone = contact.phoneNumbers.join(" / ").replace(/\+45\s/g, "");

  return (
    <section
      id="contact"
      className="border-t border-[color:rgba(227,190,184,0.1)] bg-[var(--surface-low)] py-16"
    >
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[color:rgba(227,190,184,0.14)] bg-[var(--background)] shadow-[0_8px_20px_rgba(30,27,19,0.05)]">
            <div className="p-6">
              <h3 className="mb-5 flex items-center gap-3 font-display text-2xl font-bold text-[var(--primary)]">
                <ScheduleIcon />
                Åbningstider
              </h3>
              <ul className="space-y-2.5 text-[var(--foreground-muted)]">
                {hours.regular.map((slot) => (
                  <li
                    key={slot.days}
                    className="flex items-center justify-between gap-4 border-b border-[color:rgba(227,190,184,0.15)] pb-2"
                  >
                    <span>{slot.days}</span>
                    <span className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.08em] text-[var(--primary)]">
                      {slot.open} - {slot.close}
                    </span>
                  </li>
                ))}
                {hours.takeaway.map((slot) => (
                  <li
                    key={slot.label}
                    className="flex items-center justify-between gap-4 pt-1"
                  >
                    <span>{slot.label}</span>
                    <span className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.08em] text-[var(--primary)]">
                      {slot.open} - {slot.close}
                    </span>
                  </li>
                ))}
              </ul>
              {hours.notes[0] ? (
                <p className="mt-2 text-[10px] italic text-[color:rgba(90,64,60,0.7)]">
                  ({hours.notes[0]})
                </p>
              ) : null}
            </div>

            <div className="border-t border-[color:rgba(227,190,184,0.14)] p-6">
              <h3 className="mb-5 flex items-center gap-3 font-display text-2xl font-bold text-[var(--primary)]">
                <PhoneIcon />
                Kontakt
              </h3>
              <address className="space-y-2.5 not-italic text-[var(--foreground-muted)]">
                <p className="flex items-center gap-3">
                  <MobileIcon />
                  <span>Telefon: {primaryPhone}</span>
                </p>
                <p className="flex items-center gap-3">
                  <MailIcon />
                  <Link
                    href={`mailto:${contact.email}`}
                    className="transition-colors hover:text-[var(--primary)]"
                  >
                    Email: {contact.email}
                  </Link>
                </p>
                <p className="flex items-start gap-3">
                  <LocationIcon />
                  <span>
                    {contact.address.line1}, {contact.address.line2}
                    <span className="mt-1 block text-sm text-[color:rgba(90,64,60,0.78)]">
                      Restauranten ligger mellem Coop365 og Lidl ved Hasle Torv
                    </span>
                  </span>
                </p>
              </address>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--background)] shadow-[0_8px_20px_rgba(30,27,19,0.06)] lg:h-full lg:min-h-0 lg:self-stretch">
            <img
              className="absolute inset-0 block h-full w-full object-cover object-center"
              src={contact.map.staticImage || "/images/map.png"}
              alt={`Kortplacering for ${contact.name}`}
            />

            <div className="absolute left-6 top-6">
              <Link
                href={contact.map.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-[var(--radius-xl)] bg-white px-5 py-4 text-[1.05rem] font-semibold text-[#1a73e8] shadow-[0_10px_22px_rgba(30,27,19,0.16)] transition-transform hover:-translate-y-0.5"
              >
                <span>Åbn i Google Maps</span>
                <OpenInMapsIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function iconClassName() {
  return "h-5 w-5 flex-none text-[var(--accent)]";
}

function ScheduleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClassName()}>
      <circle cx="12" cy="12" r="8" strokeWidth="1.8" />
      <path d="M12 7.5v5l3.5 2" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClassName()}>
      <path
        d="M7.5 4.5h3l1.2 3.4-1.7 1.7a14 14 0 0 0 4.3 4.3l1.7-1.7 3.4 1.2v3c0 .6-.4 1-1 1C10 18.4 5.6 14 5.5 5.5c0-.6.4-1 1-1Z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClassName()}>
      <rect x="7" y="3.5" width="10" height="17" rx="2" strokeWidth="1.8" />
      <path d="M10.5 6.5h3" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="17.2" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClassName()}>
      <rect x="4" y="6.5" width="16" height="11" rx="1.5" strokeWidth="1.8" />
      <path d="m5 8 7 5 7-5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClassName()}>
      <path
        d="M12 20s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" strokeWidth="1.8" />
    </svg>
  );
}

function OpenInMapsIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path d="M14 5h5v5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14 19 5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M19 13v5a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h5"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
