"use client";

import { useEffect, useState } from "react";

type SectionLink = {
  id: string;
  label: string;
};

type MenuSectionRailProps = {
  links: SectionLink[];
};

export function MenuSectionRail({ links }: MenuSectionRailProps) {
  const contentLinks = links;
  const [activeId, setActiveId] = useState(contentLinks[0]?.id ?? "");

  useEffect(() => {
    const sections = contentLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const updateActiveSection = () => {
      const threshold = 156;
      let nextActiveId = sections[0]?.id ?? "";

      for (const section of sections) {
        const top = section.getBoundingClientRect().top;

        if (top <= threshold) {
          nextActiveId = section.id;
        } else {
          break;
        }
      }

      setActiveId(nextActiveId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [contentLinks]);

  return (
    <aside
      className="fixed top-38 z-20 hidden xl:block"
      style={{
        left: "max(3rem, calc(((100vw - 96rem) / 2) + 3rem))",
        width: "13rem",
      }}
    >
      <nav aria-label="Menu sektioner">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.26em] text-[color:rgba(90,64,60,0.58)]">
          Menu
        </p>
        <ul className="space-y-2.5">
          {links.map((link) => {
            const isActive = activeId === link.id;
            const href = `#${link.id}`;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  className={`block text-[0.88rem] leading-[1.3] transition-colors ${
                    isActive
                      ? "relative font-medium before:absolute before:-left-3 before:top-1/2 before:h-4 before:w-px before:-translate-y-1/2 before:bg-[#8b0000]"
                      : "font-normal text-[color:rgba(90,64,60,0.72)] hover:text-[var(--primary)]"
                  }`}
                  style={isActive ? { color: "#8b0000" } : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
