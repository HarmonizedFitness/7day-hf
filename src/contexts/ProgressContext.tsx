
import React, { createContext, useState, useContext, useEffect } from "react";

interface ProgressContextType {
  completedExercises: Record<string, boolean>;
  journalEntries: Record<string, string>;
  toggleExercise: (dayId: number, circuitTitle: string, exerciseName: string) => void;
  saveJournalEntry: (dayId: number, entry: string) => void;
  getJournalEntry: (dayId: number) => string;
  isExerciseCompleted: (dayId: number, circuitTitle: string, exerciseName: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  const [journalEntries, setJournalEntries] = useState<Record<string, string>>({});

  // Load data from localStorage on mount
  useEffect(() => {
    const savedExercises = localStorage.getItem('hf-completed-exercises');
    const savedJournalEntries = localStorage.getItem('hf-journal-entries');
    
    if (savedExercises) {
      setCompletedExercises(JSON.parse(savedExercises));
    }
    
    if (savedJournalEntries) {
      setJournalEntries(JSON.parse(savedJournalEntries));
    }
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('hf-completed-exercises', JSON.stringify(completedExercises));
  }, [completedExercises]);

  useEffect(() => {
    localStorage.setItem('hf-journal-entries', JSON.stringify(journalEntries));
  }, [journalEntries]);

  const toggleExercise = (dayId: number, circuitTitle: string, exerciseName: string) => {
    const key = `day-${dayId}-${circuitTitle}-${exerciseName}`;
    setCompletedExercises(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const saveJournalEntry = (dayId: number, entry: string) => {
    const key = `day-${dayId}-journal`;
    setJournalEntries(prev => ({
      ...prev,
      [key]: entry
    }));
  };

  const getJournalEntry = (dayId: number): string => {
    const key = `day-${dayId}-journal`;
    return journalEntries[key] || '';
  };

  const isExerciseCompleted = (dayId: number, circuitTitle: string, exerciseName: string): boolean => {
    const key = `day-${dayId}-${circuitTitle}-${exerciseName}`;
    return !!completedExercises[key];
  };

  return (
    <ProgressContext.Provider value={{ 
      completedExercises, 
      journalEntries, 
      toggleExercise, 
      saveJournalEntry, 
      getJournalEntry,
      isExerciseCompleted
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  
  return context;
};
