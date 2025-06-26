
import { bodyweigtExercises } from './bodyweight';
import { trxExercises } from './trx';
import { gymExercises } from './gym';
import { resistanceBandsExercises } from './resistanceBands';
import { homeMinimalExercises } from './homeMinimal';
import { WorkoutType, ExerciseDatabase } from './types';

export const exerciseDatabases: Record<WorkoutType, ExerciseDatabase> = {
  'bodyweight': bodyweigtExercises,
  'trx': trxExercises,
  'gym': gymExercises,
  'resistance-bands': resistanceBandsExercises,
  'home-minimal': homeMinimalExercises
};

export * from './types';
