import type { ReactNode } from "react";

type SectionTone = "surface" | "soft" | "low";
type SectionSpacing = "default" | "compact" | "none";

export function PageSection({
  id,
  tone,
  spacing = "default",
  containerClassName,
  children,
}: {
  id?: string;
  tone: SectionTone;
  spacing?: SectionSpacing;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={[
        sectionToneClasses[tone],
        sectionSpacingClasses[spacing],
      ].join(" ")}
    >
      <div className={["mx-auto max-w-4xl", containerClassName].filter(Boolean).join(" ")}>
        {children}
      </div>
    </section>
  );
}

const sectionToneClasses = {
  surface: "bg-[var(--background)]",
  soft: "bg-[var(--surface-soft)]",
  low: "bg-[var(--surface-low)]",
};

const sectionSpacingClasses = {
  default: "px-8 py-20 lg:px-14 lg:py-24",
  compact: "px-8 py-14 lg:px-14 lg:py-24",
  none: "",
};
