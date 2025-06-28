
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useWorkoutAccessContext } from "@/contexts/WorkoutAccessContext";
import { toast } from "@/hooks/use-toast";

interface CompletedExercises {
  [key: string]: boolean;
}

interface JournalEntries {
  [key: number]: string;
}

interface ProgressContextType {
  completedExercises: CompletedExercises;
  toggleExercise: (dayId: number, circuitTitle: string, exerciseName: string) => void;
  isExerciseCompleted: (dayId: number, circuitTitle: string, exerciseName: string) => boolean;
  saveJournalEntry: (dayId: number, entry: string) => void;
  getJournalEntry: (dayId: number) => string;
  journalEntries: JournalEntries;
  clearAllProgress: () => Promise<void>;
  loading: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [completedExercises, setCompletedExercises] = useState<CompletedExercises>({});
  const [journalEntries, setJournalEntries] = useState<JournalEntries>({});
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { workoutAccess } = useWorkoutAccessContext();

  const currentProgram = workoutAccess.workoutType;

  // Load data from Supabase or localStorage based on authentication status
  useEffect(() => {
    const loadUserProgress = async () => {
      setLoading(true);
      
      if (user) {
        // User is authenticated, load from Supabase
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
      
      setLoading(false);
    };

    loadUserProgress();
  }, [user, currentProgram]);

  // Toggle exercise completion status
  const toggleExercise = async (dayId: number, circuitTitle: string, exerciseName: string) => {
    const key = `day-${dayId}-${circuitTitle}-${exerciseName}`;
    const isCompleted = !completedExercises[key];
    
    // Update local state immediately for responsive UI
    setCompletedExercises(prev => ({
      ...prev,
      [key]: isCompleted
    }));
    
    if (user) {
      // User is authenticated, save to Supabase
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .upsert({
            user_id: user.id,
            day_id: dayId,
            circuit_title: circuitTitle,
            exercise_name: exerciseName,
            program_type: currentProgram,
            completed: isCompleted,
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'user_id, day_id, circuit_title, exercise_name, program_type'
          });
        
        if (error) throw error;
      } catch (error) {
        console.error("Error saving exercise status:", error);
        // Revert local state if saving fails
        setCompletedExercises(prev => ({
          ...prev,
          [key]: !isCompleted
        }));
        
        toast({
          title: "Error saving progress",
          description: "There was an error saving your progress. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      // User is not authenticated, save to localStorage with program scope
      localStorage.setItem(`completedExercises_${currentProgram}`, JSON.stringify({
        ...completedExercises,
        [key]: isCompleted
      }));
    }
  };

  // Check if an exercise is completed
  const isExerciseCompleted = (dayId: number, circuitTitle: string, exerciseName: string) => {
    const key = `day-${dayId}-${circuitTitle}-${exerciseName}`;
    return !!completedExercises[key];
  };

  // Save journal entry
  const saveJournalEntry = async (dayId: number, entry: string) => {
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
  };

  // Get journal entry for a day
  const getJournalEntry = (dayId: number) => {
    return journalEntries[dayId] || '';
  };

  // Clear all progress for current program
  const clearAllProgress = async () => {
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
  };

  return (
    <ProgressContext.Provider
      value={{
        completedExercises,
        toggleExercise,
        isExerciseCompleted,
        saveJournalEntry,
        getJournalEntry,
        journalEntries,
        clearAllProgress,
        loading
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
