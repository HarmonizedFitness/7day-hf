

import React, { useMemo, useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { useProgress } from "@/contexts/ProgressContext";
import { workoutData } from "@/data/workoutData";
import { CheckCircle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

// Define a type that includes both number keys and the 'overall' string key
interface AnimateValues {
  [key: number]: number;
  overall?: number;
}

const WeekProgress: React.FC = () => {
  const {
    completedExercises
  } = useProgress();
  const [animateValues, setAnimateValues] = useState<AnimateValues>({});
  const [loaded, setLoaded] = useState(false);
  
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
      const percentComplete = totalExercises > 0 ? Math.round(completedCount / totalExercises * 100) : 0;
      
      // Extract text in parentheses for second line
      const titleMatch = day.title.match(/^([^(]+)(\([^)]+\))?/);
      const mainTitle = titleMatch ? titleMatch[1].trim() : day.title;
      const subtitle = titleMatch && titleMatch[2] ? titleMatch[2] : '';
      
      return {
        dayId: day.id,
        title: day.title,
        mainTitle,
        subtitle,
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
  
  useEffect(() => {
    // Set initial values to zero
    const initialValues: AnimateValues = dayProgress.reduce((acc, day) => {
      acc[day.dayId] = 0;
      return acc;
    }, {} as AnimateValues);

    // Also initialize the overall progress
    initialValues.overall = 0;
    setAnimateValues(initialValues);

    // Trigger loaded state for fade-in animations
    setTimeout(() => {
      setLoaded(true);
    }, 100);

    // Animate progress values after a small delay
    setTimeout(() => {
      const updatedValues: AnimateValues = dayProgress.reduce((acc, day) => {
        acc[day.dayId] = day.percentComplete;
        return acc;
      }, {} as AnimateValues);

      // Also animate the overall progress
      updatedValues.overall = overallProgress;
      setAnimateValues(updatedValues);
    }, 500);
  }, [dayProgress, overallProgress]);
  
  return (
    <div className={`space-y-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="animated-progress">
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="font-medium text-zinc-100">Overall Progress</span>
          <span className="text-zinc-100">{animateValues.overall || overallProgress}% Complete</span>
        </div>
        <Progress value={animateValues.overall || overallProgress} className="h-2" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 staggered-fade-in">
        {dayProgress.map((day, index) => (
          <Link
            to={`/day/${day.dayId}`}
            key={day.dayId}
            className={cn(
              "p-4 rounded-lg border border-gray-200 flex items-center hover:bg-gray-50 transition-all card-hover",
              day.isComplete && "border-green-500 bg-green-50 hover:bg-green-50/80"
            )}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="mr-4 text-2xl flex-shrink-0">
              {day.isComplete ? (
                <CheckCircle className="h-8 w-8 text-green-500" />
              ) : (
                <Circle className="h-8 w-8 text-gray-300" />
              )}
            </div>
            <div className="flex-1 min-w-0 text-center">
              <div className="mb-2">
                <h3 className="font-playfair text-orange-400 text-lg font-normal">
                  DAY {day.dayId}: {day.mainTitle}
                </h3>
                {day.subtitle && (
                  <p className="font-playfair text-orange-400 text-sm font-normal mt-1">
                    {day.subtitle}
                  </p>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={animateValues[day.dayId] || 0} className="h-1.5 flex-1" />
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {animateValues[day.dayId] || day.percentComplete}%
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WeekProgress;
