"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Mentee } from "@/lib/mentees";
import slotSchedule from "@/lib/candidate-slots.json";

const slots = slotSchedule.flatMap((codes, index) =>
  codes.map((code, slot) => ({ code, pair: index + 1, slot: slot + 1 })),
);
const scheduledPairs = new Map<string, number[]>();
for (const { code, pair } of slots) {
  if (code) scheduledPairs.set(code, [...(scheduledPairs.get(code) ?? []), pair]);
}

export function CandidateGallery({
  candidates,
  allPairs = false,
  pair = null,
}: {
  candidates: Promise<Mentee[]>;
  allPairs?: boolean;
  pair?: number | null;
}) {
  const pairScope = pair ?? 0;
  const [loadedCandidates, setLoadedCandidates] = useState<Mentee[] | null>(
    null,
  );
  const [loadError, setLoadError] = useState(false);
  const [selected, setSelected] = useState<Mentee | null>(null);
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [programType, setProgramType] = useState("");
  const [selectedPair, setSelectedPair] = useState("");
  const [view, setView] = useState<"code" | "slot">("code");
  const [columns, setColumns] = useState<1 | 2 | 3>(3);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const profiles = loadedCandidates ?? [];
  const query = search.trim().replace(/\s+/g, " ").toLocaleLowerCase();
  const years = ["1", "2", "3", "4"];
  const programTypes = [
    ...new Set(
      profiles.map((candidate) => candidate.program_type).filter(Boolean),
    ),
  ].sort();
  const formatProgramType = (value: string) => {
    const type = value.trim();
    return ["ปกติ", "พิเศษ", "นานาชาติ"].includes(type) ? `ภาค${type}` : type;
  };
  const visibleCandidates = profiles.filter(
    (candidate) =>
      (!year || candidate.year === year) &&
      (!programType || candidate.program_type === programType) &&
      (!allPairs ||
        !selectedPair ||
        (scheduledPairs.get(candidate.code) ?? candidate.pairs).includes(
          Number(selectedPair),
        )) &&
      (!query ||
        `${candidate.firstname} ${candidate.surname} ${candidate.code}`
          .toLocaleLowerCase()
          .includes(query)),
  );
  const visibleByCode = new Map(
    visibleCandidates.map((candidate) => [candidate.code, candidate]),
  );
  const allByCode = new Map(profiles.map((candidate) => [candidate.code, candidate]));
  const displayRows =
    view === "slot"
      ? [
          ...slots
            .filter(
              ({ code, pair }) =>
                (allPairs
                  ? !selectedPair || pair === Number(selectedPair)
                  : pair === pairScope) &&
                (visibleByCode.has(code) ||
                  (!allByCode.has(code) &&
                    !year &&
                    !programType &&
                    (!query || code.toLocaleLowerCase().includes(query)))),
            )
            .map((entry) => ({
              ...entry,
              candidate: allByCode.get(entry.code) ?? null,
            })),
          ...(!selectedPair
            ? visibleCandidates
                .filter(
                  (candidate) =>
                    !slots.some(
                      (entry) =>
                        entry.code === candidate.code &&
                        (allPairs || entry.pair === pairScope),
                    ),
                )
                .map((candidate) => ({
                  code: candidate.code,
                  pair: pairScope,
                  slot: 0,
                  candidate,
                }))
            : []),
        ]
      : visibleCandidates.map((candidate) => ({
          code: candidate.code,
          pair: 0,
          slot: 0,
          candidate,
        }));

  useEffect(() => {
    let active = true;
    candidates.then(
      (rows) => {
        if (active) setLoadedCandidates(rows);
      },
      () => {
        if (active) setLoadError(true);
      },
    );
    return () => {
      active = false;
    };
  }, [candidates]);

  useEffect(() => {
    if (selected && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [selected]);

  const documents = selected
    ? [
        ["Self-Introduction Video", selected.self_intro_video],
        ["SOP", selected.sop],
        ["Essay", selected.essay1],
        ["Short Answer Video", selected.video],
        ["Resume", selected.resume],
      ]
    : [];

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
                {formatProgramType(value)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 min-[600px]:col-span-2 min-[900px]:col-span-3">
          <p
            role="status"
            className="m-0 text-xs font-extrabold tracking-[.14em] text-[#ad1425]"
          >
            {loadedCandidates
              ? view === "slot"
                ? `${displayRows.length} SLOT ENTRIES`
                : `${visibleCandidates.length} OF ${profiles.length} PROFILES`
              : loadError
                ? "COULD NOT LOAD PROFILES"
                : "LOADING PROFILES"}
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
                className={`size-9 items-center justify-center rounded-lg border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425] ${count === 3 ? "hidden min-[900px]:flex" : "flex"} ${columns === count ? "border-[#ad1425] bg-[#ad1425]" : "border-[#d8c6c8] bg-white hover:border-[#ad1425]"}`}
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
        <div className="grid gap-4 min-[600px]:col-span-2 min-[600px]:grid-cols-2 min-[900px]:col-span-3">
            {allPairs && <div>
              <label htmlFor="candidate-pair" className="mb-2 block text-sm font-bold text-[#554b4c]">Pair</label>
              <select id="candidate-pair" value={selectedPair} onChange={(event) => setSelectedPair(event.target.value)} className="w-full rounded-xl border border-[#d8c6c8] bg-white px-4 py-3 text-base text-[#211a1b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]">
                <option value="">All pairs</option>
                {slotSchedule.map((_, index) => <option key={index} value={index + 1}>Pair {index + 1}</option>)}
              </select>
            </div>}
            <div>
              <label htmlFor="candidate-view" className="mb-2 block text-sm font-bold text-[#554b4c]">View by</label>
              <select id="candidate-view" value={view} onChange={(event) => setView(event.target.value as "code" | "slot")} className="w-full rounded-xl border border-[#d8c6c8] bg-white px-4 py-3 text-base text-[#211a1b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]">
                <option value="code">Candidate code</option>
                <option value="slot">Interview slot</option>
              </select>
            </div>
          </div>
        </div>
      {!loadedCandidates && !loadError && (
        <div
          role="status"
          className="flex items-center gap-3 text-sm text-[#6d6263]"
        >
          <span
            aria-hidden="true"
            className="size-6 animate-spin rounded-full border-[3px] border-[#eadfdf] border-t-[#ad1425]"
          />
          Loading mentees…
        </div>
      )}
      {loadError && (
        <p
          role="alert"
          className="rounded-[18px] border border-[#e8b5b9] bg-[#fff8f8] p-6 text-[#ad1425]"
        >
          Could not load mentees. Please refresh the page.
        </p>
      )}
      <div
        className={`grid grid-cols-1 gap-4 ${columns === 1 ? "min-[600px]:grid-cols-1" : columns === 2 ? "min-[600px]:grid-cols-2" : "min-[600px]:grid-cols-2 min-[900px]:grid-cols-3"}`}
      >
        {loadedCandidates &&
          displayRows.map(({ candidate, code, pair, slot }, index) => (
            <Fragment key={`${pair}-${slot}-${code}`}>
            {allPairs && view === "slot" && (index === 0 || displayRows[index - 1].pair !== pair) && (
              <h3 className="col-span-full mt-5 border-b border-[#e4cfd0] pb-3 text-xl font-extrabold text-[#ad1425]">{pair ? `Pair ${pair}` : "No slot assigned"}</h3>
            )}
            {candidate ? (
            <button
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
                {slot > 0 && <span className="text-xs font-extrabold text-[#ad1425]">Slot {slot}</span>}
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
                    {formatProgramType(candidate.program_type)}
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
            ) : (
              <div className="relative flex min-h-[250px] min-w-0 w-full flex-col items-start justify-between overflow-hidden rounded-[20px] border border-[#e9d9d9] bg-white px-5 py-5 text-left text-[#211a1b] shadow-[0_8px_24px_#5a25250a]">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#ad1425]" />
                <span aria-hidden="true" className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full border-[22px] border-[#ad1425]/5" />
                <span className="relative flex w-full items-center justify-end gap-3">
                  {code && <span className="rounded-full border border-[#f0dddd] bg-[#fff7f7] px-3 py-1 text-[11px] font-extrabold tracking-[.08em] text-[#ad1425]">{code}</span>}
                  <span className="text-xs font-extrabold text-[#ad1425]">Slot {slot}</span>
                </span>
                <strong className="relative block w-full text-[21px] leading-[1.2] tracking-[-.045em] break-words">{code ? "Profile unavailable" : "No mentee assigned"}</strong>
                <span aria-hidden="true" className="relative block h-[30px] w-full border-t border-[#f0e4e4]" />
              </div>
            )}
            </Fragment>
          ))}
      </div>
      {loadedCandidates && displayRows.length === 0 && (
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
              {selected?.program_type &&
                formatProgramType(selected.program_type)}
            </span>
          </div>
        </div>
        <div className="px-6 pt-8 pb-9 min-[600px]:px-9">
          <div className="grid grid-cols-1 items-start gap-3 min-[600px]:grid-cols-2">
            {documents.map(([label, href], index) => (
              <div
                key={label}
                className={`rounded-2xl border p-4 shadow-[0_8px_24px_#5a252508] ${href?.trim() ? "border-[#eadfdf] bg-white" : "border-[#e8b5b9] bg-[#fff8f8]"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-extrabold tracking-[.13em] text-[#ad1425]">
                    <span className="mr-2 text-[#b99397]">0{index + 1}</span>
                    {href?.trim() ? (
                      <a
                        href={href.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${label}`}
                        className="text-inherit underline decoration-[#b88b90] underline-offset-2 hover:text-[#7f0e1b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]"
                      >
                        {label.toUpperCase()}
                      </a>
                    ) : (
                      label.toUpperCase()
                    )}
                  </span>
                  {href?.trim() && (
                    <ArrowUp
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-[#ad1425]"
                    />
                  )}
                </div>
                {!href?.trim() && (
                  <p className="mt-3 text-sm font-semibold text-[#ad1425]">
                    Missing
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
