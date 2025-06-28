
import React from 'react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Check, Lock } from 'lucide-react';
import { ProgramType } from '@/data/programs';
import { cn } from '@/lib/utils';

interface ProgramMenuItemProps {
  program: any;
  currentProgramType: ProgramType;
  isAdminMode: boolean;
  onSelect: (programType: ProgramType) => void;
  checkAccess: (programType: ProgramType) => Promise<boolean>;
  isFullWidth?: boolean;
}

const ProgramMenuItem: React.FC<ProgramMenuItemProps> = ({ 
  program, 
  currentProgramType, 
  isAdminMode, 
  onSelect, 
  checkAccess, 
  isFullWidth = false 
}) => {
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

export default ProgramMenuItem;
