import contactData from "@/content/site/contact.json";
import heroData from "@/content/site/hero.json";
import hoursData from "@/content/site/hours.json";
import {
  contactSchema,
  heroSchema,
  hoursSchema,
} from "@/domain/content/schemas";
import type {
  ContactDetails,
  HeroContent,
  OpeningHours,
} from "@/domain/content/types";

const contact = contactSchema.parse(contactData);
const hero = heroSchema.parse(heroData);
const hours = hoursSchema.parse(hoursData);

export function getContactDetails(): ContactDetails {
  return contact;
}

export function getHeroContent(): HeroContent {
  return hero;
}

export function getOpeningHours(): OpeningHours {
  return hours;
}
