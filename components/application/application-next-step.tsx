import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TextHeading } from "@/components/ui/text-heading";

export function ApplicationNextStep({ basePath = "" }: { basePath?: string }) {
  return (
    <section className="mt-14 flex flex-col items-start justify-between gap-8 rounded-[22px] bg-[#211a1b] p-7 text-white min-[900px]:flex-row min-[900px]:items-end min-[900px]:gap-10 min-[900px]:p-10">
      <TextHeading
        as="h2"
        className="max-w-none text-[clamp(28px,4.5vw,62px)] leading-[1.12] tracking-[-.06em] min-[900px]:whitespace-nowrap"
        text="Prepare for the Interview"
      />
      <Link
        href={`${basePath}/interview`}
        className={cn(
          buttonVariants(),
          "min-w-max gap-[25px] px-[22px] py-4 text-xs font-extrabold tracking-[.08em] no-underline",
        )}
      >
        See Interview Guide <ArrowUpRight size={20} aria-hidden="true" />
      </Link>
    </section>
  );
}
