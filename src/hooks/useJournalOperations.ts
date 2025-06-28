
import { useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { JournalEntries } from "@/types/progress";
import { toast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";

export const useJournalOperations = (
  user: User | null,
  currentProgram: string,
  journalEntries: JournalEntries,
  setJournalEntries: React.Dispatch<React.SetStateAction<JournalEntries>>
) => {
  const saveJournalEntry = useCallback(async (dayId: number, entry: string) => {
    // Update local state immediately
    setJournalEntries(prev => ({
      ...prev,
      [dayId]: entry
    }));
    
    if (user) {
      // User is authenticated, save to Supabase
      try {
        const { error } = await supabase
          .from('journal_entries')
          .upsert({
            user_id: user.id,
            day_id: dayId,
            program_type: currentProgram,
            entry: entry,
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'user_id, day_id, program_type'
          });
        
        if (error) throw error;
      } catch (error) {
        console.error("Error saving journal entry:", error);
        toast({
          title: "Error saving journal entry",
          description: "There was an error saving your journal entry. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      // User is not authenticated, save to localStorage with program scope
      localStorage.setItem(`journalEntries_${currentProgram}`, JSON.stringify({
        ...journalEntries,
        [dayId]: entry
      }));
    }
  }, [user, currentProgram, journalEntries, setJournalEntries]);

  const getJournalEntry = useCallback((dayId: number) => {
    return journalEntries[dayId] || '';
  }, [journalEntries]);

  return {
    saveJournalEntry,
    getJournalEntry
  };
};
