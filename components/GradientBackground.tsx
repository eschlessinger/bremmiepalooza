interface GradientBackgroundProps {
  className?: string
}

export default function GradientBackground({ className = "" }: GradientBackgroundProps) {
  return (
    <>
      <div
        className={`fixed inset-0 animate-gradient-shift ${className}`}
        style={{
          background: "linear-gradient(135deg, #ff0099, #ff6600, #ffcc00, #22cc88, #00ccff, #cc88ff, #ff0099)",
          backgroundSize: "600% 600%",
        }}
      />
      
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-shift {
          background-size: 600% 600%;
          animation: gradient-shift 10s ease infinite;
        }
      `}</style>
    </>
  )
}
