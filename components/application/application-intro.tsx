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
        className="page-title mt-10 mb-0 max-w-[1100px] leading-[.98] font-extrabold tracking-[-.075em]"
        text="Application"
        accent="Guide"
        accentClassName="text-[#ad1425]"
      />
      <p className="mt-5 pt-4 text-lg leading-[1.6] text-[#605557]">
        A guide to the materials mentees submitted — from statement of purpose
        and essay to videos and resume.
      </p>
    </section>
  );
}
