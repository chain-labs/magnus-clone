import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LAYOUTS } from "@/lib/responsive";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  containerSize?: keyof typeof LAYOUTS;
  withPadding?: boolean;
}

/**
 * Standard page layout wrapper with consistent spacing and responsive design
 */
export function PageLayout({
  children,
  className,
  containerSize = "container",
  withPadding = true,
}: PageLayoutProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-gray-50",
        withPadding && "pt-20", // Account for fixed header
        className
      )}
    >
      <div className={cn(LAYOUTS[containerSize] || LAYOUTS.container)}>
        {children}
      </div>
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "gradient" | "white" | "gray";
  size?: "sm" | "md" | "lg" | "xl";
}

/**
 * Reusable section component with consistent spacing
 */
export function Section({
  children,
  className,
  id,
  background = "default",
  size = "md",
}: SectionProps) {
  const backgroundClasses = {
    default: "",
    gradient: "bg-gradient-to-b from-blue-50 to-white",
    white: "bg-white",
    gray: "bg-gray-50",
  };

  const sizeClasses = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16 lg:py-20",
    lg: "py-16 sm:py-20 lg:py-24",
    xl: "py-20 sm:py-24 lg:py-32",
  };

  return (
    <section
      id={id}
      className={cn(
        sizeClasses[size],
        backgroundClasses[background],
        className
      )}
    >
      <div className={LAYOUTS.container}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  align?: "left" | "center" | "right";
}

/**
 * Standardized section header component
 */
export function SectionHeader({
  title,
  subtitle,
  description,
  className,
  titleClassName,
  align = "center",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("mb-8 sm:mb-12 lg:mb-16", alignClasses[align], className)}>
      {subtitle && (
        <p className="text-sm sm:text-base font-semibold text-blue-600 mb-2 sm:mb-4 tracking-wide uppercase">
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}