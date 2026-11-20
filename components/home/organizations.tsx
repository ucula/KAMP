import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { homeTopicHeadingClass, TextHeading } from "@/components/ui/text-heading";

const organizations = [
  { name: "ก.ล.ต.", locale: "th", logo: "sec-thailand.png" },
  {
    name: "การประปานครหลวง",
    locale: "th",
    logo: "metropolitan-waterworks-authority.png",
  },
  {
    name: "สำนักงานทรัพยากรน้ำแห่งชาติ",
    locale: "th",
    logo: "national-water-resources-office.png",
  },
  { name: "Accenture Thailand", locale: "en", logo: "accenture-thailand.png" },
  { name: "AIS", locale: "en", logo: "ais.png" },
  {
    name: "Asia Plus Group Holding",
    locale: "en",
    logo: "asia-plus-group-holding.png",
  },
  {
    name: "Asset World Corporation",
    locale: "en",
    logo: "asset-world-corporation.png",
  },
  { name: "Bain & Company", locale: "en", logo: "bain-and-company.png" },
  { name: "Bluebik Group PLC", locale: "en", logo: "bluebik-group.png" },
  { name: "Chevron", locale: "en", logo: "chevron.png" },
  { name: "CP AXTRA", locale: "en", logo: "cp-axtra.png" },
  { name: "CTC", locale: "en", logo: "ctc.png" },
  { name: "Data X", locale: "en", logo: "data-x.png" },
  { name: "DELV Aerospace", locale: "en", logo: "delv.png" },
  { name: "DSS+", locale: "en", logo: "dss.png" },
  { name: "Food Passion", locale: "en", logo: "food-passion.png" },
  { name: "GEPPETTO", locale: "en", logo: "geppetto.png" },
  { name: "GPSC", locale: "en", logo: "gpsc.png" },
  {
    name: "Hewlett Packard Enterprise",
    locale: "en",
    logo: "hewlett-packard-enterprise.png",
  },
  { name: "Huawei Technology", locale: "en", logo: "huawei-technology.png" },
  { name: "KBTG", locale: "en", logo: "kbtg.png" },
  { name: "LINE MAN Wongnai", locale: "en", logo: "line-man-wongnai.png" },
  { name: "Mazda Sales", locale: "en", logo: "mazda-sales.png" },
  { name: "MFEC", locale: "en", logo: "mfec.png" },
  { name: "Nestlé", locale: "en", logo: "nestle.png" },
  { name: "PTT", locale: "en", logo: "ptt.png" },
  { name: "PTT LNG", locale: "en", logo: "ptt-lng.png" },
  {
    name: "PTT Oil and Retail Business PLC",
    locale: "en",
    logo: "ptt-oil-and-retail-business.png",
  },
  { name: "S. Khonkaen", locale: "en", logo: "s-khonkaen.png" },
  { name: "Singha Corporation", locale: "en", logo: "singha.png" },
  { name: "T.MAN", locale: "en", logo: "t-man.png" },
  { name: "Thai Airways", locale: "en", logo: "thai-airways.png" },
  {
    name: "Toyota Motor Thailand",
    locale: "en",
    logo: "toyota-motor-thailand.png",
  },
  { name: "TTS", locale: "en", logo: "tts.png" },
].sort((a, b) => {
  if (a.locale !== b.locale) return a.locale === "th" ? -1 : 1;
  return new Intl.Collator(a.locale, { sensitivity: "base" }).compare(
    a.name,
    b.name,
  );
});

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";
const section = "scroll-mt-[92px] py-14 min-[900px]:py-20";
const heading = `${homeTopicHeadingClass} max-w-none min-[900px]:whitespace-nowrap`;
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
          <TextHeading
            as="h2"
            id="organizations-title"
            className={heading}
            text="Mentors'"
            accent="Organizations"
            accentClassName="text-[#ad1425]"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 min-[900px]:grid-cols-4">
          {organizations.map(({ name, logo }) => (
            <Card
              key={name}
              className="rounded-[14px] border-[#eadfdf] bg-white"
            >
              <CardContent className="relative h-[90px] p-0">
                <Image
                  src={`/kamp6/organizations/${logo}`}
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
