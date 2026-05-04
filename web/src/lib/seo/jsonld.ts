import type { ContactDetails, OpeningHours } from "@/domain/content/types";
import { getAbsoluteUrl, siteConfig } from "@/lib/seo/site";

export function createRestaurantJsonLd({
  contact,
  hours,
  highlightSummary,
}: {
  contact: ContactDetails;
  hours: OpeningHours;
  highlightSummary?: string;
}) {
  const regularOpeningHours = hours.regular.map((slot) =>
    buildOpeningHours(slot.days, slot.open, slot.close)
  );

  const takeawayOpeningHours = hours.takeaway.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    description: slot.label,
    opens: slot.open,
    closes: slot.close,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: contact.name,
    url: getAbsoluteUrl("/"),
    image: getAbsoluteUrl("/icon.png"),
    description:
      `Restaurant Vinde er en kinesisk restaurant ved Hasle Torv i Aarhus V med Kina buffet og "all you can eat".${highlightSummary ? ` ${highlightSummary}` : ""}`,
    servesCuisine: ["Kinesisk", "Sushi", "Buffet", "Mongolian Barbecue"],
    telephone: contact.phoneNumbers[0],
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.line1,
      addressLocality: "Aarhus V",
      postalCode: "8210",
      addressCountry: contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.map.coordinates.lat,
      longitude: contact.map.coordinates.lng,
    },
    openingHoursSpecification: [
      ...regularOpeningHours,
      ...takeawayOpeningHours,
    ],
    inLanguage: siteConfig.language,
    areaServed: ["Hasle", "Hasle Torv", "Aarhus V"],
    menu: getAbsoluteUrl("/menu"),
  };
}

function buildOpeningHours(days: string, open: string, close: string) {
  const mapping: Record<string, string[]> = {
    "Mandag - Torsdag": ["Monday", "Tuesday", "Wednesday", "Thursday"],
    "Fredag - Søndag": ["Friday", "Saturday", "Sunday"],
    "Mandag - Søndag": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  };

  return {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: mapping[days] ?? [days],
    opens: open,
    closes: close,
  };
}
