type SectionHeadingProps = {
  eyebrow?: string;
  id: string;
  note?: string;
  title: string;
};

export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <div className="mb-[45px] grid items-end gap-[22px_60px] min-[900px]:grid-cols-[1.1fr_.9fr]">
      <h2
        id={id}
        className="max-w-[760px] text-[46px] leading-[1.02] font-extrabold tracking-[-.065em] min-[600px]:text-[clamp(44px,5vw,68px)]"
      >
        {title}
      </h2>
    </div>
  );
}
