
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useAdmin } from '@/contexts/AdminContext';
import { supabase } from '@/integrations/supabase/client';
import { ProgramType } from '@/data/programs';

export interface AdminWorkoutAccess {
  workoutType: ProgramType;
  hasAccess: boolean;
  subscriptionTier: 'free' | 'premium';
  firstProgram?: ProgramType;
  isAdminOverride: boolean;
}

export const useAdminWorkoutAccess = () => {
  const { user } = useAuth();
  const { isAdminMode, currentAdminProgram } = useAdmin();
  const [workoutAccess, setWorkoutAccess] = useState<AdminWorkoutAccess>({
    workoutType: 'bodyweight',
    hasAccess: true,
    subscriptionTier: 'free',
    isAdminOverride: false
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkoutAccess = async () => {
      // In admin mode, grant access to the selected program
      if (isAdminMode) {
        setWorkoutAccess({
          workoutType: currentAdminProgram,
          hasAccess: true,
          subscriptionTier: 'premium', // Grant premium access in admin mode
          isAdminOverride: true
        });
        setLoading(false);
        return;
      }

      // Normal user access logic
      if (!user) {
        setWorkoutAccess({
          workoutType: 'bodyweight',
          hasAccess: true,
          subscriptionTier: 'free',
          isAdminOverride: false
        });
        setLoading(false);
        return;
      }

      try {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('workout_type, subscription_tier, first_program')
          .eq('id', user.id)
          .single();

        if (error) throw error;

        setWorkoutAccess({
          workoutType: (profile?.workout_type as ProgramType) || 'bodyweight',
          hasAccess: true,
          subscriptionTier: (profile?.subscription_tier as 'free' | 'premium') || 'free',
          firstProgram: profile?.first_program as ProgramType,
          isAdminOverride: false
        });
      } catch (error) {
        console.error('Error fetching workout access:', error);
        setWorkoutAccess({
          workoutType: 'bodyweight',
          hasAccess: true,
          subscriptionTier: 'free',
          isAdminOverride: false
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutAccess();
  }, [user, isAdminMode, currentAdminProgram]);

  const checkWorkoutAccess = async (workoutType: ProgramType): Promise<boolean> => {
    // Admin mode grants access to everything
    if (isAdminMode) return true;
    
    if (!user) return workoutType === 'bodyweight';

    try {
      const { data, error } = await supabase
        .rpc('has_workout_access', {
          user_uuid: user.id,
          workout_type_name: workoutType
        });

      if (error) throw error;
      return data || false;
    } catch (error) {
      console.error('Error checking workout access:', error);
      return workoutType === 'bodyweight';
    }
  };

  return {
    workoutAccess,
    loading,
    checkWorkoutAccess
  };
};
