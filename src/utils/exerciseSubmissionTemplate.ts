
import { WorkoutType, ExerciseVariation } from '@/data/exercises/types';

// Template for submitting new exercise databases
export interface ExerciseSubmission {
  workoutType: WorkoutType;
  exercises: ExerciseMapping[];
}

export interface ExerciseMapping {
  originalExerciseName: string; // Must match exactly from the base workout
  replacement: ExerciseVariation;
}

// Helper function to validate exercise submissions
export const validateExerciseSubmission = (submission: ExerciseSubmission): string[] => {
  const errors: string[] = [];
  
  // Check if all required original exercise names are present
  const requiredExercises = [
    "Barbell Bench Press – 4x8 (moderate load)",
    "Incline Dumbbell Chest Fly – 3x10",
    "Seated Dumbbell Overhead Press – 4x10",
    "Lat Pulldown or Assisted Pull-Ups – 4x10",
    "Single-Arm Dumbbell Row – 3x10/side",
    "Goblet Squat – 4x12",
    "Romanian Deadlift – 4x10"
  ];

  const submittedExercises = submission.exercises.map(e => e.originalExerciseName);
  
  requiredExercises.forEach(required => {
    if (!submittedExercises.includes(required)) {
      errors.push(`Missing exercise mapping for: "${required}"`);
    }
  });

  // Validate each exercise has required fields
  submission.exercises.forEach(exercise => {
    if (!exercise.replacement.name) {
      errors.push(`Exercise "${exercise.originalExerciseName}" is missing a replacement name`);
    }
    if (!exercise.replacement.technicalCue) {
      errors.push(`Exercise "${exercise.originalExerciseName}" is missing a technical cue`);
    }
    if (!exercise.replacement.somaticCue) {
      errors.push(`Exercise "${exercise.originalExerciseName}" is missing a somatic cue`);
    }
  });

  return errors;
};

// Example submission format for documentation
export const exampleSubmission: ExerciseSubmission = {
  workoutType: 'resistance-bands',
  exercises: [
    {
      originalExerciseName: "Barbell Bench Press – 4x8 (moderate load)",
      replacement: {
        name: "Resistance Band Chest Press – 4x10",
        technicalCue: "Anchor band behind you, press forward with control",
        somaticCue: "Feel the resistance building as you extend your arms",
        videoInfo: {
          title: "Resistance Band Chest Press Tutorial",
          instructor: "Fitness with Bands",
          duration: "3:20",
          url: "https://youtu.be/bandpress123"
        },
        equipment: ['Resistance Bands', 'Door Anchor'],
        difficulty: 'intermediate'
      }
    }
    // ... continue for all exercises
  ]
};
