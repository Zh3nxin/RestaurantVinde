import type { ReactNode } from "react";
import {
  MenuItemSection,
  MenuPageNavigation,
  MenuSetSection,
} from "@/components/menu/menu-sections";
import {
  listMenuItemSections,
  listMenuItems,
  listMenuSetCategories,
} from "@/data/menu";

type PriceMode = "dine-in" | "takeaway";

export function MenuPageContent({
  priceMode = "dine-in",
}: {
  priceMode?: PriceMode;
}) {
  const menuSetCategories = listMenuSetCategories();
  const menuItems = filterMenuItemsByPriceMode(listMenuItems(), priceMode);
  const menuItemSections = filterMenuItemSectionsByPriceMode(
    listMenuItemSections(),
    priceMode
  );

  const setSectionDefinitions = menuSetCategories
    .map((category, index) => ({
      id: category.id,
      label: category.title,
      tone: getSectionTone(index),
      items: menuItems.filter((item) => item.categoryId === category.id),
    }))
    .filter((section) => section.items.length > 0);

  const itemSectionDefinitions = menuItemSections.map((section, index) => ({
    id: section.id,
    label: section.title,
    tone: getSectionTone(index + setSectionDefinitions.length),
    groups: section.groups,
  }));

  const sections: Array<{
    id: string;
    label: string;
    content: ReactNode;
  }> = [
    ...setSectionDefinitions.map((section) => ({
      id: section.id,
      label: section.label,
      content: (
        <MenuSetSection
          id={section.id}
          title={section.label}
          tone={section.tone}
          priceMode={priceMode}
          items={section.items.map((item) => ({
            title: item.name,
            dineInPrice: item.dineInPrice,
            takeawayPrice: item.takeawayPrice,
            groups: Object.entries(item.courses).map(([label, values]) => ({
              label,
              values,
            })),
          }))}
        />
      ),
    })),
    ...itemSectionDefinitions.map((section) => ({
      id: section.id,
      label: section.label,
      content: (
        <MenuItemSection
          id={section.id}
          title={section.label}
          tone={section.tone}
          groups={section.groups}
          priceMode={priceMode}
        />
      ),
    })),
  ];

  return (
    <div className="bg-[var(--background)]">
      <MenuPageNavigation
        links={sections.map((section) => ({
          id: section.id,
          label: section.label,
        }))}
      />
      {sections.map((section) => (
        <div key={section.id}>{section.content}</div>
      ))}
    </div>
  );
}

function filterMenuItemsByPriceMode(
  menuItems: ReturnType<typeof listMenuItems>,
  priceMode: PriceMode
) {
  if (priceMode === "dine-in") {
    return menuItems;
  }

  return menuItems.filter((item) => item.takeawayPrice != null);
}

function filterMenuItemSectionsByPriceMode(
  menuItemSections: ReturnType<typeof listMenuItemSections>,
  priceMode: PriceMode
) {
  if (priceMode === "dine-in") {
    return menuItemSections;
  }

  return menuItemSections
    .map((section) => ({
      ...section,
      groups: section.groups
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => item.takeawayPrice != null),
        }))
        .filter((group) => group.items.length > 0),
    }))
    .filter((section) => section.groups.length > 0);
}

function getSectionTone(index: number) {
  const tones = ["soft", "surface"] as const;
  return tones[index % tones.length];
}
