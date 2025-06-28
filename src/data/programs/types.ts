
export interface ProgramExercise {
  name: string;
  technicalCue?: string;
  somaticCue?: string;
  videoInfo?: {
    title: string;
    instructor: string;
    duration: string;
    url: string;
  };
}

export interface ProgramCircuit {
  title: string;
  exercises: ProgramExercise[];
}

export interface ProgramDay {
  id: number;
  title: string;
  subtitle: string;
  message: string;
  warmup: {
    breathwork: string;
    mobilityItems: string[];
    intention: string;
    somaticCue: string;
  };
  circuits: ProgramCircuit[];
  cooldown: {
    items: string[];
    journalPrompt: string;
  };
  hiddenHint: string;
}

export type ProgramType = 'bodyweight' | 'gym' | 'trx' | 'stretching';

export interface WorkoutProgram {
  id: ProgramType;
  name: string;
  description: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  days: ProgramDay[];
  price: number; // 0 for free when selected as first program
}
