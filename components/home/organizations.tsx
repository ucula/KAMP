import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const organizations = [
  "Green and teal Thai organization",
  "Blue Thai institutional seal",
  "Orange Thai institutional seal",
  "Accenture",
  "AIS",
  "KAMP Engineering 6",
  "Asia Plus Group Holdings",
  "Asset World Corporation",
  "Bain & Company",
  "Bluebik",
  "Singha Corporation",
  "Chevron",
  "CP AXTRA",
  "CTC",
  "DataX",
  "DELV Aerospace",
  "DSS+",
  "Food Passion",
  "Geppetto",
  "GPSC",
  "Hewlett Packard Enterprise",
  "Huawei",
  "KBTG",
  "M and W",
  "Mazda",
  "MFEC",
  "Nestlé",
  "PTT Group",
  "PTT LNG",
  "PTT OR",
  "S. Khonkaen",
  "T.MAN",
  "Thai Airways",
  "Toyota",
  "Orange building mark",
];

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
        <div className="grid grid-cols-2 gap-3 min-[900px]:grid-cols-4">
          {organizations.map((name, index) => (
            <Card
              key={name}
              className="rounded-[14px] border-[#eadfdf] bg-white"
            >
              <CardContent className="relative h-[120px] p-0">
                <Image
                  src={`/kamp6/organizations/organization-${String(index + 1).padStart(2, "0")}.png`}
                  alt={`${name} logo`}
                  fill
                  sizes="(max-width: 899px) 50vw, 25vw"
                  className="object-contain p-5"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
