
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
      <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${theme.background} relative`}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/lovable-uploads/c15aa6ee-278f-4841-a501-5815be53ffd0.png')`,
            filter: 'blur(2px)',
            zIndex: 0
          }}
        />
        <div className="text-center relative z-10">
          <Loader2 className="h-12 w-12 animate-spin mx-auto" style={{ color: theme.primary }} />
          <p className="mt-4 font-inter" style={{ color: theme.text }}>Loading your personalized workout...</p>
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
    <div className={`min-h-screen relative bg-gradient-to-br ${theme.background}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/c15aa6ee-278f-4841-a501-5815be53ffd0.png')`,
          filter: 'blur(2px)',
          zIndex: 0
        }}
      />
      
      <div className="container max-w-4xl mx-auto px-4 py-8 relative z-10">
        {/* HEADER SECTION */}
        <header className="flex justify-between items-start mb-8">
          <div className="text-center flex-grow">
            <img src={logoUrl} alt="Harmonized Fitness Logo" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-2" style={{ color: theme.primary }}>
              7 Days of Harmony
            </h1>
            <h2 className="font-playfair text-xl md:text-2xl font-semibold mb-2" style={{ color: theme.text }}>
              Day {day.id}: {day.title}
            </h2>
            <p className="font-inter text-sm mb-4" style={{ color: theme.accent }}>{theme.name}</p>
            
            {/* Horizontal rule under program label */}
            <div 
              className="w-32 h-0.5 mx-auto mb-6" 
              style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
            />
          </div>
          
          {/* Progress bar positioned top-right */}
          <div className="absolute top-8 right-4 md:right-8">
            <DayProgress dayId={day.id} />
          </div>
        </header>
        
        <DayNavigation currentDayId={day.id} />
        
        {/* MAIN CONTENT CONTAINER */}
        <div className="space-y-8">
          
          {/* DAY SUBTITLE */}
          <div className="glass-card p-6 mx-2 md:mx-0">
            <h3 className="font-playfair font-semibold text-2xl md:text-4xl text-center" style={{ color: theme.text }}>
              {day.subtitle}
            </h3>
          </div>
          
          {/* MESSAGE FROM DR. U */}
          <div 
            className="glass-card p-6 mx-2 md:mx-0" 
            style={{ 
              backgroundColor: theme.primary + '20', 
              borderLeft: `4px solid ${theme.primary}`,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h3 className="font-playfair text-xl font-semibold mb-3 text-center" style={{ color: theme.text }}>
              Message from Dr. U:
            </h3>
            <p className="font-inter leading-relaxed text-center" style={{ color: theme.text }}>
              {day.message}
            </p>
          </div>
          
          {/* HARMONIZE YOUR BODY (10 MINUTES) */}
          {day.warmup.breathwork && (
            <div className="glass-card p-6 mx-2 md:mx-0" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-6 text-center" style={{ color: theme.text }}>
                ✨ Harmonize Your Body (10 Minutes)
              </h3>
              
              <div className="space-y-6">
                {/* Breathwork Section */}
                <div className="text-center">
                  <h4 className="font-inter font-semibold mb-3 text-lg" style={{ color: theme.primary }}>
                    Breathwork:
                  </h4>
                  <p className="font-inter mb-4" style={{ color: theme.text }}>
                    {day.warmup.breathwork}
                  </p>
                </div>
                
                {/* Mobility Section */}
                <div className="text-center">
                  <h4 className="font-inter font-semibold mb-3 text-lg" style={{ color: theme.primary }}>
                    Mobility:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
                    {day.warmup.mobilityItems.map((item, index) => (
                      <div 
                        key={index} 
                        className="p-3 rounded-lg text-sm font-inter"
                        style={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                          color: theme.text,
                          backdropFilter: 'blur(4px)'
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Intention & Somatic Cue */}
                <div className="text-center space-y-4 mt-6">
                  <div>
                    <p className="font-inter font-semibold mb-2" style={{ color: theme.accent }}>
                      Set Your Intention:
                    </p>
                    <p className="font-inter font-medium text-lg" style={{ color: theme.primary }}>
                      {day.warmup.intention}
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-inter font-semibold mb-2" style={{ color: theme.accent }}>
                      Somatic Cue:
                    </p>
                    <p className="font-inter" style={{ color: theme.text }}>
                      {day.warmup.somaticCue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* STRENGTH & MOVEMENT CIRCUITS (40 MINUTES) */}
          <div className="glass-card p-6 mx-2 md:mx-0" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-6 text-center" style={{ color: theme.text }}>
              🏋️‍♂️ Strength & Movement Circuits (40 Minutes)
            </h3>
            
            <div className="space-y-6">
              {day.circuits.map((circuit, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="font-playfair font-semibold text-xl md:text-2xl text-center mb-4" style={{ color: theme.primary }}>
                    {circuit.title}
                  </h4>
                  
                  <div className="space-y-3">
                    {circuit.exercises.map((exercise, eIdx) => (
                      <ExerciseItem 
                        key={eIdx} 
                        dayId={day.id} 
                        circuitTitle={circuit.title} 
                        name={exercise.name} 
                        technicalCue={exercise.technicalCue} 
                        somaticCue={exercise.somaticCue} 
                        videoInfo={exercise.videoInfo} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* COOL DOWN & REFLECT (10 MINUTES) */}
          {day.cooldown.items.length > 0 && (
            <div className="glass-card p-6 mx-2 md:mx-0" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-6 text-center" style={{ color: theme.text }}>
                🧘 Cool Down & Reflect (10 Minutes)
              </h3>
              
              {/* Cool Down Items Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-3xl mx-auto">
                {day.cooldown.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg text-center font-inter text-sm"
                    style={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                      color: theme.text,
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              
              {/* Journal Prompt */}
              <div 
                className="p-4 rounded-lg"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <JournalPrompt dayId={day.id} prompt={day.cooldown.journalPrompt} />
              </div>
            </div>
          )}
          
          {/* DR. U'S HIDDEN HINT */}
          <div 
            className="glass-card p-6 mx-2 md:mx-0" 
            style={{ 
              backgroundColor: theme.primary + '20', 
              borderLeft: `4px solid ${theme.primary}`,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <p className="font-inter text-center" style={{ color: theme.text }}>
              <strong className="font-playfair text-lg">🎭 Dr. U's Hidden Hint:</strong>
              <br />
              <span className="mt-2 block">{day.hiddenHint}</span>
            </p>
          </div>
          
          {/* LAST DAY CTA */}
          {isLastDay && (
            <div 
              className="glass-card p-8 mx-2 md:mx-0 border-2" 
              style={{ 
                background: `linear-gradient(135deg, ${theme.primary}10, ${theme.secondary}10)`, 
                borderColor: theme.primary,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
              }}
            >
              <h3 className="font-playfair text-xl font-bold text-center mb-4" style={{ color: theme.text }}>
                Ready for the Complete Transformation?
              </h3>
              <p className="font-inter text-center mb-6" style={{ color: theme.text }}>
                You've completed the 7 Days of Harmony program! The full transformational program 
                continues with progressive training, deeper somatic awareness, and complete mind-body integration.
              </p>
              <div className="text-center">
                <Button 
                  asChild 
                  className="font-inter text-lg py-6 px-8 rounded-lg" 
                  style={{ backgroundColor: theme.primary, color: theme.text }}
                >
                  <a href="https://www.harmonizedfitness.com" target="_blank" rel="noopener noreferrer">
                    Unlock Your Full Potential <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <DayNavigation currentDayId={day.id} />
        
        {/* FOOTER */}
        <footer className="text-center text-sm mt-12 font-inter" style={{ color: theme.text + '80' }}>
          <p>© 7 Days of Harmony - Transformational Training Program</p>
          <p>Created by Kyle McCormick - Veteran, Elite Fitness Trainer, and Spiritual Practitioner</p>
        </footer>
      </div>
    </div>
  );
};

export default WorkoutDayPage;
