"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import circleAnim from "../../public/animations/circle-spin.json";

// Lottie must be client-only (no SSR)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface HeroAvatarProps {
  size?: number;
}

export default function HeroAvatar({ size = 320 }: HeroAvatarProps) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      {/* Lottie animated ring — positioned over the circle */}
      <Lottie
        animationData={circleAnim}
        loop
        autoplay
        style={{
          position: "absolute",
          inset: `-${size * 0.1}px`,
          width: `calc(100% + ${size * 0.2}px)`,
          height: `calc(100% + ${size * 0.2}px)`,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Avatar circle */}
      <div
        style={{
          position: "relative",
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          zIndex: 1,
          border: "4px solid rgba(255,255,255,0.12)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
        }}
      >
        <Image
          src="/images/avatar.png"
          alt="Arione Dauis"
          fill
          sizes={`${size}px`}
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
      </div>
    </div>
  );
}
