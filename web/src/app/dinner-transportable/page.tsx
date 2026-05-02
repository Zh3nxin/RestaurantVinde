const buffetOne = {
  title: "Diner transportable buffet nr. 1",
  price: 178,
  minBuy: 20,
  contains: [
    "Dygstegte kongerejer",
    "Dybstegte kyllinger",
    "Dybstegte blæksprutter",
    "Dybstegte wan-ton",
    "Chickenwings",
    "Forårsruller",
    "Kylling i karry",
    "Gongbao kylling",
    "Oksekød med stærk sauce",
    "Stegte nudler",
    "Svinekød med bambusskud og champignon sauce",
    "Andesteg",
    "Oksekød deluxe med hai xin sauce",
    "Ribben med honning sauce",
    "Frisk frugt",
    "Sur-sød sauce",
    "Soya souce",
    "Chili sauce",
    "Champignon sauce",
    "Ris",
  ],
};

const buffetTwo = {
  title: "Diner transportable buffet nr. 2",
  price: 198,
  minBuy: 20,
  contains: [
    "Dygstegte kongerejer",
    "Dybstegte kyllinger",
    "Dybstegte blæksprutter",
    "Chickenwings",
    "Små forårsruller",
    "Kylling i karry",
    "Oksekød med stærk sauce",
    "Stegte nudler",
    "Svinekød med bambusskud og champignon sauce",
    "Andesteg",
    "Oksekød deluxe med hai xin sauce",
    "Ribben med honning sauce",
    "Frisk frugt",
    "Salat",
    "Sur-sød sauce",
    "Soya souce",
    "Chili sauce",
    "Ris",
  ],
  sushi: [
    "2 skiver futomaki",
    "2 skiver hosomaki",
    "2 skiver uramaki",
    "1 nigiri + tilbehør",
  ],
};

const buffetThree = {
  title: "Afhentet buffet nr. 3",
  price: 158,
  minBuy: 10,
  contains: [
    "Dygstegte kongerejer",
    "Dybstegte kyllinger",
    "Oksekød med stærk sauce",
    "Forårsruller",
    "Kylling i karry",
    "Svinekød med bambusskud og champignon sauce",
    "Stegte nudler",
    "Oksekød deluxe med grøntsager",
    "Salat",
    "Ris",
    "Sur-sød sauce",
    "Karry sauce",
  ],
};

const buffetFour = {
  title: "Afhentet buffet nr. 4",
  price: 158,
  minBuy: 5,
  contains: [
    "Dygstegte kongerejer",
    "Dybstegte kyllinger",
    "Oksekød med stærk sauce",
    "Forårsruller",
    "Kylling i karry",
    "Stegte nudler",
    "Sur-sød sauce",
    "Ris",
    "Karry sauce",
  ],
};

export default function DinnerTransportablePage() {
  return (
    <div className="bg-[var(--background)]">
      <div className="px-8 py-20 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <header className="text-center">
            <h1 className="font-display text-5xl tracking-[-0.03em] text-[var(--primary)]">
              Dinner Transportable
            </h1>
            <div className="mx-auto mt-6 max-w-2xl">
              <p className="text-lg leading-relaxed text-[var(--foreground-muted)]">
                Skal du holde arrangement hjemme, på arbejdspladsen eller til
                fest, tilbyder vi Dinner Transportable. Vi hjælper gerne med en
                løsning, der passer til jeres behov.
              </p>
              <p className="mt-4 text-sm italic text-[var(--foreground-muted)]">
                Bestilles til minimum antal personer. Kontakt os gerne for
                spørgsmål eller særlige ønsker.
              </p>
            </div>
          </header>
        </div>
      </div>

      <div className="space-y-0">
        <BuffetSection
          title="Buffet nr. 1"
          price={buffetOne.price}
          minBuy={buffetOne.minBuy}
          items={buffetOne.contains}
          tone="low"
        />

        <BuffetSection
          title="Buffet nr. 2"
          price={buffetTwo.price}
          minBuy={buffetTwo.minBuy}
          items={buffetTwo.contains}
          sushiItems={buffetTwo.sushi}
          tone="surface"
        />

        <BuffetSection
          title={buffetThree.title}
          price={buffetThree.price}
          minBuy={buffetThree.minBuy}
          items={buffetThree.contains}
          tone="low"
        />

        <BuffetSection
          title={buffetFour.title}
          price={buffetFour.price}
          minBuy={buffetFour.minBuy}
          items={buffetFour.contains}
          tone="surface"
        />
      </div>
    </div>
  );
}

function BuffetSection({
  title,
  price,
  minBuy,
  items,
  sushiItems,
  tone,
}: {
  title: string;
  price: number;
  minBuy: number;
  items: string[];
  sushiItems?: string[];
  tone: "surface" | "low";
}) {
  return (
    <section
      className={`px-8 py-14 lg:px-14 lg:py-24 ${
        tone === "low" ? "bg-[var(--surface-low)]" : "bg-[var(--background)]"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-baseline justify-between gap-6">
          <h2 className="font-display text-3xl font-bold text-[var(--primary)]">
            {title}
          </h2>
          <div className="text-right">
            <span className="font-display text-2xl text-[var(--primary)]">
              {price},-
              <span className="ml-2 align-middle text-sm font-sans font-medium tracking-normal text-[var(--foreground-muted)]">
                pr. kuvert
              </span>
            </span>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
              Min. {minBuy} kuverter
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-4 text-[var(--foreground)]/90 md:grid-cols-2">
          {items.map((item) => (
            <p key={item} className="leading-relaxed">
              {item}
            </p>
          ))}
        </div>

        {sushiItems ? (
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
      </div>
    </section>
  );
}
