import type { Metadata } from "next";
import { HomeContactSection } from "@/components/home/home-contact-section";
import { HomeHero } from "@/components/home/home-hero";
import { HomeHighlights } from "@/components/home/home-highlights";
import { getContactDetails, getOpeningHours } from "@/data/site";
import { getBuffetPricing } from "@/data/menu";
import { formatPrice } from "@/lib/format";
import { createRestaurantJsonLd } from "@/lib/seo/jsonld";
import { createPageMetadata } from "@/lib/seo/metadata";

const homeHighlightsSeoSummary =
  "Sushi med nigiri, inside-out og maki, 26 forskellige varme kinesiske retter, Mongolian Barbecue samt dessert og stor salatbar.";

export const metadata: Metadata = createPageMetadata({
  title: "Kinesisk Restaurant Vinde",
  description:
    `Restaurant Vinde er en kinesisk restaurant ved Hasle Torv i Aarhus V med Kina buffet og "all you can eat". ${homeHighlightsSeoSummary}`,
  path: "/",
});

export default function Home() {
  const hours = getOpeningHours();
  const contact = getContactDetails();
  const buffetPricing = getBuffetPricing();
  const primaryPhone = contact.phoneNumbers[0]?.replace(/\s+/g, "") || "/#contact";
  const weekdayPrice = formatPrice(buffetPricing.dineIn.weekday) ?? "";
  const weekendPrice = formatPrice(buffetPricing.dineIn.weekend) ?? "";
  const adLibitumPrice = formatPrice(buffetPricing.addOns.adLibitumDrinks) ?? "";
  const restaurantJsonLd = createRestaurantJsonLd({
    contact,
    hours,
    highlightSummary: homeHighlightsSeoSummary,
  });

  return (
    <div className="bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantJsonLd),
        }}
      />
      <HomeHero
        adLibitumPrice={adLibitumPrice}
        bookHref={`tel:${primaryPhone}`}
        weekdayPrice={weekdayPrice}
        weekendPrice={weekendPrice}
      />
      <HomeHighlights />
      <HomeContactSection contact={contact} hours={hours} />
    </div>
  );
}
