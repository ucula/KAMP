import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ApplicationIntro() {
  return (
    <section
      aria-labelledby="application-title"
      className="py-[85px] min-[900px]:pt-[100px] min-[900px]:pb-[110px]"
    >
      <p className="text-xs font-extrabold tracking-[.22em] text-[#ad1425]">
        KAMP ENGINEERING 6 / APPLICATION
      </p>
      <h1
        id="application-title"
        className="mt-10 mb-8 max-w-[1100px] text-[clamp(46px,7vw,96px)] leading-[.98] font-extrabold tracking-[-.075em]"
      >
        Your Potential.{" "}
        <span className="text-[#ad1425]">
          {" "}
          <br />
          Our Shared Journey.
        </span>
      </h1>
      <p className="max-w-[830px] text-[clamp(18px,2vw,23px)] leading-[1.65] text-[#605557]">
        KAMP6 welcomes individuals with curiosity, initiative, and a genuine
        desire to learn and grow. Join a community where experiences are shared,
        perspectives are valued, and future opportunities take shape.
      </p>
      <Link
        href="#prompts-title"
        className={cn(buttonVariants(), "mt-8 gap-3 no-underline")}
      >
        Join the KAMP6 Community
        <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </section>
  );
}
