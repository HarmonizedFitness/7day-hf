
import { workoutData } from './index';
import { WorkoutTemplateEngine } from './workoutTemplates';
import { WorkoutType } from './exercises';

export const getAdaptiveWorkoutData = (workoutType: WorkoutType = 'bodyweight') => {
  return workoutData.map(day => 
    WorkoutTemplateEngine.generateWorkoutForType(day, workoutType)
  );
};

export const getAdaptiveWorkoutDay = (dayId: number, workoutType: WorkoutType = 'bodyweight') => {
  const day = workoutData.find(d => d.id === dayId);
  if (!day) return null;
  
  return WorkoutTemplateEngine.generateWorkoutForType(day, workoutType);
};
