
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { getAllPrograms, ProgramType } from '@/data/programs';
import { cn } from '@/lib/utils';
import ProgramMenuItem from './ProgramMenuItem';

interface FullProgramSelectorProps {
  currentProgramType: ProgramType;
  isUpdating: boolean;
  className?: string;
  onProgramSwitch: (programType: ProgramType) => void;
  checkProgramAccess: (programType: ProgramType) => Promise<boolean>;
}

const FullProgramSelector: React.FC<FullProgramSelectorProps> = ({
  currentProgramType,
  isUpdating,
  className,
  onProgramSwitch,
  checkProgramAccess
}) => {
  const [open, setOpen] = useState(false);
  const programs = getAllPrograms();
  const currentProgram = programs.find(p => p.id === currentProgramType);

  const handleProgramSelect = (programType: ProgramType) => {
    onProgramSwitch(programType);
    setOpen(false);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          Active Program
        </h3>
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
          className="w-full bg-stone-800/95 border-stone-600 backdrop-blur-md z-50"
          style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}
        >
          {programs.map((program) => (
            <ProgramMenuItem
              key={program.id}
              program={program}
              currentProgramType={currentProgramType}
              onSelect={handleProgramSelect}
              checkAccess={checkProgramAccess}
              isFullWidth
            />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="text-sm text-gray-400">
        Select a program to make it your active workout program
      </div>
    </div>
  );
};

export default FullProgramSelector;
