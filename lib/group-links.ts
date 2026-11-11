import { readFile } from "node:fs/promises";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

export async function groupForToken(token: string): Promise<number | null> {
  if (!/^[a-f0-9]{16}$/.test(token)) return null;

  if (process.env.DATABASE_URL) {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`SELECT pair FROM group_links WHERE token = ${token}`;
    return (rows[0]?.pair as number | undefined) ?? null;
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("DATABASE_URL is required in production");
  }

  const data = await readFile(path.join(process.cwd(), ".private", "group-links.json"), "utf8");
  const tokens = JSON.parse(data) as string[];
  const index = tokens.indexOf(token);
  return index === -1 ? null : index + 1;
}
