import { WorkoutType } from '@/data/exercises/types';

const generateExerciseSubmissionTemplate = (
  exerciseName: string,
  workoutType: WorkoutType,
  includeVideoInfo: boolean = true
): string => {
  if (!exerciseName || !workoutType) {
    console.error("Exercise name and workout type are required.");
    return "";
  }
  
  const baseExercise = {
    name: exerciseName,
    technicalCue: "[Technical instruction focusing on form and mechanics]",
    somaticCue: "[Body awareness cue focusing on internal sensations]",
  };

  const exerciseWithVideo = includeVideoInfo 
    ? {
        ...baseExercise,
        videoInfo: {
          title: "[Video title]",
          instructor: "[Instructor name]", 
          duration: "[Duration in MM:SS format]",
          url: "[YouTube URL]"
        }
      }
    : baseExercise;

  // Template for different workout types
  const templates = {
    'bodyweight': `"${exerciseName}": ${JSON.stringify(exerciseWithVideo, null, 2)}`,
    'gym': `"${exerciseName}": ${JSON.stringify({...exerciseWithVideo, equipment: ['[Equipment needed]']}, null, 2)}`,
    'trx': `"${exerciseName}": ${JSON.stringify({...exerciseWithVideo, equipment: ['TRX Suspension Trainer']}, null, 2)}`,
    'stretching': `"${exerciseName}": ${JSON.stringify(exerciseWithVideo, null, 2)}`
  };

  return templates[workoutType];
};

export { generateExerciseSubmissionTemplate };
