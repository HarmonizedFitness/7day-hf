import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, ArrowLeft, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { workoutData } from "@/data/workoutData";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const PreviewPage: React.FC = () => {
  const navigate = useNavigate();
  const logoUrl = "/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png";
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Calculate overall progress (all at 0% for preview)
  const overallProgress = 0;
  
  useEffect(() => {
    // Set loaded state after a small delay to trigger animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    // Animate progress value
    const progressTimer = setTimeout(() => {
      setProgress(overallProgress);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(progressTimer);
    };
  }, [overallProgress]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };
  
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-stone-800 via-stone-700 to-stone-800 py-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/c15aa6ee-278f-4841-a501-5815be53ffd0.png')`,
          filter: 'blur(2px)',
          zIndex: 0
        }}
      />
      
      <AnimatedBackground variant="home" className="opacity-70" />
      
      <div className="w-full max-w-4xl mx-auto p-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.img 
              src={logoUrl} 
              alt="Harmonized Fitness Logo" 
              className="w-24 h-24 mx-auto mb-4" 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-burnt-orange mb-2">
              7 Days of Harmony
            </h1>
            <h2 className="text-xl md:text-2xl font-playfair font-medium text-charcoal mb-4">
              Transformational Program
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-burnt-orange to-charcoal mx-auto mb-6"></div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="mb-8 shadow-lg card-hover backdrop-blur-sm bg-white/90">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-playfair">Program Overview</CardTitle>
                <CardDescription className="text-center text-base font-opensans">
                  A 7-day preview of our holistic approach to fitness and wellbeing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6 leading-relaxed text-center font-opensans">
                  Experience a unique blend of strength training, somatic awareness, 
                  emotional integration, and mindfulness practices designed to transform 
                  your relationship with fitness and wellbeing.
                </p>
                
                <div className="space-y-6">
                  <div className="animated-progress">
                    <div className="flex justify-between items-center mb-2 text-sm">
                      <span className="font-medium">Week 1 Overall Progress</span>
                      <span>{progress}% Complete</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {workoutData.map((day, index) => (
                      <motion.div 
                        key={day.id} 
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: {
                              delay: 0.1 * index,
                              duration: 0.5
                            }
                          }
                        }}
                        className={cn(
                          "p-4 rounded-lg border border-gray-200 flex items-center bg-white hover:bg-gray-50 transition-all card-hover"
                        )}
                      >
                        <div className="mr-4 text-2xl">
                          <Circle className="h-8 w-8 text-gray-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-playfair font-medium">
                            Day {day.id}: {day.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Progress value={0} className="h-1.5 flex-1" />
                            <span className="text-xs text-gray-500">0%</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="mb-8 bg-gradient-to-r from-burnt-orange/10 to-charcoal/10 border-2 border-burnt-orange card-hover backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center font-playfair">Ready for Complete Transformation?</CardTitle>
              </CardHeader>
              <CardContent className="text-center font-opensans">
                <p className="mb-6">This 7-day program is just the beginning. Discover the full experience
                below! 👇🏻</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  className="animated-button text-white px-8 py-6 text-lg" 
                  onClick={() => window.open('https://www.ptdistinction.com/harmonizedfitness', '_blank')}
                >
                  Full HF App <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button 
              variant="outline" 
              className="flex items-center hover:bg-accent hover:scale-105 transition-transform duration-300 bg-white/80 backdrop-blur-sm" 
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
