import type { ReactNode } from "react";

export function PageIntroSection({
  title,
  description,
  note,
  eyebrow,
}: {
  title: string;
  description: string;
  note?: ReactNode;
  eyebrow?: string;
}) {
  return (
    <header className="bg-[var(--background)] px-8 pb-4 pt-10 lg:px-14 lg:pb-6 lg:pt-14">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow ? (
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display text-[2.9rem] leading-none tracking-[-0.035em] text-[var(--primary)] md:text-[4.1rem]">
          {title}
        </h1>
        <div className="mx-auto mt-4 max-w-2xl">
          <p className="text-[1.02rem] leading-relaxed text-[var(--foreground-muted)] md:text-[1.15rem]">
            {description}
          </p>
          {note ? (
            <p className="mt-3 text-sm italic text-[var(--foreground-muted)]">
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
