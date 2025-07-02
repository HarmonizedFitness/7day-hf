
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ProgramType } from '@/data/programs';
import { LucideIcon } from 'lucide-react';

interface ProgramPreviewCardProps {
  program: {
    id: ProgramType;
    name: string;
    theme: {
      primary: string;
    };
  };
  benefit: string;
  icon: LucideIcon;
  isSelected: boolean;
  onSelect: (programId: ProgramType) => void;
}

const ProgramPreviewCard: React.FC<ProgramPreviewCardProps> = ({
  program,
  benefit,
  icon: IconComponent,
  isSelected,
  onSelect
}) => {
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group border-2",
        isSelected 
          ? "border-blue-500 bg-blue-50 shadow-lg" 
          : "border-gray-200 bg-white hover:border-blue-300"
      )}
      onClick={() => onSelect(program.id)}
    >
      <CardHeader className="text-center pb-3">
        <div 
          className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white shadow-lg"
          style={{ backgroundColor: program.theme.primary }}
        >
          <IconComponent className="h-6 w-6" />
        </div>
        <CardTitle className="text-lg font-inter font-bold text-gray-900">
          {program.name}
        </CardTitle>
        <CardDescription className="text-sm font-inter text-gray-600 leading-relaxed">
          {benefit}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          variant={isSelected ? "default" : "outline"}
          className="w-full font-inter font-semibold text-base py-2 h-auto"
          style={isSelected ? { 
            backgroundColor: program.theme.primary,
            borderColor: program.theme.primary 
          } : {}}
        >
          {isSelected ? "Selected" : "Preview →"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProgramPreviewCard;
