
export interface CompletedExercises {
  [key: string]: boolean;
}

export interface JournalEntries {
  [key: number]: string;
}

export interface ProgressContextType {
  completedExercises: CompletedExercises;
  toggleExercise: (dayId: number, circuitTitle: string, exerciseName: string) => void;
  isExerciseCompleted: (dayId: number, circuitTitle: string, exerciseName: string) => boolean;
  saveJournalEntry: (dayId: number, entry: string) => void;
  getJournalEntry: (dayId: number) => string;
  journalEntries: JournalEntries;
  clearAllProgress: () => Promise<void>;
  loading: boolean;
}
