import type {
  MenuCategory,
  MenuItem,
  BuffetPricing,
  ContactDetails,
  DinnerPackage,
  HeroContent,
  NavigationItem,
  OpeningHours,
  AlaCarteSection,
  SushiSection,
  DrinkCategory,
  BuffetBenefit,
  BuffetGalleryItem,
  Review,
} from "@/domain/content/schemas";

export type {
  MenuCategory,
  MenuItem,
  BuffetPricing,
  ContactDetails,
  DinnerPackage,
  HeroContent,
  NavigationItem,
  OpeningHours,
  AlaCarteSection,
  SushiSection,
  DrinkCategory,
  BuffetBenefit,
  BuffetGalleryItem,
  Review,
};

export type MoneyValue = {
  amount: number;
  currency: string;
};
