"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import siteContent from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = siteContent.header.links;

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 shadow bg-[#0F0F0F]">
      <div className="container px-4 sm:px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <Image
                className="w-auto h-6 sm:h-8 rounded-md"
                src={siteContent.header.logo}
                alt="Logo"
                width={32}
                height={32}
                priority
              />
            </a>
            <a href="/" className="text-white text-sm sm:text-base lg:text-xl ml-2">
              Magnus Hathaway
            </a>
          </div>
          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center">
            <div className="flex items-center">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-medium text-white transition-colors hover:text-gray-300 rounded-md px-2 py-1 mx-2"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="ml-4">
              <a
                href="#pricing"
                className="px-4 py-2 text-sm rounded-md font-medium tracking-wide text-black bg-white transition-colors hover:bg-gray-200"
              >
                Login/Register
              </a>
            </div>
          </div>
          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-50 ${open ? "opacity-100" : "pointer-events-none opacity-0"} transition-opacity`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[85%] bg-[#0F0F0F] text-white shadow-xl p-6 transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-300">Menu</span>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 hover:bg-white/10"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-base text-white/90 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a
              href="#pricing"
              className="block w-full text-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              Login/Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

