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
  const {
    dayId
  } = useParams();
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
  return <div className="container max-w-4xl mx-auto px-4 py-8 bg-stone-800">
      <header className="flex justify-between items-center mb-6">
        <div className="text-center flex-grow">
          <img src={logoUrl} alt="Harmonized Fitness Logo" className="w-24 h-24 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-burnt-orange mb-2">7 Days of Harmony</h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-200 mb-4">Week 1, Day {day.id}: {day.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-burnt-orange to-charcoal mx-auto"></div>
        </div>
        
        <div className="absolute top-8 right-8">
          <DayProgress dayId={day.id} />
        </div>
      </header>
      
      <DayNavigation currentDayId={day.id} />
      
      <div className="bg-stone-700 rounded-lg shadow-md p-6 mb-8">
        <h3 className="font-medium mb-6 text-gray-200 text-center text-5xl">{day.subtitle}</h3>
        
        <div className="message-box bg-cyan-800">
          <h3 className="text-xl font-semibold mb-2 text-center text-zinc-50">Message from Dr. U:</h3>
          <p className="leading-relaxed text-center">{day.message}</p>
        </div>
        
        {day.warmup.breathwork && <div className="mt-8">
            <h3 className="font-semibold mb-4 text-white text-center text-4xl">✨ Harmonize Your Body (10 Minutes)</h3>
            
            <div className="ml-4">
              <p className="font-medium mb-2 text-gray-200 text-center">Breathwork:</p>
              <p className="ml-4 mb-4 text-gray-200 text-center">{day.warmup.breathwork}</p>
              
              <p className="font-medium mb-2 text-gray-200 text-center">Mobility:</p>
              <ul className="list-disc ml-8 mb-4 text-gray-200">
                {day.warmup.mobilityItems.map((item, index) => <li key={index} className="mx-[240px]">{item}</li>)}
              </ul>
              
              <p className="mb-2 mx-0 text-amber-400 font-thin text-left">Set Your Intention:</p>
              <p className="intention ml-4 mb-4 text-lime-200 font-medium text-left">{day.warmup.intention}</p>
              
              <p className="font-medium mb-2 text-gray-200 text-left">Somatic Cue:</p>
              <p className="ml-4 text-gray-200 text-left">{day.warmup.somaticCue}</p>
            </div>
          </div>}
        
        <div className="mt-8">
          <h3 className="font-semibold mb-4 text-white text-center text-4xl">🏋️‍♂️ Strength & Movement Circuits (40 Minutes)</h3>
          
          {day.circuits.map((circuit, idx) => <div key={idx} className="mb-6">
              <h4 className="font-medium mb-3 text-burnt-orange text-3xl text-center text-lime-200 my-[52px]">{circuit.title}</h4>
              
              {circuit.exercises.map((exercise, eIdx) => <ExerciseItem key={eIdx} dayId={day.id} circuitTitle={circuit.title} name={exercise.name} technicalCue={exercise.technicalCue} somaticCue={exercise.somaticCue} videoInfo={exercise.videoInfo} />)}
            </div>)}
        </div>
        
        {day.cooldown.items.length > 0 && <div className="mt-8">
            <h3 className="font-semibold mb-4 text-white text-center text-4xl">🧘 Cool Down & Reflect (10 Minutes)</h3>
            
            <ul className="list-disc ml-6 mb-6 text-gray-200 bg-gray-300 mx-[92px]">
              {day.cooldown.items.map((item, index) => <li key={index} className="mb-1 rounded-none bg-stone-700 mx-0 px-0">{item}</li>)}
            </ul>
            
            <JournalPrompt dayId={day.id} prompt={day.cooldown.journalPrompt} />
          </div>}
        
        <div className="hidden-hint mt-10 bg-sky-900">
          <strong>🎭 Dr. U's Hidden Hint:</strong> {day.hiddenHint}
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
    </div>;
};
export default WorkoutDayPage;