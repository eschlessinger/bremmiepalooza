// components/Wave.tsx
"use client";

type Props = {
  height?: string;
  bremmieMobileFactor?: number;
};

export default function Wave({
  height = "24vh",
  bremmieMobileFactor = 0.46, // tweak 0.42–0.50 if needed
}: Props) {
  return (
    <>
      <div
        className="fixed left-0 bottom-0 w-full z-10"
        style={{
          height,
          ["--wave-h" as any]: height,
        } as React.CSSProperties}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0 100L48 87.5C96 75 192 50 288 58.3C384 66.7 480 108.3 576 125C672 141.7 768 133.3 864 116.7C960 100 1056 75 1152 66.7C1248 58.3 1344 66.7 1392 70.8L1440 75V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V100Z"
            fill="url(#paint0_linear_desktop)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_desktop"
              x1="720"
              y1="0"
              x2="720"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EC4899" />
              <stop offset="0.333333" stopColor="#FACC15" />
              <stop offset="0.666667" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <style jsx global>{`
        :root {
          --wave-h: ${height};
          --bremmie-bottom: 60px; /* desktop baseline */
          --bremmie-right: 6%;
          --bremmie-size: 20vmin;
          scrollbar-gutter: stable;
        }
        @media (max-width: 640px) {
          :root {
            --bremmie-bottom: calc(var(--wave-h) * ${bremmieMobileFactor});
          }
        }
      `}</style>
    </>
  );
}
