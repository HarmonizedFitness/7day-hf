import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, BookOpen } from "lucide-react";
import WeekProgress from "@/components/WeekProgress";
import { useWorkoutTheme } from "@/hooks/useWorkoutTheme";
import { useWorkoutAccessContext } from "@/contexts/WorkoutAccessContext";

const HomePage: React.FC = () => {
  const theme = useWorkoutTheme();
  const { workoutAccess } = useWorkoutAccessContext();

  return (
    <div className={`min-h-screen relative bg-gradient-to-br ${theme.background}`}>
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/0e4dc9f1-cf0e-441c-b0f8-781700b38f39.png')`,
          filter: 'blur(1px)',
          zIndex: 0
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* Header */}
            <div className="text-center px-2">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-playfair text-white mb-3 sm:mb-4 leading-tight">
                Your Fitness Journey
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 font-opensans px-2">
                Currently training with: <span className="text-burnt-orange font-semibold block sm:inline mt-1 sm:mt-0">
                  {workoutAccess.workoutType.charAt(0).toUpperCase() + workoutAccess.workoutType.slice(1)} Program
                </span>
              </p>
            </div>

            {/* Progress Overview */}
            <Card className="bg-stone-700/90 border-stone-600 backdrop-blur-sm mx-2 sm:mx-0">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-white font-playfair text-xl sm:text-2xl text-center">
                  Weekly Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <WeekProgress />
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
              <Card className="bg-stone-700/90 border-stone-600 hover:bg-stone-600/90 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <Calendar className="h-10 w-10 sm:h-12 sm:w-12 text-burnt-orange mx-auto mb-2" />
                  <CardTitle className="text-white font-playfair text-lg sm:text-xl">
                    Today's Workout
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-300 mb-4 text-sm sm:text-base px-2">
                    Continue your fitness journey with today's scheduled workout.
                  </p>
                  <Button 
                    asChild 
                    className="bg-burnt-orange hover:bg-burnt-orange/80 w-full sm:w-auto text-sm sm:text-base px-4 py-2"
                  >
                    <Link to="/day/1">Start Workout</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-stone-700/90 border-stone-600 hover:bg-stone-600/90 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <User className="h-10 w-10 sm:h-12 sm:w-12 text-burnt-orange mx-auto mb-2" />
                  <CardTitle className="text-white font-playfair text-lg sm:text-xl">
                    Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-300 mb-4 text-sm sm:text-base px-2">
                    Manage your profile, preferences, and program selection.
                  </p>
                  <Button 
                    asChild 
                    variant="outline"
                    className="border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white w-full sm:w-auto text-sm sm:text-base px-4 py-2"
                  >
                    <Link to="/profile">View Profile</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-stone-700/90 border-stone-600 hover:bg-stone-600/90 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-burnt-orange mx-auto mb-2" />
                  <CardTitle className="text-white font-playfair text-lg sm:text-xl">
                    Program Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-300 mb-4 text-sm sm:text-base px-2">
                    Explore all available programs and see what's coming next.
                  </p>
                  <Button 
                    asChild 
                    variant="outline"
                    className="border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white w-full sm:w-auto text-sm sm:text-base px-4 py-2"
                  >
                    <Link to="/preview">Explore Programs</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
