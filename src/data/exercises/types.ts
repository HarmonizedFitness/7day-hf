
// Update to use new ProgramType
export type WorkoutType = 'bodyweight' | 'gym' | 'trx' | 'stretching';

export interface Exercise {
  name: string;
  muscleGroups: string[];
  equipment: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructions: string;
  tips?: string[];
}

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
  equipment?: string[];
}

export interface ExerciseDatabase {
  [exerciseName: string]: ProgramExercise;
}
