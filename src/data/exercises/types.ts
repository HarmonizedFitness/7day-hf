
export interface ExerciseVariation {
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
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface ExerciseDatabase {
  [exerciseName: string]: ExerciseVariation;
}

export type WorkoutType = 'bodyweight' | 'trx' | 'gym' | 'resistance-bands' | 'home-minimal';
