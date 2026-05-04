/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const highlights = [
  {
    title: "Sushi",
    description: "Nigiri – Inside-out – Maki",
    image: "/images/sushi-preview3.png",
    background: "var(--surface-low)",
  },
  {
    title: "Hovedretter",
    description: "26 forskellige varme kinesiske retter",
    image: "/images/buffet-preview1.png",
    background: "var(--surface-soft)",
  },
  {
    title: "Mongolian Barbecue",
    description: "4 forskellige slags kød, forskellige saucer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFFBREOtO-8f2bWWjQ5Vz5YH52jWod8hZEZNa31attxo7s1Y9QNFVxnBTwOWve9bzAOycHJMNacnFPBGJD3GpAHpfnp4hss9lx4BXhf_3dqJ4jDE0YJiFjOXREnexOcLp46m9sfqADYAN4R57IFhw8BoM1V3R_TzXPV2ONyOOGV8MSBHOUtsBoJ8ziuiOEJpGd1vRqvd5X6w7QQtvKF1V3Lv4TbBglBHVah2d6_I4ixnq3UJVDkcqQgCP5CcUXCEcxBqxluhBUz8Qi",
    background: "var(--surface-strong)",
  },
  {
    title: "Dessert & Salatbar",
    description: "Fri is, kaffe, te og stor salatbar",
    image: "/images/dessert1.png",
    background: "var(--surface-low)",
  },
] as const;

export function HomeHighlights() {
  return (
    <section
      id="buffet-info"
      className="relative z-10 -mt-16 bg-[var(--background)] pb-16 pt-8"
    >
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
          <h2 className="font-display text-3xl italic text-[var(--primary)] md:text-4xl">
            Det finder du i buffeten
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[var(--radius-xl)] shadow-[0_10px_24px_rgba(30,27,19,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_32px_rgba(30,27,19,0.1)]"
              style={{ background: item.background }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={item.title}
                  src={item.image}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[color:rgba(90,64,60,0.78)]">
          <p>
            Skal du holde arrangement hjemme, på arbejdspladsen eller til
            fest?
          </p>
          <p className="mt-2">
            Vi tilbyder også Dinner Transportable og hjælper gerne med en
            løsning, der passer til jeres behov.
          </p>
          <Link
            href="/dinner-transportable"
            className="group mt-4 inline-flex items-center gap-2 rounded-full border border-[color:rgba(130,34,34,0.18)] px-4 py-2 font-semibold transition-all duration-300 hover:border-[var(--primary)] hover:bg-[color:rgba(130,34,34,0.08)] hover:text-[var(--primary-strong)]"
            style={{ color: "var(--primary)" }}
          >
            <span>Læs mere om Dinner Transportable</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
