
-- Add workout_type and subscription_tier columns to profiles table
ALTER TABLE public.profiles 
ADD COLUMN workout_type TEXT DEFAULT 'bodyweight',
ADD COLUMN subscription_tier TEXT DEFAULT 'free';

-- Create workout_access table for tracking user access to different workout types
CREATE TABLE public.workout_access (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  workout_type TEXT NOT NULL,
  has_access BOOLEAN DEFAULT false,
  granted_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, workout_type)
);

-- Enable RLS on workout_access table
ALTER TABLE public.workout_access ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for workout_access
CREATE POLICY "Users can view their own workout access" 
  ON public.workout_access 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own workout access" 
  ON public.workout_access 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Create function to check workout access
CREATE OR REPLACE FUNCTION public.has_workout_access(user_uuid UUID, workout_type_name TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Free tier always has access to bodyweight
  IF workout_type_name = 'bodyweight' THEN
    RETURN TRUE;
  END IF;
  
  -- Check if user has explicit access
  RETURN EXISTS (
    SELECT 1 
    FROM public.workout_access 
    WHERE user_id = user_uuid 
    AND workout_type = workout_type_name 
    AND has_access = true 
    AND (expires_at IS NULL OR expires_at > now())
  );
END;
$$;
