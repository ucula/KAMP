"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const candidates = ["Candidate 01", "Candidate 02", "Candidate 03"];
const details = [
  ["NAME / NICKNAME", "To be confirmed"],
  ["YEAR / MAJOR", "To be confirmed"],
  ["INTRODUCTION VIDEO", "To be added"],
  ["RESUME", "To be added"],
  ["STATEMENT OF PURPOSE", "To be added"],
  ["ESSAY / VIDEO", "To be added"],
];

export function CandidateGallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selected && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-1 gap-[15px] min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
        {candidates.map((candidate, index) => (
          <button key={candidate} type="button" onClick={() => setSelected(candidate)} className="block cursor-pointer rounded-[18px] border border-[#e9d9d9] bg-white p-3 text-left text-[#211a1b] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_15px_32px_#9d737322] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]">
            <div className="grid h-[230px] place-items-center rounded-xl bg-gradient-to-br from-[#b82435] to-[#6f101c] text-[85px] font-extrabold tracking-[-.08em] text-white/80">0{index + 1}</div>
            <div className="px-[14px] pt-6 pb-[18px]">
              <span className="text-[11px] font-extrabold tracking-[.14em] text-[#ad1425]">PROFILE PREVIEW</span>
              <h3 className="my-[10px] text-[27px] font-bold tracking-[-.045em]">{candidate}</h3>
              <p className="text-[15px] leading-[1.5] text-[#74696a]">Details to be added by the program team</p>
              <strong className="mt-7 block text-xs tracking-[.1em] text-[#ad1425]">VIEW PROFILE ↗</strong>
            </div>
          </button>
        ))}
      </div>
      <dialog ref={dialogRef} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }} aria-labelledby="candidate-dialog-title" className="m-auto max-h-[calc(100svh-32px)] w-[calc(100%-32px)] max-w-[600px] overflow-auto rounded-[18px] border-0 bg-[#faf6f5] p-6 text-[#211a1b] shadow-[0_25px_80px_#211a1b44] backdrop:bg-[#211a1b99] min-[600px]:p-10">
        <div className="flex items-center justify-between gap-5">
          <p className="text-[11px] font-extrabold tracking-[.18em] text-[#ad1425]">CANDIDATE PROFILE PREVIEW</p>
          <Button variant="outline" size="icon" onClick={() => dialogRef.current?.close()} aria-label="Close profile" className="size-10 border-0 bg-transparent text-[#211a1b] hover:bg-[#eadfdf]"><X size={20} /></Button>
        </div>
        <h2 id="candidate-dialog-title" className="mt-[30px] mb-3 text-[clamp(38px,5vw,58px)] tracking-[-.065em]">{selected}</h2>
        <p className="mb-[30px] text-base leading-[1.6] text-[#6d6263]">This profile layout is ready for the official candidate information.</p>
        <div className="grid grid-cols-1 gap-3 min-[600px]:grid-cols-2">
          {details.map(([label, value]) => <div key={label} className="min-h-[90px] rounded-xl border border-[#eadfdf] bg-white p-[18px]"><span className="text-[10px] font-extrabold tracking-[.13em] text-[#ad1425]">{label}</span><p className="mt-3 text-[15px] text-[#554b4c]">{value}</p></div>)}
        </div>
      </dialog>
    </>
  );
}
