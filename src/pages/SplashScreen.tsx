
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    // If user is authenticated, go to home
    if (!loading && user) {
      navigate('/home');
    }
  }, [user, loading, navigate]);

  const handleGetStarted = () => {
    navigate('/auth');
  };

  const handlePreview = () => {
    navigate('/preview');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-800 overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/c15aa6ee-278f-4841-a501-5815be53ffd0.png')`,
          filter: 'blur(2px)',
          zIndex: 0
        }}
      />
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-slate-800 opacity-80 z-0" />
      
      <AnimatedBackground className="opacity-40" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-white mb-6 leading-tight">
            Transform Your Body,
            <br />
            <span className="text-burnt-orange">Elevate Your Life</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 font-opensans leading-relaxed max-w-2xl mx-auto">
            Discover the power of movement with our comprehensive fitness programs designed for every body and every goal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-burnt-orange hover:bg-burnt-orange/90 text-white font-inter font-bold text-lg px-10 py-4 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:glow min-w-[200px]"
            >
              Get Started
            </Button>
            
            <Button 
              onClick={handlePreview}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-stone-800 font-inter font-bold text-lg px-10 py-4 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px]"
            >
              Preview Programs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
