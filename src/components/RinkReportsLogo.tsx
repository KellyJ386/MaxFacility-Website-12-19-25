import { SVGProps } from "react";

// Brand-accurate RinkReports logo: hockey rink diagram with the
// "RINK REPORTS" wordmark. Neon lime (#4DFF00) wordmark, on-brand.
const NAVY = "#002244";
const LIME = "#4DFF00";
const RED = "#dc2626";
const BLUE = "#1d4ed8";
const ICE = "#eef6fb";

// Faceoff circles: [cx, cy]
const faceoffCircles = [
  [78, 55],
  [78, 135],
  [322, 55],
  [322, 135],
];

// Decorative measurement dots kept to the end zones so the wordmark
// reads cleanly over center. [cx, cy, color]
const measurementDots: [number, number, string][] = [
  [55, 40, LIME],
  [55, 70, NAVY],
  [101, 40, NAVY],
  [101, 70, LIME],
  [55, 120, NAVY],
  [55, 150, LIME],
  [101, 120, LIME],
  [101, 150, NAVY],
  [299, 40, NAVY],
  [299, 70, LIME],
  [345, 40, LIME],
  [345, 70, NAVY],
  [299, 120, LIME],
  [299, 150, NAVY],
  [345, 120, NAVY],
  [345, 150, LIME],
];

export default function RinkReportsLogo({
  title = "RinkReports",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 400 190"
      fill="none"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Rink surface */}
      <rect
        x="6"
        y="6"
        width="388"
        height="178"
        rx="66"
        fill={ICE}
        stroke={NAVY}
        strokeWidth="6"
      />

      {/* Goal lines */}
      <line x1="45" y1="16" x2="45" y2="174" stroke={RED} strokeWidth="2" />
      <line x1="355" y1="16" x2="355" y2="174" stroke={RED} strokeWidth="2" />

      {/* Blue lines */}
      <line x1="150" y1="8" x2="150" y2="182" stroke={BLUE} strokeWidth="3" />
      <line x1="250" y1="8" x2="250" y2="182" stroke={BLUE} strokeWidth="3" />

      {/* Center line (dashed red) */}
      <line
        x1="200"
        y1="8"
        x2="200"
        y2="182"
        stroke={RED}
        strokeWidth="3"
        strokeDasharray="8 6"
      />

      {/* Goal creases */}
      <path d="M45 82 A16 16 0 0 1 45 108" stroke={BLUE} strokeWidth="2" />
      <path d="M355 82 A16 16 0 0 0 355 108" stroke={BLUE} strokeWidth="2" />

      {/* Center faceoff circle */}
      <circle cx="200" cy="95" r="30" stroke={BLUE} strokeWidth="2" />
      <circle cx="200" cy="95" r="3" fill={RED} />

      {/* End-zone faceoff circles */}
      {faceoffCircles.map(([cx, cy], i) => (
        <g key={`fo-${i}`}>
          <circle cx={cx} cy={cy} r="24" stroke={RED} strokeWidth="2" />
          <circle cx={cx} cy={cy} r="3" fill={RED} />
        </g>
      ))}

      {/* Neutral-zone faceoff dots */}
      {[
        [172, 55],
        [172, 135],
        [228, 55],
        [228, 135],
      ].map(([cx, cy], i) => (
        <circle key={`nz-${i}`} cx={cx} cy={cy} r="3" fill={RED} />
      ))}

      {/* Decorative measurement dots */}
      {measurementDots.map(([cx, cy, color], i) => (
        <circle
          key={`md-${i}`}
          cx={cx}
          cy={cy}
          r="7"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeDasharray="3 3"
        />
      ))}

      {/* RINK REPORTS wordmark */}
      <g
        transform="rotate(-3 200 100)"
        fontFamily="'Space Grotesk', Inter, system-ui, sans-serif"
        fontWeight={800}
        textAnchor="middle"
        fill={LIME}
        stroke="#ffffff"
        strokeWidth="6"
        paintOrder="stroke"
        strokeLinejoin="round"
      >
        <text x="200" y="92" fontSize="58" letterSpacing="2">
          RINK
        </text>
        <text x="200" y="138" fontSize="38" letterSpacing="2">
          REPORTS
        </text>
      </g>
    </svg>
  );
}
