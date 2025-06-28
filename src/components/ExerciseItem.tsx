
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
  const {
    toggleExercise,
    isExerciseCompleted
  } = useProgress();
  const theme = useWorkoutTheme();
  const completed = isExerciseCompleted(dayId, circuitTitle, name);

  return (
    <div 
      className={cn(
        "rounded-xl p-5 border transition-all duration-300 shadow-sm hover:shadow-md",
        "max-w-full mx-auto bg-white/50 backdrop-blur-sm",
        completed && "ring-2 ring-green-400 bg-green-50/50"
      )}
      style={{ 
        borderLeftColor: theme.primary,
        borderLeftWidth: '4px',
        borderColor: completed ? '#22c55e' : theme.primary + '30'
      }}
    >
      {/* Exercise Header with Checkbox */}
      <div className="flex items-start gap-3 mb-4">
        <Checkbox 
          id={`${dayId}-${circuitTitle}-${name}`} 
          checked={completed} 
          onCheckedChange={() => toggleExercise(dayId, circuitTitle, name)} 
          className="mt-1" 
          style={{ 
            borderColor: theme.primary,
            backgroundColor: completed ? theme.primary : 'transparent'
          }}
        />
        <label 
          htmlFor={`${dayId}-${circuitTitle}-${name}`} 
          className="font-inter font-semibold text-lg cursor-pointer flex-1 leading-tight"
          style={{ color: theme.text }}
        >
          {name}
        </label>
      </div>
      
      {/* Technical Cue */}
      {technicalCue && (
        <div className="mb-3 pl-8">
          <p className="font-inter text-sm italic leading-relaxed" style={{ color: theme.text + 'CC' }}>
            <span className="font-medium not-italic" style={{ color: theme.accent }}>Technical cue:</span> {technicalCue}
          </p>
        </div>
      )}
      
      {/* Somatic Cue */}
      {somaticCue && (
        <div className="mb-4 pl-8">
          <p className="font-inter text-sm leading-relaxed" style={{ color: theme.primary }}>
            <span className="font-medium" style={{ color: theme.accent }}>Somatic cue:</span> {somaticCue}
          </p>
        </div>
      )}

      {/* Video Info */}
      {videoInfo && (
        <div 
          className="mt-4 p-4 rounded-lg border"
          style={{ 
            backgroundColor: theme.primary + '10',
            borderColor: theme.primary + '30'
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">📹</span>
            <span className="font-inter font-semibold text-sm" style={{ color: theme.primary }}>
              INSTRUCTIONAL VIDEO
            </span>
          </div>
          <div className="space-y-2 text-sm font-inter">
            <p style={{ color: theme.text }}>
              <span className="font-medium">Title:</span> {videoInfo.title}
            </p>
            <p style={{ color: theme.text }}>
              <span className="font-medium">URL:</span>{" "}
              <a 
                href={videoInfo.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:no-underline transition-all duration-200"
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
