
import { useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CompletedExercises } from "@/types/progress";
import { toast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";

export const useExerciseOperations = (
  user: User | null,
  currentProgram: string,
  completedExercises: CompletedExercises,
  setCompletedExercises: React.Dispatch<React.SetStateAction<CompletedExercises>>
) => {
  const toggleExercise = useCallback(async (dayId: number, circuitTitle: string, exerciseName: string) => {
    const key = `day-${dayId}-${circuitTitle}-${exerciseName}`;
    const isCompleted = !completedExercises[key];
    
    // Update local state immediately for responsive UI
    setCompletedExercises(prev => ({
      ...prev,
      [key]: isCompleted
    }));
    
    if (user) {
      // User is authenticated, save to Supabase
      try {
        const { error } = await supabase
          .from('user_progress')
          .upsert({
            user_id: user.id,
            day_id: dayId,
            circuit_title: circuitTitle,
            exercise_name: exerciseName,
            program_type: currentProgram,
            completed: isCompleted,
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'user_id, day_id, circuit_title, exercise_name, program_type'
          });
        
        if (error) throw error;
      } catch (error) {
        console.error("Error saving exercise status:", error);
        // Revert local state if saving fails
        setCompletedExercises(prev => ({
          ...prev,
          [key]: !isCompleted
        }));
        
        toast({
          title: "Error saving progress",
          description: "There was an error saving your progress. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      // User is not authenticated, save to localStorage with program scope
      localStorage.setItem(`completedExercises_${currentProgram}`, JSON.stringify({
        ...completedExercises,
        [key]: isCompleted
      }));
    }
  }, [user, currentProgram, completedExercises, setCompletedExercises]);

  const isExerciseCompleted = useCallback((dayId: number, circuitTitle: string, exerciseName: string) => {
    const key = `day-${dayId}-${circuitTitle}-${exerciseName}`;
    return !!completedExercises[key];
  }, [completedExercises]);

  return {
    toggleExercise,
    isExerciseCompleted
  };
};
