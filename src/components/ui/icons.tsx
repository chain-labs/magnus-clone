import { LucideProps } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface IconProps extends LucideProps {}

// Base Icon component for consistent styling
const BaseIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("flex-shrink-0", className)}
      {...props}
    />
  )
);
BaseIcon.displayName = "BaseIcon";

// LinkedIn Icon
export const LinkedInIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </BaseIcon>
  )
);
LinkedInIcon.displayName = "LinkedInIcon";

// Menu Icons
export const MenuIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </BaseIcon>
  )
);
MenuIcon.displayName = "MenuIcon";

export const CloseIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M6 18L18 6M6 6l12 12" />
    </BaseIcon>
  )
);
CloseIcon.displayName = "CloseIcon";

// Arrow Icons
export const ArrowRightIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </BaseIcon>
  )
);
ArrowRightIcon.displayName = "ArrowRightIcon";

export const ChevronRightIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="m9 18 6-6-6-6" />
    </BaseIcon>
  )
);
ChevronRightIcon.displayName = "ChevronRightIcon";

export const ChevronDownIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="m6 9 6 6 6-6" />
    </BaseIcon>
  )
);
ChevronDownIcon.displayName = "ChevronDownIcon";

export const ChevronUpIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="m18 15-6-6-6 6" />
    </BaseIcon>
  )
);
ChevronUpIcon.displayName = "ChevronUpIcon";

// Check Icons
export const CheckIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="m9 12 2 2 4-4" />
    </BaseIcon>
  )
);
CheckIcon.displayName = "CheckIcon";

export const CircleCheckIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </BaseIcon>
  )
);
CircleCheckIcon.displayName = "CircleCheckIcon";

// Plus/Minus Icons
export const PlusIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5v14" />
    </BaseIcon>
  )
);
PlusIcon.displayName = "PlusIcon";

export const MinusIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M5 12h14" />
    </BaseIcon>
  )
);
MinusIcon.displayName = "MinusIcon";

// Play Icon
export const PlayIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <polygon points="6,3 20,12 6,21" />
    </BaseIcon>
  )
);
PlayIcon.displayName = "PlayIcon";

// User/Profile Icons
export const UserIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </BaseIcon>
  )
);
UserIcon.displayName = "UserIcon";

// Calendar Icon
export const CalendarIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </BaseIcon>
  )
);
CalendarIcon.displayName = "CalendarIcon";

// Mail Icon
export const MailIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </BaseIcon>
  )
);
MailIcon.displayName = "MailIcon";

// Settings/Cog Icon
export const CogIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="m9 12 2 2 4-4" />
    </BaseIcon>
  )
);
CogIcon.displayName = "CogIcon";

// Square Stack Icon (for plans)
export const SquareStackIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4z" />
      <path d="M14 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4z" />
      <path d="M4 20c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4z" />
      <path d="M14 20c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4z" />
    </BaseIcon>
  )
);
SquareStackIcon.displayName = "SquareStackIcon";

// External Link Icon
export const ExternalLinkIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    </BaseIcon>
  )
);
ExternalLinkIcon.displayName = "ExternalLinkIcon";

// YouTube Icon
export const YouTubeIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={className} {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4C5.2 5.2 8.9 5 12 5s6.8.2 8.1.6a2 2 0 0 1 1.4 1.4 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4c-1.3.4-5 .6-8.1.6s-6.8-.2-8.1-.6a2 2 0 0 1-1.4-1.4z" />
      <polygon points="10,8 16,12 10,16" />
    </BaseIcon>
  )
);
YouTubeIcon.displayName = "YouTubeIcon";

// Loading/Spinner Icon
export const LoadingIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BaseIcon ref={ref} className={cn("animate-spin", className)} {...props}>
      <path d="M21 12a9 9 0 11-6.219-8.56" />
    </BaseIcon>
  )
);
LoadingIcon.displayName = "LoadingIcon";

// Export all icons as a grouped object for easy importing
export const Icons = {
  LinkedIn: LinkedInIcon,
  Menu: MenuIcon,
  Close: CloseIcon,
  ArrowRight: ArrowRightIcon,
  ChevronRight: ChevronRightIcon,
  ChevronDown: ChevronDownIcon,
  ChevronUp: ChevronUpIcon,
  Check: CheckIcon,
  CircleCheck: CircleCheckIcon,
  Plus: PlusIcon,
  Minus: MinusIcon,
  Play: PlayIcon,
  User: UserIcon,
  Calendar: CalendarIcon,
  Mail: MailIcon,
  Cog: CogIcon,
  SquareStack: SquareStackIcon,
  ExternalLink: ExternalLinkIcon,
  YouTube: YouTubeIcon,
  Loading: LoadingIcon,
} as const;