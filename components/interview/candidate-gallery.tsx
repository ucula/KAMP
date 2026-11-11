"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Mentee } from "@/lib/mentees";

export function CandidateGallery({ candidates }: { candidates: Mentee[] }) {
  const [selected, setSelected] = useState<Mentee | null>(null);
  const [search, setSearch] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const query = search.trim().replace(/\s+/g, " ").toLocaleLowerCase();
  const visibleCandidates = query
    ? candidates.filter((candidate) =>
        `${candidate.firstname} ${candidate.surname} ${candidate.code}`
          .toLocaleLowerCase()
          .includes(query),
      )
    : candidates;

  useEffect(() => {
    if (selected && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [selected]);

  const documents = selected
    ? [
        ["SOP", selected.sop],
        ["Essay 1", selected.essay1],
        ["Essay 2", selected.essay2],
        ["Essay 3", selected.essay3],
        ["Video", selected.video],
        ["Resume", selected.resume],
      ]
    : [];

  return (
    <>
      <div className="mb-6 max-w-[420px]">
        <label htmlFor="candidate-search" className="mb-2 block text-sm font-bold text-[#554b4c]">
          Search candidates by name or code
        </label>
        <input
          id="candidate-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Enter a name or code"
          className="w-full rounded-xl border border-[#d8c6c8] bg-white px-4 py-3 text-base text-[#211a1b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]"
        />
        {query && (
          <p role="status" className="mt-2 text-sm text-[#6d6263]">
            {visibleCandidates.length} matching candidate{visibleCandidates.length === 1 ? "" : "s"}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 min-[600px]:grid-cols-2 min-[900px]:grid-cols-4">
        {visibleCandidates.map((candidate) => (
          <button
            key={candidate.id}
            type="button"
            onClick={() => setSelected(candidate)}
            className="flex min-h-[165px] min-w-0 w-full cursor-pointer flex-col items-start justify-between gap-4 rounded-[18px] border border-[#e9d9d9] bg-white px-5 py-5 text-left text-[#211a1b] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_15px_32px_#9d737322] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]"
          >
            <span>
              <strong className="block text-[21px] leading-[1.2] tracking-[-.045em] break-words">
                {candidate.firstname} {candidate.surname}
              </strong>
              <span className="mt-1 block text-xs font-bold tracking-[.08em] text-[#ad1425]">
                {candidate.code}
              </span>
              <span className="mt-2 block text-[13px] leading-[1.5] text-[#74696a] break-words">
                Year {candidate.year} · {candidate.major}
              </span>
            </span>
            <span className="shrink-0 text-xs font-bold tracking-[.1em] text-[#ad1425]">
              VIEW PROFILE ↗
            </span>
          </button>
        ))}
      </div>
      {visibleCandidates.length === 0 && (
        <p className="rounded-[18px] border border-[#e9d9d9] bg-white p-6 text-[#6d6263]">
          No candidates match that name or code.
        </p>
      )}
      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        aria-labelledby="candidate-dialog-title"
        className="m-auto max-h-[calc(100svh-32px)] w-[calc(100%-32px)] max-w-[600px] overflow-auto rounded-[18px] border-0 bg-[#faf6f5] p-6 text-[#211a1b] shadow-[0_25px_80px_#211a1b44] backdrop:bg-[#211a1b99] min-[600px]:p-10"
      >
        <div className="flex items-center justify-between gap-5">
          <p className="text-[11px] font-extrabold tracking-[.18em] text-[#ad1425]">
            CANDIDATE PROFILE
          </p>
          <Button
            variant="outline"
            size="icon"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close profile"
            className="size-10 border-0 bg-transparent text-[#211a1b] hover:bg-[#eadfdf]"
          >
            <X size={20} />
          </Button>
        </div>
        <h2
          id="candidate-dialog-title"
          className="mt-[30px] mb-3 text-[clamp(38px,5vw,58px)] tracking-[-.065em]"
        >
          {selected?.firstname} {selected?.surname}
        </h2>
        <p className="mb-3 text-sm font-bold tracking-[.08em] text-[#ad1425]">
          {selected?.code}
        </p>
        <p className="mb-[30px] text-base leading-[1.6] text-[#6d6263]">
          Year {selected?.year} · {selected?.major} · {selected?.program_type}
        </p>
        <div className="grid grid-cols-1 gap-3 min-[600px]:grid-cols-2">
          {documents.map(([label, href]) => (
            <div
              key={label}
              className="min-h-[90px] rounded-xl border border-[#eadfdf] bg-white p-[18px]"
            >
              <span className="text-[10px] font-extrabold tracking-[.13em] text-[#ad1425]">
                {label.toUpperCase()}
              </span>
              {href?.trim() ? (
                <a
                  href={href.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block break-all text-[15px] font-semibold text-[#554b4c] underline"
                >
                  {href.trim()}
                </a>
              ) : (
                <p className="mt-3 text-[15px] font-semibold text-[#ad1425]">
                  Did not submit
                </p>
              )}
            </div>
          ))}
        </div>
      </dialog>
    </>
  );
}
