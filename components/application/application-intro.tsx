import { TextHeading } from "@/components/ui/text-heading";

export function ApplicationIntro() {
  return (
    <section
      aria-labelledby="application-title"
      className="py-14 min-[900px]:pt-16 min-[900px]:pb-20"
    >
      <TextHeading
        as="h1"
        id="application-title"
        className="mt-10 mb-8 max-w-[1100px] text-[clamp(46px,7vw,96px)] leading-[.98] font-extrabold tracking-[-.075em]"
        text="Application Guide"
      />
    </section>
  );
}
