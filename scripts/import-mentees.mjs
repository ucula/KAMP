import { readFile } from "node:fs/promises";
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required to import candidates");
}

const mentees = JSON.parse(await readFile(".private/mentees.json", "utf8"));
if (!Array.isArray(mentees) || mentees.some((mentee) => !Number.isInteger(mentee.id) || !Array.isArray(mentee.pairs))) {
  throw new Error("Invalid .private/mentees.json");
}
const groupTokens = JSON.parse(await readFile(".private/group-links.json", "utf8"));
if (!Array.isArray(groupTokens) || groupTokens.length !== 17 || new Set(groupTokens).size !== 17 || groupTokens.some((token) => typeof token !== "string" || !/^[a-f0-9]{16}$/.test(token))) {
  throw new Error("Invalid .private/group-links.json");
}

const sql = neon(process.env.DATABASE_URL);
await sql`CREATE TABLE IF NOT EXISTS mentees (id integer PRIMARY KEY, data jsonb NOT NULL)`;
await sql`CREATE TABLE IF NOT EXISTS group_links (pair smallint PRIMARY KEY, token text NOT NULL UNIQUE)`;

for (const [index, token] of groupTokens.entries()) {
  await sql`
    INSERT INTO group_links (pair, token) VALUES (${index + 1}, ${token})
    ON CONFLICT (pair) DO UPDATE SET token = EXCLUDED.token
  `;
}

for (const mentee of mentees) {
  await sql`
    INSERT INTO mentees (id, data) VALUES (${mentee.id}, ${JSON.stringify(mentee)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data
  `;
}

console.log(`Imported ${groupTokens.length} group links and ${mentees.length} candidates`);
