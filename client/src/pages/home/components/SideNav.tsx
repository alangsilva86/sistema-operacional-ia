import { Button } from "@/components/ui/button";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

import type { NavItem } from "../homeData";

type SideNavProps = {
  navItems: NavItem[];
  mobileNavItems: NavItem[];
  activeSection: string;
  navExpanded: boolean;
  onToggle: () => void;
  onNavClick: (href: string) => void;
};

export function SideNav({
  navItems,
  mobileNavItems,
  activeSection,
  navExpanded,
  onToggle,
  onNavClick
}: SideNavProps) {
  return (
    <>
      <aside
        className={`hidden lg:flex flex-col gap-2 fixed top-24 left-4 z-40 rounded-2xl border border-border/60 bg-white/90 backdrop-blur shadow-2xl transition-[width] duration-300 ${
          navExpanded ? "w-64" : "w-14 items-center"
        }`}
      >
        <button
          onClick={onToggle}
          aria-expanded={navExpanded}
          className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          {navExpanded ? <ChevronsLeft className="w-5 h-5" /> : <ChevronsRight className="w-5 h-5" />}
          {navExpanded && <span className="tracking-wide uppercase text-xs">Percurso</span>}
        </button>
        <div className="px-2 pb-3 flex flex-col gap-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className={`group flex items-center gap-3 w-full text-left px-3 py-2 rounded-xl border border-transparent hover:border-primary/40 hover:bg-primary/10 transition-all ${
                navExpanded ? "justify-start" : "justify-center"
              } ${
                activeSection === item.href
                  ? "text-primary bg-primary/10 border-primary/50 shadow-sm"
                  : "text-foreground"
              }`}
              onClick={() => onNavClick(item.href)}
              aria-pressed={activeSection === item.href}
            >
              <item.icon className="w-5 h-5 text-primary" />
              {navExpanded && <span className="text-sm font-semibold text-foreground">{item.label}</span>}
            </Button>
          ))}
        </div>
      </aside>

      <div className="lg:hidden sticky top-0 z-40 border-b border-border/60 bg-[#f7f4ef]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f7f4ef]/80">
        <div className="container py-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            {mobileNavItems.map((item) => (
              <button
                key={item.href}
                onClick={() => onNavClick(item.href)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors shrink-0 ${
                  activeSection === item.href
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-white/90 text-foreground border-border hover:border-primary/50"
                }`}
                aria-pressed={activeSection === item.href}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
