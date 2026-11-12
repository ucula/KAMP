"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Mentee } from "@/lib/mentees";

export function CandidateGallery({ candidates }: { candidates: Mentee[] }) {
  const [selected, setSelected] = useState<Mentee | null>(null);
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [programType, setProgramType] = useState("");
  const [columns, setColumns] = useState<1 | 2 | 3>(3);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const query = search.trim().replace(/\s+/g, " ").toLocaleLowerCase();
  const years = [
    ...new Set(candidates.map((candidate) => candidate.year).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const programTypes = [
    ...new Set(
      candidates.map((candidate) => candidate.program_type).filter(Boolean),
    ),
  ].sort();
  const visibleCandidates = candidates.filter(
    (candidate) =>
      (!year || candidate.year === year) &&
      (!programType || candidate.program_type === programType) &&
      (!query ||
        `${candidate.firstname} ${candidate.surname} ${candidate.code}`
          .toLocaleLowerCase()
          .includes(query)),
  );

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
  const submittedCount = documents.filter(([, href]) => href?.trim()).length;

  return (
    <>
      <div className="relative mb-8 grid gap-4 rounded-[20px] border border-[#eadada] bg-white/80 p-5 shadow-[0_10px_30px_#5a25250a] min-[600px]:grid-cols-2 min-[600px]:p-6 min-[900px]:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="min-[600px]:col-span-2 min-[900px]:col-span-1">
          <label
            htmlFor="candidate-search"
            className="mb-2 block text-sm font-bold text-[#554b4c]"
          >
            Search candidates by name or code
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              size={19}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-[#a8777d]"
            />
            <input
              id="candidate-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Enter a name or code"
              className="w-full rounded-xl border border-[#d8c6c8] bg-white py-3 pr-4 pl-11 text-base text-[#211a1b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="candidate-year"
            className="mb-2 block text-sm font-bold text-[#554b4c]"
          >
            Year
          </label>
          <select
            id="candidate-year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="w-full rounded-xl border border-[#d8c6c8] bg-white px-4 py-3 text-base text-[#211a1b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]"
          >
            <option value="">All years</option>
            {years.map((value) => (
              <option key={value} value={value}>
                Year {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="candidate-program"
            className="mb-2 block text-sm font-bold text-[#554b4c]"
          >
            Program type
          </label>
          <select
            id="candidate-program"
            value={programType}
            onChange={(event) => setProgramType(event.target.value)}
            className="w-full rounded-xl border border-[#d8c6c8] bg-white px-4 py-3 text-base text-[#211a1b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]"
          >
            <option value="">All programs</option>
            {programTypes.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 min-[600px]:col-span-2 min-[900px]:col-span-3">
          <p
            role="status"
            className="m-0 text-xs font-extrabold tracking-[.14em] text-[#ad1425]"
          >
            {visibleCandidates.length} OF {candidates.length} PROFILES
          </p>
          <div
            role="group"
            aria-label="Candidate grid columns"
            className="hidden items-center gap-2 min-[600px]:flex"
          >
            <span className="mr-1 text-xs font-bold text-[#554b4c]">
              Columns
            </span>
            {(
              [
                [1, "/kamp6/icons/fluent-mdl2--single-column.svg"],
                [2, "/kamp6/icons/fluent-mdl2--double-column.svg"],
                [3, "/kamp6/icons/cil--view-column.svg"],
              ] as const
            ).map(([count, icon]) => (
              <button
                key={count}
                type="button"
                aria-label={`${count} ${count === 1 ? "column" : "columns"}`}
                aria-pressed={columns === count}
                onClick={() => setColumns(count)}
                className={`flex size-9 items-center justify-center rounded-lg border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425] ${columns === count ? "border-[#ad1425] bg-[#ad1425]" : "border-[#d8c6c8] bg-white hover:border-[#ad1425]"}`}
              >
                <Image
                  src={icon}
                  alt=""
                  width={20}
                  height={20}
                  className={
                    columns === count ? "brightness-0 invert" : "opacity-70"
                  }
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-1 gap-4 ${columns === 1 ? "min-[600px]:grid-cols-1" : columns === 2 ? "min-[600px]:grid-cols-2" : "min-[600px]:grid-cols-3"}`}
      >
        {visibleCandidates.map((candidate) => (
          <button
            key={candidate.id}
            type="button"
            onClick={() => setSelected(candidate)}
            className="group relative flex min-h-[250px] min-w-0 w-full cursor-pointer flex-col items-start justify-between overflow-hidden rounded-[20px] border border-[#e9d9d9] bg-white px-5 py-5 text-left text-[#211a1b] shadow-[0_8px_24px_#5a25250a] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-[#c77a82] hover:shadow-[0_18px_35px_#9d737322] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-[#ad1425]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full border-[22px] border-[#ad1425]/5 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="relative flex w-full items-center justify-between gap-3">
              <span className="rounded-full border border-[#f0dddd] bg-[#fff7f7] px-3 py-1 text-[11px] font-extrabold tracking-[.08em] text-[#ad1425]">
                {candidate.code}
              </span>
            </span>
            <span className="relative block w-full">
              <strong className="block text-[21px] leading-[1.2] tracking-[-.045em] break-words">
                {candidate.firstname} {candidate.surname}
              </strong>
              <span className="mt-2 block text-[13px] leading-[1.5] text-[#74696a] break-words">
                Year {candidate.year} · {candidate.major}
              </span>
              {candidate.program_type && (
                <span className="mt-3 inline-block max-w-full rounded-md bg-[#f8eeee] px-2.5 py-1 text-[11px] font-semibold text-[#805258] break-words">
                  {candidate.program_type}
                </span>
              )}
            </span>
            <span className="relative flex w-full items-center justify-between border-t border-[#f0e4e4] pt-3 text-xs font-bold tracking-[.1em] text-[#ad1425]">
              VIEW PROFILE{" "}
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </button>
        ))}
      </div>
      {visibleCandidates.length === 0 && (
        <p className="rounded-[18px] border border-[#e9d9d9] bg-white p-6 text-[#6d6263]">
          No candidates match your search or filters.
        </p>
      )}
      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        aria-labelledby="candidate-dialog-title"
        className="m-auto max-h-[calc(100svh-32px)] w-[calc(100%-32px)] max-w-[760px] overflow-auto rounded-[24px] border border-[#eadada] bg-[#faf6f5] p-0 text-[#211a1b] shadow-[0_25px_80px_#211a1b44] backdrop:bg-[#211a1b99]"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-[#35191d] to-[#211a1b] p-6 text-white min-[600px]:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -right-24 size-72 rounded-full border-[48px] border-white/5"
          />
          <div className="relative flex items-center justify-between gap-5">
            <p className="text-[11px] font-extrabold tracking-[.18em] text-[#ffbfc5]">
              KAMP6 / CANDIDATE PROFILE
            </p>
            <Button
              variant="outline"
              size="icon"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close profile"
              className="size-10 shrink-0 border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <X size={20} />
            </Button>
          </div>
          <h2
            id="candidate-dialog-title"
            className="relative mt-9 mb-5 text-[clamp(36px,5vw,58px)] leading-[1.02] tracking-[-.065em] break-words"
          >
            {selected?.firstname} {selected?.surname}
          </h2>
          <div className="relative flex flex-wrap gap-2 text-xs font-bold">
            <span className="rounded-full bg-[#ad1425] px-4 py-2 text-white">
              {selected?.code}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[#f6e6e7]">
              Year {selected?.year}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[#f6e6e7]">
              {selected?.major}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[#f6e6e7]">
              {selected?.program_type}
            </span>
          </div>
        </div>
        <div className="px-6 pt-8 pb-9 min-[600px]:px-9">
          <p className="mb-2 text-[11px] font-extrabold tracking-[.18em] text-[#ad1425]">
            SUBMITTED MATERIALS
          </p>
          <p className="mb-6 text-sm leading-[1.5] text-[#6d6263]">
            Open the links below to review this candidate&apos;s work.
          </p>
          <div className="mb-6 rounded-2xl border border-[#eadfdf] bg-white px-5 py-4">
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <span className="text-xs font-bold text-[#554b4c]">
                Materials submitted
              </span>
              <span className="text-sm font-extrabold text-[#ad1425]">
                {submittedCount} / 6
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#f2e4e5]">
              <div
                className="h-full rounded-full bg-[#ad1425]"
                style={{ width: `${(submittedCount / 6) * 100}%` }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 min-[600px]:grid-cols-2">
            {documents.map(([label, href], index) => (
              <div
                key={label}
                className={`min-h-[125px] rounded-2xl border p-5 shadow-[0_8px_24px_#5a252508] ${href?.trim() ? "border-[#eadfdf] bg-white" : "border-[#e8b5b9] bg-[#fff8f8]"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-extrabold tracking-[.13em] text-[#ad1425]">
                    <span className="mr-2 text-[#b99397]">0{index + 1}</span>
                    {label.toUpperCase()}
                  </span>
                  {href?.trim() && (
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-[#ad1425]"
                    />
                  )}
                </div>
                {href?.trim() ? (
                  <a
                    href={href.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block break-all text-[15px] font-semibold leading-[1.5] text-[#554b4c] underline decoration-[#b88b90] underline-offset-2 hover:text-[#ad1425] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]"
                  >
                    {href.trim()}
                  </a>
                ) : (
                  <p className="mt-4 text-[15px] font-semibold text-[#ad1425]">
                    Did not submit
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
