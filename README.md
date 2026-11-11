# KAMP Engineering 6

The 17 group links are stored in PostgreSQL. Each `/g/<token>` opens the shared Home page; `/g/<token>/interview` shows candidates assigned to that group.

## Candidate database

The database has `mentees` and `group_links` tables. Connect the Neon PostgreSQL database to the Vercel project so it provides `DATABASE_URL`, then deploy the code that reads the current column-based schema.

Local development can still read the ignored `.private` files when `DATABASE_URL` is absent. Production requires the database. Group links grant access to candidate profiles, so distribute them only to the intended group.
