
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
import { useWorkoutTheme } from '@/hooks/useWorkoutTheme';

interface CompactProgramDropdownProps {
  currentProgramType: ProgramType;
  isUpdating: boolean;
  className?: string;
  onProgramSwitch: (programType: ProgramType) => void;
  checkProgramAccess: (programType: ProgramType) => Promise<boolean>;
}

const CompactProgramDropdown: React.FC<CompactProgramDropdownProps> = ({
  currentProgramType,
  isUpdating,
  className,
  onProgramSwitch,
  checkProgramAccess
}) => {
  const [open, setOpen] = useState(false);
  const programs = getAllPrograms();
  const currentProgram = programs.find(p => p.id === currentProgramType);
  const theme = useWorkoutTheme();

  const handleProgramSelect = (programType: ProgramType) => {
    onProgramSwitch(programType);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={isUpdating}
          className={cn(
            "font-inter font-medium shadow-sm transition-all duration-200 rounded-lg px-4 py-2 h-auto",
            className
          )}
          style={{
            backgroundColor: theme.dropdownBg,
            borderColor: theme.borderColor,
            color: theme.text
          }}
        >
          <div className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full shadow-sm" 
              style={{ backgroundColor: currentProgram?.theme.primary }}
            />
            <span className="max-w-[140px] truncate">
              {currentProgram?.name || 'Select Program'}
            </span>
          </div>
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-64 bg-white/95 backdrop-blur-md border shadow-lg rounded-lg p-1 z-50"
        style={{ borderColor: theme.borderColor }}
      >
        {programs.map((program) => (
          <ProgramMenuItem
            key={program.id}
            program={program}
            currentProgramType={currentProgramType}
            onSelect={handleProgramSelect}
            checkAccess={checkProgramAccess}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CompactProgramDropdown;
