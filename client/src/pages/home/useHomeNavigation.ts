import { useEffect, useMemo, useState } from "react";

import { mobileNavHrefs, navItems } from "./homeData";

export function useHomeNavigation() {
  const mobileNavItems = useMemo(
    () => navItems.filter((item) => mobileNavHrefs.includes(item.href)),
    []
  );
  const [activeSection, setActiveSection] = useState(mobileNavItems[0]?.href ?? "");
  const [navExpanded, setNavExpanded] = useState(false);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(href);
  };

  useEffect(() => {
    const sections = mobileNavItems
      .map((item) => {
        const element = document.querySelector(item.href);
        return element ? { id: item.href, element } : null;
      })
      .filter(Boolean) as { id: string; element: Element }[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          const matched = sections.find((section) => section.element === visibleEntry.target);
          if (matched) {
            setActiveSection(matched.id);
          }
        }
      },
      {
        threshold: 0.25,
        rootMargin: "-40% 0px -45% 0px"
      }
    );

    sections.forEach(({ element }) => observer.observe(element));

    return () => observer.disconnect();
  }, [mobileNavItems]);

  useEffect(() => {
    const handleScroll = () => setNavExpanded(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    navItems,
    mobileNavItems,
    activeSection,
    navExpanded,
    toggleNavExpanded: () => setNavExpanded((prev) => !prev),
    handleNavClick
  };
}
