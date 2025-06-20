
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
  videoInfo?: {
    title: string;
    instructor: string;
    duration: string;
    url: string;
  };
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ 
  dayId, 
  circuitTitle, 
  name, 
  technicalCue, 
  somaticCue,
  videoInfo
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

      {videoInfo && (
        <div className="mt-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blue-600">📹</span>
            <span className="font-semibold text-blue-800 text-sm">INSTRUCTIONAL VIDEO</span>
          </div>
          <div className="space-y-1 text-sm">
            <p><strong>Title:</strong> {videoInfo.title}</p>
            <p>
              <strong>URL:</strong>{" "}
              <a 
                href={videoInfo.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {videoInfo.url}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseItem;
