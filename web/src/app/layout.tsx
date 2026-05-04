import type { Metadata } from "next";
import Link from "next/link";
import { Manrope, Noto_Serif } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { getContactDetails, getOpeningHours } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Restaurant Vinde",
  description: "Buffet og sushi i Aarhus V – oplev Restaurant Vinde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contact = getContactDetails();
  const hours = getOpeningHours();
  const primaryPhone = contact.phoneNumbers[0]?.replace(/\s+/g, "");

  return (
    <html
      lang="da"
      className={`${manrope.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <main className="flex-1 pt-20">{children}</main>

          <footer className="border-t border-[color:rgba(227,190,184,0.14)] bg-[var(--primary-strong)] py-8 text-[12px] text-[color:rgba(255,248,239,0.8)]">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
              <div className="grid gap-6 md:grid-cols-4">
                <div className="space-y-1">
                  <p className="mb-1 font-display text-sm uppercase tracking-[0.14em] text-white">
                    Restaurant Vinde
                  </p>
                  <p>{contact.address.line1}</p>
                  <p>{contact.address.line2}</p>
                </div>

                <div className="space-y-1">
                  <p className="mb-1 font-display text-sm uppercase tracking-[0.14em] text-white">
                    Kontakt
                  </p>
                  <p>Telefon: {contact.phoneNumbers[0].replace("+45 ", "")}</p>
                  <p>
                    E-mail:{" "}
                    <Link
                      href={`mailto:${contact.email}`}
                      className="transition-colors hover:text-white"
                    >
                      {contact.email}
                    </Link>
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="mb-1 font-display text-sm uppercase tracking-[0.14em] text-white">
                    Åbningstider
                  </p>
                  {hours.regular.map((slot) => (
                    <p key={slot.days}>
                      {slot.days}: {slot.open} - {slot.close}
                    </p>
                  ))}
                  {hours.takeaway[0] ? (
                    <p>
                      {hours.takeaway[0].label}: {hours.takeaway[0].open} -{" "}
                      {hours.takeaway[0].close}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-1 md:text-right">
                  <p>CVR: 34887012</p>
                  <Link
                    href="/#contact"
                    className="mb-2 inline-block underline decoration-[color:rgba(255,248,239,0.4)] underline-offset-2 transition-colors hover:text-white"
                  >
                    Smiley info
                  </Link>
                  <div>
                    <Link
                      href="https://www.facebook.com"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-[var(--background)]/80 transition-colors hover:text-white"
                    >
                      <FacebookIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <MobileActionBar
            phone={primaryPhone}
            mapUrl={contact.map.googleMapsUrl}
          />
        </div>
      </body>
    </html>
  );
}

function MobileActionBar({
  phone,
  mapUrl,
}: {
  phone?: string;
  mapUrl: string;
}) {
  if (!phone) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--border-soft)] bg-[var(--surface)] shadow-[0_-8px_24px_rgba(30,27,19,0.08)] md:hidden">
      <div className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[var(--primary)]">
        <LinkButton href={`tel:${phone}`}>Ring</LinkButton>
        <LinkButton href={mapUrl}>Find vej</LinkButton>
        <LinkButton href="#buffet-info">Se buffet</LinkButton>
      </div>
    </div>
  );
}

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className="rounded-[var(--radius-xl)] border border-[var(--primary)]/20 px-4 py-2 text-center"
      href={href}
    >
      {children}
    </Link>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}
