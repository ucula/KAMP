import Image from "next/image";
import { CommunityHeading } from "./community-heading";

const container =
  "mx-auto my-auto w-[calc(100%-48px)] max-w-[1360px] min-[900px]:w-[calc(100%-96px)]";
const heading =
  "text-[clamp(28px,5vw,72px)] leading-[.99] font-extrabold tracking-[-.075em]";

export function Kamp() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-[92px] pb-16"
    >
      <div className={container}>
        <div className="pt-12 pb-6 min-[900px]:pt-14 min-[900px]:pb-8">
          <CommunityHeading className={heading} />
          <p className="mt-3 font-[Arial,Helvetica,sans-serif] text-[clamp(18px,2.2vw,30px)] leading-[1.35] font-bold tracking-[-.02em] text-[#211a1b]">
            <span className="text-[#a71422]">Platform</span> to connect the
            value with all stakeholders for creating a Well-Rounded
            Next-Generation KU Engineering
          </p>
        </div>
        <Image
          src="/kamp6/community-connection.png"
          alt="KAMP Engineering 6 connects engi, Kasetsart University, and business, public, and private sectors."
          width={1948}
          height={703}
          sizes="(max-width: 899px) calc(100vw - 48px), (max-width: 1456px) calc(100vw - 96px), 1360px"
          className="h-auto w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
