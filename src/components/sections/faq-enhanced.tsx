"use client";

import { useState } from "react";
import siteContent from "@/content/site";
import { Icons } from "@/components/ui/icons";
import { SectionHeader, Section } from "@/components/layout/page-layout";
import { LAYOUTS, TYPOGRAPHY, SPACING, CARDS, INTERACTIONS } from "@/lib/responsive";
import { cn } from "@/lib/utils";

type QA = { q: string; a?: string };

interface FAQProps {
  className?: string;
}

export default function FAQ({ className }: FAQProps) {
  const content = siteContent.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!content?.qa?.length) {
    return null;
  }

  return (
    <Section
      id="faq"
      background="white"
      size="lg"
      className={className}
    >
      <SectionHeader
        title={content.title || "Frequently Asked Questions"}
        subtitle="FAQ"
        description="Find answers to common questions about our investment platform and services."
      />

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 sm:space-y-6">
          {content.qa.map((item: QA, index: number) => (
            <FAQItem
              key={`${item.q}-${index}`}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

interface FAQItemProps {
  item: QA;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  className?: string;
}

function FAQItem({ item, isOpen, onToggle, index, className }: FAQItemProps) {
  const itemId = `faq-item-${index}`;

  return (
    <div
      className={cn(
        "rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out overflow-hidden",
        isOpen && "border-blue-500 shadow-lg",
        INTERACTIONS.cardHover,
        className
      )}
    >
      <div className="p-4 sm:p-6 lg:p-8">
        <button
          className="flex items-center justify-between w-full text-left group"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={itemId}
          type="button"
        >
          <h3
            className={cn(
              "font-sans text-gray-900 text-sm sm:text-base lg:text-lg flex-grow pr-4 leading-relaxed",
              isOpen ? "font-bold" : "font-semibold",
              "group-hover:text-blue-700 transition-colors duration-200"
            )}
          >
            {item.q}
          </h3>
          
          <div
            className={cn(
              "flex-shrink-0 p-1 rounded-full transition-all duration-300",
              isOpen ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600",
              "group-hover:bg-blue-100 group-hover:text-blue-600"
            )}
          >
            {isOpen ? (
              <Icons.ChevronUp 
                className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300" 
              />
            ) : (
              <Icons.ChevronDown 
                className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-180" 
              />
            )}
          </div>
        </button>

        {/* Answer Content */}
        <div
          className={cn(
            "transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-96 opacity-100 mt-4 sm:mt-6" : "max-h-0 opacity-0"
          )}
        >
          {item.a && (
            <div
              id={itemId}
              className="prose prose-sm sm:prose-base prose-gray max-w-none"
            >
              <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {item.a}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Progress Indicator */}
      <div
        className={cn(
          "h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}

// Alternative FAQ component with search functionality
export function FAQWithSearch({ className }: FAQProps) {
  const content = siteContent.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQA = content?.qa?.filter((item: QA) =>
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.a?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setOpenIndex(null);
  };

  if (!content?.qa?.length) {
    return null;
  }

  return (
    <Section
      id="faq"
      background="white"
      size="lg"
      className={className}
    >
      <SectionHeader
        title={content.title || "Frequently Asked Questions"}
        subtitle="FAQ"
        description="Find answers to common questions about our investment platform and services."
      />

      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-8 sm:mb-12">
          <div className="relative">
            <Icons.CircleCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-12 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all duration-200"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <Icons.Close className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4 sm:space-y-6">
          {filteredQA.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-500 text-base sm:text-lg">
                No questions found matching "{searchTerm}"
              </p>
              <button
                onClick={clearSearch}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Clear search to see all questions
              </button>
            </div>
          ) : (
            filteredQA.map((item: QA, index: number) => (
              <FAQItem
                key={`${item.q}-${index}`}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => toggleItem(index)}
                index={index}
              />
            ))
          )}
        </div>

        {/* Search Results Counter */}
        {searchTerm && filteredQA.length > 0 && (
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-sm text-gray-500">
              Showing {filteredQA.length} of {content.qa.length} questions
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}