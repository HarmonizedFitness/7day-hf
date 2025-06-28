
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

export interface ExerciseDatabase {
  [category: string]: Exercise[];
}
