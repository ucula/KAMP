# KAMP Engineering 6

The 17 group links are stored in the ignored local file `.private/group-links.json` and imported into the database. Each `/g/<token>` opens the shared Home page; `/g/<token>/interview` shows candidates assigned to that group.

## Candidate database

1. Create a Neon PostgreSQL database through the Vercel Marketplace and connect it to this project. The integration provides `DATABASE_URL` to Vercel.
2. Add the same `DATABASE_URL` to your local `.env.local` file. Keep this file and the entire `.private` directory out of Git.
3. Run `npm run import:mentees` once to create the tables and import the local group links and candidate data. Re-running it updates matching records.
4. Push the code to GitHub. If this repository is connected to the Vercel project, the new deployment will use `DATABASE_URL`.

Local development can still read `.private` when `DATABASE_URL` is absent. Production requires the database. Keep a backup of `.private/group-links.json` until the import succeeds. Group links grant access to candidate profiles, so distribute them only to the intended group.
