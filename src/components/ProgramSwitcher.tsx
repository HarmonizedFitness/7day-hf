
import React from 'react';
import { ProgramType } from '@/data/programs';
import { useWorkoutAccessContext } from '@/contexts/WorkoutAccessContext';
import { useProgramUpdate } from '@/hooks/useProgramUpdate';
import CompactProgramDropdown from './program-switcher/CompactProgramDropdown';
import FullProgramSelector from './program-switcher/FullProgramSelector';

interface ProgramSwitcherProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const ProgramSwitcher: React.FC<ProgramSwitcherProps> = ({ 
  variant = 'default', 
  className 
}) => {
  const { workoutAccess, checkWorkoutAccess } = useWorkoutAccessContext();
  const { updateUserProgram, isUpdating } = useProgramUpdate();

  const currentProgramType = workoutAccess.workoutType;

  const handleProgramSwitch = async (programType: ProgramType) => {
    const hasAccess = await checkWorkoutAccess(programType);
    
    if (!hasAccess) {
      // Don't switch if user doesn't have access
      return;
    }

    const success = await updateUserProgram(programType);
    if (success) {
      // Reload the page to refresh all contexts with new program
      window.location.reload();
    }
  };

  const checkProgramAccess = async (programType: ProgramType) => {
    return await checkWorkoutAccess(programType);
  };

  if (variant === 'compact') {
    return (
      <CompactProgramDropdown
        currentProgramType={currentProgramType}
        isUpdating={isUpdating}
        className={className}
        onProgramSwitch={handleProgramSwitch}
        checkProgramAccess={checkProgramAccess}
      />
    );
  }

  return (
    <FullProgramSelector
      currentProgramType={currentProgramType}
      isUpdating={isUpdating}
      className={className}
      onProgramSwitch={handleProgramSwitch}
      checkProgramAccess={checkProgramAccess}
    />
  );
};

export default ProgramSwitcher;
