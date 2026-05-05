"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const headerLinks = [
  { label: "Hjem", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Takeaway", href: "/takeaway" },
  { label: "Dinner Transportable", href: "/dinner-transportable" },
  { label: "Kontakt", href: "/#contact" },
];

function isHeaderLinkActive(href: string, pathname: string, hash: string) {
  if (href === "/") {
    return pathname === "/" && hash !== "#contact";
  }

  if (href === "/#contact") {
    return pathname === "/" && hash === "#contact";
  }

  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, hash]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 bg-[var(--primary-strong)] text-[var(--background)] backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between gap-4 px-6 lg:px-12">
        <Link
          href="/"
          className="font-display text-2xl font-black uppercase tracking-[-0.04em] text-[var(--background)]"
        >
          VINDE
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {headerLinks.map((item) => {
              const isActive = isHeaderLinkActive(item.href, pathname, hash);

              return (
                <li key={item.href}>
                  <Link
                    className={`text-[10px] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 hover:text-white ${
                      isActive
                        ? "border-b-2 border-white pb-1 text-white"
                        : "text-[color:rgba(255,248,239,0.72)]"
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          aria-hidden="true"
          className="hidden h-10 w-[148px] shrink-0 md:block"
        />

        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-site-menu"
          aria-label={isMobileMenuOpen ? "Luk navigation" : "Åbn navigation"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:rgba(255,248,239,0.18)] text-[var(--background)] transition-colors hover:bg-[color:rgba(255,255,255,0.08)] md:hidden"
          onClick={() => {
            setIsMobileMenuOpen((open) => !open);
          }}
        >
          <MenuIcon open={isMobileMenuOpen} />
        </button>
      </div>

      <div
        id="mobile-site-menu"
        className={`absolute inset-x-0 top-full border-t border-[color:rgba(255,248,239,0.12)] bg-[var(--primary-strong)] transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-screen-2xl px-6 pb-6 pt-4">
          <ul className="flex flex-col">
            {headerLinks.map((item) => {
              const isActive = isHeaderLinkActive(item.href, pathname, hash);

              return (
                <li key={item.href} className="border-b border-[color:rgba(255,248,239,0.1)] last:border-b-0">
                  <Link
                    href={item.href}
                    className={`flex min-h-14 items-center justify-between py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-[color:rgba(255,248,239,0.76)]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden="true"
                      className={`text-lg transition-transform ${
                        isActive ? "translate-x-0 text-white" : "text-[color:rgba(255,248,239,0.38)]"
                      }`}
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-5 w-5"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 6 6 18" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M4 7h16" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12h16" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 17h16" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
