"use client";

import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { LAYOUTS, INTERACTIONS, BUTTONS, SPACING } from "@/lib/responsive";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/magnus-hathaway', '_blank');
  };

  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Hero Background Image */}
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/assets/desktop-hero.png"
        />
        <source
          media="(max-width: 767px)"
          srcSet="/assets/mobile-hero.png"
        />
        <img
          src="/assets/desktop-hero.png"
          alt="Magnus Hathaway - Investment Platform Hero Background"
          className="w-full h-auto object-cover transition-all duration-500 ease-in-out"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </picture>

      {/* Trust Badge - Top Right */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-20">
        <div className="relative flex flex-col items-end">
          <div
            className={cn(
              "group relative px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 rounded-full shadow-lg hover:shadow-xl",
              INTERACTIONS.buttonHover,
              INTERACTIONS.focus,
              "cursor-pointer z-10 overflow-hidden backdrop-blur-lg border border-white/20"
            )}
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 119, 181, 0.3) 0%, rgba(0, 119, 181, 0.6) 100%)",
              backdropFilter: "blur(15px)",
            }}
            role="button"
            tabIndex={0}
            aria-label="Trusted by 3300+ clients"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full" />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out blur-sm" />
            <div className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold relative z-10 text-white transition-all duration-500 ease-in-out group-hover:scale-105 whitespace-nowrap">
              Trusted by 3300+ Clients
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-8 sm:w-10 lg:w-12 xl:w-14 h-8 sm:h-10 lg:h-12 xl:h-14 rounded-full border-2 border-blue-400/60 transition-all duration-700 ease-in-out pointer-events-none opacity-40 scale-110 animate-ping" />
        </div>
      </div>

      {/* LinkedIn CTA - Bottom Right */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-20">
        <div className="relative flex flex-col items-end">
          {/* Tooltip */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200 mb-2 transition-all duration-700 ease-in-out transform translate-y-3 opacity-0 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
            <div className="flex items-center space-x-2">
              <div className="text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">
                Connect With Us On LinkedIn
              </div>
            </div>
          </div>

          {/* LinkedIn Button */}
          <button
            className={cn(
              "group relative p-3 sm:p-3.5 lg:p-4 rounded-full shadow-lg hover:shadow-xl",
              INTERACTIONS.buttonHover,
              INTERACTIONS.focus,
              "cursor-pointer z-10 overflow-hidden backdrop-blur-lg border border-white/20"
            )}
            aria-label="Connect with Magnus Hathaway on LinkedIn"
            onClick={handleLinkedInClick}
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 119, 181, 0.3) 0%, rgba(0, 119, 181, 0.6) 100%)",
              backdropFilter: "blur(15px)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full" />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out blur-sm" />
            <Icons.LinkedIn 
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 relative z-10 text-white transition-all duration-500 ease-in-out group-hover:scale-110"
            />
          </button>

          {/* Animated Ring */}
          <div className="absolute bottom-0 right-0 w-10 sm:w-12 lg:w-14 xl:w-16 h-10 sm:h-12 lg:h-14 xl:h-16 rounded-full border-2 border-blue-400/60 transition-all duration-700 ease-in-out pointer-events-none opacity-0 scale-100 group-hover:opacity-40 group-hover:animate-ping" />
        </div>
      </div>

      {/* Overlay Gradient (for future content) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5 transition-opacity duration-700 ease-in-out pointer-events-none opacity-0 hover:opacity-100" />
    </section>
  );
}