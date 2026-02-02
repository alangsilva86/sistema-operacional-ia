import Image from "next/image";

import { FadeIn, Stagger, StaggerItem } from "@/app/components/Motion";
import { SecondaryCtaLink } from "@/app/components/SecondaryCtaLink";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

function renderResult(text: string) {
  const parts = text.split("*");
  if (parts.length === 3) {
    return (
      <p className="text-sm text-slate-300">
        {parts[0]}
        <em className="text-white">{parts[1]}</em>
        {parts[2]}
      </p>
    );
  }
  return <p className="text-sm text-slate-300">{text}</p>;
}

export function ProofSection() {
  return (
    <Section id="prova">
      <div className="space-y-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">{content.proof.title}</h2>
        </FadeIn>

        <Stagger className="grid gap-6 md:grid-cols-6">
          {content.proof.cases.map((item, index) => (
            <StaggerItem
              key={item.name}
              className={`rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur ${
                index === 0 ? "md:col-span-4" : "md:col-span-2"
              }`}
            >
              <p className="text-sm font-semibold text-white">{item.name}</p>
              <div className="mt-4 space-y-3">
                <p className="text-sm text-slate-300">{item.before}</p>
                <p className="text-sm text-slate-300">{item.after}</p>
                {renderResult(item.result)}
              </div>
            </StaggerItem>
          ))}
          <StaggerItem className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur md:col-span-6">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-semibold text-white">{content.proof.mentorTitle}</p>
                <p className="mt-3 text-lg font-semibold text-white">{content.proof.mentorName}</p>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  {content.proof.mentorLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div className="mt-5">
                  <SecondaryCtaLink
                    label={content.hero.secondaryCta}
                    baseUrl={content.diagnosticUrl}
                    location="proof"
                    className="h-10 px-5 text-xs"
                  />
                </div>
              </div>
              <div className="relative h-60 w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/alanh.jpeg"
                  alt={content.proof.mentorName}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </Section>
  );
}
