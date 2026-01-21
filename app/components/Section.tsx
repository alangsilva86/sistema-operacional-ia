import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative border-b border-white/5 bg-transparent ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_85%_5%,rgba(94,234,212,0.06),transparent_35%)]" />
      <div className="container relative py-20 md:py-28">{children}</div>
    </section>
  );
}
