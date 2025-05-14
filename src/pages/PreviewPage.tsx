
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, ArrowLeft, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { workoutData } from "@/data/workoutData";

const PreviewPage: React.FC = () => {
  const navigate = useNavigate();
  const logoUrl = "/lovable-uploads/79288eb0-6c71-453c-a0c8-e54d7bb15f4e.png";
  
  // Calculate overall progress (all at 0% for preview)
  const overallProgress = 0;

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#D3E4FD] p-4 py-8">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <img src={logoUrl} alt="Harmonized Fitness Logo" className="w-24 h-24 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-burnt-orange mb-2">7 Days of Harmony</h1>
          <h2 className="text-xl md:text-2xl font-medium text-charcoal mb-4">Transformational Program</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-burnt-orange to-charcoal mx-auto mb-6"></div>
        </div>

        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Program Overview</CardTitle>
            <CardDescription className="text-center text-base">
              A 7-day preview of our holistic approach to fitness and wellbeing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6 leading-relaxed text-center">
              Experience a unique blend of strength training, somatic awareness, 
              emotional integration, and mindfulness practices designed to transform 
              your relationship with fitness and wellbeing.
            </p>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="font-medium">Week 1 Overall Progress</span>
                  <span>{overallProgress}% Complete</span>
                </div>
                <Progress value={overallProgress} className="h-2" />
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {workoutData.map((day) => (
                  <div 
                    key={day.id}
                    className={cn(
                      "p-4 rounded-lg border border-gray-200 flex items-center bg-white hover:bg-gray-50 transition-all"
                    )}
                  >
                    <div className="mr-4 text-2xl">
                      <Circle className="h-8 w-8 text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">
                        Day {day.id}: {day.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Progress value={0} className="h-1.5 flex-1" />
                        <span className="text-xs text-gray-500">0%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-gradient-to-r from-burnt-orange/10 to-charcoal/10 border-2 border-burnt-orange">
          <CardHeader>
            <CardTitle className="text-center">Ready for Complete Transformation?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              This 7-day program is just the beginning. Discover our comprehensive 
              12-week program for a complete mind-body transformation.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              className="bg-burnt-orange hover:bg-burnt-orange/90 text-white px-8 py-6 text-lg"
              onClick={() => window.open('https://www.harmonizedfitness.com', '_blank')}
            >
              12 Week Route <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <div className="flex justify-center mt-4">
          <Button 
            variant="outline"
            className="flex items-center"
            onClick={() => navigate('/auth')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
