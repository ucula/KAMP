"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/home", label: "Home" },
  { href: "/application", label: "Application-Guide" },
  { href: "/interview", label: "Interview-Guide" },
  { href: "/candidates", label: "Your Candidates" },
];

export function Header({
  activeHref,
  basePath = "",
}: {
  activeHref?: string;
  basePath?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fluid-type sticky top-0 z-50 border-b border-white/15 text-white"
      style={{ background: "linear-gradient(90deg, #2c1215 0%, #211a1b 78%)" }}
    >
      <nav
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape") setMenuOpen(false);
        }}
        className="relative mx-auto flex min-h-[68px] w-full max-w-[1440px] items-center justify-between gap-2 px-3 font-[Arial,Helvetica,sans-serif] min-[600px]:gap-4 min-[600px]:px-5 min-[900px]:min-h-[76px] min-[900px]:gap-8 min-[900px]:px-10"
      >
        <Link
          href={`${basePath}/home`}
          onClick={() => setMenuOpen(false)}
          aria-label="KAMP Engineering 6 home"
          className="relative block h-11 w-[130px] shrink-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8790] max-[359px]:w-[115px] min-[600px]:h-12 min-[600px]:w-[165px] min-[900px]:w-[180px]"
        >
          <Image
            src="/kamp6/kamp-engineering-6-logo-white.png"
            alt=""
            width={596}
            height={231}
            sizes="(max-width: 359px) 120px, (max-width: 599px) 140px, (max-width: 899px) 170px, 190px"
            loading="eager"
            className="absolute top-1/2 left-1/2 h-auto w-[140px] max-w-none -translate-x-1/2 -translate-y-1/2 max-[359px]:w-[120px] min-[600px]:w-[170px] min-[900px]:w-[190px]"
          />
        </Link>
        <div
          id="main-menu"
          className={cn(
            "absolute top-full right-0 left-0 z-10 flex-col border-b border-white/15 bg-[#211a1b] px-3 py-2 shadow-lg min-[769px]:static min-[769px]:ml-auto min-[769px]:flex min-[769px]:flex-row min-[769px]:items-center min-[769px]:gap-0 min-[769px]:border-0 min-[769px]:bg-transparent min-[769px]:p-0 min-[769px]:shadow-none min-[900px]:gap-2",
            menuOpen ? "flex" : "hidden",
          )}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={`${basePath}${href}`}
              onClick={() => setMenuOpen(false)}
              aria-current={href === activeHref ? "page" : undefined}
              className={cn(
                "flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-bold text-[#f5e6e8] no-underline transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8790] min-[769px]:min-h-0 min-[769px]:shrink-0 min-[769px]:px-2 min-[769px]:whitespace-nowrap min-[900px]:px-3",
                href === activeHref &&
                  "text-[#ffbfc5] underline decoration-[#ff8790] underline-offset-[7px]",
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto flex size-11 shrink-0 appearance-none flex-col items-center justify-center gap-[5px] rounded-md border border-white/20 bg-white/5 text-[#ffbfc5] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8790] min-[769px]:hidden"
        >
          <span
            className={cn(
              "h-0.5 w-6 rounded-full bg-current transition-transform",
              menuOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 rounded-full bg-current transition-opacity",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 rounded-full bg-current transition-transform",
              menuOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>
      </nav>
    </header>
  );
}
