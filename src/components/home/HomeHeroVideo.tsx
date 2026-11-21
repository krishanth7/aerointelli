"use client";

import { useEffect, useRef, useState } from "react";

export function HomeHeroVideo({
  children,
}: {
  children: React.ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isCinematic, setIsCinematic] = useState(false);
  const [activeChannel, setActiveChannel] = useState<"farming" | "water">("farming");
  const [elapsedSeconds, setElapsedSeconds] = useState(9000); // starts around 2h 30m

  // Live stream timecode counter
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimecode = (totalSec: number) => {
    const hrs = String(Math.floor(totalSec / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSec % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  // Video autoplay enforcement
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});
  }, [activeChannel]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const switchChannel = (ch: "farming" | "water") => {
    setActiveChannel(ch);
    setIsPlaying(true);
  };

  const currentSrc =
    activeChannel === "farming"
      ? "/videos/facility-farming.mp4"
      : "/videos/water-flow.mp4";

  const currentPoster =
    activeChannel === "farming"
      ? "/images/vertical-farming.jpg"
      : "/images/aquaculture-ras.jpg";

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-black text-white flex flex-col justify-between pt-[116px] pb-10 md:pt-[136px] md:pb-14 lg:pt-[156px] lg:pb-16">
      {/* ── Background Video Layer ─────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          key={currentSrc}
          poster={currentPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover filter brightness-[0.82] contrast-[1.1] transition-opacity duration-700"
        >
          <source src={currentSrc} type="video/mp4" />
        </video>

        {/* Minimalist Directional Shading: Keeps left text readable while right side is 80%+ open and vivid */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isCinematic
              ? "bg-black/10"
              : "bg-gradient-to-r from-black/85 via-black/40 to-black/10"
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* ── Stream Status & Channel Selector Dock ───────────────────── */}
      <div className="relative z-30 mx-auto w-full max-w-[1280px] px-4 min-[360px]:px-5 min-[414px]:px-[22px] md:px-8 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/15 bg-black/40 px-4 py-2 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90">
              FACILITY LIVE FEED · {activeChannel === "farming" ? "CEA CANOPY" : "HYDRAULIC LOOP"}
            </span>
            <span className="hidden sm:inline-block font-mono text-[10.5px] text-accent/90">
              [REC {formatTimecode(elapsedSeconds)}]
            </span>
          </div>

          {/* Minimalist Stream Controls */}
          <div className="flex items-center gap-2 text-[11px] font-mono">
            {/* Channel buttons */}
            <div className="flex rounded-full border border-white/10 bg-white/[0.05] p-0.5">
              <button
                onClick={() => switchChannel("farming")}
                className={`rounded-full px-2.5 py-0.5 text-[10.5px] transition-colors ${
                  activeChannel === "farming"
                    ? "bg-accent text-ink font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Ch 1: Cultivation
              </button>
              <button
                onClick={() => switchChannel("water")}
                className={`rounded-full px-2.5 py-0.5 text-[10.5px] transition-colors ${
                  activeChannel === "water"
                    ? "bg-accent text-ink font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Ch 2: Hydraulics
              </button>
            </div>

            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-white/90 transition-colors hover:bg-white/20"
              title={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? "PAUSE" : "PLAY"}
            </button>

            {/* Cinematic Mode Toggle */}
            <button
              onClick={() => setIsCinematic(!isCinematic)}
              className={`rounded-full border px-2.5 py-1 transition-colors ${
                isCinematic
                  ? "border-accent bg-accent text-ink font-semibold"
                  : "border-white/15 bg-white/10 text-white/90 hover:bg-white/20"
              }`}
            >
              {isCinematic ? "EXIT THEATER" : "THEATER VIEW"}
            </button>
          </div>
        </div>
      </div>

      {/* ── Foreground Content Layer (Minimalist Corporate Top Layer) ─ */}
      <div
        className={`relative z-20 my-auto w-full transition-opacity duration-500 ${
          isCinematic ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {children}
      </div>

      {/* ── Bottom Telemetry Ribbon ─────────────────────────────────── */}
      <div
        className={`relative z-20 mx-auto w-full max-w-[1280px] px-4 min-[360px]:px-5 min-[414px]:px-[22px] md:px-8 lg:px-10 transition-opacity duration-500 ${
          isCinematic ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="grid grid-cols-2 gap-3 border-t border-white/15 pt-5 md:grid-cols-4">
          <div className="rounded-[14px] border border-white/10 bg-black/40 p-3 backdrop-blur-md">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
              Architecture
            </span>
            <p className="mt-1 text-[13.5px] font-medium text-white">
              100% Closed-Loop
            </p>
          </div>

          <div className="rounded-[14px] border border-white/10 bg-black/40 p-3 backdrop-blur-md">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
              Water Efficiency
            </span>
            <p className="mt-1 text-[13.5px] font-medium text-white">
              98.5%+ Recirculation
            </p>
          </div>

          <div className="rounded-[14px] border border-white/10 bg-black/40 p-3 backdrop-blur-md">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
              Resource Model
            </span>
            <p className="mt-1 text-[13.5px] font-medium text-white">
              Zero Soil Requirement
            </p>
          </div>

          <div className="rounded-[14px] border border-white/10 bg-black/40 p-3 backdrop-blur-md">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
              Intelligence
            </span>
            <p className="mt-1 text-[13.5px] font-medium text-white">
              Real-Time Edge Telemetry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
