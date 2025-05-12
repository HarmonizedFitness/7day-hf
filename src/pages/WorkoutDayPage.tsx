import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { workoutData } from "@/data/workoutData";
import DayNavigation from "@/components/DayNavigation";
import ExerciseItem from "@/components/ExerciseItem";
import JournalPrompt from "@/components/JournalPrompt";
import DayProgress from "@/components/DayProgress";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WorkoutDayPage: React.FC = () => {
  const { dayId } = useParams();
  const dayIdNumber = dayId ? parseInt(dayId) : 0;
  
  const day = useMemo(() => {
    return workoutData.find(d => d.id === dayIdNumber);
  }, [dayIdNumber]);
  
  // If invalid day id, redirect to home
  if (!day) {
    return <Navigate to="/home" />;
  }

  const logoUrl = "/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png";
  const isLastDay = dayIdNumber === 7;
  
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 bg-[#D3E4FD]">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <img src={logoUrl} alt="HF Logo" className="w-12 h-12 mr-4" />
          <h1 className="text-2xl font-bold">Harmonized Fitness</h1>
        </div>
        <DayProgress dayId={day.id} />
      </header>
      
      <DayNavigation currentDayId={day.id} />
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-1">Week 1, Day {day.id}: {day.title}</h2>
        <h3 className="text-xl font-medium mb-6 text-gray-700">{day.subtitle}</h3>
        
        <div className="message-box">
          <h3 className="text-xl font-semibold mb-2">Message from Dr. U:</h3>
          <p className="leading-relaxed">{day.message}</p>
        </div>
        
        {day.warmup.breathwork && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">✨ Harmonize Your Body (10 Minutes)</h3>
            
            <div className="ml-4">
              <p className="font-medium mb-2">Breathwork:</p>
              <p className="ml-4 mb-4">{day.warmup.breathwork}</p>
              
              <p className="font-medium mb-2">Mobility:</p>
              <ul className="list-disc ml-8 mb-4">
                {day.warmup.mobilityItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <p className="font-medium mb-2">Intention:</p>
              <p className="intention ml-4 mb-4">{day.warmup.intention}</p>
              
              <p className="font-medium mb-2">Somatic Cue:</p>
              <p className="ml-4">{day.warmup.somaticCue}</p>
            </div>
          </div>
        )}
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">🏋️‍♂️ Strength & Movement Circuits (40 Minutes)</h3>
          
          {day.circuits.map((circuit, idx) => (
            <div key={idx} className="mb-6">
              <h4 className="text-lg font-medium mb-3">{circuit.title}</h4>
              
              {circuit.exercises.map((exercise, eIdx) => (
                <ExerciseItem
                  key={eIdx}
                  dayId={day.id}
                  circuitTitle={circuit.title}
                  name={exercise.name}
                  technicalCue={exercise.technicalCue}
                  somaticCue={exercise.somaticCue}
                />
              ))}
            </div>
          ))}
        </div>
        
        {day.cooldown.items.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">🧘 Cool Down & Reflect (10 Minutes)</h3>
            
            <ul className="list-disc ml-6 mb-6">
              {day.cooldown.items.map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
              ))}
            </ul>
            
            <JournalPrompt dayId={day.id} prompt={day.cooldown.journalPrompt} />
          </div>
        )}
        
        <div className="hidden-hint mt-10">
          <strong>🎭 Dr. U's Hidden Hint:</strong> {day.hiddenHint}
        </div>
        
        {isLastDay && (
          <div className="mt-10 p-6 bg-gradient-to-r from-burnt-orange/10 to-charcoal/10 rounded-lg border-2 border-burnt-orange">
            <h3 className="text-xl font-bold text-center mb-4">Ready for the Complete Transformation?</h3>
            <p className="text-center mb-6">
              You've completed Week 1 of your journey! The full 12-week Harmonized Fitness program 
              continues with progressive training, deeper somatic awareness, and complete mind-body integration.
            </p>
            <div className="text-center">
              <Button className="bg-burnt-orange hover:bg-burnt-orange/90 text-lg py-6 px-8">
                Unlock Your Full Potential <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <DayNavigation currentDayId={day.id} />
      
      <footer className="text-center text-sm text-gray-500 mt-12">
        <p>© Harmonized Fitness - 12-Week Transformational Training Program</p>
        <p>Created by Kyle McCormick - Veteran, Elite Fitness Trainer, and Spiritual Practitioner</p>
      </footer>
    </div>
  );
};

export default WorkoutDayPage;
