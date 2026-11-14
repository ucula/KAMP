DO $migration$
BEGIN
  IF to_regclass('public.document') IS NOT NULL OR to_regclass('public.pairs') IS NOT NULL THEN
    RAISE EXCEPTION 'Three-table schema is already present';
  END IF;
  IF EXISTS (
    SELECT 1 FROM mentee_application
    WHERE essay1 IS DISTINCT FROM essay2 OR essay1 IS DISTINCT FROM essay3
  ) THEN
    RAISE EXCEPTION 'Essay columns differ; cannot combine them into one field';
  END IF;

  ALTER TABLE mentee ADD COLUMN major text, ADD COLUMN program text;
  UPDATE mentee m SET major = major.major_name, program = pt.type_name
  FROM major JOIN program_type pt ON true
  WHERE major.major_id = m.major_id AND pt.program_type_id = m.program_type_id;
  ALTER TABLE mentee ALTER COLUMN major SET NOT NULL, ALTER COLUMN program SET NOT NULL;

  CREATE TABLE document (
    code text PRIMARY KEY REFERENCES mentee(code) ON DELETE CASCADE,
    sop text NOT NULL,
    essay text NOT NULL,
    resume text NOT NULL,
    video text NOT NULL
  );
  CREATE TABLE pairs (
    code text NOT NULL REFERENCES mentee(code) ON DELETE CASCADE,
    pair_number smallint NOT NULL,
    token text NOT NULL,
    PRIMARY KEY (code, pair_number)
  );
  CREATE INDEX pairs_token_idx ON pairs(token);

  INSERT INTO document (code, sop, essay, resume, video)
    SELECT code, sop, essay1, resume, video FROM mentee_application;
  INSERT INTO pairs (code, pair_number, token)
    SELECT mp.code, mp.pair_id, gl.token
    FROM mentee_pair mp JOIN group_links gl ON gl.pair = mp.pair_id;

  IF (SELECT count(*) FROM document) <> (SELECT count(*) FROM mentee_application)
     OR (SELECT count(*) FROM pairs) <> (SELECT count(*) FROM mentee_pair)
     OR (SELECT count(DISTINCT token) FROM pairs) <> (SELECT count(*) FROM group_links)
     OR EXISTS (
       SELECT m.code, major.major_name, pt.type_name
       FROM mentee m JOIN major ON major.major_id = m.major_id
       JOIN program_type pt ON pt.program_type_id = m.program_type_id
       EXCEPT SELECT code, major, program FROM mentee
     ) OR EXISTS (
       SELECT code, sop, essay1, resume, video FROM mentee_application
       EXCEPT SELECT code, sop, essay, resume, video FROM document
     ) OR EXISTS (
       SELECT mp.code, mp.pair_id, gl.token
       FROM mentee_pair mp JOIN group_links gl ON gl.pair = mp.pair_id
       EXCEPT SELECT code, pair_number, token FROM pairs
     ) THEN
    RAISE EXCEPTION 'Migration verification failed; old tables were not removed';
  END IF;

  DROP TABLE mentee_pair;
  DROP TABLE group_links;
  DROP TABLE pair;
  DROP TABLE mentee_application;
  ALTER TABLE mentee DROP COLUMN major_id, DROP COLUMN program_type_id;
  DROP TABLE major;
  DROP TABLE program_type;
END
$migration$;
