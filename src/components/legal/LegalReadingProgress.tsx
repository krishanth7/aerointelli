export function LegalReadingProgress() {
  // Wide desktop only: vertical rail with a quiet percentage readout.
  return (
    <div
      aria-hidden="true"
      className="print-hidden pointer-events-none fixed left-6 top-1/2 z-[95] hidden -translate-y-1/2 flex-col items-center gap-3 min-[1400px]:flex"
    >
      <div className="h-[180px] w-[2px] bg-[rgba(29,33,28,0.08)]">
        <div
          data-progress-bar
          data-progress-axis="y"
          className="h-full w-full origin-top scale-y-0 bg-accent-deep"
        />
      </div>
      <div className="text-center text-[10px] tracking-[0.14em] text-legal-muted">
        <span data-progress-label>0%</span>
        <span className="mt-0.5 block">READ</span>
      </div>
    </div>
  );
}
