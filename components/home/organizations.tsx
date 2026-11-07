import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1360px] min-[900px]:w-[calc(100%-96px)]";
const section = "scroll-mt-[92px] py-20 min-[900px]:py-[130px]";
const heading =
  "max-w-[850px] text-[52px] leading-[.99] font-extrabold tracking-[-.075em] min-[900px]:text-[clamp(50px,6.3vw,90px)]";
const headingRow =
  "grid grid-cols-1 gap-8 min-[900px]:grid-cols-[1.2fr_.8fr] min-[900px]:gap-[70px] ";

export function Organizations() {
  return (
    <section
      aria-labelledby="organizations-title"
      className={cn(section, "bg-[#f9f6f4]")}
    >
      <div className={container}>
        <p className="border-b border-[#ded5d5] pb-[25px] text-xs font-extrabold tracking-[.22em] text-[#ad1425]" />
        <div className={headingRow}>
          <h2 id="organizations-title" className={heading}>
            Mentors&apos; <span className="text-[#ad1425]">Organizations</span>
          </h2>
        </div>
        <div
          aria-hidden="true"
          className="grid grid-cols-2 gap-3 min-[900px]:grid-cols-4"
        >
          {Array.from({ length: 8 }, (_, index) => (
            <Card
              key={index}
              className="min-h-[110px] rounded-[14px] border-dashed border-[#d8c6c8] bg-transparent text-xs font-extrabold tracking-[.25em] text-[#bbafb0]"
            >
              <CardContent className="grid min-h-[110px] place-items-center p-0">
                LOGO
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
