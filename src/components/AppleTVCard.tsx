import { useRef, useState, useCallback, startTransition } from "react";
import riveIcon from "@assets/front-relic-icon_1750612094781.png";

// =================================
// EASY CUSTOMIZATION CONTROLS
// =================================
const CARD_CONFIG = {
  size: 400,             // Card size in pixels (100-800) - reduced for better spacing
  scale: 1.05,           // Hover scale factor (1.0-1.15)
  tilt: 15,              // 3D tilt angle in degrees (0-30)
  transition: 0.6,       // Animation speed in seconds (0.2-1.5)
  shadowIntensity: 0.25, // Shadow opacity on hover (0.1-0.5)
};

interface AppleTVCardProps {
  className?: string;
}

export default function AppleTVCard({ className = "" }: AppleTVCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseEnter = useCallback(() => {
    startTransition(() => setIsHovered(true));
  }, []);

  const handleMouseLeave = useCallback(() => {
    startTransition(() => {
      setIsHovered(false);
      setMousePos({ x: 0.5, y: 0.5 });
    });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    startTransition(() => {
      setMousePos({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y)),
      });
    });
  }, []);

  const handleTouchStart = useCallback(() => {
    startTransition(() => setIsHovered(true));
  }, []);

  const handleTouchEnd = useCallback(() => {
    startTransition(() => {
      setIsHovered(false);
      setMousePos({ x: 0.5, y: 0.5 });
    });
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!cardRef.current || !e.touches[0]) return;

    const rect = cardRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) / rect.width;
    const y = (touch.clientY - rect.top) / rect.height;

    startTransition(() => {
      setMousePos({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y)),
      });
    });
  }, []);

  // Calculate 3D transforms
  const rotateX = isHovered ? (mousePos.y - 0.5) * -CARD_CONFIG.tilt : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * CARD_CONFIG.tilt : 0;
  const currentScale = isHovered ? CARD_CONFIG.scale : 1;

  const containerStyle = {
    width: CARD_CONFIG.size,
    height: CARD_CONFIG.size,
    maxWidth: "100%",
    maxHeight: "100%",
    perspective: 1000,
  };

  const cardInnerStyle = {
    width: "100%",
    height: "100%",
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${currentScale})`,
    transition: `transform ${CARD_CONFIG.transition}s cubic-bezier(0.25, 0.8, 0.25, 1)`,
    transformOrigin: "center center",
    willChange: "transform",
  };

  return (
    <div className="relative">
      <div
        ref={cardRef}
        className={`apple-tv-card relative ${className}`}
        style={containerStyle}
        tabIndex={0}
        aria-label="Interactive Rive logo card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <div className="card-inner" style={cardInnerStyle}>
          <img
            src={riveIcon}
            alt="Rive R Logo"
            draggable={false}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 24,
              display: "block",
              boxShadow: isHovered
                ? `0 20px 60px rgba(0,0,0,${CARD_CONFIG.shadowIntensity}), 0 8px 24px rgba(0,0,0,0.15)`
                : "0 8px 32px rgba(0,0,0,0.12)",
              transition: `box-shadow ${CARD_CONFIG.transition}s ease-out`,
            }}
          />
        </div>
      </div>
      
      {/* "Rillic is coming soon" label positioned 16px below the card */}
      <div className="absolute -bottom-[37px] left-1/2 transform -translate-x-1/2 text-center z-10 whitespace-nowrap">
        <span className="text-[21px] text-gray-400 font-medium">Rillic is coming soon</span>
      </div>
    </div>
  );
}