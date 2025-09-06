"use client";

import { useMemo, useState } from "react";
import siteContent from "@/content/site";
import { PrimeOnboardingModal } from "../prime";
import { Icons } from "@/components/ui/icons";
import { LAYOUTS, TYPOGRAPHY, SPACING, CARDS, INTERACTIONS, BUTTONS } from "@/lib/responsive";
import { cn } from "@/lib/utils";

interface SubscriptionProps {
  className?: string;
}

export default function Subscription({ className }: SubscriptionProps) {
  const subs = siteContent.subscriptions;
  const [activeKey, setActiveKey] = useState(
    subs?.billingCycles?.[0]?.key ?? "yearly"
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const plan = subs?.plans?.[0];
  const price = useMemo(() => {
    if (!plan) return null;
    const val = plan.prices?.[activeKey as keyof typeof plan.prices];
    return typeof val === "number" ? val : null;
  }, [plan, activeKey]);

  const handleSubscribeClick = () => {
    console.log(`Subscribe clicked for plan: ${plan?.key}, cycle: ${activeKey}`);
    setDialogOpen(true);
  };

  if (!subs || !plan) {
    return null;
  }

  return (
    <section
      className={cn(LAYOUTS.sectionWithBg, "pt-12 pb-20 lg:pb-32", className)}
      id={subs.id || "plans"}
    >
      {/* Section Header */}
      <div className={LAYOUTS.container}>
        <h1
          className={cn(
            TYPOGRAPHY.h1,
            "font-bold text-gray-900 text-center mb-4 sm:mb-8 lg:mb-10",
            "leading-tight"
          )}
        >
          {subs.title}
        </h1>

        {/* Billing Cycle Tabs */}
        <div className="mb-8 lg:mb-12">
          <div className="relative overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center justify-start sm:justify-center border-b border-gray-200 w-max sm:w-auto mx-auto gap-1 sm:gap-2">
              {subs.billingCycles?.map((cycle) => {
                const active = cycle.key === activeKey;
                return (
                  <button
                    key={cycle.key}
                    onClick={() => setActiveKey(cycle.key)}
                    className={cn(
                      "whitespace-nowrap py-2 px-3 sm:px-4 lg:px-6 text-sm sm:text-base lg:text-lg font-semibold border-b-2 transition-all duration-200",
                      active
                        ? "text-blue-700 border-blue-700"
                        : "text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300"
                    )}
                  >
                    {cycle.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Card */}
      <div className={LAYOUTS.containerWide}>
        <div className="flex justify-center">
          <SubscriptionCard
            plan={plan}
            price={price}
            activeKey={activeKey}
            onSubscribeClick={handleSubscribeClick}
          />
        </div>
      </div>

      {/* Prime Onboarding Modal */}
      <PrimeOnboardingModal
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
}

interface SubscriptionCardProps {
  plan: any; // Type this properly based on your content structure
  price: number | null;
  activeKey: string;
  onSubscribeClick: () => void;
  className?: string;
}

function SubscriptionCard({ 
  plan, 
  price, 
  activeKey, 
  onSubscribeClick, 
  className 
}: SubscriptionCardProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-sm font-poppins rounded-xl bg-white border border-blue-200 shadow-lg hover:shadow-xl overflow-hidden flex flex-col",
        INTERACTIONS.cardHover,
        "group",
        className
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

      {/* Header Section */}
      <div className="flex items-start p-4 sm:p-6 pb-4 relative z-10">
        <div className="w-full">
          <h2
            className="font-poppins text-lg sm:text-xl lg:text-[22px] font-bold leading-tight text-gray-900 truncate mb-2"
            title={plan.name}
          >
            {plan.name}
          </h2>
          <div className="flex items-baseline">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">
              {plan.currencySymbol}
              {price}
            </span>
            <span className="text-gray-600 text-sm ml-1">
              {plan.priceSuffix}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-start items-start px-4 sm:px-6 relative z-10">
        <div className="w-4/5 border-t border-blue-100" />
      </div>

      {/* Features Section */}
      <div className="flex flex-col items-start p-4 sm:p-6 pt-6 pb-20 space-y-2 w-full relative z-10 flex-grow">
        <div className="flex w-full mb-4">
          <Icons.CircleCheck className="text-blue-600 mr-3 flex-shrink-0 w-5 h-5 mt-0.5" />
          <div className="flex flex-col w-full">
            <h4 className="text-base font-bold font-poppins text-gray-900 mb-3">
              Offerings
            </h4>
          </div>
        </div>
        
        <div className="flex flex-col items-start pl-8 w-full">
          <ul className="font-poppins text-sm text-gray-600 space-y-2 w-full max-h-48 sm:max-h-56 overflow-y-auto">
            {plan.features?.map((feature: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start space-x-2"
              >
                <span className="text-blue-600 mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0" />
                <span>{feature}</span>
              </li>
            )) || (
              <li className="text-gray-500 italic">No features listed</li>
            )}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex justify-center relative z-10 bg-gradient-to-t from-white via-white to-transparent">
        <button
          type="button"
          onClick={onSubscribeClick}
          className={cn(
            "group/btn w-full py-2.5 px-4 flex items-center justify-center rounded-lg font-medium text-sm text-white relative overflow-hidden transition-all duration-300 shadow-md",
            "bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 hover:from-blue-800 hover:via-blue-600 hover:to-blue-800",
            INTERACTIONS.buttonHover,
            "bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%]"
          )}
        >
          <span className="relative z-10 flex items-center justify-center">
            {plan.cta?.label || "Subscribe Now"}
            <Icons.ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </span>
        </button>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-blue-100 rounded-bl-full -mr-10 sm:-mr-12 -mt-10 sm:-mt-12 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
    </div>
  );
}