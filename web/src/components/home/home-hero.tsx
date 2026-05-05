/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type HomeHeroProps = {
  adLibitumPrice: string;
  bookHref: string;
  weekdayPrice: string;
  weekendPrice: string;
};

const heroImage =
  "/images/test1.png";

export function HomeHero({
  adLibitumPrice,
  bookHref,
  weekdayPrice,
  weekendPrice,
}: HomeHeroProps) {
  return (
    <section className="relative flex min-h-[700px] items-start overflow-hidden lg:h-[614px] lg:items-center">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          alt="Eksklusivt dækket bord med kinesiske specialiteter"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff8ef_0%,rgba(255,248,239,0.9)_32%,rgba(255,248,239,0.36)_58%,rgba(255,248,239,0)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-screen-2xl gap-6 px-6 pb-16 pt-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-8 lg:px-12 lg:py-16">
        <div className="max-w-[42rem] self-center text-center md:text-left">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--primary)]">
            Velkommen til
          </p>
          <h1 className="mx-auto max-w-[14ch] font-display text-[2.9rem] font-black leading-[1.02] tracking-[-0.04em] text-[var(--primary)] md:mx-0 md:text-[4.6rem]">
            Kinesisk buffet i Aarhus V
          </h1>

          <div className="mt-10 flex justify-center gap-4 md:mt-24 md:justify-start">
            <Link
              href={bookHref}
              className="inline-flex w-full items-center justify-center rounded-[var(--radius-xl)] bg-[var(--primary)] px-8 py-4 text-center text-[12px] font-extrabold uppercase tracking-[0.18em] shadow-[0_24px_40px_rgba(97,0,0,0.14)] transition-colors hover:bg-[var(--primary-strong)] md:w-auto"
              style={{ color: "#ffffff" }}
            >
              Reserver Bord Nu
            </Link>
          </div>

          <div className="mt-8 lg:hidden">
            <HeroPricingCard
              adLibitumPrice={adLibitumPrice}
              compact
              weekdayPrice={weekdayPrice}
              weekendPrice={weekendPrice}
            />
          </div>
        </div>

        <aside className="hidden self-center lg:block">
          <HeroPricingCard
            adLibitumPrice={adLibitumPrice}
            weekdayPrice={weekdayPrice}
            weekendPrice={weekendPrice}
          />
        </aside>
      </div>
    </section>
  );
}

function HeroPricingCard({
  adLibitumPrice,
  compact = false,
  weekdayPrice,
  weekendPrice,
}: {
  adLibitumPrice: string;
  compact?: boolean;
  weekdayPrice: string;
  weekendPrice: string;
}) {
  return (
    <div
      className={`text-left rounded-[var(--radius-xl)] border border-[color:rgba(227,190,184,0.1)] bg-[color:rgba(250,249,246,0.95)] shadow-[0_16px_32px_rgba(30,27,19,0.08)] backdrop-blur-sm ${
        compact ? "p-6" : "ml-auto max-w-sm p-7"
      }`}
    >
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="font-display text-3xl font-black tracking-[-0.03em] text-[var(--primary)]">
            Aftenbuffet
          </h2>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[color:rgba(90,64,60,0.8)]">
            Mandag - søndag · 16.30 - 21.30
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-display text-[13px] font-bold italic text-[color:rgba(97,0,0,0.8)]">
            Buffetpris
          </p>
          <div className="space-y-2">
            <PriceRow label="Man - tor" value={weekdayPrice} />
            <PriceRow label="Fre - søn" value={weekendPrice} />
          </div>
        </div>

        <div className="border-t border-[color:rgba(97,0,0,0.2)]" />

        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-4">
            <p className="max-w-[14rem] text-sm leading-snug text-[var(--foreground-muted)]">
              Buffet inkl. drikkevarer ad libitum
            </p>
            <p className="whitespace-nowrap font-display text-2xl font-black leading-none text-[var(--primary)]">
              {adLibitumPrice}
            </p>
          </div>
          <p className="max-w-[14rem] text-[11px] leading-snug text-[color:rgba(90,64,60,0.68)]">
            Husets vin, øl og sodavand i 3 timer
          </p>
        </div>

        <div className="border-t border-[color:rgba(97,0,0,0.1)] pt-2">
          <p className="text-center text-[11px] text-[color:rgba(90,64,60,0.68)]">
            Børn under 12 år: 1/2 pris · Under 3 år: 1/4 pris
          </p>
        </div>
      </div>
    </div>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-[var(--foreground-muted)]">
        {label}
      </span>
      <span className="font-display text-2xl font-black leading-none text-[var(--primary)]">
        {value}
      </span>
    </div>
  );
}
