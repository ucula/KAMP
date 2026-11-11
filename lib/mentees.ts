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
    const rows = pair
      ? await sql`SELECT data FROM mentees WHERE data->'pairs' @> ${JSON.stringify([pair])}::jsonb`
      : await sql`SELECT data FROM mentees`;
    return rows.map((row) => row.data as Mentee);
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("DATABASE_URL is required in production");
  }

  const data = await readFile(path.join(process.cwd(), ".private", "mentees.json"), "utf8");
  const mentees = JSON.parse(data) as Mentee[];
  return pair ? mentees.filter((mentee) => mentee.pairs.includes(pair)) : mentees;
}
