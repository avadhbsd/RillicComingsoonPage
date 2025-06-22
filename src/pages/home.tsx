import AppleTVCard from "@/components/AppleTVCard";
import riveIcon from "@assets/front-relic-icon_1750612094781.png";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Floating Rive Logo Pattern */}
        <div className="absolute inset-0">
          {/* Multiple floating Rive icons with different sizes and positions */}
          {Array.from({ length: 25 }).map((_, i) => {
            const size = Math.random() * 40 + 20; // 20-60px
            const left = Math.random() * 100; // 0-100%
            const top = Math.random() * 100; // 0-100%
            const opacity = Math.random() * 0.15 + 0.05; // 0.05-0.2
            const delay = Math.random() * 6; // 0-6s delay
            
            return (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDelay: `${delay}s`,
                  opacity,
                }}
              >
                <img
                  src={riveIcon}
                  alt="Floating Rive logo"
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    filter: 'brightness(0.7) saturate(1.2)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '140px' }}>
        <div className="flex flex-col items-center justify-center flex-1 max-w-4xl w-full">
          {/* Apple TV Card Component */}
          <div className="flex-shrink-0">
            <AppleTVCard />
          </div>

          {/* 60px Gap (adjusted for label) */}
          <div className="h-[44px] flex-shrink-0"></div>

          {/* Headline Text */}
          <div className="text-center flex-shrink-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-tight mb-4 gradient-text animate-float">
              Turn Rive Skills<br />Into Revenue.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
              Sell your Rive work with one of a kind,<br />
              Growing Rive community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
