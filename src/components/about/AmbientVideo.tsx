"use client";

import { useEffect, useRef } from "react";

export function AmbientVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-[20px] bg-black ${className}`}>
      <video
        ref={videoRef}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover filter brightness-[0.95] contrast-[1.05]"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
