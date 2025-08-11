interface TopLogoProps {
  className?: string
}

export default function TopLogo({ className = "" }: TopLogoProps) {
  return (
    <div className={`p-4 md:p-6 lg:p-8 ${className}`}>
      <div className="flex justify-center">
        <a href="/" className="w-full max-w-sm md:max-w-md">
          <img
            src="/bremmiepalooza-logo-for-cta.png"
            alt="Bremmiepalooza 2026"
            className="w-full h-auto mx-auto cursor-pointer hover:opacity-90 transition-opacity"
          />
        </a>
      </div>
    </div>
  )
}
