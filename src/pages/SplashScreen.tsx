
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
    <div className="relative min-h-screen overflow-hidden bg-stone-800">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/c15aa6ee-278f-4841-a501-5815be53ffd0.png')`,
          filter: 'blur(2px)',
          zIndex: 0
        }}
      />
      
      <AnimatedBackground className="opacity-70" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-playfair text-white mb-6 leading-tight">
            Transform Your Body,
            <span className="text-burnt-orange"> Elevate Your Life</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-opensans">
            Discover the power of movement with our comprehensive fitness programs designed for every body and every goal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-burnt-orange hover:bg-burnt-orange/80 text-white font-opensans text-lg px-8 py-4"
            >
              Get Started
            </Button>
            
            <Button 
              onClick={handlePreview}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-stone-800 font-opensans text-lg px-8 py-4"
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
