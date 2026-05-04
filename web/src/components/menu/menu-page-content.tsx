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
  const { menuItems, menuItemSections } = getVisibleMenuData(priceMode);

  const menuSetSections = menuSetCategories
    .map((category, index) => ({
      id: category.id,
      label: category.title,
      tone: getSectionTone(index),
      items: menuItems.filter((item) => item.categoryId === category.id),
    }))
    .filter((section) => section.items.length > 0);

  const menuItemDisplaySections = menuItemSections.map((section, index) => ({
    id: section.id,
    label: section.title,
    tone: getSectionTone(index + menuSetSections.length),
    groups: section.groups,
  }));

  const sectionLinks = [...menuSetSections, ...menuItemDisplaySections].map(
    ({ id, label }) => ({
      id,
      label,
    })
  );

  return (
    <div className="bg-[var(--background)]">
      <MenuPageNavigation links={sectionLinks} />
      {menuSetSections.map((section) => (
        <MenuSetSection
          key={section.id}
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
      ))}
      {menuItemDisplaySections.map((section) => (
        <MenuItemSection
          key={section.id}
          id={section.id}
          title={section.label}
          tone={section.tone}
          groups={section.groups}
          priceMode={priceMode}
        />
      ))}
    </div>
  );
}

function getVisibleMenuData(priceMode: PriceMode) {
  const menuItems = listMenuItems();
  const menuItemSections = listMenuItemSections();

  if (priceMode === "dine-in") {
    return { menuItems, menuItemSections };
  }

  return {
    menuItems: menuItems.filter((item) => item.takeawayPrice != null),
    menuItemSections: menuItemSections
      .map((section) => ({
        ...section,
        groups: section.groups
          .map((group) => ({
            ...group,
            items: group.items.filter((item) => item.takeawayPrice != null),
          }))
          .filter((group) => group.items.length > 0),
      }))
      .filter((section) => section.groups.length > 0),
  };
}

function getSectionTone(index: number) {
  const tones = ["surface", "soft"] as const;
  return tones[index % tones.length];
}
