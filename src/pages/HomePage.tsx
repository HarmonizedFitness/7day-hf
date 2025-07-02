
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, BookOpen } from "lucide-react";
import WeekProgress from "@/components/WeekProgress";
import ProgramSwitcher from "@/components/ProgramSwitcher";
import { useWorkoutTheme } from "@/hooks/useWorkoutTheme";
import { useWorkoutAccessContext } from "@/contexts/WorkoutAccessContext";

const HomePage: React.FC = () => {
  const theme = useWorkoutTheme();
  const { workoutAccess } = useWorkoutAccessContext();

  return (
    <div className={`min-h-screen relative bg-gradient-to-br ${theme.background}`}>
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png')`,
          filter: 'blur(1px)',
          zIndex: 0
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* Centered Header with Improved Typography */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-inter font-bold text-gray-900 leading-tight">
                Your Fitness Journey
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <p className="text-lg sm:text-xl font-inter text-gray-700">
                  Currently training with:
                </p>
                <span 
                  className="font-inter font-semibold text-lg sm:text-xl px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: theme.cardBg, 
                    color: theme.primary,
                    border: `1px solid ${theme.borderColor}`
                  }}
                >
                  {theme.name}
                </span>
              </div>
              
              {/* Compact Program Switcher */}
              <div className="flex justify-center mt-6">
                <ProgramSwitcher variant="compact" />
              </div>
            </div>

            {/* Progress Overview */}
            <Card 
              className="border-0 shadow-lg backdrop-blur-sm mx-2 sm:mx-0 relative overflow-hidden"
              style={{ backgroundColor: theme.cardBg }}
            >
              <CardHeader className="pb-4 sm:pb-6 text-center">
                <CardTitle className="font-inter text-2xl sm:text-3xl font-bold text-gray-900">
                  Weekly Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <WeekProgress />
              </CardContent>
            </Card>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
              <Card 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm group"
                style={{ backgroundColor: theme.cardBg }}
              >
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <Calendar 
                    className="h-12 w-12 mx-auto mb-3 transition-colors"
                    style={{ color: theme.primary }}
                  />
                  <CardTitle className="text-gray-900 font-inter text-lg sm:text-xl font-semibold">
                    Today's Workout
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base px-2 font-inter">
                    Continue your fitness journey with today's scheduled workout.
                  </p>
                  <Button 
                    asChild 
                    className="w-full sm:w-auto text-sm sm:text-base px-6 py-3 font-inter font-medium rounded-lg transition-all"
                    style={{ 
                      backgroundColor: theme.primary,
                      borderColor: theme.primary
                    }}
                  >
                    <Link to="/day/1">Start Workout</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm group"
                style={{ backgroundColor: theme.cardBg }}
              >
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <User 
                    className="h-12 w-12 mx-auto mb-3 transition-colors"
                    style={{ color: theme.primary }}
                  />
                  <CardTitle className="text-gray-900 font-inter text-lg sm:text-xl font-semibold">
                    Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base px-2 font-inter">
                    Manage your profile, preferences, and program selection.
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full sm:w-auto text-sm sm:text-base px-6 py-3 font-inter font-medium rounded-lg transition-all"
                    style={{ 
                      borderColor: theme.primary,
                      color: theme.primary
                    }}
                  >
                    <Link to="/profile">View Profile</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm group"
                style={{ backgroundColor: theme.cardBg }}
              >
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <BookOpen 
                    className="h-12 w-12 mx-auto mb-3 transition-colors"
                    style={{ color: theme.primary }}
                  />
                  <CardTitle className="text-gray-900 font-inter text-lg sm:text-xl font-semibold">
                    Program Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base px-2 font-inter">
                    Explore all available programs and see what's coming next.
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full sm:w-auto text-sm sm:text-base px-6 py-3 font-inter font-medium rounded-lg transition-all"
                    style={{ 
                      borderColor: theme.primary,
                      color: theme.primary
                    }}
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
