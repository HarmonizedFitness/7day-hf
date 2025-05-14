
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn, UserPlus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const { user } = useAuth();
  
  useEffect(() => {
    // If user is already logged in, redirect to home
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);
  
  const handleGetStarted = () => {
    setFadeOut(true);
    setTimeout(() => navigate('/preview'), 500);
  };

  const handleLoginSignup = (path: string) => {
    setFadeOut(true);
    setTimeout(() => navigate(path), 500);
  };

  const handleSignUpClick = () => {
    navigate('/auth');
    setTimeout(() => {
      const signupTab = document.querySelector('[value="signup"]');
      if (signupTab) {
        (signupTab as HTMLButtonElement).click();
      }
    }, 100);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatedBackground variant="default">
      <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <motion.div 
          className="w-full max-w-md text-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <motion.img 
            src="/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png" 
            alt="Harmonized Fitness Logo" 
            className="w-32 h-32 mx-auto mb-8"
            variants={itemVariants}
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          <motion.h1 className="text-4xl font-bold text-burnt-orange mb-4" variants={itemVariants}>
            7 Days of Harmony
          </motion.h1>
          <motion.h2 className="text-2xl font-medium text-charcoal mb-8" variants={itemVariants}>
            Transformational Program
          </motion.h2>
          
          <motion.div 
            className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8"
            variants={itemVariants}
          >
            <p className="text-lg mb-6 leading-relaxed">
              Welcome to your free 7-day preview of the Harmonized Fitness program! 
              Experience a unique blend of strength training, somatic awareness, emotional 
              integration, and mindfulness practices.
            </p>
            
            <p className="text-base mb-6 italic">
              "True fitness is a harmony between physical strength, mental clarity, and emotional balance."
            </p>
          </motion.div>
          
          <motion.div className="space-y-4" variants={itemVariants}>
            <Button 
              onClick={handleGetStarted} 
              size="lg" 
              className="bg-burnt-orange hover:bg-burnt-orange/90 text-white px-8 w-full animated-button"
            >
              Preview <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="flex gap-4">
              <Button 
                onClick={() => handleLoginSignup('/auth')} 
                variant="outline" 
                size="lg" 
                className="flex-1 bg-white/70 backdrop-blur-sm hover:bg-white/90"
              >
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1 bg-white/70 backdrop-blur-sm hover:bg-white/90"
                onClick={handleSignUpClick}
              >
                <UserPlus className="mr-2 h-4 w-4" /> Sign Up
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default SplashScreen;
