import { z } from "zod";

export const availabilitySchema = z.enum([
  "dine-in",
  "takeaway",
  "catering",
]);

const courseSectionSchema = z.record(z.string(), z.array(z.string()));

export const menuItemSchema = z.object({
  id: z.string(),
  categoryId: z.string(),
  name: z.string(),
  description: z.string().nullable().optional(),
  courses: courseSectionSchema.default({}),
  dineInPrice: z.number().nullable().optional(),
  takeawayPrice: z.number().nullable().optional(),
  minGuests: z.number().int().nullable().optional(),
  availability: z.array(availabilitySchema).default(["dine-in"]),
});
export type MenuItem = z.infer<typeof menuItemSchema>;

export const menuSetCategorySchema = z.object({
  id: z.string(),
  title: z.string(),
});
export type MenuSetCategoryData = z.infer<typeof menuSetCategorySchema>;

export const menuContentSchema = z.object({
  setCategories: z.array(menuSetCategorySchema).default([]),
  items: z.array(menuItemSchema),
  sections: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      groups: z.array(
        z.object({
          title: z.string().nullable(),
          items: z.array(
            z.object({
              number: z.string(),
              name: z.string(),
              dineInPrice: z.number().nullable().optional(),
              takeawayPrice: z.number().nullable().optional(),
            })
          ),
        })
      ),
    })
  ),
});
export type MenuContent = z.infer<typeof menuContentSchema>;

export const buffetPricingSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  dineIn: z.object({
    weekday: z.number(),
    weekend: z.number(),
    childUnder12: z.number(),
    childUnder3: z.number(),
  }),
  notes: z.array(z.string()),
  includes: z.array(z.string()),
  sushiIncluded: z.boolean().default(true),
  takeawayAvailable: z.boolean().default(false),
  buffetTimes: z.array(
    z.object({
      label: z.string(),
      time: z.string(),
    })
  ),
});
export type BuffetPricing = z.infer<typeof buffetPricingSchema>;

export const hoursSchema = z.object({
  regular: z.array(
    z.object({
      days: z.string(),
      open: z.string(),
      close: z.string(),
    })
  ),
  takeaway: z.array(
    z.object({
      label: z.string(),
      open: z.string(),
      close: z.string(),
    })
  ),
  notes: z.array(z.string()).default([]),
});
export type OpeningHours = z.infer<typeof hoursSchema>;

export const contactSchema = z.object({
  name: z.string(),
  address: z.object({
    line1: z.string(),
    line2: z.string(),
    country: z.string(),
  }),
  map: z.object({
    staticImage: z.string().optional(),
    googleMapsUrl: z.string().url(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
    zoom: z.number().int().default(16),
    label: z.string(),
  }),
  phoneNumbers: z.array(z.string()),
  email: z.string().email(),
  cta: z.object({
    label: z.string(),
    href: z.string(),
  }),
  highlights: z.array(z.string()),
});
export type ContactDetails = z.infer<typeof contactSchema>;

export const heroSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  description: z.string(),
  primaryCta: z
    .object({
      label: z.string(),
      href: z.string(),
    })
    .nullable()
    .optional(),
  secondaryCta: z
    .object({
      label: z.string(),
      href: z.string(),
    })
    .nullable()
    .optional(),
  carousel: z.array(z.string()),
});
export type HeroContent = z.infer<typeof heroSchema>;

export const dinnerPackageSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable().optional(),
  items: z.array(z.string()),
  sushi: z.array(z.string()).optional(),
  dineInPrice: z.number().nullable().optional(),
  takeawayPrice: z.number().nullable().optional(),
  minGuests: z.number().int().nullable().optional(),
});
export type DinnerPackage = z.infer<typeof dinnerPackageSchema>;

const menuItemEntrySchema = z.object({
  number: z.string(),
  name: z.string(),
  dineInPrice: z.number().nullable().optional(),
  takeawayPrice: z.number().nullable().optional(),
});

const menuItemGroupSchema = z.object({
  title: z.string().nullable(),
  items: z.array(menuItemEntrySchema),
});

export const menuItemSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  groups: z.array(menuItemGroupSchema),
});
export type MenuItemSectionData = z.infer<typeof menuItemSectionSchema>;

export const buffetBenefitSchema = z.object({
  title: z.string(),
  description: z.string(),
});
export type BuffetBenefit = z.infer<typeof buffetBenefitSchema>;

export const buffetGalleryItemSchema = z.object({
  image: z.string(),
  alt: z.string(),
});
export type BuffetGalleryItem = z.infer<typeof buffetGalleryItemSchema>;

export const reviewSchema = z.object({
  author: z.string(),
  text: z.string(),
  source: z.string(),
});
export type Review = z.infer<typeof reviewSchema>;
