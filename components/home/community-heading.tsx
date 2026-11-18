"use client";

import { useReplayOnView } from "./use-replay-on-view";

export function CommunityHeading({ className }: { className: string }) {
  const { ref, visible } = useReplayOnView();

  return (
    <h2
      ref={ref}
      id="about-title"
      aria-label="Community & Connection."
      className={`typewriter-heading community-typewriter ${visible ? "is-visible" : ""} ${className}`}
    >
      <span className="typewriter-layout" aria-hidden="true">
        <span>Community</span> <span>&amp;</span> <span>Connection.</span>
      </span>
      <span className="typewriter-display" aria-hidden="true">
        <span>Community</span> <span>&amp;</span>{" "}
        <span className="text-[#ad1425]">Connection.</span>
      </span>
    </h2>
  );
}
