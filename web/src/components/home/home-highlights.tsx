/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const highlights = [
  {
    title: "Sushi",
    description: "Nigiri – Inside-out – Maki",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8yOAXc968HzMeDg-_5REMinHaCPjmEkntatMHiKP3SjKjzm90uPHdmEjGKLLv5JNYBDmIj5F-rAsM7Lk2fkHM-pb2coIqTJyCVc35k9GsvrKh0L1PGCudhLRoke56bGd52E9A5gvQZB1ic_IoUYB-JzaJZCrobnZqhipwsQKqBzN8uXNzrD6v_b9DCG8AoWQHmrBJVNFk_Q3r0wy4tIUb7BFfCMKeP7gT8uZD8299KI9CuDN8afVkjTZGDeyiy0VnO8nTew4iwe2I",
    background: "var(--surface-low)",
  },
  {
    title: "Hovedretter",
    description: "26 forskellige varme retter med tilbehør",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAN0Zl4gH_SM-WczWLB4xRz9JGYRmaCW9xPxutfTebElGhGhGvpXQL7eVfN2AYrLy2yU_IcIKj8ommR2FLwCHIKpgiGz6sg5eahK0Xshb1fe4OxU_bnG8Iqnlks_xzaH_4FUlGPImu9iApuAUUUv_4HE7roYDFmoHUj0CnjCvyyFlWy4MXl9dWFZg398vCthY9sE06oaySG2rjvLtOwTe93w4umdolAAvB4i5tiDSzM9JNic-fwjjrgmJvBzNNYWGte2JUQ-l4KJh-w",
    background: "var(--surface-soft)",
  },
  {
    title: "Mongolian Barbecue",
    description: "4 forskellige slags kød, Forskellige sauce",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFFBREOtO-8f2bWWjQ5Vz5YH52jWod8hZEZNa31attxo7s1Y9QNFVxnBTwOWve9bzAOycHJMNacnFPBGJD3GpAHpfnp4hss9lx4BXhf_3dqJ4jDE0YJiFjOXREnexOcLp46m9sfqADYAN4R57IFhw8BoM1V3R_TzXPV2ONyOOGV8MSBHOUtsBoJ8ziuiOEJpGd1vRqvd5X6w7QQtvKF1V3Lv4TbBglBHVah2d6_I4ixnq3UJVDkcqQgCP5CcUXCEcxBqxluhBUz8Qi",
    background: "var(--surface-strong)",
  },
  {
    title: "Salatbar & Dessert",
    description: "Fri is, kaffe og the og stor salatbar",
    image: "/images/12.jpg",
    background: "var(--surface-low)",
  },
];

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
            className="mt-3 inline-block font-semibold transition-colors hover:underline hover:underline-offset-3"
            style={{ color: "var(--primary)" }}
          >
            Læs mere om Dinner Transportable →
          </Link>
        </div>
      </div>
    </section>
  );
}
