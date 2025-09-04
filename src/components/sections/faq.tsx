"use client";
import { useState } from "react";
import siteContent from "@/content/site";

type QA = { q: string; a?: string };

function QAItem({ item, open, onToggle }: { item: QA; open: boolean; onToggle: () => void }) {
  return (
    <div
      className={
        "p-4 md:p-8 rounded-xl bg-white border border-[#000000]/10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col transition-all duration-300 ease-in-out w-full sm:w-[90%] md:w-[90%] lg:w-[100%] xl:w-[100%]" +
        (open ? " border-t-4 border-t-black" : "")
      }
    >
      <div className="flex items-center">
        <button
          className="flex items-center justify-between w-full"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-item-${item.q.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <h1 className={"font-sans text-left text-black text-sm md:text-base flex-grow " + (open ? "font-bold" : "font-semibold")}>
            {item.q}
          </h1>
          <span className="flex-shrink-0 ml-2">
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up h-5 w-5 text-black">
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-5 w-5 text-black">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            )}
          </span>
        </button>
      </div>
      {open && item.a && (
        <p
          id={`faq-item-${item.q.replace(/\s+/g, "-").toLowerCase()}`}
          className="mt-5 text-[13px] text-gray-500 font-sans"
        >
          {item.a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  const faq = siteContent.faq;
  const [openLeft, setOpenLeft] = useState<Record<number, boolean>>({});
  const [openRight, setOpenRight] = useState<Record<number, boolean>>({});

  return (
    <div className="bg-white" id="faqSection">
      <h1 className="text-[28px] md:text-[40px] lg:text-[40px] text-center font-bold text-black pt-14">{faq.title}</h1>
      <div className="h-auto">
        <div className="grid grid-cols-1 mx-2 md:grid-cols-2 md:gap-x-8">
          <div className="flex justify-end h-auto mb-4">
            <div className="container w-full md:w-[80%] lg:w-[70%]">
              <section className="overflow-visible">
                <div className="mt-8 space-y-3 lg:mt-12">
                  {faq.left.map((item: QA, idx: number) => (
                    <QAItem
                      key={item.q}
                      item={item}
                      open={!!openLeft[idx]}
                      onToggle={() => setOpenLeft((s) => ({ ...s, [idx]: !s[idx] }))}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="container w-full md:w-[80%] lg:w-[70%] mb-8">
            <section className="overflow-visible">
              <div className="mt-2 space-y-3 lg:mt-12">
                {faq.right.map((item: QA, idx: number) => (
                  <QAItem
                    key={item.q}
                    item={item}
                    open={!!openRight[idx]}
                    onToggle={() => setOpenRight((s) => ({ ...s, [idx]: !s[idx] }))}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
