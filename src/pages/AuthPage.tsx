
import React from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const AuthPage: React.FC = () => {
  const { user, loading } = useAuth();

  // If user is already logged in, redirect to home page
  if (user && !loading) {
    return <Navigate to="/home" />;
  }

  const logoUrl = "/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatedBackground variant="auth" disableParallax={false}>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div 
          className="w-full max-w-md"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <motion.img 
              src={logoUrl} 
              alt="Harmonized Fitness Logo" 
              className="w-24 h-24 mx-auto mb-4"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <h1 className="text-3xl font-bold text-burnt-orange">Harmonized Fitness</h1>
            <p className="text-lg text-gray-600">Your personal transformation journey</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Authentication Paused</h2>
            <p className="text-gray-600 mb-6">
              User registration and login are currently paused. You can explore the app without authentication.
            </p>
            <Link 
              to="/home" 
              className="inline-block bg-burnt-orange hover:bg-burnt-orange/90 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Continue to App
            </Link>
          </motion.div>
          
          <motion.p className="text-center mt-6 text-sm" variants={itemVariants}>
            <Link to="/" className="text-burnt-orange hover:underline">
              Return to welcome screen
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default AuthPage;
