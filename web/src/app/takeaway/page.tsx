import type { Metadata } from "next";
import { MenuPageContent } from "@/components/menu/menu-page-content";
import { PageIntroSection } from "@/components/sections/page-intro-section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Take Away",
  description:
    "Se take away hos Restaurant Vinde, en kinesisk restaurant ved Hasle Torv i Aarhus V, med kinesiske retter og menuer ud af huset.",
  path: "/takeaway",
});

export default function TakeawayPage() {
  return (
    <>
      <PageIntroSection
        title="Take Away"
        description="Se vores takeaway-udvalg med retter og menuer, der kan bestilles ud af huset."
        note="Kun retter med takeaway-pris vises her."
      />
      <MenuPageContent priceMode="takeaway" />
    </>
  );
}
