import { HomeContactSection } from "@/components/home/home-contact-section";
import { HomeHero } from "@/components/home/home-hero";
import { HomeHighlights } from "@/components/home/home-highlights";
import { getContactDetails, getOpeningHours } from "@/data/site";
import { getBuffetPricing } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export default function Home() {
  const hours = getOpeningHours();
  const contact = getContactDetails();
  const buffetPricing = getBuffetPricing();
  const primaryPhone = contact.phoneNumbers[0]?.replace(/\s+/g, "") || "/#contact";
  const weekdayPrice = formatPrice(buffetPricing.dineIn.weekday) ?? "";
  const weekendPrice = formatPrice(buffetPricing.dineIn.weekend) ?? "";

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
