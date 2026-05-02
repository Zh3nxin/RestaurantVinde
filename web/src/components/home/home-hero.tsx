/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type HomeHeroProps = {
  bookHref: string;
  weekdayPrice: string;
  weekendPrice: string;
};

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAN0Zl4gH_SM-WczWLB4xRz9JGYRmaCW9xPxutfTebElGhGhGvpXQL7eVfN2AYrLy2yU_IcIKj8ommR2FLwCHIKpgiGz6sg5eahK0Xshb1fe4OxU_bnG8Iqnlks_xzaH_4FUlGPImu9iApuAUUUv_4HE7roYDFmoHUj0CnjCvyyFlWy4MXl9dWFZg398vCthY9sE06oaySG2rjvLtOwTe93w4umdolAAvB4i5tiDSzM9JNic-fwjjrgmJvBzNNYWGte2JUQ-l4KJh-w";

export function HomeHero({
  bookHref,
  weekdayPrice,
  weekendPrice,
}: HomeHeroProps) {
  return (
    <section className="relative flex min-h-[450px] items-center overflow-hidden lg:h-[614px]">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          alt="Eksklusivt dækket bord med kinesiske specialiteter"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff8ef_0%,rgba(255,248,239,0.9)_32%,rgba(255,248,239,0.36)_58%,rgba(255,248,239,0)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-screen-2xl gap-8 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-12">
        <div className="max-w-[42rem] self-center">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--primary)]">
            Velkommen til
          </p>
          <h1 className="max-w-[14ch] font-display text-5xl font-black leading-[0.98] tracking-[-0.04em] text-[var(--primary)] md:text-[4.6rem]">
            Kinesisk buffet i Aarhus V
          </h1>

          <div className="mt-24 flex gap-4">
            <Link
              href={bookHref}
              className="inline-flex items-center rounded-[var(--radius-xl)] bg-[var(--primary)] px-8 py-4 text-[12px] font-extrabold uppercase tracking-[0.18em] shadow-[0_24px_40px_rgba(97,0,0,0.14)] transition-colors hover:bg-[var(--primary-strong)]"
              style={{ color: "#ffffff" }}
            >
              Reserver Bord Nu
            </Link>
          </div>
        </div>

        <aside className="hidden self-center lg:block">
          <div className="ml-auto max-w-xs rounded-[var(--radius-xl)] border border-[color:rgba(227,190,184,0.14)] bg-[color:rgba(255,255,255,0.62)] p-8 shadow-[0_10px_30px_rgba(30,27,19,0.06)] backdrop-blur-sm">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-[var(--primary)]">
                  Aftenbuffet
                </h2>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[color:rgba(90,64,60,0.7)]">
                  Mandag - Søndag: 16:30 - 21:30
                </p>
              </div>

              <div className="space-y-4">
                <PriceRow label="Man - Tor" value={weekdayPrice} />
                <PriceRow label="Fre - Søn" value={weekendPrice} />
              </div>

              <div className="space-y-2 pt-2">
                <MetaRow label="Børn under 12 år" value="½ pris" />
                <MetaRow label="Børn under 3 år" value="¼ pris" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-end justify-between border-b border-[color:rgba(227,190,184,0.2)] pb-2">
      <span className="pb-1 text-[11px] uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
        {label}
      </span>
      <span className="font-display text-[2.4rem] font-black leading-none text-[var(--primary)]">
        {value}
      </span>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.14em] text-[color:rgba(90,64,60,0.78)]">
      <span>{label}</span>
      <span className="font-medium normal-case tracking-normal">{value}</span>
    </div>
  );
}
