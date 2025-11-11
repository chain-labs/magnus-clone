// Enhanced components with improved developer experience and responsive design
export { default as HeroEnhanced } from "./hero-enhanced";
export { default as IPOEnhanced } from "./ipo-enhanced";
export { default as SubscriptionEnhanced } from "./subscription-enhanced";

// Original components (for backward compatibility)
export { default as Hero } from "./hero";
export { default as Header } from "./header";
export { default as IPO } from "./ipo";
export { default as Subscription } from "./subscription";
export { default as FAQ } from "./faq";
export { default as Footer } from "./footer";
export { default as Team } from "./team";
export { default as DIYVideos } from "./diy-videos";

// Layout components
export * from "../layout/page-layout";

// Types for better TypeScript support
export interface SectionProps {
  className?: string;
  id?: string;
}

export interface CardProps {
  className?: string;
  onClick?: () => void;
}

// Common patterns for consistent styling
export const SECTION_STYLES = {
  padding: "py-12 sm:py-16 lg:py-20",
  container: "container mx-auto px-4 sm:px-6 lg:px-8",
  header: "text-center mb-8 sm:mb-12 lg:mb-16",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
} as const;