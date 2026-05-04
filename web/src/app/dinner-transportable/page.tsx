import { PageIntroSection } from "@/components/sections/page-intro-section";
import { PageSection } from "@/components/sections/page-section";
import { listDinnerPackages } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export default function DinnerTransportablePage() {
  const packages = listDinnerPackages();

  return (
    <div className="bg-[var(--background)]">
      <PageIntroSection
        title="Dinner Transportable"
        description="Skal du holde arrangement hjemme, på arbejdspladsen eller til fest, tilbyder vi Dinner Transportable. Vi hjælper gerne med en løsning, der passer til jeres behov."
        note="Bestilles til minimum antal personer. Kontakt os gerne for spørgsmål eller særlige ønsker."
      />

      <div className="space-y-0">
        {packages.map((pkg, index) => (
          <DinnerPackageSection
            key={pkg.id}
            title={formatDinnerPackageTitle(pkg.name)}
            description={pkg.description}
            price={pkg.takeawayPrice ?? pkg.dineInPrice ?? null}
            minBuy={pkg.minGuests ?? null}
            items={pkg.items}
            sushiItems={pkg.sushi}
            tone={index % 2 === 0 ? "surface" : "low"}
          />
        ))}
      </div>
    </div>
  );
}

function DinnerPackageSection({
  title,
  description,
  price,
  minBuy,
  items,
  sushiItems,
  tone,
}: {
  title: string;
  description?: string | null;
  price: number | null;
  minBuy: number | null;
  items: string[];
  sushiItems?: string[];
  tone: "surface" | "low";
}) {
  return (
    <PageSection tone={tone} spacing="compact">
      <div className="mb-8 flex items-baseline justify-between gap-6">
        <div>
          <h2 className="font-display text-[1.9rem] leading-[1.08] tracking-[-0.02em] text-[var(--primary)] md:text-[2.3rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-2xl text-sm text-[var(--foreground-muted)]">
              {description}
            </p>
          ) : null}
        </div>

        <div className="text-right">
          {price != null ? (
            <span className="font-display text-2xl text-[var(--primary)]">
              {formatPrice(price)}
              <span className="ml-2 align-middle text-sm font-sans font-medium tracking-normal text-[var(--foreground-muted)]">
                pr. person
              </span>
            </span>
          ) : null}
          {minBuy != null ? (
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
              Min. {minBuy} personer
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-4 text-[var(--foreground)]/90 md:grid-cols-2">
        {items.map((item) => (
          <p key={item} className="leading-relaxed">
            {item}
          </p>
        ))}
      </div>

      {sushiItems?.length ? (
        <div className="mt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Sushi (pr. kuvert)
          </p>
          <div className="grid grid-cols-1 gap-x-12 gap-y-4 text-[var(--foreground)]/90 md:grid-cols-2">
            {sushiItems.map((item) => (
              <p key={item} className="leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </PageSection>
  );
}

function formatDinnerPackageTitle(title: string) {
  const cleaned = title.replace(/^Dinner transportable\s+/i, "").trim();
  return cleaned ? cleaned.charAt(0).toUpperCase() + cleaned.slice(1) : title;
}
