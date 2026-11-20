import { Card } from "@/components/ui/card";
import { TextHeading } from "@/components/ui/text-heading";

const channels = [
  {
    name: "FACEBOOK",
    icon: "facebook",
    tone: "bg-[#f1f6ff] hover:bg-[#e8f0ff]",
    href: "https://www.facebook.com/kampengineering/",
  },
  {
    name: "INSTAGRAM",
    icon: "instagram",
    tone: "bg-gradient-to-br from-[#fff7ed] via-white to-[#fdf2f8] hover:from-[#ffedd5] hover:via-white hover:to-[#fce7f3]",
    href: "https://www.instagram.com/kampengineering?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw==",
  },
  {
    name: "TIKTOK",
    icon: "tiktok",
    tone: "bg-gradient-to-br from-[#e9fbfb] to-[#fff0f3] hover:from-[#d8f8f8] hover:to-[#ffe4e9]",
    href: "https://www.tiktok.com/@kampengineering",
  },
];

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";
const section = "scroll-mt-[92px] py-12 min-[900px]:py-20";
const heading =
  "max-w-none text-[clamp(22px,6vw,45px)] leading-[1.2] font-extrabold min-[900px]:text-[clamp(42px,5vw,72px)] min-[900px]:whitespace-nowrap";
const headingRow =
  "grid grid-cols-1 gap-8";

function SocialLogo({ platform }: { platform: string }) {
  if (platform === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-12 text-[#0866ff]">
        <path
          fill="currentColor"
          d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.016 4.388 11.009 10.125 11.928v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.979h-1.514c-1.49 0-1.955.93-1.955 1.885v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.09 24 12.073Z"
        />
      </svg>
    );
  }

  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-12">
        <defs>
          <linearGradient id="instagram-gradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffb13d" />
            <stop offset="48%" stopColor="#f12d78" />
            <stop offset="100%" stopColor="#8748d5" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#instagram-gradient)" strokeWidth="2.2" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="url(#instagram-gradient)" strokeWidth="2.2" />
        <circle cx="17.6" cy="6.5" r="1.25" fill="#e83e83" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-12">
      <path
        fill="#25f4ee"
        d="M19.59 6.69a4.79 4.79 0 0 1-4.24-4.78h-3.45v13.67a2.88 2.88 0 1 1-2.88-2.88c.3 0 .59.05.86.14V9.32c-.28-.04-.57-.07-.86-.07a6.33 6.33 0 1 0 6.33 6.33V8.63a8.21 8.21 0 0 0 4.8 1.54V6.72c-.19 0-.38-.01-.56-.03Z"
        transform="translate(-.65 .55)"
      />
      <path
        fill="#fe2c55"
        d="M19.59 6.69a4.79 4.79 0 0 1-4.24-4.78h-3.45v13.67a2.88 2.88 0 1 1-2.88-2.88c.3 0 .59.05.86.14V9.32c-.28-.04-.57-.07-.86-.07a6.33 6.33 0 1 0 6.33 6.33V8.63a8.21 8.21 0 0 0 4.8 1.54V6.72c-.19 0-.38-.01-.56-.03Z"
        transform="translate(.65 -.35)"
      />
      <path
        fill="#111111"
        d="M19.59 6.69a4.79 4.79 0 0 1-4.24-4.78h-3.45v13.67a2.88 2.88 0 1 1-2.88-2.88c.3 0 .59.05.86.14V9.32c-.28-.04-.57-.07-.86-.07a6.33 6.33 0 1 0 6.33 6.33V8.63a8.21 8.21 0 0 0 4.8 1.54V6.72c-.19 0-.38-.01-.56-.03Z"
      />
    </svg>
  );
}

export function SocialMedia() {
  return (
    <section aria-labelledby="social-title" className={section}>
      <div className={container}>
        <p className="border-b border-[#ded5d5] pb-[25px] text-xs font-extrabold tracking-[.22em] text-[#ad1425]" />
        <div className={headingRow}>
          <TextHeading as="h2" id="social-title" className={heading} text="Our Social media" accent="Platform" accentClassName="text-[#ad1425]" />
        </div>
        <div className="grid grid-cols-1 gap-[14px] min-[900px]:grid-cols-2 min-[1200px]:grid-cols-3">
          {channels.map(({ name, href, icon, tone }) => (
            <Card key={name} className="rounded-[18px] border-[#eadfdf]">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex min-h-[140px] flex-col items-start justify-between gap-4 rounded-[18px] p-6 text-xl font-extrabold tracking-[-.02em] text-inherit no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425] min-[600px]:min-h-[160px] min-[600px]:p-7 ${tone}`}
              >
                <SocialLogo platform={icon} />
                <span>{name}</span>
                {/* <span className="whitespace-nowrap text-[10px] tracking-[.12em] text-[#ad1425]">
                  VISIT CHANNEL
                </span> */}
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
