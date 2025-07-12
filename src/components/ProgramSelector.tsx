
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getAllPrograms, ProgramType } from '@/data/programs';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface ProgramSelectorProps {
  onProgramSelected: (programType: ProgramType) => void;
}

const ProgramSelector: React.FC<ProgramSelectorProps> = ({ onProgramSelected }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramType | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const programs = getAllPrograms();

  const handleSelectProgram = async (programType: ProgramType) => {
    if (!user) return;

    setLoading(true);
    try {
      // Update user's profile with their first (free) program choice
      const { error } = await supabase
        .from('profiles')
        .update({ 
          first_program: programType,
          workout_type: programType 
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Program Selected!",
        description: `You've chosen ${programs.find(p => p.id === programType)?.name} as your free program.`,
      });

      // Force reload to update access state everywhere
      window.location.reload();
      // onProgramSelected(programType); // No longer needed since reload will update state
    } catch (error) {
      console.error('Error selecting program:', error);
      toast({
        title: "Error",
        description: "Failed to select program. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-2 sm:p-4 rounded-lg">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            Choose Your FREE Workout Program
          </h1>
          <p className="text-lg text-gray-300 mb-1">
            Select one program to start your fitness journey at no cost
          </p>
          <p className="text-base text-gray-400">
            Additional programs available for $19.99 each
          </p>
        </div>

        {/* Change from grid to vertical stack */}
        <div className="flex flex-col gap-4">
          {programs.map((program) => (
            <Card 
              key={program.id}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer border-2 ${
                selectedProgram === program.id 
                  ? 'border-white shadow-2xl' 
                  : 'border-gray-600 hover:border-gray-400'
              } w-full`}
              style={{
                background: `linear-gradient(135deg, ${program.theme.primary}15, ${program.theme.accent}10)`
              }}
              onClick={() => setSelectedProgram(program.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle 
                    className="text-xl font-bold"
                    style={{ color: program.theme.primary }}
                  >
                    {program.name}
                  </CardTitle>
                  <Badge 
                    variant="secondary" 
                    className="bg-green-600 text-white font-semibold"
                  >
                    FREE
                  </Badge>
                </div>
                <CardDescription className="text-gray-300 min-h-[3rem]">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="text-sm text-gray-400">
                    <strong>7-Day Program</strong>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                      style={{ 
                        borderColor: program.theme.accent, 
                        color: program.theme.accent 
                      }}
                    >
                      Complete Workouts
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                      style={{ 
                        borderColor: program.theme.accent, 
                        color: program.theme.accent 
                      }}
                    >
                      Progress Tracking
                    </Badge>
                  </div>

                  {selectedProgram === program.id && (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectProgram(program.id);
                      }}
                      disabled={loading}
                      className="w-full mt-4"
                      style={{
                        backgroundColor: program.theme.primary,
                        color: program.theme.text
                      }}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Starting Program...
                        </>
                      ) : (
                        'Start This Program FREE'
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>

              {selectedProgram === program.id && (
                <div 
                  className="absolute inset-0 border-4 border-white rounded-lg pointer-events-none"
                  style={{ 
                    boxShadow: `0 0 20px ${program.theme.primary}50` 
                  }}
                />
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-400 text-xs">
            After selecting your free program, you can unlock additional programs for $19.99 each
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramSelector;
