
import { bodyweigtExercises } from './bodyweight';
import { trxExercises } from './trx';
import { gymExercises } from './gym';
import { WorkoutType, ExerciseDatabase } from './types';

export const exerciseDatabases: Record<WorkoutType, ExerciseDatabase> = {
  'bodyweight': bodyweigtExercises,
  'trx': trxExercises,
  'gym': gymExercises,
  'resistance-bands': {}, // To be implemented
  'home-minimal': {} // To be implemented
};

export * from './types';
