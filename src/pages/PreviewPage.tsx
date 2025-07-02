
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, ArrowLeft, Circle, Play, Dumbbell, Zap, Leaf, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { workoutData } from "@/data/workoutData";
import { getAllPrograms, ProgramType } from "@/data/programs";
import { getWorkoutTheme } from "@/data/workoutThemes";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const PreviewPage: React.FC = () => {
  const navigate = useNavigate();
  const logoUrl = "/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png";
  const [loaded, setLoaded] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>('gym');
  const [progress, setProgress] = useState(0);
  
  const programs = getAllPrograms();
  const currentTheme = getWorkoutTheme(selectedProgram);

  // Program icons mapping
  const programIcons = {
    'gym': Dumbbell,
    'bodyweight': Zap,
    'stretching': Leaf,
    'trx': Target
  };

  // Program benefits
  const programBenefits = {
    'gym': 'Build strength with professional equipment',
    'bodyweight': 'Train anywhere with zero equipment needed',
    'stretching': 'Restore mobility and reduce tension',
    'trx': 'Full-body suspension training power'
  };

  // Sample day content based on selected program
  const sampleDay = workoutData[0]; // Day 1 for preview
  
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    const progressTimer = setTimeout(() => setProgress(0), 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(progressTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0
        }}
      />
      
      <AnimatedBackground variant="home" className="opacity-30" />
      
      <div className="w-full max-w-6xl mx-auto p-4 md:p-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <motion.img 
              src={logoUrl} 
              alt="Harmonized Fitness Logo" 
              className="w-20 h-20 md:w-24 md:h-24 mx-auto" 
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-gray-900 leading-tight">
                Explore 4 Free
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  7-Day Programs
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-inter leading-relaxed">
                Discover your perfect fitness approach with our comprehensive preview of 
                strength training, mobility work, and mindful movement practices.
              </p>
            </div>
          </motion.div>

          {/* Program Cards Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {programs.map((program) => {
                const IconComponent = programIcons[program.id];
                const isSelected = selectedProgram === program.id;
                
                return (
                  <Card 
                    key={program.id}
                    className={cn(
                      "cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group border-2",
                      isSelected 
                        ? "border-blue-500 bg-blue-50 shadow-lg" 
                        : "border-gray-200 bg-white hover:border-blue-300"
                    )}
                    onClick={() => setSelectedProgram(program.id)}
                  >
                    <CardHeader className="text-center pb-3">
                      <div 
                        className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white shadow-lg"
                        style={{ backgroundColor: program.theme.primary }}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-inter font-bold text-gray-900">
                        {program.name}
                      </CardTitle>
                      <CardDescription className="text-sm font-inter text-gray-600 leading-relaxed">
                        {programBenefits[program.id]}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button 
                        variant={isSelected ? "default" : "outline"}
                        className="w-full font-inter font-semibold text-base py-2 h-auto"
                        style={isSelected ? { 
                          backgroundColor: program.theme.primary,
                          borderColor: program.theme.primary 
                        } : {}}
                      >
                        {isSelected ? "Selected" : "Preview →"}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          {/* Program Switcher Tabs */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 bg-white/80 backdrop-blur-sm rounded-full border shadow-sm">
              {programs.map((program) => (
                <button
                  key={program.id}
                  onClick={() => setSelectedProgram(program.id)}
                  className={cn(
                    "px-4 py-2 rounded-full font-inter font-medium text-sm md:text-base transition-all duration-200",
                    selectedProgram === program.id
                      ? "text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )}
                  style={selectedProgram === program.id ? {
                    backgroundColor: program.theme.primary
                  } : {}}
                >
                  {program.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Sample Day Preview */}
          <motion.div variants={itemVariants}>
            <Card 
              className="overflow-hidden shadow-xl border-0"
              style={{ 
                background: `linear-gradient(135deg, ${currentTheme.background})`,
                borderTop: `4px solid ${currentTheme.primary}`
              }}
            >
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    <Play className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-inter font-bold text-gray-900">
                    Day 1 Preview: {sampleDay.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base md:text-lg font-inter text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Experience a complete day-in-the-life with our {currentTheme.name} program. 
                  Each session combines mindful movement, strength building, and reflection.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Program Structure */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "✨ Harmonize Your Body", time: "10 Minutes", desc: "Breathwork & mobility preparation" },
                    { title: "💪 Strength & Movement", time: "40 Minutes", desc: "Progressive circuit training" },
                    { title: "🧘 Cool Down & Reflect", time: "10 Minutes", desc: "Integration & journaling" }
                  ].map((section, idx) => (
                    <div 
                      key={idx}
                      className="p-6 rounded-xl bg-white/90 backdrop-blur-sm border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-inter font-bold text-lg text-gray-900 mb-2">
                        {section.title}
                      </h4>
                      <p className="text-sm font-semibold mb-2" style={{ color: currentTheme.primary }}>
                        {section.time}
                      </p>
                      <p className="text-sm text-gray-600 font-inter leading-relaxed">
                        {section.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Sample Exercise Preview */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
                  <h4 className="font-inter font-bold text-xl text-gray-900 mb-4 text-center">
                    Sample Exercise Preview
                  </h4>
                  <div 
                    className="p-4 rounded-lg border-l-4 mb-4"
                    style={{ 
                      backgroundColor: currentTheme.cardBg,
                      borderColor: currentTheme.primary 
                    }}
                  >
                    <h5 className="font-inter font-semibold text-lg text-gray-900 mb-2">
                      Foundation Squats
                    </h5>
                    <p className="text-sm text-gray-700 italic mb-2 font-inter">
                      <strong>Technical Cue:</strong> Keep your chest proud, weight in your heels
                    </p>
                    <p className="text-sm text-gray-600 italic font-inter">
                      <strong>Somatic Cue:</strong> Feel your roots growing into the earth with each rep
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-600 font-inter">
                      <Play className="h-4 w-4" />
                      <span>Video demonstrations included in full program</span>
                    </div>
                  </div>
                </div>

                {/* Progress Preview */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter font-semibold text-gray-900">Week 1 Progress Preview</span>
                    <span className="text-sm text-gray-600 font-inter">{progress}% Complete</span>
                  </div>
                  <Progress value={progress} className="h-3 mb-4" />
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                    {Array.from({ length: 7 }, (_, i) => (
                      <div 
                        key={i}
                        className="text-center p-3 rounded-lg bg-gray-50 border hover:bg-gray-100 transition-colors"
                      >
                        <Circle className="h-6 w-6 text-gray-300 mx-auto mb-1" />
                        <span className="text-xs font-inter font-medium text-gray-600">
                          Day {i + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <Card className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-inter font-bold text-gray-900">
                  Ready to Start Your Journey?
                </CardTitle>
                <CardDescription className="text-lg font-inter text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  Begin your personalized 7-day transformation with {currentTheme.name}. 
                  Track your progress, access video guides, and join thousands in their fitness journey.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button 
                  className="text-lg font-inter font-bold py-4 px-8 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                  onClick={() => navigate('/auth')}
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  Start {currentTheme.name} Program
                </Button>
                
                <div className="text-center">
                  <Button 
                    asChild 
                    variant="outline"
                    className="font-inter text-base py-3 px-6 h-auto border-2 hover:bg-blue-50" 
                  >
                    <a href="https://www.ptdistinction.com/harmonizedfitness" target="_blank" rel="noopener noreferrer">
                      Explore Full HF Experience <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 font-inter">
                  Already started? <button 
                    onClick={() => navigate('/auth')} 
                    className="text-blue-600 hover:text-blue-800 font-semibold underline"
                  >
                    Log in to continue
                  </button>
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Back Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Button 
              variant="outline" 
              className="font-inter hover:bg-blue-50 border-2 hover:border-blue-300 transition-all duration-200" 
              onClick={() => navigate('/auth')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Login
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PreviewPage;
