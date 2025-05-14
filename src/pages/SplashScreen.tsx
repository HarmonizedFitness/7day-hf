
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn, UserPlus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

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
    setTimeout(() => navigate('/home'), 500);
  };

  const handleLoginSignup = (path: string) => {
    setFadeOut(true);
    setTimeout(() => navigate(path), 500);
  };

  return <div className={`min-h-screen flex flex-col items-center justify-center bg-[#D3E4FD] transition-opacity duration-500 p-4 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-full max-w-md text-center animate-fade-in">
        <img src="/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png" alt="Harmonized Fitness Logo" className="w-32 h-32 mx-auto mb-8" />
        
        <h1 className="text-4xl font-bold text-burnt-orange mb-4">Harmonized Fitness</h1>
        <h2 className="text-2xl font-medium text-charcoal mb-8">12-Week Transformational Program</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <p className="text-lg mb-6 leading-relaxed">
            Welcome to your free 7-day preview of the Harmonized Fitness program! 
            Experience a unique blend of strength training, somatic awareness, emotional 
            integration, and mindfulness practices.
          </p>
          
          <p className="text-base mb-6 italic">
            "True fitness is a harmony between physical strength, mental clarity, and emotional balance."
          </p>
        </div>
        
        <div className="space-y-4">
          <Button onClick={handleGetStarted} size="lg" className="bg-burnt-orange hover:bg-burnt-orange/90 text-white px-8 w-full">
            Preview as Guest <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <div className="flex gap-4">
            <Button onClick={() => handleLoginSignup('/auth')} variant="outline" size="lg" className="flex-1">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
            <Button 
              onClick={() => handleLoginSignup('/auth')} 
              variant="outline" 
              size="lg" 
              className="flex-1"
              onClick={() => {
                navigate('/auth');
                setTimeout(() => {
                  const signupTab = document.querySelector('[value="signup"]');
                  if (signupTab) {
                    (signupTab as HTMLButtonElement).click();
                  }
                }, 100);
              }}
            >
              <UserPlus className="mr-2 h-4 w-4" /> Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>;
};

export default SplashScreen;
