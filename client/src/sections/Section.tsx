import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden border-b border-white/5 bg-[#050505] ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_85%_0%,rgba(255,255,255,0.03),transparent_35%)]" />
      <div className="container relative py-20 md:py-24">{children}</div>
    </section>
  );
}
