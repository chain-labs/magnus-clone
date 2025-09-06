/**
 * Responsive Design System for Magnus Hathaway
 * 
 * This file contains utilities and constants for consistent responsive design
 * across the entire application.
 */

// Breakpoint constants
export const BREAKPOINTS = {
  xs: '0px',     // Extra small devices (phones)
  sm: '640px',   // Small devices (large phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (laptops)
  xl: '1280px',  // Extra large devices (desktops)
  '2xl': '1536px', // 2X large devices (large desktops)
} as const;

// Container max widths
export const CONTAINER_SIZES = {
  sm: 'max-w-screen-sm',   // 640px
  md: 'max-w-screen-md',   // 768px
  lg: 'max-w-screen-lg',   // 1024px
  xl: 'max-w-screen-xl',   // 1280px
  '2xl': 'max-w-screen-2xl', // 1536px
  full: 'max-w-full',
} as const;

// Common responsive spacing
export const SPACING = {
  // Padding
  sectionPadding: 'px-4 sm:px-6 lg:px-8',
  containerPadding: 'px-4 sm:px-20',
  cardPadding: 'p-4 sm:p-6 lg:p-8',
  
  // Margins
  sectionMargin: 'mb-8 sm:mb-12 lg:mb-16',
  cardMargin: 'mb-4 sm:mb-6 lg:mb-8',
  
  // Gaps
  cardGap: 'gap-4 sm:gap-6 lg:gap-8',
  itemGap: 'gap-2 sm:gap-3 lg:gap-4',
} as const;

// Typography responsive classes
export const TYPOGRAPHY = {
  // Headings
  h1: 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl',
  h2: 'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl',
  h3: 'text-xl sm:text-2xl lg:text-3xl',
  h4: 'text-lg sm:text-xl lg:text-2xl',
  h5: 'text-base sm:text-lg lg:text-xl',
  h6: 'text-sm sm:text-base lg:text-lg',
  
  // Body text
  body: 'text-sm sm:text-base',
  bodyLarge: 'text-base sm:text-lg',
  bodySmall: 'text-xs sm:text-sm',
  
  // Special cases
  hero: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl',
  subtitle: 'text-lg sm:text-xl lg:text-2xl',
  caption: 'text-xs sm:text-sm',
} as const;

// Button responsive classes
export const BUTTONS = {
  // Sizes
  sm: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2',
  md: 'px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base',
  lg: 'px-6 py-2.5 text-base sm:px-8 sm:py-3 sm:text-lg',
  xl: 'px-8 py-3 text-lg sm:px-10 sm:py-4 sm:text-xl',
  
  // Full width on mobile, auto on desktop
  responsive: 'w-full sm:w-auto',
} as const;

// Card responsive classes
export const CARDS = {
  // Basic card structure
  base: 'rounded-lg sm:rounded-xl bg-white border border-gray-200 shadow-sm',
  elevated: 'rounded-lg sm:rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow',
  
  // Card sizes
  sm: 'p-4 sm:p-6',
  md: 'p-6 sm:p-8',
  lg: 'p-8 sm:p-10',
  
  // Responsive widths
  widths: {
    full: 'w-full',
    auto: 'w-full sm:w-auto',
    fixed: 'w-full sm:w-[350px]',
    grid1: 'w-full',
    grid2: 'w-full sm:w-[calc(50%-0.75rem)]',
    grid3: 'w-full sm:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1rem)]',
    grid4: 'w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1rem)]',
  },
} as const;

// Grid responsive classes
export const GRID = {
  // Auto-fit grids
  autoFit: {
    sm: 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6',
    md: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6',
    lg: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6',
  },
  
  // Specific layouts
  twoCol: 'grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12',
  threeCol: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  fourCol: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6',
} as const;

// Navigation responsive classes
export const NAVIGATION = {
  // Mobile menu
  mobileMenu: 'lg:hidden fixed inset-0 z-50',
  mobileOverlay: 'absolute inset-0 bg-black/40',
  mobilePanel: 'absolute right-0 top-0 h-full w-72 max-w-[85%] bg-white shadow-xl p-6',
  
  // Desktop menu
  desktopMenu: 'hidden lg:flex lg:items-center',
  
  // Header
  header: 'sticky top-0 left-0 right-0 z-50',
  headerContainer: 'container px-4 sm:px-6 py-4 mx-auto',
} as const;

// Common layout patterns
export const LAYOUTS = {
  // Section wrapper
  section: 'py-12 sm:py-16 lg:py-20',
  sectionWithBg: 'py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white',
  
  // Container
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  containerWide: 'container mx-auto px-4 sm:px-20',
  
  // Flex layouts
  flexCenter: 'flex flex-col sm:flex-row items-center justify-center',
  flexBetween: 'flex flex-col sm:flex-row items-center justify-between',
  flexStart: 'flex flex-col sm:flex-row items-start',
} as const;

// Animation and interaction classes
export const INTERACTIONS = {
  // Hover effects
  cardHover: 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
  buttonHover: 'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md',
  scaleHover: 'transition-transform duration-300 hover:scale-105',
  
  // Focus states
  focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  focusVisible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
  
  // Loading states
  loading: 'opacity-50 pointer-events-none',
  disabled: 'opacity-60 cursor-not-allowed',
} as const;

// Media query helpers (for use in CSS-in-JS)
export const MEDIA_QUERIES = {
  xs: `(min-width: ${BREAKPOINTS.xs})`,
  sm: `(min-width: ${BREAKPOINTS.sm})`,
  md: `(min-width: ${BREAKPOINTS.md})`,
  lg: `(min-width: ${BREAKPOINTS.lg})`,
  xl: `(min-width: ${BREAKPOINTS.xl})`,
  '2xl': `(min-width: ${BREAKPOINTS['2xl']})`,
  
  // Max width queries
  maxSm: `(max-width: ${parseInt(BREAKPOINTS.sm) - 1}px)`,
  maxMd: `(max-width: ${parseInt(BREAKPOINTS.md) - 1}px)`,
  maxLg: `(max-width: ${parseInt(BREAKPOINTS.lg) - 1}px)`,
  maxXl: `(max-width: ${parseInt(BREAKPOINTS.xl) - 1}px)`,
} as const;

// Utility function to combine responsive classes
export function responsiveClasses(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Utility function to create responsive values
export function createResponsiveValue<T>(
  mobile: T,
  tablet?: T,
  desktop?: T,
  wide?: T
): {
  mobile: T;
  tablet?: T;
  desktop?: T;
  wide?: T;
} {
  return {
    mobile,
    ...(tablet && { tablet }),
    ...(desktop && { desktop }),
    ...(wide && { wide }),
  };
}

// Common responsive patterns as ready-to-use classes
export const RESPONSIVE_PATTERNS = {
  // Hero sections
  heroSection: responsiveClasses(
    LAYOUTS.section,
    LAYOUTS.container,
    'text-center'
  ),
  
  // Feature cards
  featureGrid: responsiveClasses(
    GRID.autoFit.md,
    SPACING.sectionPadding
  ),
  
  // Content sections
  contentSection: responsiveClasses(
    LAYOUTS.section,
    LAYOUTS.container,
    'prose prose-gray max-w-none'
  ),
  
  // Call-to-action sections
  ctaSection: responsiveClasses(
    LAYOUTS.section,
    LAYOUTS.container,
    'text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl'
  ),
} as const;