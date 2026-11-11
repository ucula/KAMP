import Link from "next/link";
import { cn } from "@/lib/utils";

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1360px] min-[900px]:w-[calc(100%-96px)]";

export function HomeFooter({ basePath = "" }: { basePath?: string }) {
  return (
    <footer className="bg-[#211a1b] pt-[90px] pb-[30px] text-white min-[900px]:pt-[120px]">
      <div className={container}>
        <p className="text-xs font-extrabold tracking-[.2em] text-[#ff8790]">
          PAY IT FORWARD
        </p>
        <h2 className="my-[55px] text-[clamp(55px,8vw,100px)] leading-[.98] font-extrabold tracking-[-.075em]">
          Knowledge Shard Today.
          <br />
          <span className="text-[#ff606c]">
            Possibilities Created Tomorrow.
          </span>
        </h2>
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
          Explore Our Community
          <span aria-hidden="true" className="text-[19px] leading-none">
            ↗
          </span>
        </Link>
        <div className="mt-[85px] flex flex-col items-start justify-between gap-[30px] border-t border-white/30 pt-7 min-[600px]:mt-[115px] min-[600px]:flex-row min-[600px]:items-center">
          <Link
            href={basePath || "/home"}
            aria-label="KAMP6 home"
            className="text-[25px] font-black tracking-[-.09em] text-white no-underline"
          >
            KAMP<span className="text-[#ff606c]">6</span>
          </Link>
          <p className="text-[13px] text-[#c8bfc0]">
            Where wisdom empowers potential.
          </p>
        </div>
      </div>
    </footer>
  );
}
