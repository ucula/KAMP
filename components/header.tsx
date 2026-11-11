import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "/home", label: "Home" },
  { href: "/application", label: "Application" },
  { href: "/interview", label: "Interview Prep" },
];

export function Header({
  activeHref,
  basePath = "",
}: {
  activeHref?: string;
  basePath?: string;
}) {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/15 text-white"
      style={{ background: "linear-gradient(90deg, #2c1215 0%, #211a1b 78%)" }}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[76px] w-full max-w-[1440px] items-center justify-between gap-2 px-3 font-[Arial,Helvetica,sans-serif] min-[600px]:gap-4 min-[600px]:px-5 min-[900px]:min-h-[92px] min-[900px]:gap-8 min-[900px]:px-10"
      >
        <Link
          href={basePath || "/home"}
          aria-label="KAMP Engineering 6 home"
          className="relative block h-11 w-[130px] shrink-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8790] max-[359px]:w-[115px] min-[600px]:h-12 min-[600px]:w-[165px] min-[900px]:h-[52px] min-[900px]:w-[190px]"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 7%, black 93%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 7%, black 93%, transparent)",
          }}
        >
          <Image
            src="/kamp6/kamp-engineering-6-logo.jpg"
            alt=""
            width={1108}
            height={1098}
            sizes="(max-width: 359px) 155px, (max-width: 599px) 175px, (max-width: 899px) 225px, 255px"
            loading="eager"
            className="absolute top-1/2 left-1/2 h-auto w-[175px] max-w-none -translate-x-1/2 -translate-y-1/2 max-[359px]:w-[155px] min-[600px]:w-[225px] min-[900px]:w-[255px]"
          />
        </Link>
        <div className="ml-auto flex min-w-0 items-center gap-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[900px]:gap-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href === "/home" && basePath ? basePath : `${basePath}${href}`}
              aria-current={href === activeHref ? "page" : undefined}
              className={cn(
                "shrink-0 rounded-md px-1.5 py-2 text-[13px] font-bold whitespace-nowrap text-[#f5e6e8] no-underline transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8790] max-[359px]:px-1 max-[359px]:text-xs min-[600px]:px-2 min-[600px]:text-sm min-[900px]:px-3 min-[900px]:text-base",
                href === activeHref &&
                  "text-[#ffbfc5] underline decoration-[#ff8790] underline-offset-[7px]",
              )}
            >
              {href === "/interview" ? (
                <>
                  <span className="min-[600px]:hidden">Interview</span>
                  <span className="hidden min-[600px]:inline">
                    Interview Prep
                  </span>
                </>
              ) : (
                label
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
