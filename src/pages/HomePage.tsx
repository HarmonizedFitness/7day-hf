
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
    <div className="min-h-screen" style={{ backgroundColor: theme.background }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-playfair text-white mb-4">
              Your Fitness Journey
            </h1>
            <p className="text-xl text-gray-300 font-opensans">
              Currently training with: <span className="text-burnt-orange font-semibold">
                {workoutAccess.workoutType.charAt(0).toUpperCase() + workoutAccess.workoutType.slice(1)} Program
              </span>
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="bg-stone-700 border-stone-600">
            <CardHeader>
              <CardTitle className="text-white font-playfair text-2xl">
                Weekly Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <WeekProgress />
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-stone-700 border-stone-600 hover:bg-stone-600 transition-colors">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-burnt-orange mx-auto mb-2" />
                <CardTitle className="text-white font-playfair">
                  Today's Workout
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">
                  Continue your fitness journey with today's scheduled workout.
                </p>
                <Button 
                  asChild 
                  className="bg-burnt-orange hover:bg-burnt-orange/80"
                >
                  <Link to="/day/1">Start Workout</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-stone-700 border-stone-600 hover:bg-stone-600 transition-colors">
              <CardHeader className="text-center">
                <User className="h-12 w-12 text-burnt-orange mx-auto mb-2" />
                <CardTitle className="text-white font-playfair">
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">
                  Manage your profile, preferences, and program selection.
                </p>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white"
                >
                  <Link to="/profile">View Profile</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-stone-700 border-stone-600 hover:bg-stone-600 transition-colors">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-burnt-orange mx-auto mb-2" />
                <CardTitle className="text-white font-playfair">
                  Program Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">
                  Explore all available programs and see what's coming next.
                </p>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white"
                >
                  <Link to="/preview">Explore Programs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
