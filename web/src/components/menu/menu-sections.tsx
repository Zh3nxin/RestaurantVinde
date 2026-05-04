import { MenuSectionRail } from "@/components/menu/menu-section-rail";
import { PageSection } from "@/components/sections/page-section";
import { formatPrice } from "@/lib/format";

export type SectionLink = {
  id: string;
  label: string;
};

export function MenuPageNavigation({ links }: { links: SectionLink[] }) {
  return (
    <>
      <MenuSectionRail links={links} />

      <nav className="sticky top-20 z-30 border-b border-[color:rgba(227,190,184,0.2)] bg-[color:rgba(255,248,239,0.82)] backdrop-blur-xl xl:hidden">
        <div className="mx-auto flex w-full max-w-screen-xl gap-8 overflow-x-auto px-8 py-4 text-[13px] uppercase tracking-[0.18em] lg:justify-center">
          {links.map((link, index) => (
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
    </>
  );
}

export function MenuSetSection({
  id,
  title,
  eyebrow,
  intro,
  tone,
  items,
  priceMode = "dine-in",
}: {
  id: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  tone: "surface" | "soft" | "low";
  items: Array<{
    title: string;
    dineInPrice?: number | null;
    takeawayPrice?: number | null;
    groups: Array<{
      label: string;
      values: string[];
    }>;
  }>;
  priceMode?: "dine-in" | "takeaway";
}) {
  return (
    <PageSection id={id} tone={tone}>
        <div className="mb-16 text-center">
          {eyebrow ? (
            <span className="mb-4 block text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="font-display text-[1.9rem] leading-[1.08] tracking-[-0.02em] text-[var(--primary)] md:text-[2.3rem]">
            {title}
          </h2>
          {intro ? (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--foreground-muted)] md:text-lg">
              {intro}
            </p>
          ) : null}
        </div>

        <div className="space-y-8">
          {items.map((item) => (
            <UnifiedListRow
              key={item.title}
              title={item.title}
              price={
                priceMode === "takeaway"
                  ? item.takeawayPrice ?? item.dineInPrice
                  : item.dineInPrice
              }
            >
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
    </PageSection>
  );
}

export function MenuItemSection({
  id,
  title,
  subtitle,
  tone,
  groups,
  footerNote,
  priceMode = "dine-in",
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
      takeawayPrice?: number | null;
    }>;
  }>;
  footerNote?: string;
  priceMode?: "dine-in" | "takeaway";
}) {
  return (
    <PageSection id={id} tone={tone}>
        <div className="mb-16 text-center">
          <h2 className="font-display text-[1.9rem] leading-[1.08] tracking-[-0.02em] text-[var(--primary)] md:text-[2.3rem]">
            {title}
            {subtitle ? (
              <>
                <br />
                <span className="mt-2 inline-block text-[1.35rem] text-[var(--accent)] md:text-[1.6rem]">
                  {subtitle}
                </span>
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
                    price={
                      priceMode === "takeaway"
                        ? item.takeawayPrice ?? item.dineInPrice
                        : item.dineInPrice
                    }
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
    </PageSection>
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
          <h3 className="font-display text-[1.45rem] leading-tight text-[var(--foreground)] transition-colors hover:text-[var(--primary)] md:text-[1.65rem]">
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
