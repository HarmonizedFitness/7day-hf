
import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CompletedExercises, JournalEntries } from "@/types/progress";
import { toast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";

export const useProgressStorage = (user: User | null, currentProgram: string) => {
  const [completedExercises, setCompletedExercises] = useState<CompletedExercises>({});
  const [journalEntries, setJournalEntries] = useState<JournalEntries>({});

  const loadUserProgress = useCallback(async () => {
    if (user) {
      try {
        // Load completed exercises for current program
        const { data: progressData, error: progressError } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id)
          .eq('program_type', currentProgram);
        
        if (progressError) {
          throw progressError;
        }
        
        const exercisesMap: CompletedExercises = {};
        progressData?.forEach(item => {
          const key = `day-${item.day_id}-${item.circuit_title}-${item.exercise_name}`;
          exercisesMap[key] = item.completed;
        });
        
        setCompletedExercises(exercisesMap);
        
        // Load journal entries for current program
        const { data: journalData, error: journalError } = await supabase
          .from('journal_entries')
          .select('*')
          .eq('user_id', user.id)
          .eq('program_type', currentProgram);
        
        if (journalError) {
          throw journalError;
        }
        
        const entriesMap: JournalEntries = {};
        journalData?.forEach(item => {
          entriesMap[item.day_id] = item.entry;
        });
        
        setJournalEntries(entriesMap);
      } catch (error) {
        console.error("Error loading user progress:", error);
        toast({
          title: "Error loading progress",
          description: "There was an error loading your progress data. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      // User is not authenticated, load from localStorage with program scope
      const savedExercises = localStorage.getItem(`completedExercises_${currentProgram}`);
      const savedEntries = localStorage.getItem(`journalEntries_${currentProgram}`);
      
      if (savedExercises) {
        setCompletedExercises(JSON.parse(savedExercises));
      }
      
      if (savedEntries) {
        setJournalEntries(JSON.parse(savedEntries));
      }
    }
  }, [user, currentProgram]);

  return {
    completedExercises,
    setCompletedExercises,
    journalEntries,
    setJournalEntries,
    loadUserProgress
  };
};
