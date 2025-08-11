interface BremmieDoodleProps {
  className?: string
  style?: React.CSSProperties
}

export default function BremmieDoodle({ className = "", style = {} }: BremmieDoodleProps) {
  const defaultStyle = {
    right: "var(--bremmie-right, 6%)",
    bottom: "var(--bremmie-bottom, 60px)",
    width: "var(--bremmie-size, 20vmin)",
    height: "var(--bremmie-size, 20vmin)",
    ...style
  }

  return (
    <div
      className={`fixed pointer-events-none z-20 ${className}`}
      style={defaultStyle}
    >
      <div className="relative w-full h-full">
        <img 
          src="/doodles/bremmie.png" 
          alt="Bremmie on the beach" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}
