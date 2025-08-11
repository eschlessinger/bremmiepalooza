// components/Bremmie.tsx
"use client";

export default function Bremmie() {
  return (
    <div
      className="fixed pointer-events-none z-20"
      style={{
        right: "var(--bremmie-right)",
        bottom: "var(--bremmie-bottom)",
        width: "var(--bremmie-size)",
        height: "var(--bremmie-size)",
      }}
    >
      <img
        src="/doodles/bremmie.png"
        alt="Bremmie on the beach"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
