
-- Update the has_workout_access function to implement 3-tier system
CREATE OR REPLACE FUNCTION public.has_workout_access(user_uuid uuid, workout_type_name text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
DECLARE
  user_first_program text;
  total_purchases integer;
  total_amount_paid integer;
  user_tier integer;
BEGIN
  -- Get user's first (free) program choice
  SELECT first_program INTO user_first_program
  FROM public.profiles 
  WHERE id = user_uuid;
  
  -- If this is their first program choice, they always have access (all tiers)
  IF user_first_program = workout_type_name THEN
    RETURN TRUE;
  END IF;
  
  -- Calculate user's tier based on purchases
  SELECT 
    COUNT(*),
    COALESCE(SUM(amount_paid), 0)
  INTO total_purchases, total_amount_paid
  FROM public.program_purchases 
  WHERE user_id = user_uuid;
  
  -- Determine user tier:
  -- Tier 1 (Free): 0 purchases - only first program
  -- Tier 2 (Single): 1 purchase of $19.99 - first program + 1 more
  -- Tier 3 (All Access): 2+ purchases of $19.99 OR 1 purchase of $39.99 - all programs
  
  IF total_purchases = 0 THEN
    user_tier := 1; -- Free tier - only first program (already handled above)
  ELSIF total_purchases = 1 AND total_amount_paid >= 1999 THEN
    user_tier := 2; -- Single purchase tier
  ELSIF total_purchases >= 2 OR total_amount_paid >= 3999 THEN
    user_tier := 3; -- All access tier
  ELSE
    user_tier := 1; -- Default to free if logic doesn't match
  END IF;
  
  -- Grant access based on tier
  IF user_tier >= 3 THEN
    -- Tier 3: All programs unlocked
    RETURN TRUE;
  ELSIF user_tier >= 2 THEN
    -- Tier 2: Access to first program + any one purchased program
    RETURN EXISTS (
      SELECT 1 
      FROM public.program_purchases 
      WHERE user_id = user_uuid 
      AND program_type = workout_type_name
    );
  ELSE
    -- Tier 1: Only first program (already handled above)
    RETURN FALSE;
  END IF;
END;
$function$;

-- Create helper function to get user's current tier
CREATE OR REPLACE FUNCTION public.get_user_tier(user_uuid uuid)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
DECLARE
  total_purchases integer;
  total_amount_paid integer;
BEGIN
  SELECT 
    COUNT(*),
    COALESCE(SUM(amount_paid), 0)
  INTO total_purchases, total_amount_paid
  FROM public.program_purchases 
  WHERE user_id = user_uuid;
  
  -- Determine tier
  IF total_purchases = 0 THEN
    RETURN 1; -- Free
  ELSIF total_purchases = 1 AND total_amount_paid >= 1999 THEN
    RETURN 2; -- Single Purchase
  ELSIF total_purchases >= 2 OR total_amount_paid >= 3999 THEN
    RETURN 3; -- All Access
  ELSE
    RETURN 1; -- Default to free
  END IF;
END;
$function$;

-- Function to get tier name for display
CREATE OR REPLACE FUNCTION public.get_user_tier_name(user_uuid uuid)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
DECLARE
  tier_level integer;
BEGIN
  SELECT public.get_user_tier(user_uuid) INTO tier_level;
  
  CASE tier_level
    WHEN 1 THEN RETURN 'Free';
    WHEN 2 THEN RETURN 'Single Purchase';
    WHEN 3 THEN RETURN 'All Access';
    ELSE RETURN 'Free';
  END CASE;
END;
$function$;

-- Update your profile to have All Access tier (as creator)
-- This gives you 2 fake purchases to unlock everything
INSERT INTO public.program_purchases (user_id, program_type, amount_paid) 
VALUES 
  ((SELECT id FROM public.profiles WHERE email = 'kyle.mccorm@gmail.com'), 'gym', 1999),
  ((SELECT id FROM public.profiles WHERE email = 'kyle.mccorm@gmail.com'), 'trx', 1999)
ON CONFLICT (user_id, program_type) DO NOTHING;
