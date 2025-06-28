
import { WorkoutDay, Exercise } from './types';
import { exerciseDatabases, WorkoutType } from './exercises';

export const workoutTemplates: Record<WorkoutType, string> = {
  'bodyweight': 'bodyweight',
  'gym': 'gym', 
  'trx': 'trx',
  'stretching': 'stretching'
};

export class WorkoutTemplateEngine {
  static generateWorkoutForType(baseWorkout: WorkoutDay, workoutType: WorkoutType): WorkoutDay {
    const exerciseDb = exerciseDatabases[workoutType];
    
    // If no specific database exists for this type, return original
    if (!exerciseDb || Object.keys(exerciseDb).length === 0) {
      return baseWorkout;
    }

    // Clone the workout to avoid mutations
    const adaptedWorkout: WorkoutDay = JSON.parse(JSON.stringify(baseWorkout));

    // Replace exercises in each circuit
    adaptedWorkout.circuits = adaptedWorkout.circuits.map(circuit => ({
      ...circuit,
      exercises: circuit.exercises.map(exercise => {
        const replacement = exerciseDb[exercise.name];
        if (replacement) {
          return {
            ...exercise,
            ...replacement
          };
        }
        return exercise;
      })
    }));

    return adaptedWorkout;
  }

  static getAvailableWorkoutTypes(): WorkoutType[] {
    return Object.keys(exerciseDatabases) as WorkoutType[];
  }

  static getWorkoutTypeDisplayName(type: WorkoutType): string {
    const displayNames: Record<WorkoutType, string> = {
      'bodyweight': 'Bodyweight Training',
      'trx': 'TRX Suspension Training',
      'gym': 'Full Gym Equipment',
      'stretching': 'Flexibility & Mobility'
    };
    return displayNames[type];
  }
}
