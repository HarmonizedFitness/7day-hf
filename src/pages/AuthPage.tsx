
import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AnimatedBackground from "@/components/AnimatedBackground";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import { motion, AnimatePresence } from "framer-motion";

const AuthPage: React.FC = () => {
  const { user, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  if (user && !loading) {
    return <Navigate to="/home" />;
  }

  const logoUrl = "/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png";

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
      
      <AnimatedBackground variant="auth" className="opacity-70" />
      
      <div className="flex flex-col items-center justify-start p-4 pt-8 sm:pt-12 relative z-10 min-h-screen">
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img 
            src={logoUrl} 
            alt="Harmonized Fitness Logo" 
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -4, 0]
            }}
            transition={{ 
              scale: { duration: 0.5, ease: "easeOut" },
              opacity: { duration: 0.5, ease: "easeOut" },
              y: { 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }
            }}
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-burnt-orange mb-2">Harmonized Fitness</h1>
          <p className="text-base sm:text-lg text-gray-300">Your personal transformation journey</p>
        </motion.div>
        
        <div className="w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <LoginForm 
                key="login"
                onSwitchToSignup={() => setIsLogin(false)} 
              />
            ) : (
              <SignupForm 
                key="signup"
                onSwitchToLogin={() => setIsLogin(true)} 
              />
            )}
          </AnimatePresence>
        </div>
        
        <motion.p 
          className="text-center mt-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/" className="text-burnt-orange hover:underline">
            Return to welcome screen
          </Link>
        </motion.p>
      </div>
    </div>
  );
};

export default AuthPage;
