
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useWorkoutAccessContext } from "@/contexts/WorkoutAccessContext";
import { ProgressContextType } from "@/types/progress";
import { useProgressStorage } from "@/hooks/useProgressStorage";
import { useExerciseOperations } from "@/hooks/useExerciseOperations";
import { useJournalOperations } from "@/hooks/useJournalOperations";
import { useClearProgress } from "@/hooks/useClearProgress";

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { workoutAccess } = useWorkoutAccessContext();
  const currentProgram = workoutAccess.workoutType;

  const {
    completedExercises,
    setCompletedExercises,
    journalEntries,
    setJournalEntries,
    loadUserProgress
  } = useProgressStorage(user, currentProgram);

  const { toggleExercise, isExerciseCompleted } = useExerciseOperations(
    user,
    currentProgram,
    completedExercises,
    setCompletedExercises
  );

  const { saveJournalEntry, getJournalEntry } = useJournalOperations(
    user,
    currentProgram,
    journalEntries,
    setJournalEntries
  );

  const { clearAllProgress } = useClearProgress(
    user,
    currentProgram,
    setCompletedExercises,
    setJournalEntries
  );

  // Load data from Supabase or localStorage based on authentication status
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await loadUserProgress();
      setLoading(false);
    };

    loadData();
  }, [loadUserProgress]);

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
