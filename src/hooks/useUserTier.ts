
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

export interface UserTier {
  tier: number;
  tierName: string;
  loading: boolean;
}

export const useUserTier = () => {
  const { user } = useAuth();
  const [userTier, setUserTier] = useState<UserTier>({
    tier: 1,
    tierName: 'Free',
    loading: true
  });

  useEffect(() => {
    const fetchUserTier = async () => {
      if (!user) {
        setUserTier({ tier: 1, tierName: 'Free', loading: false });
        return;
      }

      try {
        const { data: tierData, error: tierError } = await supabase
          .rpc('get_user_tier', { user_uuid: user.id });

        const { data: tierNameData, error: tierNameError } = await supabase
          .rpc('get_user_tier_name', { user_uuid: user.id });

        if (tierError || tierNameError) {
          console.error('Error fetching user tier:', tierError || tierNameError);
          setUserTier({ tier: 1, tierName: 'Free', loading: false });
          return;
        }

        setUserTier({
          tier: tierData || 1,
          tierName: tierNameData || 'Free',
          loading: false
        });
      } catch (error) {
        console.error('Error fetching user tier:', error);
        setUserTier({ tier: 1, tierName: 'Free', loading: false });
      }
    };

    fetchUserTier();
  }, [user]);

  return userTier;
};
