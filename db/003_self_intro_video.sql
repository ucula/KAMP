ALTER TABLE document
  ADD COLUMN IF NOT EXISTS self_intro_video text NOT NULL DEFAULT '';
