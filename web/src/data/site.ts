import contactData from "@/content/site/contact.json";
import heroData from "@/content/site/hero.json";
import hoursData from "@/content/site/hours.json";
import navigationData from "@/content/site/navigation.json";
import {
  contactSchema,
  heroSchema,
  hoursSchema,
  navigationItemSchema,
} from "@/domain/content/schemas";
import type {
  ContactDetails,
  HeroContent,
  NavigationItem,
  OpeningHours,
} from "@/domain/content/types";

const contact = contactSchema.parse(contactData);
const hero = heroSchema.parse(heroData);
const hours = hoursSchema.parse(hoursData);
const navigation = navigationItemSchema.array().parse(navigationData);

export function getContactDetails(): ContactDetails {
  return contact;
}

export function getHeroContent(): HeroContent {
  return hero;
}

export function getOpeningHours(): OpeningHours {
  return hours;
}

export function getNavigation(): NavigationItem[] {
  return navigation;
}
