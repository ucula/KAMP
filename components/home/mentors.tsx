import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1360px] min-[900px]:w-[calc(100%-96px)]";
const section = "scroll-mt-[92px] py-24 min-[900px]:py-[130px]";
const heading =
  "max-w-[850px] text-[52px] leading-[.99] font-extrabold tracking-[-.075em] min-[900px]:text-[clamp(50px,6.3vw,90px)]";
const headingRow =
  "grid grid-cols-1 gap-8 min-[900px]:grid-cols-[1.2fr_.8fr] min-[900px]:gap-[70px]";

export function Mentors() {
  return (
    <section id="mentors" aria-labelledby="mentors-title" className={section}>
      <div className={container}>
        <p className="border-b border-[#ded5d5] pb-[25px] text-xs font-extrabold tracking-[.22em] text-[#ad1425]" />
        <div className={headingRow}>
          <h2 id="mentors-title" className={heading}>
            The People who help{" "}
            <span className="text-[#ad1425]">light the way.</span>
          </h2>
        </div>
        <div
          aria-label="Mentor profile placeholders"
          className="grid auto-cols-[minmax(190px,1fr)] grid-flow-col gap-[14px] overflow-x-auto pb-[14px] [scroll-snap-type:x_mandatory]"
        >
          {Array.from({ length: 12 }, (_, index) => (
            <Card
              key={index}
              className="min-w-[190px] rounded-[15px] border-[#eadfdf] bg-[#faf6f5] p-3 pb-5 [scroll-snap-align:start]"
            >
              <CardContent className="p-0">
                <div
                  aria-hidden="true"
                  className="mb-[18px] grid h-[230px] place-items-center rounded-[10px] text-[90px] text-[#ad142555]"
                  style={{
                    background:
                      "linear-gradient(145deg, #e7c8ca, #f5e8e6 65%, #d9acad)",
                  }}
                >
                  ✳
                </div>
              </CardContent>
              <CardHeader className="gap-2 p-0">
                <span className="text-[11px] font-extrabold tracking-[.14em] text-[#ad1425]">
                  MENTOR {String(index + 1).padStart(2, "0")}
                </span>
                <CardTitle className="text-base leading-normal font-bold text-[#594e50]">
                  Profile coming soon
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
