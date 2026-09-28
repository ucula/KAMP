import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroActions() {
  return (
    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        href="/app-guide"
        className="inline-flex min-h-[50px] min-w-[211px] items-center justify-center gap-2 rounded-xl bg-[#a11922] px-6 text-[15px] font-semibold text-white shadow-[0_8px_14px_rgb(125_28_34_/_0.18)] transition-colors hover:bg-[#85151d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a11922]"
      >
        Start Application <ArrowRight aria-hidden="true" size={18} />
      </Link>
      <Link
        href="/app-guide"
        className="inline-flex min-h-[50px] min-w-[191px] items-center justify-center rounded-xl border border-[#e1e7f0] bg-white px-6 text-[15px] font-semibold text-[#34435c] shadow-[0_2px_3px_rgb(28_42_65_/_0.05)] transition-colors hover:bg-[#f8f9fc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#34435c]"
      >
        Explore App Guide
      </Link>
    </div>
  );
}
