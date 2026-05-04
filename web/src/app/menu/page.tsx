import { MenuPageContent } from "@/components/menu/menu-page-content";
import { PageIntroSection } from "@/components/sections/page-intro-section";

export default function MenuPage() {
  return (
    <>
      <PageIntroSection
        title="Menu"
        description="Udforsk vores sammensatte menuer, klassiske retter og favoritter fra køkkenet samlet ét sted."
      />
      <MenuPageContent />
    </>
  );
}
