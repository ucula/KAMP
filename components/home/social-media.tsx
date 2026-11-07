import { Card } from "@/components/ui/card";

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1360px] min-[900px]:w-[calc(100%-96px)]";
const section = "scroll-mt-[92px] py-15 min-[900px]:py-[130px]";
const heading =
  "max-w-[850px] text-[52px] leading-[.99] font-extrabold tracking-[-.075em] min-[900px]:text-[clamp(50px,6.3vw,90px)]";
const headingRow =
  "grid grid-cols-1 gap-8 min-[900px]:grid-cols-[1.2fr_.8fr] min-[900px]:gap-[70px]";

export function SocialMedia() {
  return (
    <section aria-labelledby="social-title" className={section}>
      <div className={container}>
        <p className="border-b border-[#ded5d5] pb-[25px] text-xs font-extrabold tracking-[.22em] text-[#ad1425]" />
        <div className={headingRow}>
          <h2 id="social-title" className={heading}>
            Our Social media<span className="text-[#ad1425]"> Platform</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[14px] min-[900px]:grid-cols-3">
          {["FACEBOOK", "INSTAGRAM", "LINE"].map((channel) => (
            <Card
              key={channel}
              className="flex min-h-[160px] items-end justify-between gap-[15px] rounded-[18px] border-[#eadfdf] p-7 text-xl font-extrabold tracking-[-.02em]"
            >
              {channel}
              <span className="whitespace-nowrap text-[10px] tracking-[.12em] text-[#ad1425]">
                LINK COMING SOON ↗
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
