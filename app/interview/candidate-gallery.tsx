"use client";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { X } from "lucide-react";
import { useState } from "react";
import styles from "../inner.module.css";

const candidates = ["Candidate 01", "Candidate 02", "Candidate 03"];

export function CandidateGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className={styles.candidateGrid}>
        {candidates.map((candidate, index) => (
          <button className={styles.candidateCard} type="button" onClick={() => setSelected(candidate)} key={candidate}>
            <div className={styles.candidatePortrait}><span>0{index + 1}</span></div>
            <div><span>PROFILE PREVIEW</span><h3>{candidate}</h3><p>Details to be added by the program team</p><strong>VIEW PROFILE ↗</strong></div>
          </button>
        ))}
      </div>
      <Dialog open={selected !== null} onClose={() => setSelected(null)} fullWidth maxWidth="sm" aria-labelledby="candidate-dialog-title">
        <DialogContent sx={{ p: { xs: 3, md: 5 }, bgcolor: "#faf6f5" }}>
          <div className={styles.dialogTop}><p>CANDIDATE PROFILE PREVIEW</p><IconButton onClick={() => setSelected(null)} aria-label="Close profile"><X size={20} /></IconButton></div>
          <h2 id="candidate-dialog-title" className={styles.dialogTitle}>{selected}</h2>
          <p className={styles.dialogIntro}>This profile layout is ready for the official candidate information.</p>
          <div className={styles.dialogDetails}>
            <div><span>NAME / NICKNAME</span><p>To be confirmed</p></div>
            <div><span>YEAR / MAJOR</span><p>To be confirmed</p></div>
            <div><span>INTRODUCTION VIDEO</span><p>To be added</p></div>
            <div><span>RESUME</span><p>To be added</p></div>
            <div><span>STATEMENT OF PURPOSE</span><p>To be added</p></div>
            <div><span>ESSAY / VIDEO</span><p>To be added</p></div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
