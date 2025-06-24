
import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getAdaptiveWorkoutDay } from "@/data/adaptiveWorkoutData";
import { useWorkoutAccessContext } from "@/contexts/WorkoutAccessContext";
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
  
  const day = useMemo(() => {
    if (loading) return null;
    return getAdaptiveWorkoutDay(dayIdNumber, workoutAccess.workoutType);
  }, [dayIdNumber, workoutAccess.workoutType, loading]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-800">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-burnt-orange mx-auto" />
          <p className="mt-4 text-gray-200">Loading your personalized workout...</p>
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
    <div className="container max-w-4xl mx-auto px-4 py-8 bg-stone-800">
      <header className="flex justify-between items-center mb-6">
        <div className="text-center flex-grow">
          <img src={logoUrl} alt="Harmonized Fitness Logo" className="w-24 h-24 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-burnt-orange mb-2">7 Days of Harmony</h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-200 mb-4">Day {day.id}: {day.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-burnt-orange to-charcoal mx-auto"></div>
        </div>
        
        <div className="absolute top-8 right-8">
          <DayProgress dayId={day.id} />
        </div>
      </header>
      
      <DayNavigation currentDayId={day.id} />
      
      <div className="bg-stone-700 rounded-lg shadow-md p-6 mb-8">
        <h3 className="font-medium mb-6 text-gray-200 text-center text-3xl md:text-5xl">{day.subtitle}</h3>
        
        <div className="message-box bg-cyan-800 p-4 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2 text-center text-zinc-50">Message from Dr. U:</h3>
          <p className="leading-relaxed text-center text-gray-200">{day.message}</p>
        </div>
        
        {day.warmup.breathwork && <div className="mt-8">
            <h3 className="font-semibold mb-4 text-white text-center text-2xl md:text-4xl">✨ Harmonize Your Body (10 Minutes)</h3>
            
            <div className="space-y-4">
              <div className="text-center">
                <p className="font-medium mb-2 text-gray-200">Breathwork:</p>
                <p className="mb-4 text-gray-200">{day.warmup.breathwork}</p>
              </div>
              
              <div className="text-center">
                <p className="font-medium mb-2 text-gray-200">Mobility:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto">
                  {day.warmup.mobilityItems.map((item, index) => (
                    <div key={index} className="bg-stone-600 p-3 rounded text-gray-200 text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="mb-2 text-amber-400 font-medium">Set Your Intention:</p>
                <p className="mb-4 text-lime-200 font-medium">{day.warmup.intention}</p>
                
                <p className="font-medium mb-2 text-gray-200">Somatic Cue:</p>
                <p className="text-gray-200">{day.warmup.somaticCue}</p>
              </div>
            </div>
          </div>}
        
        <div className="mt-8">
          <h3 className="font-semibold mb-4 text-white text-center text-2xl md:text-4xl">🏋️‍♂️ Strength & Movement Circuits (40 Minutes)</h3>
          
          {day.circuits.map((circuit, idx) => <div key={idx} className="mb-6">
              <h4 className="font-medium mb-3 text-lime-200 text-xl md:text-3xl text-center my-6">{circuit.title}</h4>
              
              {circuit.exercises.map((exercise, eIdx) => <ExerciseItem key={eIdx} dayId={day.id} circuitTitle={circuit.title} name={exercise.name} technicalCue={exercise.technicalCue} somaticCue={exercise.somaticCue} videoInfo={exercise.videoInfo} />)}
            </div>)}
        </div>
        
        {day.cooldown.items.length > 0 && <div className="mt-8">
            <h3 className="font-semibold mb-4 text-white text-center text-2xl md:text-4xl">🧘 Cool Down & Reflect (10 Minutes)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 max-w-3xl mx-auto">
              {day.cooldown.items.map((item, index) => (
                <div key={index} className="bg-stone-600 p-3 rounded text-gray-200">
                  {item}
                </div>
              ))}
            </div>
            
            <JournalPrompt dayId={day.id} prompt={day.cooldown.journalPrompt} />
          </div>}
        
        <div className="mt-10 p-4 bg-sky-900 rounded-lg">
          <p className="text-gray-200 text-center">
            <strong>🎭 Dr. U's Hidden Hint:</strong> {day.hiddenHint}
          </p>
        </div>
        
        {isLastDay && <div className="mt-10 p-6 bg-gradient-to-r from-burnt-orange/10 to-charcoal/10 rounded-lg border-2 border-burnt-orange">
            <h3 className="text-xl font-bold text-center mb-4 text-white">Ready for the Complete Transformation?</h3>
            <p className="text-center mb-6 text-gray-200">
              You've completed the 7 Days of Harmony program! The full transformational program 
              continues with progressive training, deeper somatic awareness, and complete mind-body integration.
            </p>
            <div className="text-center">
              <Button asChild className="bg-burnt-orange hover:bg-burnt-orange/90 text-lg py-6 px-8">
                <a href="https://www.harmonizedfitness.com" target="_blank" rel="noopener noreferrer">
                  Unlock Your Full Potential <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>}
      </div>
      
      <DayNavigation currentDayId={day.id} />
      
      <footer className="text-center text-sm text-gray-400 mt-12">
        <p>© 7 Days of Harmony - Transformational Training Program</p>
        <p>Created by Kyle McCormick - Veteran, Elite Fitness Trainer, and Spiritual Practitioner</p>
      </footer>
    </div>
  );
};

export default WorkoutDayPage;
