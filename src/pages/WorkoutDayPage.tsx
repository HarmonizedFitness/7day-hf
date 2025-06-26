import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getAdaptiveWorkoutDay } from "@/data/adaptiveWorkoutData";
import { useWorkoutAccessContext } from "@/contexts/WorkoutAccessContext";
import { useWorkoutTheme } from "@/hooks/useWorkoutTheme";
import DayNavigation from "@/components/DayNavigation";
import ExerciseItem from "@/components/ExerciseItem";
import JournalPrompt from "@/components/JournalPrompt";
import DayProgress from "@/components/DayProgress";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";

const WorkoutDayPage: React.FC = () => {
  const { dayId } = useParams();
  const dayIdNumber = dayId ? parseInt(dayId) : 0;
  const { workoutAccess, loading } = useWorkoutAccessContext();
  const theme = useWorkoutTheme();
  
  const day = useMemo(() => {
    if (loading) return null;
    return getAdaptiveWorkoutDay(dayIdNumber, workoutAccess.workoutType);
  }, [dayIdNumber, workoutAccess.workoutType, loading]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${theme.background})` }}>
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto" style={{ color: theme.primary }} />
          <p className="mt-4" style={{ color: theme.text }}>Loading your personalized workout...</p>
        </div>
      </div>
    );
  }

  // If invalid day id, redirect to home
  if (!day) {
    return <Navigate to="/home" />;
  }

  const logoUrl = "/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png";
  const isLastDay = dayIdNumber === 7;

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8" style={{ background: `linear-gradient(135deg, ${theme.background})` }}>
      <header className="flex justify-between items-center mb-6">
        <div className="text-center flex-grow">
          <img src={logoUrl} alt="Harmonized Fitness Logo" className="w-24 h-24 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: theme.primary }}>7 Days of Harmony</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-2" style={{ color: theme.text }}>Day {day.id}: {day.title}</h2>
          <p className="text-sm mb-4" style={{ color: theme.accent }}>{theme.name}</p>
          <div className="w-24 h-1 mx-auto" style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}></div>
        </div>
        
        <div className="absolute top-8 right-8">
          <DayProgress dayId={day.id} />
        </div>
      </header>
      
      <DayNavigation currentDayId={day.id} />
      
      <div className="bg-stone-700/80 backdrop-blur-sm rounded-lg shadow-md p-6 mb-8 border" style={{ borderColor: theme.primary + '40' }}>
        <h3 className="font-medium mb-6 text-center text-3xl md:text-5xl" style={{ color: theme.text }}>{day.subtitle}</h3>
        
        <div className="p-4 rounded-lg mb-8" style={{ backgroundColor: theme.primary + '20', borderLeft: `4px solid ${theme.primary}` }}>
          <h3 className="text-xl font-semibold mb-2 text-center" style={{ color: theme.text }}>Message from Dr. U:</h3>
          <p className="leading-relaxed text-center" style={{ color: theme.text }}>{day.message}</p>
        </div>
        
        {day.warmup.breathwork && <div className="mt-8">
            <h3 className="font-semibold mb-4 text-center text-2xl md:text-4xl" style={{ color: theme.text }}>✨ Harmonize Your Body (10 Minutes)</h3>
            
            <div className="space-y-4">
              <div className="text-center">
                <p className="font-medium mb-2" style={{ color: theme.text }}>Breathwork:</p>
                <p className="mb-4" style={{ color: theme.text }}>{day.warmup.breathwork}</p>
              </div>
              
              <div className="text-center">
                <p className="font-medium mb-2" style={{ color: theme.text }}>Mobility:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto">
                  {day.warmup.mobilityItems.map((item, index) => (
                    <div key={index} className="p-3 rounded text-sm" style={{ backgroundColor: theme.secondary + '80', color: theme.text }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="mb-2 font-medium" style={{ color: theme.accent }}>Set Your Intention:</p>
                <p className="mb-4 font-medium" style={{ color: theme.primary }}>{day.warmup.intention}</p>
                
                <p className="font-medium mb-2" style={{ color: theme.text }}>Somatic Cue:</p>
                <p style={{ color: theme.text }}>{day.warmup.somaticCue}</p>
              </div>
            </div>
          </div>}
        
        <div className="mt-8">
          <h3 className="font-semibold mb-4 text-center text-2xl md:text-4xl" style={{ color: theme.text }}>🏋️‍♂️ Strength & Movement Circuits (40 Minutes)</h3>
          
          {day.circuits.map((circuit, idx) => <div key={idx} className="mb-6">
              <h4 className="font-medium mb-3 text-xl md:text-3xl text-center my-6" style={{ color: theme.primary }}>{circuit.title}</h4>
              
              {circuit.exercises.map((exercise, eIdx) => <ExerciseItem key={eIdx} dayId={day.id} circuitTitle={circuit.title} name={exercise.name} technicalCue={exercise.technicalCue} somaticCue={exercise.somaticCue} videoInfo={exercise.videoInfo} />)}
            </div>)}
        </div>
        
        {day.cooldown.items.length > 0 && <div className="mt-8">
            <h3 className="font-semibold mb-4 text-center text-2xl md:text-4xl" style={{ color: theme.text }}>🧘 Cool Down & Reflect (10 Minutes)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 max-w-3xl mx-auto">
              {day.cooldown.items.map((item, index) => (
                <div key={index} className="p-3 rounded" style={{ backgroundColor: theme.secondary + '80', color: theme.text }}>
                  {item}
                </div>
              ))}
            </div>
            
            <JournalPrompt dayId={day.id} prompt={day.cooldown.journalPrompt} />
          </div>}
        
        <div className="mt-10 p-4 rounded-lg" style={{ backgroundColor: theme.primary + '20' }}>
          <p className="text-center" style={{ color: theme.text }}>
            <strong>🎭 Dr. U's Hidden Hint:</strong> {day.hiddenHint}
          </p>
        </div>
        
        {isLastDay && <div className="mt-10 p-6 rounded-lg border-2" style={{ background: `linear-gradient(135deg, ${theme.primary}10, ${theme.secondary}10)`, borderColor: theme.primary }}>
            <h3 className="text-xl font-bold text-center mb-4" style={{ color: theme.text }}>Ready for the Complete Transformation?</h3>
            <p className="text-center mb-6" style={{ color: theme.text }}>
              You've completed the 7 Days of Harmony program! The full transformational program 
              continues with progressive training, deeper somatic awareness, and complete mind-body integration.
            </p>
            <div className="text-center">
              <Button asChild className="text-lg py-6 px-8" style={{ backgroundColor: theme.primary, color: theme.text }}>
                <a href="https://www.harmonizedfitness.com" target="_blank" rel="noopener noreferrer">
                  Unlock Your Full Potential <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>}
      </div>
      
      <DayNavigation currentDayId={day.id} />
      
      <footer className="text-center text-sm mt-12" style={{ color: theme.text + '80' }}>
        <p>© 7 Days of Harmony - Transformational Training Program</p>
        <p>Created by Kyle McCormick - Veteran, Elite Fitness Trainer, and Spiritual Practitioner</p>
      </footer>
    </div>
  );
};

export default WorkoutDayPage;
