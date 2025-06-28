
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Check, Lock } from 'lucide-react';
import { getAllPrograms, ProgramType } from '@/data/programs';
import { useWorkoutAccessContext } from '@/contexts/WorkoutAccessContext';
import { useAdmin } from '@/contexts/AdminContext';
import { useProgramUpdate } from '@/hooks/useProgramUpdate';
import { cn } from '@/lib/utils';

interface ProgramSwitcherProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const ProgramSwitcher: React.FC<ProgramSwitcherProps> = ({ 
  variant = 'default', 
  className 
}) => {
  const { workoutAccess, checkWorkoutAccess } = useWorkoutAccessContext();
  const { isAdminMode, currentAdminProgram, setAdminProgram } = useAdmin();
  const { updateUserProgram, isUpdating } = useProgramUpdate();
  const [open, setOpen] = useState(false);
  const programs = getAllPrograms();

  const currentProgramType = isAdminMode ? currentAdminProgram : workoutAccess.workoutType;
  const currentProgram = programs.find(p => p.id === currentProgramType);

  const handleProgramSwitch = async (programType: ProgramType) => {
    if (isAdminMode) {
      // Admin mode: temporary switch
      setAdminProgram(programType);
    } else {
      // Regular mode: permanent switch
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
    }
    setOpen(false);
  };

  const checkProgramAccess = async (programType: ProgramType) => {
    return await checkWorkoutAccess(programType);
  };

  if (variant === 'compact') {
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            disabled={isUpdating}
            className={cn(
              "border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
              className
            )}
          >
            <span className="max-w-[120px] truncate">
              {currentProgram?.name || 'Select Program'}
            </span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-56 bg-stone-800/95 border-stone-600 backdrop-blur-md"
        >
          {programs.map((program) => {
            return (
              <ProgramMenuItem
                key={program.id}
                program={program}
                currentProgramType={currentProgramType}
                isAdminMode={isAdminMode}
                onSelect={handleProgramSwitch}
                checkAccess={checkProgramAccess}
              />
            );
          })}
          {isAdminMode && (
            <div className="px-2 py-1 text-xs text-orange-400 border-t border-stone-600 mt-1">
              Admin Mode Active
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          {isAdminMode ? 'Preview Program' : 'Active Program'}
        </h3>
        {isAdminMode && (
          <Badge variant="outline" className="border-orange-400 text-orange-400">
            Admin Mode
          </Badge>
        )}
      </div>

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            disabled={isUpdating}
            className="w-full justify-between border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-auto p-4"
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: currentProgram?.theme.primary }}
              />
              <div className="text-left">
                <div className="font-medium">{currentProgram?.name}</div>
                <div className="text-sm text-gray-300">{currentProgram?.description}</div>
              </div>
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-full bg-stone-800/95 border-stone-600 backdrop-blur-md"
          style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}
        >
          {programs.map((program) => (
            <ProgramMenuItem
              key={program.id}
              program={program}
              currentProgramType={currentProgramType}
              isAdminMode={isAdminMode}
              onSelect={handleProgramSwitch}
              checkAccess={checkProgramAccess}
              isFullWidth
            />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="text-sm text-gray-400">
        {isAdminMode 
          ? "Temporarily preview different programs (changes won't be saved)" 
          : "Select a program to make it your active workout program"
        }
      </div>
    </div>
  );
};

// Helper component for program menu items
const ProgramMenuItem: React.FC<{
  program: any;
  currentProgramType: ProgramType;
  isAdminMode: boolean;
  onSelect: (programType: ProgramType) => void;
  checkAccess: (programType: ProgramType) => Promise<boolean>;
  isFullWidth?: boolean;
}> = ({ program, currentProgramType, isAdminMode, onSelect, checkAccess, isFullWidth = false }) => {
  const [hasAccess, setHasAccess] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    if (!isAdminMode) {
      checkAccess(program.id).then(setHasAccess);
    }
  }, [program.id, isAdminMode, checkAccess]);

  const handleClick = () => {
    if (isAdminMode || hasAccess) {
      onSelect(program.id);
    }
  };

  const isAccessible = isAdminMode || hasAccess;
  const isSelected = currentProgramType === program.id;

  return (
    <DropdownMenuItem
      onClick={handleClick}
      disabled={!isAccessible}
      className={cn(
        "text-white cursor-pointer",
        isAccessible ? "hover:bg-white/10" : "opacity-50 cursor-not-allowed",
        isFullWidth ? "p-4" : ""
      )}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: program.theme.primary }}
          />
          <div>
            <div className="font-medium flex items-center gap-2">
              {program.name}
              {!isAdminMode && hasAccess === false && (
                <Lock className="h-3 w-3 text-gray-400" />
              )}
            </div>
            {isFullWidth && (
              <div className="text-sm text-gray-300">{program.description}</div>
            )}
          </div>
        </div>
        {isSelected && (
          <Check className="h-4 w-4 text-green-400" />
        )}
      </div>
    </DropdownMenuItem>
  );
};

export default ProgramSwitcher;
