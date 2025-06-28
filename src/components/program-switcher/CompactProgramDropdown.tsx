
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
        className="w-56 bg-stone-800/95 border-stone-600 backdrop-blur-md z-50"
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
