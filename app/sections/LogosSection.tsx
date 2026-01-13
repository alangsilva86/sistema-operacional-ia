import Image from "next/image";

import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

export function LogosSection() {
  return (
    <Section id="logos">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">{content.logos.title}</p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-7">
          {content.logos.items.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="h-10 w-auto object-contain grayscale opacity-70 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
