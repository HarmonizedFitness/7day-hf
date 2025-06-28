
import { bodyweigtExercises } from './bodyweight';
import { trxExercises } from './trx';
import { gymExercises } from './gym';
import { stretchingExercises } from './stretching';
import { WorkoutType, ExerciseDatabase } from './types';

export const exerciseDatabases: Record<WorkoutType, ExerciseDatabase> = {
  'bodyweight': bodyweigtExercises,
  'trx': trxExercises,
  'gym': gymExercises,
  'stretching': stretchingExercises
};

export * from './types';
