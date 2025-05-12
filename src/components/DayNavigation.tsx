
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { workoutData } from "@/data/workoutData";

interface DayNavigationProps {
  currentDayId: number;
}

const DayNavigation: React.FC<DayNavigationProps> = ({ currentDayId }) => {
  const prevDay = workoutData.find(day => day.id === currentDayId - 1);
  const nextDay = workoutData.find(day => day.id === currentDayId + 1);

  return (
    <div className="flex justify-between items-center w-full my-6">
      {prevDay ? (
        <Button variant="outline" asChild>
          <Link to={`/day/${prevDay.id}`} className="flex items-center space-x-1">
            <ChevronLeft className="h-4 w-4" />
            <span>Day {prevDay.id}</span>
          </Link>
        </Button>
      ) : (
        <div></div>
      )}

      <Button variant="outline" asChild>
        <Link to="/" className="px-4">Home</Link>
      </Button>

      {nextDay ? (
        <Button variant="outline" asChild>
          <Link to={`/day/${nextDay.id}`} className="flex items-center space-x-1">
            <span>Day {nextDay.id}</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DayNavigation;
