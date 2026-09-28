import Link from "next/link";

const links = [
  { href: "/home", label: "Home" },
  { href: "/app-guide", label: "AppGuide" },
  { href: "/interview", label: "InterviewPrep" },
];

export function Header({ activeHref }: { activeHref?: string }) {
  return (
    <header className="flex h-[70px] items-center justify-center bg-white px-4">
      <nav
        aria-label="Main navigation"
        className="flex items-center gap-7 sm:gap-10"
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={href === activeHref ? "page" : undefined}
            className="text-sm font-medium text-[#34435c] transition-colors hover:text-[#991b24] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#991b24] aria-[current=page]:text-[#070d22]"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
