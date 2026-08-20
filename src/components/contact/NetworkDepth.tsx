import { NetworkVisual } from "./NetworkVisual";

/**
 * The contact hero's lattice, given real depth.
 *
 * Three copies of the same node diagram sit at different `translateZ` offsets
 * inside a `preserve-3d` plane under a perspective. That is genuine depth, not a
 * drawing of it: the browser foreshortens each copy by its distance, so the
 * three layers render at visibly different sizes and separate further as the
 * plane rotates — which no amount of hand-authored scaling reproduces.
 *
 * The plane carries `data-scene-3d`, so the scroll system rotates it on the X
 * axis as the hero passes. That behaviour is registered under `MOTION_OK`
 * rather than the desktop tier, so the depth reads on a phone and a tablet too,
 * where there is no cursor to lean toward.
 *
 * Each copy is dimmed further back, because a lattice that is equally bright at
 * every depth reads as three overlapping drawings rather than one object seen
 * end-on.
 *
 * Decorative throughout, so the whole thing is hidden from assistive
 * technology.
 */
const DEPTHS = [
  { z: 0, opacity: 0.9 },
  { z: -70, opacity: 0.5 },
  { z: -140, opacity: 0.26 },
];

export function NetworkDepth() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 [perspective:1200px] [perspective-origin:70%_50%]"
    >
      <div
        data-scene-3d
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {DEPTHS.map((depth) => (
          <div
            key={depth.z}
            className="absolute inset-0"
            style={{
              transform: `translateZ(${depth.z}px)`,
              opacity: depth.opacity,
            }}
          >
            <NetworkVisual />
          </div>
        ))}
      </div>
    </div>
  );
}
