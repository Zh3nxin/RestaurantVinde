import buffetData from "@/content/pricing/buffet.json";
import menuItemsData from "@/content/menu/items.json";
import dinnerPackagesData from "@/content/dinner-transportable/items.json";
import buffetBenefitsData from "@/content/buffet/benefits.json";
import buffetGalleryData from "@/content/buffet/gallery.json";
import {
  buffetBenefitSchema,
  buffetGalleryItemSchema,
  buffetPricingSchema,
  dinnerPackageSchema,
  menuContentSchema,
  menuItemSchema,
  menuItemSectionSchema,
} from "@/domain/content/schemas";
import type {
  BuffetBenefit,
  BuffetGalleryItem,
  BuffetPricing,
  DinnerPackage,
  MenuItem,
  MenuSetCategoryData,
  MenuItemSectionData,
} from "@/domain/content/types";

const menuContent = menuContentSchema.parse(menuItemsData);
const menuSetCategories = menuContent.setCategories;
const menuItems = menuItemSchema.array().parse(menuContent.items);
const buffetPricing = buffetPricingSchema.parse(buffetData);
const dinnerPackages = dinnerPackageSchema.array().parse(dinnerPackagesData);
const menuItemSections = menuItemSectionSchema.array().parse(menuContent.sections);
const buffetBenefits = buffetBenefitSchema.array().parse(buffetBenefitsData);
const buffetGallery = buffetGalleryItemSchema.array().parse(buffetGalleryData);

export const listMenuItems = (): MenuItem[] => menuItems;

export const listMenuSetCategories = (): MenuSetCategoryData[] => menuSetCategories;

export const listMenuItemsByCategory = (categoryId: string): MenuItem[] =>
  menuItems.filter((item) => item.categoryId === categoryId);

export const getBuffetPricing = (): BuffetPricing => buffetPricing;

export const listDinnerPackages = (): DinnerPackage[] => dinnerPackages;

export const listMenuItemSections = (): MenuItemSectionData[] => menuItemSections;

export const listBuffetBenefits = (): BuffetBenefit[] => buffetBenefits;

export const listBuffetGallery = (): BuffetGalleryItem[] => buffetGallery;
