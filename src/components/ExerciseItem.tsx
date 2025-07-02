
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useProgress } from "@/contexts/ProgressContext";
import { useWorkoutTheme } from "@/hooks/useWorkoutTheme";
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
  const theme = useWorkoutTheme();
  const completed = isExerciseCompleted(dayId, circuitTitle, name);

  return (
    <div 
      className={cn(
        "rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-md border",
        "max-w-full mx-auto backdrop-blur-sm",
        completed && "ring-2 ring-green-500"
      )}
      style={{ 
        backgroundColor: theme.cardBg,
        borderColor: completed ? '#22c55e' : theme.borderColor
      }}
    >
      {/* Exercise Header with Checkbox */}
      <div className="flex items-start gap-4 mb-5">
        <Checkbox 
          id={`${dayId}-${circuitTitle}-${name}`} 
          checked={completed} 
          onCheckedChange={() => toggleExercise(dayId, circuitTitle, name)} 
          className="mt-1 border-2 rounded" 
          style={{ 
            borderColor: completed ? '#22c55e' : theme.primary,
            backgroundColor: completed ? '#22c55e' : 'transparent'
          }}
        />
        <label 
          htmlFor={`${dayId}-${circuitTitle}-${name}`} 
          className="font-inter font-semibold text-lg cursor-pointer flex-1 leading-tight text-gray-900"
        >
          {name}
        </label>
      </div>
      
      {/* Technical Cue */}
      {technicalCue && (
        <div className="mb-4 pl-10">
          <p className="font-inter text-sm leading-relaxed">
            <span className="font-semibold text-gray-700">Technical cue:</span>{" "}
            <span className="italic" style={{ color: theme.primary }}>
              {technicalCue}
            </span>
          </p>
        </div>
      )}
      
      {/* Somatic Cue */}
      {somaticCue && (
        <div className="mb-5 pl-10">
          <p className="font-inter text-sm leading-relaxed">
            <span className="font-semibold text-gray-700">Somatic cue:</span>{" "}
            <span className="italic text-gray-600">
              {somaticCue}
            </span>
          </p>
        </div>
      )}

      {/* Video Info */}
      {videoInfo && (
        <div 
          className="mt-5 p-5 rounded-lg border backdrop-blur-sm"
          style={{ 
            backgroundColor: theme.hoverBg,
            borderColor: theme.borderColor
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl">📹</span>
            <span 
              className="font-inter font-bold text-sm"
              style={{ color: theme.primary }}
            >
              INSTRUCTIONAL VIDEO
            </span>
          </div>
          <div className="space-y-3 text-sm font-inter">
            <p>
              <span className="font-semibold text-gray-700">Title:</span>{" "}
              <span className="text-gray-900">{videoInfo.title}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-700">URL:</span>{" "}
              <a 
                href={videoInfo.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-medium underline hover:no-underline transition-all duration-200"
                style={{ color: theme.primary }}
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
