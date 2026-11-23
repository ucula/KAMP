import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextHeading } from "@/components/ui/text-heading";

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";

export function HomeFooter({ basePath = "" }: { basePath?: string }) {
  return (
    <footer className="bg-[#211a1b] pt-16 pb-8 text-white min-[900px]:pt-20">
      <div className={container}>
        <p className="text-xs font-extrabold tracking-[.2em] text-[#ff8790]">
          PAY IT FORWARD
        </p>
        <TextHeading
          as="h2"
          className="my-10 max-w-[920px] text-[clamp(22px,6vw,45px)] leading-[1.2] font-extrabold min-[900px]:text-[clamp(42px,5vw,72px)]"
          text="Knowledge Shard Today."
          accent="Possibilities Created Tomorrow."
          accentClassName="text-[#ff606c]"
          breakBeforeAccent
        />
        <p className="m-0 mb-10 max-w-[1200px] text-[clamp(18px,2.25vw,30px)] leading-[1.55] text-[#d3cacc]">
          Every experience shared, every connection made, and every opportunity
          created contributes to a stronger engineering community for
          generations to come.
        </p>
        <Link
          href={`${basePath}/application`}
          className={cn(
            "inline-flex min-w-[220px] items-center justify-between gap-8 rounded-full bg-[#ad1425] px-6 py-[18px] text-xs font-extrabold tracking-[.1em] text-white no-underline transition-colors hover:bg-[#8f101c]",
          )}
        >
          See Application Guide <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
        <div className="mt-14 flex flex-col items-start justify-between gap-[30px] border-t border-white/30 pt-7 min-[600px]:mt-20 min-[600px]:flex-row min-[600px]:items-center">
          <Link
            href={`${basePath}/home`}
            aria-label="KAMP Engineering 6 home"
            className="relative block h-11 w-[130px] shrink-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8790] max-[359px]:w-[115px] min-[600px]:h-12 min-[600px]:w-[165px] min-[900px]:w-[180px]"
          >
            <Image
              src="/kamp6/kamp-engineering-6-logo-white.png"
              alt=""
              width={596}
              height={231}
              sizes="(max-width: 359px) 120px, (max-width: 599px) 140px, (max-width: 899px) 170px, 190px"
              className="absolute top-1/2 left-1/2 h-auto w-[140px] max-w-none -translate-x-1/2 -translate-y-1/2 max-[359px]:w-[120px] min-[600px]:w-[170px] min-[900px]:w-[190px]"
            />
          </Link>
          <p className="text-[13px] text-[#c8bfc0]">
            Where Wisdom Empowers Potential.
          </p>
        </div>
      </div>
    </footer>
  );
}
