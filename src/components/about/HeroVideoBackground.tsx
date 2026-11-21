"use client";

import { useEffect, useRef } from "react";

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    // Explicitly call play to handle Chrome / Safari autoplay restrictions
    video.play().catch(() => {
      // Browser autoplay policy fallback
    });
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        poster="/images/vertical-farming.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover filter brightness-[0.78] contrast-[1.08]"
      >
        <source src="/videos/facility-farming.mp4" type="video/mp4" />
      </video>

      {/* Elegant directional shading: darkened on the left for text contrast, open on the right so video is vividly visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
