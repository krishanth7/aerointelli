"use client";

import { useEffect, useRef } from "react";

export function HomeHeroVideo({
  children,
}: {
  children: React.ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reliable autoplay & loop enforcement
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white flex items-center pt-[104px] pb-16 md:pt-[128px] md:pb-20 lg:pt-[146px] lg:pb-24">
      {/* ── Realistic Looping Video Backdrop (No Text / No Names Overlaid) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/vertical-farming.jpg"
          className="h-full w-full object-cover filter brightness-[0.88] contrast-[1.08] transition-opacity duration-1000"
        >
          <source src="/videos/hero-agriculture-loop.mp4" type="video/mp4" />
          <source src="/videos/hero-irrigation-loop.mp4" type="video/mp4" />
        </video>

        {/* Minimalist Directional Shading: Keeps left typography sharp while leaving video vivid & open */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* ── Foreground Content Layer (Corporate Minimalism) ─────────────── */}
      <div className="relative z-20 w-full">
        {children}
      </div>
    </section>
  );
}
