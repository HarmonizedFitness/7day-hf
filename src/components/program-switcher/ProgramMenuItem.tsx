
import React from 'react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Check, Lock } from 'lucide-react';
import { ProgramType } from '@/data/programs';
import { cn } from '@/lib/utils';

interface ProgramMenuItemProps {
  program: any;
  currentProgramType: ProgramType;
  onSelect: (programType: ProgramType) => void;
  checkAccess: (programType: ProgramType) => Promise<boolean>;
  isFullWidth?: boolean;
}

const ProgramMenuItem: React.FC<ProgramMenuItemProps> = ({
  program,
  currentProgramType,
  onSelect,
  checkAccess,
  isFullWidth = false
}) => {
  const [hasAccess, setHasAccess] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    checkAccess(program.id).then(setHasAccess);
  }, [program.id, checkAccess]);

  const handleClick = () => {
    if (hasAccess) {
      onSelect(program.id);
    }
  };

  const isAccessible = hasAccess;
  const isSelected = currentProgramType === program.id;

  return (
    <DropdownMenuItem
      onClick={handleClick}
      disabled={!isAccessible}
      className={cn(
        "cursor-pointer font-inter transition-all duration-200 rounded-md mx-1 my-0.5",
        isAccessible 
          ? "text-gray-900 hover:bg-gray-100 hover:text-gray-900" 
          : "opacity-50 cursor-not-allowed text-gray-500",
        isFullWidth ? "p-4" : "p-3",
        isSelected && "bg-blue-50 text-blue-700 font-semibold"
      )}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <div 
            className="w-4 h-4 rounded-full shadow-sm border border-white/50" 
            style={{ backgroundColor: program.theme.primary }}
          />
          <div>
            <div className="font-medium flex items-center gap-2">
              {program.name}
              {hasAccess === false && <Lock className="h-3 w-3 text-gray-400" />}
            </div>
            {isFullWidth && (
              <div className="text-sm text-gray-600 mt-0.5">
                {program.description}
              </div>
            )}
          </div>
        </div>
        {isSelected && <Check className="h-4 w-4 text-blue-600" />}
      </div>
    </DropdownMenuItem>
  );
};

export default ProgramMenuItem;
