
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
  
  // Determine if we're in light theme (gym program)
  const isLightTheme = theme.name === 'In The Gym';

  return (
    <div 
      className={cn(
        "rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl",
        "max-w-full mx-auto backdrop-blur-sm border",
        isLightTheme ? "bg-black/10" : "bg-white/10",
        completed && "ring-2 ring-green-400 bg-green-50/20"
      )}
      style={{ 
        borderColor: completed ? '#22c55e' : isLightTheme ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Exercise Header with Checkbox */}
      <div className="flex items-start gap-4 mb-5">
        <Checkbox 
          id={`${dayId}-${circuitTitle}-${name}`} 
          checked={completed} 
          onCheckedChange={() => toggleExercise(dayId, circuitTitle, name)} 
          className="mt-1 border-2" 
          style={{ 
            borderColor: completed ? '#22c55e' : '#60A5FA',
            backgroundColor: completed ? '#22c55e' : 'transparent'
          }}
        />
        <label 
          htmlFor={`${dayId}-${circuitTitle}-${name}`} 
          className="font-inter font-semibold text-lg cursor-pointer flex-1 leading-tight text-black"
        >
          {name}
        </label>
      </div>
      
      {/* Technical Cue */}
      {technicalCue && (
        <div className="mb-4 pl-10">
          <p className="font-inter text-sm leading-relaxed">
            <span className="font-medium text-gray-600">Technical cue:</span>{" "}
            <span className="italic text-blue-800">{technicalCue}</span>
          </p>
        </div>
      )}
      
      {/* Somatic Cue */}
      {somaticCue && (
        <div className="mb-5 pl-10">
          <p className="font-inter text-sm leading-relaxed">
            <span className="font-medium text-orange-600">Somatic cue:</span>{" "}
            <span className="text-orange-500">{somaticCue}</span>
          </p>
        </div>
      )}

      {/* Video Info */}
      {videoInfo && (
        <div 
          className="mt-5 p-5 rounded-lg border backdrop-blur-sm"
          style={{ 
            backgroundColor: isLightTheme ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.15)',
            borderColor: 'rgba(59, 130, 246, 0.3)'
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl">📹</span>
            <span className="font-inter font-bold text-sm text-blue-600">
              INSTRUCTIONAL VIDEO
            </span>
          </div>
          <div className="space-y-3 text-sm font-inter">
            <p>
              <span className="font-medium text-gray-600">Title:</span>{" "}
              <span className="text-black">{videoInfo.title}</span>
            </p>
            <p>
              <span className="font-medium text-gray-600">URL:</span>{" "}
              <a 
                href={videoInfo.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline hover:text-blue-800 hover:no-underline transition-all duration-200"
              >
                {videoInfo.url}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseItem;
