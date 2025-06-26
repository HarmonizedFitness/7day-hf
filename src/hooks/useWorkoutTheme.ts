
import { useWorkoutAccessContext } from '@/contexts/WorkoutAccessContext';
import { getWorkoutTheme, WorkoutTheme } from '@/data/workoutThemes';

export const useWorkoutTheme = (): WorkoutTheme => {
  const { workoutAccess } = useWorkoutAccessContext();
  return getWorkoutTheme(workoutAccess.workoutType);
};
