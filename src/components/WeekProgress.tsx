
import React, { useMemo, useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { useProgress } from "@/contexts/ProgressContext";
import { getAdaptiveWorkoutData } from "@/data/adaptiveWorkoutData";
import { CheckCircle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWorkoutTheme } from "@/hooks/useWorkoutTheme";
import { useWorkoutAccessContext } from "@/contexts/WorkoutAccessContext";

// Define a type that includes both number keys and the 'overall' string key
interface AnimateValues {
  [key: number]: number;
  overall?: number;
}

const WeekProgress: React.FC = () => {
  const { completedExercises } = useProgress();
  const theme = useWorkoutTheme();
  const { workoutAccess } = useWorkoutAccessContext();
  const [animateValues, setAnimateValues] = useState<AnimateValues>({});
  const [loaded, setLoaded] = useState(false);
  
  // Get the current program type from workout access
  const currentProgramType = workoutAccess.workoutType;
  
  // Get dynamic workout data based on current program
  const workoutData = useMemo(() => {
    return getAdaptiveWorkoutData(currentProgramType);
  }, [currentProgramType]);
  
  const dayProgress = useMemo(() => {
    return workoutData.map(day => {
      let totalExercises = 0;
      let completedCount = 0;
      day.circuits.forEach(circuit => {
        circuit.exercises.forEach(exercise => {
          totalExercises++;
          // Include program type in the completion key for independent tracking
          const key = `${currentProgramType}-day-${day.id}-${circuit.title}-${exercise.name}`;
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
  }, [completedExercises, workoutData, currentProgramType]);
  
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

  // Get theme colors for styling
  const getThemeAccent = () => {
    if (theme.background.includes('red')) return 'text-red-400';
    if (theme.background.includes('blue')) return 'text-blue-400';
    if (theme.background.includes('green')) return 'text-green-400';
    return 'text-orange-400'; // Default burnt orange
  };

  const getThemeProgress = () => {
    if (theme.background.includes('red')) return 'bg-red-500';
    if (theme.background.includes('blue')) return 'bg-blue-500';
    if (theme.background.includes('green')) return 'bg-green-500';
    return 'bg-orange-500'; // Default burnt orange
  };
  
  return (
    <div className={`space-y-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Overall Progress with Glassmorphism */}
      <div className="glass-card p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-inter font-semibold text-lg text-white text-shadow-soft">
            {theme.name} Program
          </h3>
          <span className="font-inter font-medium text-white text-shadow-soft">
            {animateValues.overall || overallProgress}% Complete
          </span>
        </div>
        <div className="relative">
          <Progress 
            value={animateValues.overall || overallProgress} 
            className="h-3 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden"
          />
          <div 
            className={`absolute top-0 left-0 h-full ${getThemeProgress()} rounded-full transition-all duration-700`}
            style={{ width: `${animateValues.overall || overallProgress}%` }}
          />
        </div>
      </div>
      
      {/* Day Progress Grid with Glassmorphism */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 staggered-fade-in">
        {dayProgress.map((day, index) => (
          <Link
            to={`/day/${day.dayId}`}
            key={day.dayId}
            className={cn(
              "glass-card p-4 flex flex-col items-center text-center hover:glass-card-hover transition-all duration-300 mobile-tap group bg-blue-900/20 backdrop-blur-sm",
              day.isComplete && "border-green-400/30"
            )}
            style={{
              animationDelay: `${index * 0.1}s`,
              backgroundColor: 'rgba(30, 58, 138, 0.15)' // transparent light dark blue
            }}
          >
            {/* Icon */}
            <div className="mb-3 flex-shrink-0">
              {day.isComplete ? (
                <CheckCircle className="h-8 w-8 text-green-400 drop-shadow-lg" />
              ) : (
                <Circle className="h-8 w-8 text-white/60 drop-shadow-lg" />
              )}
            </div>
            
            {/* Title */}
            <div className="mb-3 min-h-0">
              <h4 className="font-inter font-semibold text-sm sm:text-base text-white text-shadow-soft leading-tight">
                DAY {day.dayId}
              </h4>
              <p className="font-inter font-medium text-xs sm:text-sm text-white/90 text-shadow-soft mt-1 leading-tight">
                {day.mainTitle}
              </p>
              {day.subtitle && (
                <p className="font-inter font-normal text-xs text-white/70 text-shadow-soft mt-1">
                  {day.subtitle}
                </p>
              )}
            </div>
            
            {/* Progress */}
            <div className="w-full space-y-2">
              <div className="relative bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                <div 
                  className={`absolute top-0 left-0 h-full ${getThemeProgress()} rounded-full transition-all duration-700`}
                  style={{ width: `${animateValues[day.dayId] || 0}%` }}
                />
              </div>
              <span className={cn(
                "font-inter font-medium text-xs text-shadow-soft",
                getThemeAccent()
              )}>
                {animateValues[day.dayId] || day.percentComplete}%
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WeekProgress;
