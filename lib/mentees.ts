import { readFile } from "node:fs/promises";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

export type Mentee = {
  id: number;
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
  resume: string;
};

export async function getMentees(pair?: number): Promise<Mentee[]> {
  if (process.env.DATABASE_URL) {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`
      SELECT m.id, m.code, m.firstname, m.surname, m.year, m.major,
        m.program_type, m.sop, m.essay1, m.essay2, m.essay3, m.video,
        m.resume,
        ARRAY(
          SELECT mp.pair::integer FROM mentee_pairs mp
          WHERE mp.mentee_id = m.id ORDER BY mp.pair
        ) AS pairs
      FROM mentees_base m
      WHERE ${pair ?? null}::smallint IS NULL OR EXISTS (
        SELECT 1 FROM mentee_pairs selected
        WHERE selected.mentee_id = m.id AND selected.pair = ${pair ?? null}::smallint
      )
    `;
    return rows as Mentee[];
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("DATABASE_URL is required in production");
  }

  const data = await readFile(path.join(process.cwd(), ".private", "mentees.json"), "utf8");
  const mentees = JSON.parse(data) as Mentee[];
  return pair ? mentees.filter((mentee) => mentee.pairs.includes(pair)) : mentees;
}
