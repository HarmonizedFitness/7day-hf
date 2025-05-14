
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const AuthPage: React.FC = () => {
  const { user, loading, signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("login");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  
  // Signup form state
  const [signupEmail, setSignupEmail] = useState<string>("");
  const [signupPassword, setSignupPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  // If user is already logged in, redirect to home page
  if (user && !loading) {
    return <Navigate to="/home" />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      await signIn(loginEmail, loginPassword);
      navigate("/home");
    } catch (error) {
      // Error is handled in the auth context
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupEmail || !signupPassword || !confirmPassword || !username || !fullName) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (signupPassword !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      await signUp(signupEmail, signupPassword, username, fullName);
      navigate("/home");
    } catch (error) {
      // Error is handled in the auth context
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 w-full mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                      className="bg-white/70"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Enter your password"
                      disabled={isSubmitting}
                      className="bg-white/70"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-burnt-orange hover:bg-burnt-orange/90 animated-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Logging in...
                      </>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <Input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                      className="bg-white/70"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium mb-1">
                      Username
                    </label>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Choose a username"
                      disabled={isSubmitting}
                      className="bg-white/70"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="signupEmail" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="signupEmail"
                      type="email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                      className="bg-white/70"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="signupPassword" className="block text-sm font-medium mb-1">
                      Password
                    </label>
                    <Input
                      id="signupPassword"
                      type="password"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      placeholder="Create a password"
                      disabled={isSubmitting}
                      className="bg-white/70"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                      Confirm Password
                    </label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                      disabled={isSubmitting}
                      className="bg-white/70"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-burnt-orange hover:bg-burnt-orange/90 animated-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </motion.div>
          
          <motion.p className="text-center mt-6 text-sm" variants={itemVariants}>
            <a href="/" className="text-burnt-orange hover:underline">
              Return to welcome screen
            </a>
          </motion.p>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default AuthPage;
