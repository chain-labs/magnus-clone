"use client";

import { useState } from "react";
import siteContent from "@/content/site";
import { PrimeOnboardingModal } from "../prime";
import { Icons } from "@/components/ui/icons";
import { LAYOUTS, TYPOGRAPHY, SPACING, CARDS, INTERACTIONS, BUTTONS } from "@/lib/responsive";
import { cn } from "@/lib/utils";

interface IPOProps {
  className?: string;
}

export default function IPO({ className }: IPOProps) {
  const ipo = siteContent.ipo;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleInvestClick = (cardKey: string) => {
    console.log(`Invest clicked for: ${cardKey}`);
    setDialogOpen(true);
  };

  return (
    <section
      className={cn(LAYOUTS.sectionWithBg, "pt-12 pb-20 lg:pb-32", className)}
      id="ipoSection"
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
          {ipo.title}
        </h1>

        {/* Billing Tabs */}
        <div className="mb-8 lg:mb-12">
          <div className="relative overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center justify-start sm:justify-center border-b border-gray-200 w-max sm:w-auto mx-auto gap-1 sm:gap-2">
              {ipo.billingTabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "whitespace-nowrap py-2 px-3 sm:px-4 lg:px-6 text-sm sm:text-base lg:text-lg font-semibold border-b-2 transition-all duration-200",
                    activeTab === index
                      ? "text-blue-700 border-blue-700"
                      : "text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* IPO Cards Grid */}
      <div className={LAYOUTS.containerWide}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {ipo.cards.map((card) => (
            <IPOCard
              key={card.key}
              card={card}
              onInvestClick={() => handleInvestClick(card.key)}
            />
          ))}
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

interface IPOCardProps {
  card: any; // Type this properly based on your content structure
  onInvestClick: () => void;
  className?: string;
}

function IPOCard({ card, onInvestClick, className }: IPOCardProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-sm font-poppins rounded-xl bg-white border border-blue-200 shadow-lg hover:shadow-xl cursor-pointer overflow-hidden flex flex-col",
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
            title={card.name}
          >
            {card.name}
          </h2>
          <div className="flex items-baseline">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">
              {card.currencySymbol}
              {card.price}
            </span>
            <span className="text-gray-600 text-sm ml-1">
              {card.priceSuffix}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-start items-start px-4 sm:px-6 relative z-10">
        <div className="w-4/5 border-t border-blue-100" />
      </div>

      {/* Content Section */}
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
          <div className="font-poppins text-sm text-gray-600 leading-relaxed w-full overflow-y-auto max-h-48 sm:max-h-64 lg:max-h-80">
            <p className="whitespace-pre-line">{card.description}</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex justify-center relative z-10 bg-gradient-to-t from-white via-white to-transparent">
        <button
          onClick={onInvestClick}
          className={cn(
            "group/btn w-full py-2.5 px-4 flex items-center justify-center rounded-lg font-medium text-sm text-white relative overflow-hidden transition-all duration-300 shadow-md",
            "bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 hover:from-blue-800 hover:via-blue-600 hover:to-blue-800",
            INTERACTIONS.buttonHover,
            "bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%]"
          )}
        >
          <span className="relative z-10 flex items-center justify-center">
            Invest Now
            <Icons.ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </span>
        </button>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-blue-100 rounded-bl-full -mr-10 sm:-mr-12 -mt-10 sm:-mt-12 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
    </div>
  );
}