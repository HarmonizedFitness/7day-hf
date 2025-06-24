
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { WorkoutType } from '@/data/exercises';

export interface WorkoutAccess {
  workoutType: WorkoutType;
  hasAccess: boolean;
  subscriptionTier: 'free' | 'premium';
}

export const useWorkoutAccess = () => {
  const { user } = useAuth();
  const [workoutAccess, setWorkoutAccess] = useState<WorkoutAccess>({
    workoutType: 'bodyweight',
    hasAccess: true,
    subscriptionTier: 'free'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkoutAccess = async () => {
      if (!user) {
        setWorkoutAccess({
          workoutType: 'bodyweight',
          hasAccess: true,
          subscriptionTier: 'free'
        });
        setLoading(false);
        return;
      }

      try {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('workout_type, subscription_tier')
          .eq('id', user.id)
          .single();

        if (error) throw error;

        setWorkoutAccess({
          workoutType: (profile?.workout_type as WorkoutType) || 'bodyweight',
          hasAccess: true,
          subscriptionTier: (profile?.subscription_tier as 'free' | 'premium') || 'free'
        });
      } catch (error) {
        console.error('Error fetching workout access:', error);
        setWorkoutAccess({
          workoutType: 'bodyweight',
          hasAccess: true,
          subscriptionTier: 'free'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutAccess();
  }, [user]);

  const checkWorkoutAccess = async (workoutType: WorkoutType): Promise<boolean> => {
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
