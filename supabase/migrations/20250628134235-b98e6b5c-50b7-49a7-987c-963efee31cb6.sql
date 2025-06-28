
-- Update the profiles table to track the user's first (free) program choice
ALTER TABLE public.profiles 
ADD COLUMN first_program text DEFAULT NULL;

-- Create a table to track purchased programs
CREATE TABLE public.program_purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  program_type text NOT NULL,
  purchased_at timestamp with time zone DEFAULT now(),
  amount_paid integer DEFAULT 1999, -- $19.99 in cents
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE(user_id, program_type)
);

-- Enable RLS on program_purchases
ALTER TABLE public.program_purchases ENABLE ROW LEVEL SECURITY;

-- Create policy for users to view their own purchases
CREATE POLICY "Users can view their own program purchases" 
  ON public.program_purchases 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Create policy for users to insert their own purchases
CREATE POLICY "Users can create their own program purchases" 
  ON public.program_purchases 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Update the has_workout_access function to implement the new access model
CREATE OR REPLACE FUNCTION public.has_workout_access(user_uuid uuid, workout_type_name text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
DECLARE
  user_first_program text;
  has_purchased boolean;
BEGIN
  -- Get user's first (free) program choice
  SELECT first_program INTO user_first_program
  FROM public.profiles 
  WHERE id = user_uuid;
  
  -- If this is their first program choice, they have access
  IF user_first_program = workout_type_name THEN
    RETURN TRUE;
  END IF;
  
  -- Check if they've purchased this program
  SELECT EXISTS (
    SELECT 1 
    FROM public.program_purchases 
    WHERE user_id = user_uuid 
    AND program_type = workout_type_name
  ) INTO has_purchased;
  
  RETURN has_purchased;
END;
$function$;
