import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function InterviewNextStep() {
  return (
    <section className="flex flex-col items-start justify-between gap-8 rounded-[22px] bg-[#211a1b] p-[35px] text-white min-[900px]:flex-row min-[900px]:items-end min-[900px]:gap-10 min-[900px]:p-[55px]">
      <div>
        <p className="mb-[22px] text-xs font-extrabold tracking-[.18em] text-[#ff929b]">
          APPLICATION GUIDE
        </p>
        <h2 className="max-w-[650px] text-[clamp(38px,4.5vw,62px)] leading-[1.03] tracking-[-.06em]">
          Prepare your application story.
        </h2>
      </div>
      <Link
        href="/application"
        className={cn(
          buttonVariants(),
          "min-w-max gap-[25px] px-[22px] py-4 text-xs font-extrabold tracking-[.08em] no-underline",
        )}
      >
        VIEW APPLICATION <ArrowUpRight size={20} aria-hidden="true" />
      </Link>
    </section>
  );
}
