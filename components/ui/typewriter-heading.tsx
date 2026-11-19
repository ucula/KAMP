"use client";

import type { CSSProperties } from "react";
import { useReplayOnView } from "@/components/home/use-replay-on-view";
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

function words(value: string, offset = 0) {
  const parts = value.split(" ");

  return parts.map((word, index) => {
    const characters = offset + parts.slice(0, index).reduce((sum, part) => sum + part.length + 1, 0);

    return (
      <span key={`${index}-${word}`}>
        {index > 0 && " "}
        <span
          className="typewriter-word"
          style={{
            "--chars": word.length,
            "--delay": `${characters * 0.025}s`,
            "--duration": `${word.length * 0.025}s`,
          } as CSSProperties}
        >
          {word}
        </span>
      </span>
    );
  });
}

export function TypewriterHeading({
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
  const { ref, visible } = useReplayOnView();

  return (
    <Heading
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      className={cn(className, visible && "is-visible")}
    >
      {words(text)}
      {secondLine && (
        <>
          <br />
          {words(secondLine, text.length + 1)}
        </>
      )}
      {accent && (
        <>
          {breakBeforeAccent ? <br /> : " "}
          <span className={accentClassName}>
            {words(accent, text.length + (secondLine?.length ?? 0) + (secondLine ? 2 : 1))}
          </span>
        </>
      )}
    </Heading>
  );
}
