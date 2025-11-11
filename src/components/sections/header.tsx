"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/content/site";
import { Icons } from "@/components/ui/icons";
import { NAVIGATION, BUTTONS, SPACING } from "@/lib/responsive";
import { cn } from "@/lib/utils";

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
    <nav className={cn(NAVIGATION.header, "shadow bg-[#0F0F0F]")}>
      <div className={NAVIGATION.headerContainer}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                className="w-auto h-6 sm:h-8 rounded-md transition-transform duration-200 hover:scale-105"
                src={siteContent.header.logo}
                alt="Magnus Hathaway Logo"
                width={32}
                height={32}
                priority
              />
              <span className="text-white text-sm sm:text-base lg:text-xl ml-2 font-medium">
                Magnus Hathaway
              </span>
            </Link>
          </div>
          {/* Desktop nav */}
          <div className={NAVIGATION.desktopMenu}>
            <div className="flex items-center">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-medium text-white transition-all duration-200 hover:text-gray-300 hover:bg-white/10 rounded-md px-3 py-2 mx-1"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            {/* <div className="ml-4">
              <Link
                href="#pricing"
                className={cn(
                  BUTTONS.md,
                  "rounded-md font-medium tracking-wide text-black bg-white transition-all duration-200 hover:bg-gray-200 hover:scale-105 shadow-sm hover:shadow-md"
                )}
              >
                Login/Register
              </Link>
            </div> */}
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
                <Icons.Close className="w-6 h-6 transition-transform duration-200" />
              ) : (
                <Icons.Menu className="w-6 h-6 transition-transform duration-200" />
              )}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          NAVIGATION.mobileMenu,
          open ? "opacity-100" : "pointer-events-none opacity-0",
          "transition-opacity duration-300"
        )}
        onClick={() => setOpen(false)}
      >
        <div className={NAVIGATION.mobileOverlay} />
        <div
          className={cn(
            NAVIGATION.mobilePanel,
            "bg-[#0F0F0F] text-white transform transition-transform duration-300 ease-in-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
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
              <Icons.Close className="w-5 h-5" />
            </button>
          </div>
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block text-base text-white/90 hover:text-white transition-all duration-200 hover:bg-white/10 rounded-md px-3 py-2 -mx-3"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link
              href="#pricing"
              className={cn(
                BUTTONS.md,
                "block w-full text-center rounded-md bg-white text-black hover:bg-gray-200 transition-all duration-200 hover:scale-105 shadow-sm"
              )}
              onClick={() => setOpen(false)}
            >
              Login/Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

