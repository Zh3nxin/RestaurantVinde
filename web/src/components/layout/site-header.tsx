"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type SiteHeaderProps = {
  bookHref: string;
};

const headerLinks = [
  { label: "Hjem", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Takeaway", href: "/takeaway" },
  { label: "Dinner Transportable", href: "/dinner-transportable" },
  { label: "Kontakt", href: "/#contact" },
];

export function SiteHeader({ bookHref }: SiteHeaderProps) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

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
              const isActive =
                item.href === "/"
                  ? pathname === "/" && hash !== "#contact"
                  : item.href === "/#contact"
                    ? pathname === "/" && hash === "#contact"
                    : pathname === item.href;

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

        <div className="flex items-center gap-6">
          <Link
            href={bookHref}
            className="rounded-[var(--radius-xl)] bg-[var(--background)] px-6 py-2 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors hover:bg-white"
            style={{ color: "#8B0000" }}
          >
            Reserver Bord
          </Link>
        </div>
      </div>
    </header>
  );
}
