import { MenuPageContent } from "@/components/menu/menu-page-content";
import { PageIntroSection } from "@/components/sections/page-intro-section";

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
