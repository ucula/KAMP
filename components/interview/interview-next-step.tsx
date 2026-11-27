import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TextHeading } from "@/components/ui/text-heading";

export function InterviewNextStep({ basePath = "" }: { basePath?: string }) {
  return (
    <section className="flex flex-col items-start justify-between gap-8 rounded-[22px] bg-[#211a1b] p-7 text-white min-[900px]:flex-row min-[900px]:items-end min-[900px]:gap-10 min-[900px]:p-10">
      <div>
        <TextHeading
          as="h2"
          className="max-w-none text-[clamp(28px,4.5vw,62px)] leading-[1.12] tracking-[-.06em] min-[900px]:whitespace-nowrap"
          text="Meet your CANDIDATES"
        />
      </div>
      <Link
        href={`${basePath}/candidates`}
        className={cn(
          buttonVariants(),
          "min-w-max gap-[25px] px-[22px] py-4 text-[clamp(9px,1.2vw,12px)] font-extrabold tracking-[.08em] no-underline",
        )}
      >
        See my Candidates <ArrowUpRight size={20} aria-hidden="true" />
      </Link>
    </section>
  );
}
