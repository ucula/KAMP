import { Card } from "@/components/ui/card";

const channels = [
  { name: "FACEBOOK", href: "https://www.facebook.com/kampengineering/" },
  {
    name: "INSTAGRAM",
    href: "https://www.instagram.com/kampengineering?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw==",
  },
  { name: "TIKTOK", href: "https://www.tiktok.com/@kampengineering" },
];

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1360px] min-[900px]:w-[calc(100%-96px)]";
const section = "scroll-mt-[92px] py-12 min-[900px]:py-20";
const heading =
  "max-w-[850px] text-[clamp(34px,8vw,52px)] leading-[.99] font-extrabold tracking-[-.075em] min-[900px]:text-[clamp(50px,6.3vw,90px)]";
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
          {channels.map(({ name, href }) => (
            <Card
              key={name}
              className="rounded-[18px] border-[#eadfdf]"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[140px] flex-col items-start justify-end gap-2 rounded-[18px] p-6 text-xl font-extrabold tracking-[-.02em] text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425] min-[600px]:min-h-[160px] min-[600px]:flex-row min-[600px]:items-end min-[600px]:justify-between min-[600px]:gap-[15px] min-[600px]:p-7"
              >
                {name}
                <span className="whitespace-nowrap text-[10px] tracking-[.12em] text-[#ad1425]">
                  VISIT CHANNEL ↗
                </span>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
