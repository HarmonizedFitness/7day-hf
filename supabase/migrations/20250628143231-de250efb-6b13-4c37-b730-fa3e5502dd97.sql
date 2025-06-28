
-- Add program_type column to user_progress table
ALTER TABLE public.user_progress 
ADD COLUMN program_type text DEFAULT 'bodyweight';

-- Add program_type column to journal_entries table
ALTER TABLE public.journal_entries 
ADD COLUMN program_type text DEFAULT 'bodyweight';

-- Update existing records to have proper program_type based on user profiles
UPDATE public.user_progress 
SET program_type = COALESCE(
  (SELECT workout_type FROM public.profiles WHERE id = user_progress.user_id),
  'bodyweight'
);

UPDATE public.journal_entries 
SET program_type = COALESCE(
  (SELECT workout_type FROM public.profiles WHERE id = journal_entries.user_id),
  'bodyweight'
);

-- Drop existing unique constraints if they exist
ALTER TABLE public.user_progress 
DROP CONSTRAINT IF EXISTS user_progress_user_id_day_id_circuit_title_exercise_name_key;

-- Add new composite unique constraint including program_type
ALTER TABLE public.user_progress 
ADD CONSTRAINT user_progress_unique_per_program 
UNIQUE (user_id, day_id, circuit_title, exercise_name, program_type);

-- Drop existing unique constraint for journal entries if it exists
ALTER TABLE public.journal_entries 
DROP CONSTRAINT IF EXISTS journal_entries_user_id_day_id_key;

-- Add new composite unique constraint for journal entries including program_type
ALTER TABLE public.journal_entries 
ADD CONSTRAINT journal_entries_unique_per_program 
UNIQUE (user_id, day_id, program_type);

-- Make program_type non-nullable after setting defaults
ALTER TABLE public.user_progress 
ALTER COLUMN program_type SET NOT NULL;

ALTER TABLE public.journal_entries 
ALTER COLUMN program_type SET NOT NULL;
