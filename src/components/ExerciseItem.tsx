
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useProgress } from "@/contexts/ProgressContext";
import { cn } from "@/lib/utils";

interface ExerciseItemProps {
  dayId: number;
  circuitTitle: string;
  name: string;
  technicalCue?: string;
  somaticCue?: string;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ 
  dayId, 
  circuitTitle, 
  name, 
  technicalCue, 
  somaticCue 
}) => {
  const { toggleExercise, isExerciseCompleted } = useProgress();
  const completed = isExerciseCompleted(dayId, circuitTitle, name);

  return (
    <div className={cn(
      "exercise transition-all duration-200",
      completed && "border-green-500 bg-green-50"
    )}>
      <div className="flex items-start gap-2">
        <Checkbox 
          id={`${dayId}-${circuitTitle}-${name}`}
          checked={completed}
          onCheckedChange={() => toggleExercise(dayId, circuitTitle, name)}
          className="mt-1"
        />
        <label 
          htmlFor={`${dayId}-${circuitTitle}-${name}`}
          className="text-base font-medium cursor-pointer flex-1"
        >
          {name}
        </label>
      </div>
      
      {technicalCue && (
        <p className="technical-cue">
          <em>Technical cue:</em> {technicalCue}
        </p>
      )}
      
      {somaticCue && (
        <p className="somatic-cue">
          <em>Somatic cue:</em> {somaticCue}
        </p>
      )}
    </div>
  );
};

export default ExerciseItem;
