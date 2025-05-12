
import React, { useMemo } from "react";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { useProgress } from "@/contexts/ProgressContext";
import { workoutData } from "@/data/workoutData";
import { CheckCircle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const WeekProgress: React.FC = () => {
  const { completedExercises } = useProgress();
  
  const dayProgress = useMemo(() => {
    return workoutData.map(day => {
      let totalExercises = 0;
      let completedCount = 0;
      
      day.circuits.forEach(circuit => {
        circuit.exercises.forEach(exercise => {
          totalExercises++;
          const key = `day-${day.id}-${circuit.title}-${exercise.name}`;
          if (completedExercises[key]) {
            completedCount++;
          }
        });
      });
      
      const percentComplete = totalExercises > 0 
        ? Math.round((completedCount / totalExercises) * 100) 
        : 0;
      
      return {
        dayId: day.id,
        title: day.title,
        percentComplete,
        isComplete: percentComplete === 100
      };
    });
  }, [completedExercises]);
  
  const overallProgress = useMemo(() => {
    if (dayProgress.length === 0) return 0;
    const totalPercent = dayProgress.reduce((sum, day) => sum + day.percentComplete, 0);
    return Math.round(totalPercent / dayProgress.length);
  }, [dayProgress]);
  
  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="font-medium">Week 1 Overall Progress</span>
          <span>{overallProgress}% Complete</span>
        </div>
        <Progress value={overallProgress} className="h-2" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dayProgress.map((day) => (
          <Link 
            to={`/day/${day.dayId}`} 
            key={day.dayId}
            className={cn(
              "p-4 rounded-lg border border-gray-200 flex items-center hover:bg-gray-50 transition-all",
              day.isComplete && "border-green-500 bg-green-50 hover:bg-green-50/80"
            )}
          >
            <div className="mr-4 text-2xl">
              {day.isComplete ? (
                <CheckCircle className="h-8 w-8 text-green-500" />
              ) : (
                <Circle className="h-8 w-8 text-gray-300" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-medium">
                Day {day.dayId}: {day.title}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <Progress value={day.percentComplete} className="h-1.5 flex-1" />
                <span className="text-xs text-gray-500">{day.percentComplete}%</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WeekProgress;
