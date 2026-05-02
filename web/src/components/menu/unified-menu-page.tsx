import { MenuSectionRail } from "@/components/menu/menu-section-rail";
import { listAlaCarteSections, listMenuItems } from "@/data/menu";
import { formatPrice } from "@/lib/format";

const sectionLinks = [
  { id: "sammensatte", label: "Sammensatte menuer" },
  { id: "selskabs", label: "Selskabsmenuer" },
  { id: "forretter", label: "Forretter" },
  { id: "hovedretter", label: "Hovedretter" },
  { id: "desserts", label: "Desserter" },
  { id: "drikkevarer", label: "Drikkevarer" },
];

const courseLabels: Record<string, string> = {
  forretter: "Forretter",
  mellemretter: "Mellemretter",
  hovedretter: "Hovedretter",
  dessert: "Dessert",
  "små retter bestående af": "Små retter",
};

export function UnifiedMenuPage() {
  const menuItems = listMenuItems();
  const alacarteSections = listAlaCarteSections();

  const setMenus = menuItems.filter((item) => item.categoryId === "set-menus");
  const selskabsmenuer = menuItems.filter(
    (item) => item.categoryId === "selskabsmenuer"
  );
  const forretter = alacarteSections.find((section) => section.id === "forretter");
  const hovedretter = alacarteSections.find(
    (section) => section.id === "main-courses"
  );
  const kids = alacarteSections.find((section) => section.id === "kids");
  const desserts = alacarteSections.find((section) => section.id === "desserts");
  const drikkevarer = alacarteSections.find((section) => section.id === "drikkevarer");

  return (
    <div className="bg-[var(--background)]">
      <MenuSectionRail links={sectionLinks} />

      <nav className="sticky top-20 z-30 border-b border-[color:rgba(227,190,184,0.2)] bg-[color:rgba(255,248,239,0.82)] backdrop-blur-xl xl:hidden">
        <div className="mx-auto flex w-full max-w-screen-xl gap-8 overflow-x-auto px-8 py-4 text-[13px] uppercase tracking-[0.18em] lg:justify-center">
          {sectionLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`whitespace-nowrap transition-colors hover:text-[var(--primary)] ${
                index === 0
                  ? "border-b-2 border-[var(--primary-strong)] font-bold text-[var(--primary-strong)]"
                  : "text-[color:rgba(90,64,60,0.85)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <MenuCollectionSection
        id="sammensatte"
        title="Sammensatte Menuer"
        tone="low"
        items={setMenus.map((item) => ({
          title: item.name,
          price: item.dineInPrice,
          groups: Object.entries(item.courses).map(([label, values]) => ({
            label: courseLabels[label] ?? label,
            values,
          })),
        }))}
      />

      <MenuCollectionSection
        id="selskabs"
        title="Selskabsmenuer"
        tone="surface"
        items={selskabsmenuer.map((item) => ({
          title: item.name,
          price: item.dineInPrice,
          groups: Object.entries(item.courses).map(([label, values]) => ({
            label: courseLabels[label] ?? label,
            values,
          })),
        }))}
      />

      {forretter ? (
        <AlaCarteSection
          id="forretter"
          title={forretter.title}
          tone="soft"
          groups={forretter.groups}
        />
      ) : null}

      {hovedretter ? (
        <AlaCarteSection
          id="hovedretter"
          title="Hovedretter"
          subtitle="MED RIS"
          tone="low"
          groups={hovedretter.groups}
          footerNote="Flere retter tilgængelige i restauranten."
        />
      ) : null}

      {kids ? (
        <AlaCarteSection
          id="kids"
          title={kids.title}
          tone="surface"
          groups={kids.groups}
        />
      ) : null}

      {desserts ? (
        <AlaCarteSection
          id="desserts"
          title={desserts.title}
          tone="soft"
          groups={desserts.groups}
        />
      ) : null}

      {drikkevarer ? (
        <AlaCarteSection
          id="drikkevarer"
          title={drikkevarer.title}
          tone="surface"
          groups={drikkevarer.groups}
        />
      ) : null}
    </div>
  );
}

function MenuCollectionSection({
  id,
  title,
  eyebrow,
  intro,
  tone,
  items,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  tone: "surface" | "soft" | "low";
  items: Array<{
    title: string;
    price?: number | null;
    groups: Array<{
      label: string;
      values: string[];
    }>;
  }>;
}) {
  return (
    <section id={id} className={`${sectionToneClasses[tone]} px-8 py-20 lg:px-14 lg:py-24`}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          {eyebrow ? (
            <span className="mb-4 block text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="font-display text-5xl tracking-[-0.03em] text-[var(--primary)]">
            {title}
          </h2>
          {intro ? (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--foreground-muted)]">
              {intro}
            </p>
          ) : null}
        </div>

        <div className="space-y-8">
          {items.map((item) => (
            <UnifiedListRow key={item.title} title={item.title} price={item.price}>
              <div className="mt-2 space-y-2">
                {item.groups.map((group) =>
                  group.values.length ? (
                    <div key={group.label}>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                        {group.label}
                      </p>
                      <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                        {group.values.join(", ")}
                      </p>
                    </div>
                  ) : null
                )}
              </div>
            </UnifiedListRow>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlaCarteSection({
  id,
  title,
  subtitle,
  tone,
  groups,
  footerNote,
}: {
  id: string;
  title: string;
  subtitle?: string;
  tone: "surface" | "soft" | "low";
  groups: Array<{
    title: string | null;
    items: Array<{
      number: string;
      name: string;
      dineInPrice?: number | null;
    }>;
  }>;
  footerNote?: string;
}) {
  return (
    <section id={id} className={`${sectionToneClasses[tone]} px-8 py-20 lg:px-14 lg:py-24`}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="font-display text-5xl tracking-[-0.03em] text-[var(--primary)]">
            {title}
            {subtitle ? (
              <>
                <br />
                <span className="text-3xl text-[var(--accent)]">{subtitle}</span>
              </>
            ) : null}
          </h2>
        </div>

        <div className="space-y-16">
          {groups.map((group, groupIndex) => (
            <div key={group.title ?? `group-${groupIndex}`}>
              {group.title ? (
                <div className="mb-8 inline-block bg-[var(--surface-soft)] px-6 py-3">
                  <h3 className="text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
                    {group.title}
                  </h3>
                </div>
              ) : null}

              <div className="space-y-8">
                {group.items.map((item) => (
                  <UnifiedListRow
                    key={`${group.title ?? "items"}-${item.number}-${item.name}`}
                    title={item.name}
                    price={item.dineInPrice}
                    prefix={item.number}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {footerNote ? (
          <div className="mt-16 border-t border-[color:rgba(227,190,184,0.2)] pt-8 text-center">
            <p className="font-display text-sm italic text-[var(--foreground-muted)]">
              {footerNote}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function UnifiedListRow({
  title,
  price,
  prefix,
  children,
}: {
  title: string;
  price?: number | null;
  prefix?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-8">
      <div className="flex gap-6">
        {prefix ? (
          <span className="w-8 flex-shrink-0 text-lg text-[var(--accent)]">
            {prefix}
          </span>
        ) : null}
        <div>
          <h3 className="font-display text-2xl text-[var(--foreground)] transition-colors hover:text-[var(--primary)]">
            {title}
          </h3>
          {children}
        </div>
      </div>
      <span className="whitespace-nowrap text-lg font-bold tracking-[0.12em] text-[var(--primary)]">
        {price != null ? formatPrice(price) : ""}
      </span>
    </div>
  );
}

const sectionToneClasses = {
  surface: "bg-[var(--background)]",
  soft: "bg-[var(--surface-soft)]",
  low: "bg-[var(--surface-low)]",
};
