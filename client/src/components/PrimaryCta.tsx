import { ArrowUpRight } from "lucide-react";

interface PrimaryCtaProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  location?: string;
}

export function PrimaryCta({
  href,
  label,
  onClick,
  className = "",
  fullWidth = false,
  location
}: PrimaryCtaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-cta-location={location}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-[#050505] bg-[#FF4500] shadow-[0_18px_45px_rgba(255,69,0,0.35)] transition-all duration-200 hover:bg-[#ff5f26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4500] active:scale-[0.98] ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {label}
      <ArrowUpRight size={18} />
    </a>
  );
}
