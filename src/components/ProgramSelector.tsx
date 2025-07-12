
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

const PROGRAM_DESCRIPTIONS: Record<ProgramType, string> = {
  stretching: `Perfect for older adults, those recovering from injury, or anyone just starting their fitness journey.\n\nThis program gently restores flexibility and mobility, helping you move with less pain and more confidence.\n\nGreat for: Healing, longevity, and feeling good in your body every day.\n\n"A flexible spine is a flexible life!"`,
  bodyweight: `Ideal for anyone who wants to work out at home with zero equipment.\n\nBodyweight training builds real-world strength, balance, and control—no gym required.\n\nGreat for: Busy schedules, travel, or those who want to master their own body.\n\n"Your body is your best gym!"`,
  trx: `An advanced at-home program for those who own a TRX band.\n\nTRX leverages gravity and your body weight for a full-body challenge.\n\nGreat for: Athletes, fitness enthusiasts, or anyone ready to level up at home.\n\n"Defy gravity, discover your potential!"`,
  gym: `For those with access to a gym and ready to use all the equipment.\n\nThis program maximizes strength, muscle, and performance with classic and modern gym moves.\n\nGreat for: Gym-goers, strength seekers, and anyone who loves the iron.\n\n"The gym is your playground—let's get strong!"`,
};

const ProgramSelector: React.FC<ProgramSelectorProps> = ({ onProgramSelected }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramType | null>(null);
  const [flipped, setFlipped] = useState<ProgramType | null>(null);
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
          {programs.map((program) => {
            const isFlipped = flipped === program.id;
            return (
              <div
                key={program.id}
                className="relative w-full h-48 perspective"
                style={{ perspective: '1200px' }}
              >
                <div
                  className={`absolute inset-0 w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? 'rotate-y-180' : ''}`}
                  onClick={() => setFlipped(isFlipped ? null : program.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Front Side */}
                  <div className={`absolute inset-0 w-full h-full bg-white/5 rounded-lg shadow-lg border-2 ${selectedProgram === program.id ? 'border-white shadow-2xl' : 'border-gray-600 hover:border-gray-400'} flex flex-col justify-between p-4 [backface-visibility:hidden]`} style={{ background: `linear-gradient(135deg, ${program.theme.primary}15, ${program.theme.accent}10)` }}>
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xl font-bold" style={{ color: program.theme.primary }}>{program.name}</span>
                        <Badge variant="secondary" className="bg-green-600 text-white font-semibold">FREE</Badge>
                      </div>
                      <CardDescription className="text-gray-300 min-h-[2rem]">
                        {program.description}
                      </CardDescription>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xs text-gray-400">Click for more info</span>
                    </div>
                    {selectedProgram === program.id && (
                      <Button
                        onClick={e => { e.stopPropagation(); handleSelectProgram(program.id); }}
                        disabled={loading}
                        className="w-full mt-2"
                        style={{ backgroundColor: program.theme.primary, color: program.theme.text }}
                      >
                        {loading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Starting Program...</>) : 'Start This Program FREE'}
                      </Button>
                    )}
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full bg-white/10 rounded-lg shadow-lg border-2 border-gray-400 flex flex-col justify-between p-4 [backface-visibility:hidden] rotate-y-180" style={{ background: `linear-gradient(135deg, ${program.theme.primary}10, ${program.theme.accent}05)` }}>
                    <div>
                      <span className="text-lg font-bold" style={{ color: program.theme.primary }}>{program.name} — Is This For You?</span>
                      <p className="mt-2 text-sm text-gray-100 whitespace-pre-line">{PROGRAM_DESCRIPTIONS[program.id]}</p>
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button size="sm" variant="outline" className="text-xs" onClick={e => { e.stopPropagation(); setFlipped(null); }}>
                        Back
                      </Button>
                    </div>
                  </div>
                </div>
                {selectedProgram === program.id && (
                  <div className="absolute inset-0 border-4 border-white rounded-lg pointer-events-none" style={{ boxShadow: `0 0 20px ${program.theme.primary}50` }} />
                )}
              </div>
            );
          })}
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
