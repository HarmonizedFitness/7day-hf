
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Check } from 'lucide-react';
import { getAllPrograms, ProgramType } from '@/data/programs';
import { useWorkoutAccessContext } from '@/contexts/WorkoutAccessContext';
import { useAdmin } from '@/contexts/AdminContext';
import { cn } from '@/lib/utils';

interface ProgramSwitcherProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const ProgramSwitcher: React.FC<ProgramSwitcherProps> = ({ 
  variant = 'default', 
  className 
}) => {
  const { workoutAccess } = useWorkoutAccessContext();
  const { isAdminMode, currentAdminProgram, setAdminProgram } = useAdmin();
  const [open, setOpen] = useState(false);
  const programs = getAllPrograms();

  const currentProgramType = isAdminMode ? currentAdminProgram : workoutAccess.workoutType;
  const currentProgram = programs.find(p => p.id === currentProgramType);

  const handleProgramSwitch = (programType: ProgramType) => {
    if (isAdminMode) {
      setAdminProgram(programType);
    }
    setOpen(false);
  };

  if (variant === 'compact') {
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
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
          {programs.map((program) => (
            <DropdownMenuItem
              key={program.id}
              onClick={() => handleProgramSwitch(program.id)}
              className="text-white hover:bg-white/10 cursor-pointer"
            >
              <div className="flex items-center justify-between w-full">
                <span>{program.name}</span>
                {currentProgramType === program.id && (
                  <Check className="h-4 w-4 text-green-400" />
                )}
              </div>
            </DropdownMenuItem>
          ))}
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
          Active Program
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
            <DropdownMenuItem
              key={program.id}
              onClick={() => handleProgramSwitch(program.id)}
              className="text-white hover:bg-white/10 cursor-pointer p-4"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: program.theme.primary }}
                  />
                  <div>
                    <div className="font-medium">{program.name}</div>
                    <div className="text-sm text-gray-300">{program.description}</div>
                  </div>
                </div>
                {currentProgramType === program.id && (
                  <Check className="h-4 w-4 text-green-400" />
                )}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {!isAdminMode && (
        <div className="text-sm text-gray-400">
          Press Ctrl+Shift+A to enable Admin Mode for program switching
        </div>
      )}
    </div>
  );
};

export default ProgramSwitcher;
