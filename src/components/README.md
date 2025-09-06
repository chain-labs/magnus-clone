# Magnus Hathaway - Enhanced Component System

## Overview

This project has been enhanced with a comprehensive, developer-friendly component system that includes:

- 🎨 **Reusable SVG Icons**: All raw SVGs replaced with typed, reusable icon components
- 📱 **Responsive Design System**: Consistent breakpoints, spacing, and typography
- 🔧 **Developer-Friendly APIs**: Clean interfaces with TypeScript support
- ⚡ **Performance Optimized**: Lazy loading, proper image handling, and efficient rendering
- ♿ **Accessibility First**: ARIA labels, keyboard navigation, and screen reader support

## Quick Start

```tsx
import { HeroEnhanced, IPOEnhanced, SubscriptionEnhanced } from "@/components/sections";
import { Icons } from "@/components/ui/icons";
import { PageLayout, Section, SectionHeader } from "@/components/layout/page-layout";

export default function HomePage() {
  return (
    <PageLayout>
      <HeroEnhanced />
      <IPOEnhanced />
      <SubscriptionEnhanced />
    </PageLayout>
  );
}
```

## Component Architecture

### 1. Icon System (`@/components/ui/icons`)

All raw SVG icons have been replaced with reusable, typed components:

```tsx
import { Icons } from "@/components/ui/icons";

// Usage
<Icons.LinkedIn className="w-6 h-6 text-blue-600" />
<Icons.ArrowRight size={24} className="ml-2" />
<Icons.CircleCheck className="text-green-500" />
```

**Available Icons:**
- `LinkedIn`, `Menu`, `Close`
- `ArrowRight`, `ChevronRight`, `ChevronDown`, `ChevronUp`
- `Check`, `CircleCheck`, `Plus`, `Minus`
- `Play`, `User`, `Calendar`, `Mail`
- `Cog`, `SquareStack`, `ExternalLink`
- `YouTube`, `Loading`

### 2. Responsive Design System (`@/lib/responsive`)

Consistent responsive utilities for the entire application:

```tsx
import { TYPOGRAPHY, SPACING, BUTTONS, CARDS } from "@/lib/responsive";

// Typography
<h1 className={TYPOGRAPHY.h1}>Main Heading</h1>
<p className={TYPOGRAPHY.body}>Body text</p>

// Spacing
<div className={SPACING.sectionPadding}>
  <div className={SPACING.cardGap}>
    {/* Content */}
  </div>
</div>

// Buttons
<button className={BUTTONS.lg}>Large Button</button>

// Cards
<div className={cn(CARDS.base, CARDS.md)}>
  Card content
</div>
```

### 3. Layout Components (`@/components/layout/page-layout`)

Standardized layout components for consistent page structure:

```tsx
import { PageLayout, Section, SectionHeader } from "@/components/layout/page-layout";

function MyPage() {
  return (
    <PageLayout>
      <Section background="gradient" size="lg">
        <SectionHeader
          title="Section Title"
          subtitle="Section Subtitle"
          description="Section description text"
        />
        {/* Section content */}
      </Section>
    </PageLayout>
  );
}
```

## Enhanced Components

### HeroEnhanced

Improved hero section with better responsive design and interactions:

```tsx
<HeroEnhanced className="custom-class" />
```

**Features:**
- Responsive image loading with WebP support
- Interactive LinkedIn CTA with hover effects
- Trust badge with animated elements
- Optimized for all screen sizes

### IPOEnhanced

Enhanced IPO section with improved card design:

```tsx
<IPOEnhanced className="custom-class" />
```

**Features:**
- Interactive billing tabs
- Responsive card grid
- Hover animations and micro-interactions
- Consistent icon usage
- Better typography hierarchy

### SubscriptionEnhanced

Improved subscription component with better UX:

```tsx
<SubscriptionEnhanced className="custom-class" />
```

**Features:**
- Dynamic pricing display
- Animated billing cycle tabs
- Enhanced feature list presentation
- Consistent button styling

### FAQEnhanced

Two variants of the FAQ component:

```tsx
// Basic FAQ
<FAQEnhanced />

// FAQ with search functionality
<FAQWithSearch />
```

**Features:**
- Smooth accordion animations
- Search functionality (in enhanced version)
- Better accessibility
- Visual indicators for open/closed states

## Responsive Breakpoints

The system uses Tailwind's default breakpoints:

- `sm`: 640px+ (tablets)
- `md`: 768px+ (small laptops)
- `lg`: 1024px+ (desktops)
- `xl`: 1280px+ (large desktops)
- `2xl`: 1536px+ (extra large screens)

## Styling Patterns

### Color Scheme

- **Primary**: Blue variations (#2A60F1, #3F2CA8, #4C6FFF)
- **Success**: Green (#22C55E)
- **Text**: Gray scale (#0F172A, #475569, #64748B)
- **Background**: Gradients and subtle grays

### Typography Scale

```scss
// Headings
h1: text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
h2: text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
h3: text-xl sm:text-2xl lg:text-3xl

// Body text
body: text-sm sm:text-base
bodyLarge: text-base sm:text-lg
```

### Spacing System

```scss
// Sections
section: py-12 sm:py-16 lg:py-20
sectionPadding: px-4 sm:px-6 lg:px-8

// Cards
cardPadding: p-4 sm:p-6 lg:p-8
cardGap: gap-4 sm:gap-6 lg:gap-8
```

## Migration Guide

### From Raw SVG to Icons

**Before:**
```tsx
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="m9 18 6-6-6-6"/>
</svg>
```

**After:**
```tsx
<Icons.ChevronRight className="w-6 h-6" />
```

### From Inline Styles to Responsive Classes

**Before:**
```tsx
<div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 sm:mb-10">
  Title
</div>
```

**After:**
```tsx
<div className={cn(TYPOGRAPHY.h1, "font-bold text-gray-900 text-center", SPACING.sectionMargin)}>
  Title
</div>
```

## Performance Optimizations

1. **Icon Optimization**: All icons are tree-shakeable and only load when used
2. **Responsive Images**: Proper srcSet and WebP support
3. **Lazy Loading**: Images and components load only when needed
4. **CSS Optimization**: Consistent utility classes reduce CSS bundle size
5. **TypeScript**: Better tree-shaking and compile-time optimizations

## Accessibility Features

1. **ARIA Labels**: All interactive elements have proper labels
2. **Keyboard Navigation**: Full keyboard support for all components
3. **Screen Reader Support**: Semantic HTML and proper headings
4. **Focus Management**: Visible focus indicators and logical tab order
5. **Color Contrast**: WCAG AA compliant color combinations

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation for older browsers

## Development Guidelines

### Component Creation

1. Use TypeScript interfaces for props
2. Include className prop for customization
3. Use responsive utilities from the design system
4. Add proper ARIA labels and accessibility features
5. Include JSDoc comments for public APIs

### Example Component Template

```tsx
interface MyComponentProps {
  title: string;
  className?: string;
  onAction?: () => void;
}

/**
 * MyComponent description
 * 
 * @param title - The component title
 * @param className - Additional CSS classes
 * @param onAction - Callback function
 */
export function MyComponent({ title, className, onAction }: MyComponentProps) {
  return (
    <div className={cn(CARDS.base, CARDS.md, className)}>
      <h2 className={TYPOGRAPHY.h3}>{title}</h2>
      {onAction && (
        <button
          onClick={onAction}
          className={cn(BUTTONS.md, INTERACTIONS.buttonHover)}
        >
          Action
          <Icons.ArrowRight className="ml-2 w-4 h-4" />
        </button>
      )}
    </div>
  );
}
```

## Testing

All enhanced components include:

1. **Unit Tests**: Component logic and props
2. **Accessibility Tests**: ARIA compliance and keyboard navigation
3. **Visual Tests**: Screenshot comparisons across breakpoints
4. **Performance Tests**: Bundle size and render performance

## Contributing

When adding new components or modifying existing ones:

1. Follow the established patterns in the design system
2. Add TypeScript types and interfaces
3. Include responsive design considerations
4. Add accessibility features
5. Update documentation and examples
6. Add tests for new functionality

## Support

For questions or issues with the enhanced component system:

1. Check the existing components for similar patterns
2. Review the responsive design system utilities
3. Look at the icon system documentation
4. Create an issue with a detailed description and reproduction steps