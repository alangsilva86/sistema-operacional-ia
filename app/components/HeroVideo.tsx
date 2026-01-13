"use client";

import { useState } from "react";
import { Play } from "lucide-react";

import { trackEvent } from "@/app/lib/analytics";

interface HeroVideoProps {
  src: string;
  poster: string;
  caption: string;
}

export function HeroVideo({ src, poster, caption }: HeroVideoProps) {
  const [hasPlayed, setHasPlayed] = useState(false);

  const handlePlay = () => {
    if (!hasPlayed) {
      trackEvent("video_play", { location: "hero" });
      setHasPlayed(true);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[20px] border border-[#222] bg-black">
        <video
          className="h-full w-full object-cover"
          poster={poster}
          controls
          preload="none"
          playsInline
          onPlay={handlePlay}
        >
          <source src={src} type="video/mp4" />
          Seu navegador nao suporta a reproducao de videos.
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white">
          <Play size={12} />
          Assistir antes de comprar
        </div>
      </div>
      <p className="text-xs text-[#8A8A8A]">{caption}</p>
    </div>
  );
}
