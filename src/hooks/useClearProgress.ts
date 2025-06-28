
import { useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CompletedExercises, JournalEntries } from "@/types/progress";
import { toast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";

export const useClearProgress = (
  user: User | null,
  currentProgram: string,
  setCompletedExercises: React.Dispatch<React.SetStateAction<CompletedExercises>>,
  setJournalEntries: React.Dispatch<React.SetStateAction<JournalEntries>>
) => {
  const clearAllProgress = useCallback(async () => {
    if (user) {
      // Clear from Supabase
      try {
        // Clear exercise progress
        const { error: progressError } = await supabase
          .from('user_progress')
          .delete()
          .eq('user_id', user.id)
          .eq('program_type', currentProgram);
        
        if (progressError) throw progressError;
        
        // Clear journal entries
        const { error: journalError } = await supabase
          .from('journal_entries')
          .delete()
          .eq('user_id', user.id)
          .eq('program_type', currentProgram);
        
        if (journalError) throw journalError;
        
        // Clear local state
        setCompletedExercises({});
        setJournalEntries({});
        
        toast({
          title: "Progress cleared",
          description: `All progress for ${currentProgram} program has been cleared.`,
        });
      } catch (error) {
        console.error("Error clearing progress:", error);
        toast({
          title: "Error clearing progress",
          description: "There was an error clearing your progress. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      // Clear from localStorage
      localStorage.removeItem(`completedExercises_${currentProgram}`);
      localStorage.removeItem(`journalEntries_${currentProgram}`);
      setCompletedExercises({});
      setJournalEntries({});
      
      toast({
        title: "Progress cleared",
        description: `All progress for ${currentProgram} program has been cleared.`,
      });
    }
  }, [user, currentProgram, setCompletedExercises, setJournalEntries]);

  return { clearAllProgress };
};
