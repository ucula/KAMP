# KAMP Engineering 6

The 17 group links are stored in PostgreSQL. Each `/g/<token>` opens the shared Home page; `/g/<token>/interview` shows candidates assigned to that group.

## Candidate database

The database uses `mentees_base` for applicant details, `group_links` for the 17 access links, and `mentee_pairs` for applicant-to-group assignments. The `mentees` view reconstructs the earlier shape for already deployed code; it does not store duplicate group assignments. Connect the Neon PostgreSQL database to the Vercel project so it provides `DATABASE_URL`, then deploy the code that reads this schema.

Local development can still read the ignored `.private` files when `DATABASE_URL` is absent. Production requires the database. Group links grant access to candidate profiles, so distribute them only to the intended group.
