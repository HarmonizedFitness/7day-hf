
import React, { useMemo, useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/contexts/ProgressContext";
import { workoutData } from "@/data/workoutData";

interface DayProgressProps {
  dayId: number;
}

const DayProgress: React.FC<DayProgressProps> = ({ dayId }) => {
  const { completedExercises } = useProgress();
  const [animateValue, setAnimateValue] = useState(0);
  
  const { total, completed } = useMemo(() => {
    const day = workoutData.find(d => d.id === dayId);
    if (!day) return { total: 0, completed: 0 };
    
    let totalExercises = 0;
    let completedCount = 0;
    
    day.circuits.forEach(circuit => {
      circuit.exercises.forEach(exercise => {
        totalExercises++;
        const key = `day-${dayId}-${circuit.title}-${exercise.name}`;
        if (completedExercises[key]) {
          completedCount++;
        }
      });
    });
    
    return { total: totalExercises, completed: completedCount };
  }, [dayId, completedExercises]);
  
  const percentComplete = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  useEffect(() => {
    // Animate progress value after component mount
    const timer = setTimeout(() => {
      setAnimateValue(percentComplete);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [percentComplete]);
  
  return (
    <div className="my-4 animate-fade-in">
      <div className="flex justify-between items-center mb-2 text-sm">
        <span className="font-opensans">Progress</span>
        <span className="font-opensans">{animateValue}% Complete</span>
      </div>
      <div className="animated-progress">
        <Progress value={animateValue} className="h-2" />
      </div>
    </div>
  );
};

export default DayProgress;
