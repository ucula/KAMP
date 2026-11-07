import { readFile } from "node:fs/promises";
import path from "node:path";

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

export async function getMentees(): Promise<Mentee[]> {
  const file = path.join(process.cwd(), ".private", "mentees.json");
  const data = await readFile(file, "utf8");
  return JSON.parse(data) as Mentee[];
}
