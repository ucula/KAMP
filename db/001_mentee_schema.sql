DO $migration$
BEGIN
  IF to_regclass('public.mentee') IS NOT NULL THEN
    RAISE EXCEPTION 'Mentee schema has already been migrated';
  END IF;

  DROP VIEW mentees;
  ALTER TABLE mentees_base RENAME TO mentees_base_old;
  ALTER TABLE mentee_pairs RENAME TO mentee_pairs_old;

  CREATE TABLE major (
    major_id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    major_name text NOT NULL UNIQUE
  );
  CREATE TABLE program_type (
    program_type_id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type_name text NOT NULL UNIQUE
  );
  CREATE TABLE pair (
    pair_id smallint PRIMARY KEY
  );
  CREATE TABLE mentee (
    code text PRIMARY KEY,
    firstname text NOT NULL,
    lastname text NOT NULL,
    year text NOT NULL,
    major_id integer NOT NULL REFERENCES major(major_id),
    program_type_id integer NOT NULL REFERENCES program_type(program_type_id)
  );
  -- Interview materials and the former numeric ID remain available without changing the diagram's core table.
  CREATE TABLE mentee_application (
    code text PRIMARY KEY REFERENCES mentee(code) ON DELETE CASCADE,
    legacy_id integer NOT NULL UNIQUE,
    sop text NOT NULL,
    essay1 text NOT NULL,
    essay2 text NOT NULL,
    essay3 text NOT NULL,
    video text NOT NULL,
    resume text NOT NULL
  );
  CREATE TABLE mentee_pair (
    code text NOT NULL REFERENCES mentee(code) ON DELETE CASCADE,
    pair_id smallint NOT NULL REFERENCES pair(pair_id),
    PRIMARY KEY (code, pair_id)
  );

  INSERT INTO major (major_name) SELECT DISTINCT major FROM mentees_base_old ORDER BY major;
  INSERT INTO program_type (type_name) SELECT DISTINCT program_type FROM mentees_base_old ORDER BY program_type;
  INSERT INTO pair (pair_id) SELECT pair FROM group_links ORDER BY pair;
  INSERT INTO mentee (code, firstname, lastname, year, major_id, program_type_id)
    SELECT old.code, old.firstname, old.surname, old.year, major.major_id, program_type.program_type_id
    FROM mentees_base_old old
    JOIN major ON major.major_name = old.major
    JOIN program_type ON program_type.type_name = old.program_type;
  INSERT INTO mentee_application (code, legacy_id, sop, essay1, essay2, essay3, video, resume)
    SELECT code, id, sop, essay1, essay2, essay3, video, resume FROM mentees_base_old;
  INSERT INTO mentee_pair (code, pair_id)
    SELECT old.code, mp.pair FROM mentee_pairs_old mp
    JOIN mentees_base_old old ON old.id = mp.mentee_id;

  IF (SELECT count(*) FROM mentee) <> (SELECT count(*) FROM mentees_base_old)
     OR (SELECT count(*) FROM mentee_pair) <> (SELECT count(*) FROM mentee_pairs_old)
     OR EXISTS (
       SELECT id, code, firstname, surname, year, major, program_type, sop, essay1, essay2, essay3, video, resume
       FROM mentees_base_old
       EXCEPT
       SELECT a.legacy_id, m.code, m.firstname, m.lastname, m.year, major.major_name,
              pt.type_name, a.sop, a.essay1, a.essay2, a.essay3, a.video, a.resume
       FROM mentee m JOIN major ON major.major_id = m.major_id
       JOIN program_type pt ON pt.program_type_id = m.program_type_id
       JOIN mentee_application a ON a.code = m.code
     ) OR EXISTS (
       SELECT mentee_id, pair FROM mentee_pairs_old
       EXCEPT
       SELECT a.legacy_id, mp.pair_id FROM mentee_pair mp
       JOIN mentee_application a ON a.code = mp.code
     ) THEN
    RAISE EXCEPTION 'Migration verification failed; no tables were replaced';
  END IF;

  DROP TABLE mentee_pairs_old;
  DROP TABLE mentees_base_old;
  ALTER TABLE group_links ADD CONSTRAINT group_links_pair_fkey FOREIGN KEY (pair) REFERENCES pair(pair_id);

END
$migration$;
