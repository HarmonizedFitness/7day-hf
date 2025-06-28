
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { ProgramType } from '@/data/programs';

export const useProgramUpdate = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const updateUserProgram = async (programType: ProgramType) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to change your program",
        variant: "destructive",
      });
      return false;
    }

    try {
      setIsUpdating(true);
      
      const { error } = await supabase
        .from('profiles')
        .update({ workout_type: programType })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Program updated",
        description: `Successfully switched to ${programType} program`,
      });

      return true;
    } catch (error) {
      console.error('Error updating program:', error);
      toast({
        title: "Update failed",
        description: "Failed to update your program selection",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsUpdating(false);
    }
  };

  return {
    updateUserProgram,
    isUpdating
  };
};
