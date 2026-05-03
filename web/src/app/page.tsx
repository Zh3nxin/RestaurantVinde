import { HomeContactSection } from "@/components/home/home-contact-section";
import { HomeHero } from "@/components/home/home-hero";
import { HomeHighlights } from "@/components/home/home-highlights";
import { getContactDetails, getOpeningHours } from "@/data/site";

export default function Home() {
  const hours = getOpeningHours();
  const contact = getContactDetails();
  const primaryPhone = contact.phoneNumbers[0]?.replace(/\s+/g, "") || "/#contact";
  const weekdayPrice = "198,-";
  const weekendPrice = "218,-";

  return (
    <div className="bg-[var(--background)]">
      <HomeHero
        bookHref={`tel:${primaryPhone}`}
        weekdayPrice={weekdayPrice}
        weekendPrice={weekendPrice}
      />
      <HomeHighlights />
      <HomeContactSection contact={contact} hours={hours} />
    </div>
  );
}
