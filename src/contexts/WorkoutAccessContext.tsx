
import React, { createContext, useContext, ReactNode } from 'react';
import { useWorkoutAccess, WorkoutAccess } from '@/hooks/useWorkoutAccess';
import { WorkoutType } from '@/data/exercises';

interface WorkoutAccessContextType {
  workoutAccess: WorkoutAccess;
  loading: boolean;
  checkWorkoutAccess: (workoutType: WorkoutType) => Promise<boolean>;
}

const WorkoutAccessContext = createContext<WorkoutAccessContextType | undefined>(undefined);

export const useWorkoutAccessContext = () => {
  const context = useContext(WorkoutAccessContext);
  if (context === undefined) {
    throw new Error('useWorkoutAccessContext must be used within a WorkoutAccessProvider');
  }
  return context;
};

interface WorkoutAccessProviderProps {
  children: ReactNode;
}

export const WorkoutAccessProvider: React.FC<WorkoutAccessProviderProps> = ({ children }) => {
  const workoutAccessData = useWorkoutAccess();

  return (
    <WorkoutAccessContext.Provider value={workoutAccessData}>
      {children}
    </WorkoutAccessContext.Provider>
  );
};
