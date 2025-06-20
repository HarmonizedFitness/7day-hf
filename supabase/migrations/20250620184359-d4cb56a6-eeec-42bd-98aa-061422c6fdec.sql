
-- Add DELETE RLS policies for all tables to fix the security vulnerability

-- Add DELETE policy for profiles table
CREATE POLICY "Users can delete their own profile" 
  ON public.profiles 
  FOR DELETE 
  USING (auth.uid() = id);

-- Add DELETE policy for user_progress table
CREATE POLICY "Users can delete their own progress" 
  ON public.user_progress 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Add DELETE policy for journal_entries table
CREATE POLICY "Users can delete their own journal entries" 
  ON public.journal_entries 
  FOR DELETE 
  USING (auth.uid() = user_id);
