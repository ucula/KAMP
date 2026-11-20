import { cn } from "@/lib/utils";

type Props = {
  as: "h1" | "h2" | "h3";
  id?: string;
  ariaLabel?: string;
  className?: string;
  text: string;
  secondLine?: string;
  accent?: string;
  accentClassName?: string;
  breakBeforeAccent?: boolean;
};

export function TextHeading({
  as: Heading,
  id,
  ariaLabel,
  className,
  text,
  secondLine,
  accent,
  accentClassName,
  breakBeforeAccent = false,
}: Props) {
  return (
    <Heading
      id={id}
      aria-label={ariaLabel}
      className={cn("font-[Arial,Helvetica,sans-serif]", className)}
    >
      {text}
      {secondLine && (
        <>
          <br />
          {secondLine}
        </>
      )}
      {accent && (
        <>
          {breakBeforeAccent ? <br /> : " "}
          <span className={accentClassName}>{accent}</span>
        </>
      )}
    </Heading>
  );
}
