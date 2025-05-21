"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-500 via-yellow-300 to-blue-500 flex flex-col items-center justify-center text-white px-4">
      {/* Background Doodles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/doodles/star-blue.png"
          alt="Star"
          width={60}
          height={60}
          className="absolute top-10 left-10 animate-spin-slow"
        />
        <Image
          src="/doodles/sun.png"
          alt="Sun"
          width={80}
          height={80}
          className="absolute top-16 right-16 animate-pulse"
        />
        <Image
          src="/doodles/hotdog.png"
          alt="Hotdog"
          width={70}
          height={70}
          className="absolute bottom-24 left-16 rotate-12"
        />
        <Image
          src="/doodles/music.png"
          alt="Music Note"
          width={50}
          height={50}
          className="absolute bottom-10 right-20"
        />
        <Image
          src="/doodles/heart.png"
          alt="Heart"
          width={60}
          height={60}
          className="absolute top-1/2 left-1/4 animate-bounce"
        />
        <Image
          src="/doodles/bikini.png"
          alt="Bikini"
          width={50}
          height={50}
          className="absolute bottom-10 left-1/2"
        />
        <Image
          src="/doodles/tree.png"
          alt="Palm Tree"
          width={80}
          height={80}
          className="absolute top-1/4 right-10"
        />
        <Image
          src="/doodles/sunglasses.png"
          alt="Sunglasses"
          width={40}
          height={40}
          className="absolute top-1/3 left-2/3"
        />
        <Image
          src="/doodles/whiteclaw.png"
          alt="White Claw"
          width={60}
          height={60}
          className="absolute bottom-1/4 right-1/3"
        />
        <Image
          src="/doodles/ball.png"
          alt="Beach Ball"
          width={50}
          height={50}
          className="absolute bottom-1/2 left-1/5"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <Image
          src="/bremmiepalooza-logo.png"
          alt="Bremmiepalooza"
          width={800}
          height={400}
          className="mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold mb-2">JANUARY 16–18, 2026 • CANCUN, MX</h2>
        <h3 className="text-3xl font-bold text-pink-100 mt-4 animate-pulse">2026 Lineup Coming Soon!</h3>
      </div>

      {/* Footer Wave */}
      <div className="absolute bottom-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32 md:h-48"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,192L30,186.7C60,181,120,171,180,170.7C240,171,300,181,360,197.3C420,213,480,235,540,229.3C600,224,660,192,720,170.7C780,149,840,139,900,160C960,181,1020,235,1080,250.7C1140,267,1200,245,1260,213.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </main>
  );
}
}
