import Image from "next/image";
import { TextHeading } from "@/components/ui/text-heading";

const container =
  "mx-auto my-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";
const heading =
  "max-w-none text-[clamp(22px,6vw,45px)] leading-[1.2] font-extrabold min-[900px]:whitespace-nowrap min-[900px]:text-[clamp(42px,5vw,72px)]";

export function Kamp() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-[92px] pb-16"
    >
      <div className={container}>
        <div className="pt-12 pb-6 min-[900px]:pt-14 min-[900px]:pb-8">
          <TextHeading
            as="h2"
            id="about-title"
            className={heading}
            text="Kasetsart Alumni Mentorship"
            secondLine="Program"
            accent="- Engineering"
            accentClassName="text-[#ad1425]"
          />
          <p className="mt-3 font-[Arial,Helvetica,sans-serif] text-[clamp(18px,2.2vw,30px)] leading-[1.35] font-bold tracking-[-.02em] text-[#211a1b]">
            <span className="text-[#a71422]">Platform</span> to connect the
            value with all stakeholders for creating a Well-Rounded
            Next-Generation KU Engineering
          </p>
        </div>
        <Image
          src="/kamp6/kamp-overview.png"
          alt="KAMP Engineering connects KU Engineering, Kasetsart University, and business, public, and private sectors."
          width={1920}
          height={1080}
          sizes="(max-width: 899px) calc(100vw - 48px), (max-width: 1456px) calc(100vw - 96px), 1360px"
          className="h-auto w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
