
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, Dumbbell, Zap, Leaf, Target } from "lucide-react";
import { getAllPrograms, ProgramType } from "@/data/programs";
import { getWorkoutTheme } from "@/data/workoutThemes";
import AnimatedBackground from "@/components/AnimatedBackground";
import ProgramPreviewCard from "@/components/ProgramPreviewCard";
import SampleDayPreview from "@/components/SampleDayPreview";
import { motion } from "framer-motion";

const PreviewPage: React.FC = () => {
  const navigate = useNavigate();
  const logoUrl = "/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png";
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>('gym');
  
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-y-auto">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0
        }}
      />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-slate-100/50 to-indigo-100/30 z-0" />
      
      <AnimatedBackground variant="home" className="opacity-20" />
      
      <div className="flex-1 px-4 py-6 sm:py-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="space-y-12 sm:space-y-16">
            {/* Hero Section - Immediate visibility */}
            <motion.div variants={itemVariants} className="text-center space-y-6 sm:space-y-8">
              <motion.img 
                src={logoUrl} 
                alt="Harmonized Fitness Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto" 
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter font-bold text-gray-900 leading-tight">
                  Explore 4 Free
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    7-Day Programs
                  </span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed px-4">
                  Discover your perfect fitness approach with our comprehensive preview of 
                  strength training, mobility work, and mindful movement practices.
                </p>
              </div>
            </motion.div>

            {/* Program Cards Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
                {programs.map((program) => {
                  const IconComponent = programIcons[program.id];
                  const isSelected = selectedProgram === program.id;
                  
                  return (
                    <ProgramPreviewCard
                      key={program.id}
                      program={program}
                      benefit={programBenefits[program.id]}
                      icon={IconComponent}
                      isSelected={isSelected}
                      onSelect={setSelectedProgram}
                    />
                  );
                })}
              </div>
            </motion.div>

            {/* Sample Day Preview */}
            <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
              <SampleDayPreview
                theme={currentTheme}
                dayTitle="Foundation Building"
                progress={0}
              />
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-xl rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-inter font-bold text-gray-900 mb-3 sm:mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-base sm:text-lg font-inter text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Begin your personalized 7-day transformation with {currentTheme.name}. 
                  Track your progress, access video guides, and join thousands in their fitness journey.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <Button 
                    className="text-base sm:text-lg font-inter font-bold py-3 sm:py-4 px-8 sm:px-10 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:glow min-w-[200px] sm:min-w-[250px]" 
                    onClick={() => navigate('/auth')}
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    Start {currentTheme.name} Program
                  </Button>
                  
                  <div className="text-center">
                    <Button 
                      asChild 
                      variant="outline"
                      className="font-inter font-semibold text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8 h-auto border-2 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:scale-105" 
                    >
                      <a href="https://www.ptdistinction.com/harmonizedfitness" target="_blank" rel="noopener noreferrer">
                        Explore Full HF Experience <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-gray-500 font-inter">
                    Already started? <button 
                      onClick={() => navigate('/auth')} 
                      className="text-blue-600 hover:text-blue-800 font-semibold underline transition-colors duration-200"
                    >
                      Log in to continue
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Back Button */}
            <motion.div variants={itemVariants} className="text-center">
              <Button 
                variant="outline" 
                className="font-inter font-semibold hover:bg-blue-50 border-2 hover:border-blue-300 transition-all duration-200 px-6 sm:px-8 py-2 sm:py-3 h-auto" 
                onClick={() => navigate('/auth')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Return to Login
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PreviewPage;
