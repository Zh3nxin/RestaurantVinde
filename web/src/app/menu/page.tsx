import type { Metadata } from "next";
import Link from "next/link";
import { MenuPageContent } from "@/components/menu/menu-page-content";
import { PageIntroSection } from "@/components/sections/page-intro-section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Menu",
  description:
    'Se menuen hos Restaurant Vinde, en kinesisk restaurant ved Hasle Torv i Aarhus V, med Kinesisk buffet, "all you can eat", sushi og varme retter.',
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <PageIntroSection
        title="Menu"
        description="Udforsk vores sammensatte menuer, kinesiske retter og favoritter fra køkkenet samlet ét sted."
        note={
          <>
            Skal du bestille takeaway? Gå til{" "}
            <Link
              href="/takeaway"
              className="font-semibold not-italic underline underline-offset-2 hover:text-[var(--primary)]"
            >
              takeaway-siden
            </Link>
          </>
        }
      />
      <MenuPageContent />
    </>
  );
}
