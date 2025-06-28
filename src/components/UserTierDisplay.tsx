
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Star, Gift } from 'lucide-react';
import { useUserTier } from '@/hooks/useUserTier';

const UserTierDisplay: React.FC = () => {
  const { tier, tierName, loading } = useUserTier();

  if (loading) {
    return (
      <Card className="bg-stone-700/40 border-stone-600">
        <CardHeader className="pb-4">
          <CardTitle className="text-white font-playfair text-lg flex items-center gap-2">
            <Crown className="h-5 w-5 text-burnt-orange" />
            Subscription Tier
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-gray-400">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  const getTierIcon = () => {
    switch (tier) {
      case 3:
        return <Crown className="h-5 w-5 text-yellow-400" />;
      case 2:
        return <Star className="h-5 w-5 text-blue-400" />;
      default:
        return <Gift className="h-5 w-5 text-green-400" />;
    }
  };

  const getTierColor = () => {
    switch (tier) {
      case 3:
        return 'border-yellow-400 text-yellow-400';
      case 2:
        return 'border-blue-400 text-blue-400';
      default:
        return 'border-green-400 text-green-400';
    }
  };

  const getTierDescription = () => {
    switch (tier) {
      case 3:
        return 'All programs unlocked';
      case 2:
        return 'Access to your first program + 1 purchased program';
      default:
        return 'Access to your first program only';
    }
  };

  const getUpgradeText = () => {
    switch (tier) {
      case 1:
        return 'Purchase any program for $19.99 to unlock Tier 2';
      case 2:
        return 'Purchase 1 more program ($19.99) or upgrade bundle ($39.99) for all access';
      default:
        return 'You have access to all programs!';
    }
  };

  return (
    <Card className="bg-stone-700/40 border-stone-600">
      <CardHeader className="pb-4">
        <CardTitle className="text-white font-playfair text-lg flex items-center gap-2">
          <Crown className="h-5 w-5 text-burnt-orange" />
          Subscription Tier
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getTierIcon()}
            <div>
              <div className="text-white font-semibold">Tier {tier}</div>
              <Badge variant="outline" className={getTierColor()}>
                {tierName}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-300">
          {getTierDescription()}
        </div>
        
        <div className="text-xs text-gray-400 p-3 bg-stone-800/50 rounded-lg">
          {getUpgradeText()}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserTierDisplay;
