"use client";

import { useEffect, useState } from "react";

export type SectionPickerLink = {
  id: string;
  label: string;
};

export function MobileSectionPicker({
  links,
  pickerLabel,
  title,
  triggerLabel,
}: {
  links: SectionPickerLink[];
  pickerLabel: string;
  title: string;
  triggerLabel?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(links[0]?.id ?? "");

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const updateActiveSection = () => {
      const threshold = 140;
      let nextActiveId = sections[0]?.id ?? "";
      const isNearPageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 8;

      if (isNearPageBottom) {
        setActiveId(sections.at(-1)?.id ?? nextActiveId);
        return;
      }

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
  }, [links]);

  const activeLabel =
    links.find((link) => link.id === activeId)?.label ?? triggerLabel ?? title;

  return (
    <>
      <div className="sticky top-20 z-20 border-b border-[color:rgba(227,190,184,0.18)] bg-[color:rgba(255,248,239,0.92)] backdrop-blur-xl xl:hidden">
        <div className="mx-auto flex max-w-screen-xl px-6 py-3 lg:px-12">
          <button
            type="button"
            className="inline-flex min-h-11 w-full items-center justify-between gap-3 rounded-full border border-[var(--primary-strong)] bg-[var(--primary-strong)] px-4 text-[11px] font-semibold uppercase tracking-[0.16em] !text-white transition-colors"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <span>{activeLabel}</span>
            <ChevronIcon />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 xl:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          aria-label={`Luk ${pickerLabel.toLowerCase()}`}
          className={`absolute inset-0 bg-[rgba(30,27,19,0.4)] transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setIsOpen(false);
          }}
        />

        <div
          className={`absolute inset-x-0 bottom-0 rounded-t-[1.75rem] bg-[var(--background)] px-6 pb-8 pt-6 shadow-[0_-16px_40px_rgba(30,27,19,0.18)] transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={pickerLabel}
        >
          <div className="mx-auto max-w-screen-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:rgba(90,64,60,0.62)]">
                  {pickerLabel}
                </p>
                <h2 className="mt-2 font-display text-2xl text-[var(--primary)]">
                  {title}
                </h2>
              </div>
              <button
                type="button"
                aria-label="Luk"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:rgba(227,190,184,0.24)] text-[var(--foreground-muted)]"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <CloseIcon />
              </button>
            </div>

            <nav aria-label={pickerLabel}>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`flex min-h-14 items-center rounded-[var(--radius-xl)] border px-4 text-sm font-medium transition-colors ${
                        activeId === link.id
                          ? "border-[var(--primary-strong)] bg-[var(--primary-strong)] !text-white"
                          : "border-[color:rgba(227,190,184,0.18)] bg-[var(--surface-low)] text-[var(--foreground)] hover:text-[var(--primary)]"
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path d="m6 9 6 6 6-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path d="M6 6l12 12" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 6 6 18" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
