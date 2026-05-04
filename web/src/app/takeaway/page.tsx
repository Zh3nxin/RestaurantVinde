import type { Metadata } from "next";
import Link from "next/link";
import { MenuPageContent } from "@/components/menu/menu-page-content";
import { PageIntroSection } from "@/components/sections/page-intro-section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Takeaway",
  description:
    "Se take away hos Restaurant Vinde, en kinesisk restaurant ved Hasle Torv i Aarhus V, med kinesiske retter og menuer ud af huset.",
  path: "/takeaway",
});

export default function TakeawayPage() {
  return (
    <>
      <PageIntroSection
        title="Takeaway"
        description="Se vores takeaway-udvalg med retter og menuer, der kan bestilles til afhentning."
        note={
          <>
            Bestil takeaway til afhentning via{" "}
            <Link
              href="tel:+4586288838"
              className="font-semibold not-italic underline underline-offset-2 hover:text-[var(--primary)]"
            >
              telefon
            </Link>{" "}
            eller{" "}
            <Link
              href="https://restaurantvinde8210.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold not-italic underline underline-offset-2 hover:text-[var(--primary)]"
            >
              online
            </Link>
            . Ønsker du levering? Bestil via{" "}
            <Link
              href="https://wolt.com/da/dnk/aarhus/restaurant/restaurant-vinde"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold not-italic underline underline-offset-2 hover:text-[var(--primary)]"
            >
              Wolt
            </Link>
            .
          </>
        }
      />
      <MenuPageContent priceMode="takeaway" />
    </>
  );
}
