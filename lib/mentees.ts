import { readFile } from "node:fs/promises";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

export type Mentee = {
  id: number | string;
  pairs: number[];
  code: string;
  firstname: string;
  surname: string;
  year: string;
  major: string;
  program_type: string;
  sop: string;
  essay1: string;
  essay2: string;
  essay3: string;
  video: string;
  self_intro_video: string;
  resume: string;
};

export async function getMentees(pair?: number): Promise<Mentee[]> {
  if (process.env.DATABASE_URL) {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`
      SELECT m.code AS id, m.code, m.firstname, m.lastname AS surname, m.year,
        m.major, m.program AS program_type,
        d.sop, d.essay AS essay1, d.essay AS essay2, d.essay AS essay3,
        d.video, d.self_intro_video, d.resume,
        ARRAY(
          SELECT p.pair_number::integer FROM pairs p
          WHERE p.code = m.code ORDER BY p.pair_number
        ) AS pairs
      FROM mentee m
      JOIN document d ON d.code = m.code
      WHERE ${pair ?? null}::smallint IS NULL OR EXISTS (
        SELECT 1 FROM pairs selected
        WHERE selected.code = m.code AND selected.pair_number = ${pair ?? null}::smallint
      )
    `;
    return rows as Mentee[];
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("DATABASE_URL is required in production");
  }

  const data = await readFile(path.join(process.cwd(), ".private", "mentees.json"), "utf8");
  const mentees = JSON.parse(data) as Omit<Mentee, "self_intro_video">[];
  const menteesWithSelfIntro = mentees.map((mentee) => ({
    ...mentee,
    self_intro_video: "",
  }));
  return pair
    ? menteesWithSelfIntro.filter((mentee) => mentee.pairs.includes(pair))
    : menteesWithSelfIntro;
}
