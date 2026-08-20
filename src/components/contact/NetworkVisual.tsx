/**
 * Abstract node/link diagram for the contact hero. Deliberately non-literal:
 * it is not a map, not a diagram of a real system and carries no data.
 * Decorative only, so it is hidden from assistive technology.
 */

const NODES = [
  { x: 60, y: 150, r: 3.5 },
  { x: 150, y: 70, r: 2.5 },
  { x: 168, y: 226, r: 2.5 },
  { x: 250, y: 140, r: 5 },
  { x: 330, y: 58, r: 2.5 },
  { x: 352, y: 208, r: 3.5 },
  { x: 440, y: 118, r: 2.5 },
  { x: 452, y: 254, r: 2.5 },
  { x: 540, y: 172, r: 3.5 },
];

const LINKS: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 6],
  [5, 7],
  [6, 8],
  [7, 8],
];

export function NetworkVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 300"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.28">
        {LINKS.map(([from, to]) => (
          <line
            key={`${from}-${to}`}
            x1={NODES[from].x}
            y1={NODES[from].y}
            x2={NODES[to].x}
            y2={NODES[to].y}
          />
        ))}
      </g>

      <g fill="currentColor">
        {NODES.map((node, index) => (
          <circle
            key={index}
            cx={node.x}
            cy={node.y}
            r={node.r}
            opacity={node.r > 3 ? 0.85 : 0.5}
            className="contact-node"
            style={{ animationDelay: `${index * 420}ms` }}
          />
        ))}
      </g>
    </svg>
  );
}
